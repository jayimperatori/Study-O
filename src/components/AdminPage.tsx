import React, { useEffect, useState } from "react";

export function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [docxFile, setDocxFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");
  const [cloudNewsletters, setCloudNewsletters] = useState<any[]>([]);
  const [loadingCloud, setLoadingCloud] = useState(false);
  const [cloudError, setCloudError] = useState<string>("");

  const requiredPassword = (import.meta as any).env?.VITE_ADMIN_PASSWORD || "studyoadmin";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === requiredPassword) {
      setAuthed(true);
      setStatus("");
    } else {
      setStatus("Incorrect password.");
    }
  };

  useEffect(() => {
    if (!authed) return;
    const load = async () => {
      try {
        setLoadingCloud(true);
        setCloudError("");
        const res = await fetch("/.netlify/functions/list-newsletters");
        const json = res.ok ? await res.json() : { items: [] };
        const items = Array.isArray(json.items)
          ? json.items.map((n: any) => ({
              id: n.id,
              title: n.title,
              date: n.created_at || n.date,
            }))
          : [];
        setCloudNewsletters(items);
      } catch (err: any) {
        setCloudError(err?.message || "Failed to load newsletters.");
      } finally {
        setLoadingCloud(false);
      }
    };
    load();
  }, [authed]);

  async function toDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error("Failed reading file"));
      reader.readAsDataURL(file);
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    const trimmedTitle = title.trim() || "Untitled";
    try {
      const files: { name: string; type: string; dataUrl: string }[] = [];
      if (docxFile) {
        files.push({ name: docxFile.name, type: docxFile.type, dataUrl: await toDataUrl(docxFile) });
      }

      const resp = await fetch("/.netlify/functions/create-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: trimmedTitle, content, files }),
      });

      if (!resp.ok) {
        const text = await resp.text();
        setStatus(`Backend error: ${text || resp.status}`);
        return;
      }

      setTitle("");
      setContent("");
      setDocxFile(null);
      setStatus("Uploaded to backend. It will appear in Newsletters.");
      window.scrollTo({ top: 0, behavior: "smooth" });

      // refresh cloud list
      try {
        const res = await fetch("/.netlify/functions/list-newsletters");
        const json = res.ok ? await res.json() : { items: [] };
        const items = Array.isArray(json.items)
          ? json.items.map((n: any) => ({
              id: n.id,
              title: n.title,
              date: n.created_at || n.date,
            }))
          : [];
        setCloudNewsletters(items);
      } catch {
        // ignore
      }
    } catch (err: any) {
      setStatus(err?.message || "Save failed.");
    }
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this newsletter?");
    if (!confirmed) return;
    try {
      setStatus("");
      const res = await fetch("/.netlify/functions/delete-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) {
        setStatus("Failed to delete newsletter.");
        return;
      }
      setCloudNewsletters((prev) => prev.filter((n) => n.id !== id));
      setStatus("Newsletter deleted.");
    } catch (err: any) {
      setStatus(err?.message || "Failed to delete newsletter.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-plum mt-6 mb-6 text-5xl leading-none">Admin</h1>
      {!authed ? (
        <form onSubmit={handleLogin} className="bg-white border border-orange-200 rounded-lg p-4 space-y-3">
          <label className="block text-sm text-gray-700">Password</label>
          <input
            type="password"
            className="border border-orange-200 rounded-md px-3 py-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
          />
          <button className="bg-orange-600 text-white px-4 py-2 rounded-md">Enter</button>
          {status && <p className="text-sm text-red-600 mt-2">{status}</p>}
        </form>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="bg-white border border-orange-200 rounded-lg p-4 space-y-4">
            <div>
              <label className="block text-sm text-gray-700">Title</label>
              <input
                type="text"
                className="border border-orange-200 rounded-md px-3 py-2 w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Newsletter title"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Body (Markdown, optional)</label>
              <textarea
                className="border border-orange-200 rounded-md px-3 py-2 w-full"
                rows={8}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste Markdown content (optional)"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700">Attach Word document (DOCX)</label>
                <input type="file" accept=".doc,.docx" onChange={(e) => setDocxFile(e.target.files?.[0] || null)} />
                {docxFile && <p className="text-xs text-gray-600 mt-1">{docxFile.name}</p>}
              </div>
            </div>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md">Upload</button>
            {status && <p className="text-sm mt-2">{status}</p>}
            <div className="mt-4 p-3 rounded-md bg-yellow-50 border border-yellow-200 text-sm text-gray-700">
              <p>Uploads are stored in our secure backend and will appear on the Newsletters page once processed.</p>
            </div>
          </form>

          <div className="mt-8 bg-white border border-orange-200 rounded-lg p-4 space-y-3">
            <h2 className="text-plum text-xl mb-2">Existing Newsletters</h2>
            {loadingCloud && <p className="text-sm text-gray-600">Loading newsletters…</p>}
            {cloudError && <p className="text-sm text-red-600">{cloudError}</p>}
            {!loadingCloud && !cloudError && cloudNewsletters.length === 0 && (
              <p className="text-sm text-gray-600">No newsletters found.</p>
            )}
            <ul className="space-y-2">
              {cloudNewsletters.map((n) => (
                <li key={n.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium text-orange-900">{n.title}</p>
                    {n.date && <p className="text-gray-500 text-xs">{n.date}</p>}
                  </div>
                  <button
                    onClick={() => handleDelete(n.id)}
                    className="text-red-600 hover:text-red-700 border border-red-300 px-2 py-1 rounded-md text-xs"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}


