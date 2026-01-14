import type { Newsletter } from "./loadNewsletters";

const INDEX_KEY = "newsletter:local:index";

export function listLocalNewsletters(): Newsletter[] {
  try {
    const idxRaw = localStorage.getItem(INDEX_KEY);
    if (!idxRaw) return [];
    const ids: string[] = JSON.parse(idxRaw);
    const items: Newsletter[] = [];
    for (const id of ids) {
      const raw = localStorage.getItem(`newsletter:local:${id}`);
      if (!raw) continue;
      try {
        const obj = JSON.parse(raw);
        items.push(obj as Newsletter);
      } catch {
        // ignore bad item
      }
    }
    return items.sort((a, b) => b.date.localeCompare(a.date));
  } catch {
    return [];
  }
}

export async function saveLocalNewsletter(item: Newsletter): Promise<void> {
  const id = item.slug;
  const key = `newsletter:local:${id}`;
  const idxRaw = localStorage.getItem(INDEX_KEY);
  const ids: string[] = idxRaw ? JSON.parse(idxRaw) : [];
  if (!ids.includes(id)) ids.push(id);
  localStorage.setItem(INDEX_KEY, JSON.stringify(ids));
  localStorage.setItem(key, JSON.stringify(item));
}


