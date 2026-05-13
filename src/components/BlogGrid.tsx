"use client";

import { useState } from "react";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  date: string;
}

const categoryImageMap: Record<string, string> = {
  Maliyet: "/images/blog/maliyet.jpg",
  Malzeme: "/images/blog/malzeme.jpg",
  Rehber: "/images/blog/rehber.jpg",
  Teknoloji: "/images/blog/rehber.jpg",
};

export default function BlogGrid({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: string[];
}) {
  const [active, setActive] = useState("Tümü");

  const filtered = active === "Tümü"
    ? posts
    : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Category Filter */}
      <section className="bg-cream border-b border-navy/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-body font-medium transition-colors whitespace-nowrap ${
                  cat === active
                    ? "bg-navy text-white"
                    : "bg-gray-light text-navy/60 hover:bg-navy/5"
                }`}
              >
                {cat}
                {cat !== "Tümü" && (
                  <span className={`ml-1.5 text-xs ${cat === active ? "text-white/50" : "text-navy/30"}`}>
                    ({posts.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-navy/40 font-body text-lg">Bu kategoride henüz yazı bulunmuyor.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <article
                  key={post.slug}
                  className="group rounded-2xl border border-navy/[0.06] overflow-hidden hover:shadow-navy/[0.04] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 bg-white"
                >
                  <div className="h-48 relative overflow-hidden">
                    <SafeImage
                      src={categoryImageMap[post.category] || "/images/blog/rehber.jpg"}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/10" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange/10 text-orange text-xs font-bold font-body px-3 py-1 rounded-full backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-navy/40 text-xs font-body mb-3">
                      <span>
                        {new Date(post.date).toLocaleDateString("tr-TR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span>&middot;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime} okuma
                      </span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="font-heading font-semibold text-navy text-lg mb-3 group-hover:text-orange transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-navy/60 font-body text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-orange font-semibold text-sm font-body inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Devamını Oku <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
