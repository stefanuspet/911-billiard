import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { ALL_POSTS_QUERY_RESULT } from "@/sanity.types";

type Post = ALL_POSTS_QUERY_RESULT[number];

export default function BlogCard({ post }: { post: Post }) {
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <Link
      href={`/blog/${post.slug?.current}`}
      className="group bg-bg-2 rounded-2xl overflow-hidden border border-white/8 hover:border-orange/30 transition-colors duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-[200px] overflow-hidden shrink-0">
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).width(640).height(400).url()}
            alt={post.mainImage.alt ?? post.title ?? ""}
            fill
            className="object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-bg-3" />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-3">
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

        <h3 className="font-condensed font-bold text-[18px] leading-tight mb-2 group-hover:text-orange transition-colors duration-200">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="font-body text-[13px] text-text-2 leading-relaxed flex-1 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          {post.author?.name && (
            <span className="font-body text-[12px] text-text-3">
              {post.author.name}
            </span>
          )}
          {date && (
            <span className="font-body text-[12px] text-text-3">{date}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
