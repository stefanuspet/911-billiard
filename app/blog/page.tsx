import type { Metadata } from "next";
import SectionTag from "@/components/ui/SectionTag";
import BlogCard from "@/components/blog/BlogCard";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_POSTS_QUERY } from "@/sanity/lib/queries";
import type { ALL_POSTS_QUERY_RESULT } from "@/sanity.types";

export const metadata: Metadata = {
  title: "Blog 911 Billiard — Tips, Berita & Event Billiard",
  description:
    "Artikel terbaru seputar billiard: tips bermain, berita turnamen, dan update dari 911 Billiard.",
  openGraph: {
    title: "Blog 911 Billiard — Tips, Berita & Event Billiard",
    description:
      "Tips bermain, berita turnamen, dan update dari 911 Billiard.",
    images: ["/images/og-image.jpg"],
    siteName: "911 Billiard™",
    locale: "id_ID",
    type: "website",
  },
};

export default async function BlogPage() {
  const { data: posts } = await sanityFetch({ query: ALL_POSTS_QUERY }) as { data: ALL_POSTS_QUERY_RESULT };

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-bg-2 overflow-hidden px-5 sm:px-10 pt-14 sm:pt-20 pb-14 sm:pb-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 40%, rgba(232,146,10,0.07) 0%, transparent 50%), radial-gradient(ellipse at 10% 60%, rgba(232,146,10,0.04) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-[1140px] mx-auto">
          <SectionTag>ARTIKEL & TIPS</SectionTag>
          <h1 className="font-condensed font-black text-[clamp(52px,8vw,100px)] leading-none mt-4">
            BLOG
            <br />
            <span className="text-orange">911</span> BILLIARD
          </h1>
          <p className="font-body text-text-2 text-[14px] max-w-[380px] mt-5 leading-[1.8]">
            Tips bermain, berita turnamen, dan cerita dari lapangan hijau 911
            Billiard.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-bg px-5 sm:px-10 py-14 sm:py-20">
        <div className="max-w-[1140px] mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-condensed font-bold text-[20px] text-text-2">
                Belum ada artikel.
              </p>
              <p className="font-body text-[14px] text-text-3 mt-2">
                Cek lagi nanti ya!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
