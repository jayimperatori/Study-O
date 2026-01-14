import React, { useState } from "react";
import { saveLocalNewsletter } from "../newsletters/localNewsletters";
import type { Newsletter } from "../newsletters/loadNewsletters";

export function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [docxFile, setDocxFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");

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
      // Try cloud function first (if configured on Netlify)
      try {
        const files = [];
        if (pdfFile) files.push({ name: pdfFile.name, type: pdfFile.type, dataUrl: await toDataUrl(pdfFile) });
        if (docxFile) files.push({ name: docxFile.name, type: docxFile.type, dataUrl: await toDataUrl(docxFile) });
        const resp = await fetch("/.netlify/functions/create-newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: trimmedTitle, content, files }),
        });
        if (resp.ok) {
          setTitle("");
          setContent("");
          setPdfFile(null);
          setDocxFile(null);
          setStatus("Uploaded to backend. It will appear in Newsletters.");
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
      } catch {
        // fall through to local save
      }

      const slug = `local-${Date.now()}`;
      const attachments: NonNullable<Newsletter["attachments"]> = [];
      if (pdfFile) {
        attachments.push({ url: await toDataUrl(pdfFile), filename: pdfFile.name, type: "pdf" });
      }
      if (docxFile) {
        attachments.push({ url: await toDataUrl(docxFile), filename: docxFile.name, type: "docx" });
      }
      const item: Newsletter = {
        slug,
        title: trimmedTitle,
        date: new Date().toISOString(),
        content,
        attachments: attachments.length ? attachments : undefined,
      };
      await saveLocalNewsletter(item);
      setTitle("");
      setContent("");
      setPdfFile(null);
      setDocxFile(null);
      setStatus("Saved. It will appear in Newsletters on this browser.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      setStatus(err?.message || "Save failed.");
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
              <label className="block text-sm text-gray-700">Attach PDF (optional)</label>
              <input type="file" accept=".pdf" onChange={(e) => setPdfFile(e.target.files?.[0] || null)} />
              {pdfFile && <p className="text-xs text-gray-600 mt-1">{pdfFile.name}</p>}
            </div>
            <div>
              <label className="block text-sm text-gray-700">Attach DOCX (optional)</label>
              <input type="file" accept=".doc,.docx" onChange={(e) => setDocxFile(e.target.files?.[0] || null)} />
              {docxFile && <p className="text-xs text-gray-600 mt-1">{docxFile.name}</p>}
            </div>
          </div>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-md">Upload</button>
          {status && <p className="text-sm mt-2">{status}</p>}
          <div className="mt-4 p-3 rounded-md bg-yellow-50 border border-yellow-200 text-sm text-gray-700">
            <p>Uploads are stored in this browser only (no backend). To share across devices later, we can add a backend when needed.</p>
          </div>
        </form>
      )}
    </div>
  );
}


