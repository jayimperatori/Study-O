const { createClient } = require('@supabase/supabase-js');

exports.handler = async () => {
  try {
    const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return { statusCode: 200, body: JSON.stringify({ items: [] }) };
    }
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { data, error } = await supabase
      .from('newsletters')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      console.error(error);
      return { statusCode: 500, body: 'Query failed' };
    }
    return { statusCode: 200, body: JSON.stringify({ items: data || [] }) };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, body: 'Unexpected error' };
  }
};


