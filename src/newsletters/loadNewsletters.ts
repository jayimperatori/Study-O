export interface NewsletterAttachment {
  url: string;
  filename: string;
  type: 'pdf' | 'docx' | 'other';
}

export interface Newsletter {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  content: string;
  attachments?: NewsletterAttachment[];
}

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  if (!raw) return { meta: {}, body: '' };
  // Remove UTF-8 BOM if present
  let src = raw.replace(/^\uFEFF/, '');
  if (!src.startsWith('---')) {
    return { meta: {}, body: src };
  }
  // Find the closing --- line (support \n or \r\n and optional spaces)
  const closeIdx = src.search(/^\s*---\s*$/m);
  if (closeIdx === -1) {
    return { meta: {}, body: src };
  }
  const header = src.slice(3, closeIdx).trim();
  const after = src.slice(closeIdx).replace(/^\s*---\s*\r?\n/, '');
  const body = after.replace(/^\s*/, '');
  const meta: Record<string, string> = {};
  for (const line of header.split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx !== -1) {
      const key = line.slice(0, idx).trim();
      const value = line.slice(idx + 1).trim().replace(/^"|"$/g, '');
      if (key) meta[key] = value;
    }
  }
  return { meta, body };
}

// Ensure stable ordering by remembering first time a slug appears
function getFirstSeen(slug: string): string {
  try {
    const key = `newsletter:firstSeen:${slug}`;
    const existing = localStorage.getItem(key);
    if (existing) return existing;
    const now = new Date().toISOString();
    localStorage.setItem(key, now);
    return now;
  } catch {
    return new Date().toISOString();
  }
}

export function getNewsletters(): Newsletter[] {
  // Globs relative to this file's directory
  const modules = (import.meta as any).glob('./*.md', { eager: true, as: 'raw' }) as Record<string, string>;
  const pdfs = (import.meta as any).glob('./*.pdf', { eager: true, as: 'url' }) as Record<string, string>;
  const docs = (import.meta as any).glob('./*.docx', { eager: true, as: 'url' }) as Record<string, string>;

  const pdfEntries = Object.entries(pdfs);
  const docEntries = Object.entries(docs);

  const items: Newsletter[] = Object.entries(modules).map(([path, raw]) => {
    const { meta, body } = parseFrontmatter(raw);
    const file = path.split('/').pop() || '';
    const slug = file.replace(/\.md$/, '');
    const title = meta.title || slug.replace(/[-_]/g, ' ');
    const date = getFirstSeen(slug);

    const attachments: NewsletterAttachment[] = [];
    const getName = (p: string) => (p.split('/').pop() || '');

    for (const [p, url] of pdfEntries) {
      const name = getName(p);
      if (name.toLowerCase().startsWith(slug.toLowerCase())) {
        attachments.push({ url, filename: name, type: 'pdf' });
      }
    }
    for (const [p, url] of docEntries) {
      const name = getName(p);
      if (name.toLowerCase().startsWith(slug.toLowerCase())) {
        attachments.push({ url, filename: name, type: 'docx' });
      }
    }

    return { slug, title, date, content: body, attachments };
  });
  // Also create entries for standalone attachments without a matching .md
  const hasSlug = (slug: string) => items.some(n => n.slug.toLowerCase() === slug.toLowerCase());
  const createFromBase = (base: string, url: string, type: 'pdf' | 'docx') => {
    const slug = base;
    const title = base.replace(/[-_]/g, ' ');
    items.push({
      slug,
      title,
      date: getFirstSeen(slug),
      content: '',
      attachments: [{ url, filename: `${base}.${type}`, type }]
    });
  };

  for (const [p, url] of pdfEntries) {
    const name = (p.split('/').pop() || '');
    const base = name.replace(/\.pdf$/i, '');
    // If no item starts with this base, add as standalone
    const matched = items.some(n => base.toLowerCase().startsWith(n.slug.toLowerCase()));
    if (!matched && !hasSlug(base)) {
      createFromBase(base, url, 'pdf');
    }
  }
  for (const [p, url] of docEntries) {
    const name = (p.split('/').pop() || '');
    const base = name.replace(/\.docx$/i, '');
    const matched = items.some(n => base.toLowerCase().startsWith(n.slug.toLowerCase()));
    if (!matched && !hasSlug(base)) {
      createFromBase(base, url, 'docx');
    }
  }

  return items.sort((a, b) => b.date.localeCompare(a.date));
}
