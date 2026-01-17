import React, { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const leahHero = new URL("../assets/LeahWithDogs.jpeg", import.meta.url).href;

export function NewslettersPage() {
  const [cloud, setCloud] = useState<any[]>([]);
  useEffect(() => {
    // try to load from Netlify function; ignore errors if backend not configured
    fetch("/.netlify/functions/list-newsletters")
      .then(res => res.ok ? res.json() : Promise.resolve({ items: [] }))
      .then((json) =>
        setCloud(
          Array.isArray(json.items)
            ? json.items.map((n: any) => ({
                id: n.id,
                slug: n.id ?? n.slug,
                title: n.title,
                date: n.created_at || n.date || new Date().toISOString(),
                content: n.content || "",
                attachments: n.attachments || [],
              }))
            : []
        )
      )
      .catch(() => setCloud([]));
  }, []);

  const newsletters = useMemo(() => {
    return [...cloud].sort((a, b) => String(b.date).localeCompare(String(a.date)));
  }, [cloud]);
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const getExcerpt = (markdown: string, max = 180) => {
    let text = markdown
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // images
      .replace(/\[[^\]]*\]\([^)]*\)/g, (m) => m.replace(/\[|\]|\([^)]*\)/g, "")) // links keep text
      .replace(/[`*_>#-]/g, "") // common md chars
      .replace(/\n+/g, " ")
      .trim();
    if (text.length > max) text = text.slice(0, max).trimEnd() + "…";
    return text;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Featured header with photo */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl border-4 border-orange-200">
            <ImageWithFallback
              src={leahHero}
              alt="Leah with Edna, Vincent, and LONGston"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-plum mb-4 text-5xl leading-none">Professor's Newsletters</h1>
          <p className="text-gray-700 text-lg">Weekly updates, tips, and announcements from The Study-O.</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {newsletters.map((n) => {
            const html = DOMPurify.sanitize(marked.parse(n.content) as string);
            const isOpen = openSlug === n.slug;
            const excerpt = getExcerpt(n.content);
            return (
              <Card key={n.slug} className="border-2 border-orange-100">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-plum mb-1 text-xl md:text-2xl leading-tight font-normal">{n.title}</h2>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{n.date}</span>
                      </div>
                    </div>
                    <Button
                      variant={isOpen ? "default" : "outline"}
                      className={isOpen ? "bg-orange-500 hover:bg-orange-600" : "border-orange-500 text-orange-700 hover:bg-orange-50"}
                      onClick={() => setOpenSlug(isOpen ? null : n.slug)}
                    >
                      {isOpen ? "Hide" : "Read"}
                    </Button>
                  </div>

                  {!isOpen ? (
                    <p className="mt-4 text-gray-700">
                      {excerpt || "This newsletter has attachments. Click Read or open an attachment below."}
                    </p>
                  ) : (
                    <div className="mt-6 text-gray-700 prose-newsletter">
                      {n.content ? (
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                      ) : (
                        <p className="text-gray-700">
                          This entry contains attachments but no in-page body text.
                        </p>
                      )}
                    </div>
                  )}

                  {/* Attachments are still stored in the backend but no longer need to be downloaded from the public page */}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
