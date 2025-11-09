import React, { useMemo, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { getNewsletters } from "../newsletters/loadNewsletters";
import { Calendar } from "lucide-react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const leahHero = new URL("../assets/LeahWithDogs.jpeg", import.meta.url).href;

export function NewslettersPage() {
  const newsletters = useMemo(() => getNewsletters(), []);
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
          <h1 className="text-orange-900 mb-4 text-5xl leading-none">Leah's Newsletters</h1>
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
                      <h2 className="text-orange-900 mb-1">{n.title}</h2>
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
                    <p className="mt-4 text-gray-700">{excerpt}</p>
                  ) : (
                    <div className="mt-6 text-gray-700">
                      <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
