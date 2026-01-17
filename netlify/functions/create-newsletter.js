const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return { statusCode: 500, body: 'Supabase not configured' };
    }
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const payload = JSON.parse(event.body || '{}');
    const title = (payload.title || '').trim();
    const content = payload.content || '';
    const files = Array.isArray(payload.files) ? payload.files : [];
    if (!title) {
      return { statusCode: 400, body: 'Missing title' };
    }

    const folder = `newsletters/${Date.now()}`;
    const attachments = [];

    for (const f of files) {
      if (!f || !f.name || !f.dataUrl) continue;
      const [meta, b64] = String(f.dataUrl).split(',');
      const contentType = (f.type) || (meta.match(/data:(.*);base64/)?.[1]) || 'application/octet-stream';
      const buffer = Buffer.from(b64, 'base64');
      const path = `${folder}/${f.name}`;
      const { error: uploadErr } = await supabase.storage.from('newsletters').upload(path, buffer, {
        contentType,
        upsert: true,
      });
      if (uploadErr) {
        console.error('upload error', uploadErr);
        return { statusCode: 500, body: `Upload failed: ${uploadErr.message || uploadErr.error || 'Unknown error'}` };
      }
      const { data: signed, error: signErr } = await supabase
        .storage
        .from('newsletters')
        .createSignedUrl(path, 60 * 60 * 24 * 365); // 1 year
      if (signErr) {
        console.error('sign error', signErr);
      } else if (signed?.signedUrl) {
        const type = contentType.includes('pdf') ? 'pdf' : (f.name.endsWith('.doc') || f.name.endsWith('.docx') ? 'docx' : 'other');
        attachments.push({ url: signed.signedUrl, filename: f.name, type });
      }
    }

    const { error: insertErr } = await supabase.from('newsletters').insert({
      title,
      content,
      attachments,
    });
    if (insertErr) {
      console.error('insert error', insertErr);
      return { statusCode: 500, body: `Database insert failed: ${insertErr.message || insertErr.error || 'Unknown error'}` };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, body: `Unexpected error: ${e.message || 'Unknown error'}` };
  }
};


