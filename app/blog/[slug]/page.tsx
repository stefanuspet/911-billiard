import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_BY_SLUG_QUERY, ALL_POST_SLUGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { portableTextComponents } from "@/components/blog/PortableTextComponents";
import { client } from "@/sanity/lib/client";
import type { POST_BY_SLUG_QUERY_RESULT, ALL_POST_SLUGS_QUERY_RESULT } from "@/sanity.types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs: ALL_POST_SLUGS_QUERY_RESULT = await client.fetch(ALL_POST_SLUGS_QUERY);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
  }) as { data: POST_BY_SLUG_QUERY_RESULT };
  if (!post) return {};
  const title = `${post.title} — Blog 911 Billiard`
  const image = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : "/images/og-image.jpg"
  return {
    title,
    openGraph: {
      title: post.title ?? "",
      images: [image],
      siteName: "911 Billiard™",
      locale: "id_ID",
      type: "article",
    },
    twitter: { card: "summary_large_image", title, images: [image] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
  }) as { data: POST_BY_SLUG_QUERY_RESULT };

  if (!post) notFound();

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <main>
      {/* Hero image */}
      {post.mainImage && (
        <div className="relative w-full h-[320px] sm:h-[440px] bg-bg-3">
          <Image
            src={urlFor(post.mainImage).width(1400).height(700).url()}
            alt={post.mainImage.alt ?? post.title ?? ""}
            fill
            className="object-cover brightness-50"
            priority
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,10,1) 0%, transparent 60%)",
            }}
          />
        </div>
      )}

      {/* Content */}
      <section className="bg-bg px-5 sm:px-10 py-12 sm:py-16">
        <div className="max-w-[760px] mx-auto">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-condensed font-bold text-[12px] tracking-[1px] uppercase text-text-2 hover:text-orange transition-colors mb-8"
          >
            ← Kembali ke Blog
          </Link>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2 flex-wrap mb-4">
              {post.categories.map((cat: { title: string | null }) => (
                <span
                  key={cat.title}
                  className="bg-orange/10 border border-orange/20 text-orange font-condensed font-bold text-[10px] tracking-[1px] uppercase px-3 py-[4px] rounded-full"
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="font-condensed font-black text-[clamp(32px,5vw,56px)] leading-tight mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-text-3 font-body text-[13px] mb-10 pb-8 border-b border-border">
            {post.author?.name && <span>{post.author.name}</span>}
            {date && <span>{date}</span>}
          </div>

          {/* Body */}
          {post.body && (
            <div>
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
