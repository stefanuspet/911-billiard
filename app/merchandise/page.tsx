import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import MerchGrid from "@/components/merchandise/MerchGrid";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_MERCHANDISE_QUERY } from "@/sanity/lib/queries";
import type { ALL_MERCHANDISE_QUERY_RESULT } from "@/sanity.types";

export const metadata: Metadata = {
  title: "Merchandise 911 Billiard — Official Store",
  description:
    "Dapatkan merchandise resmi 911 Billiard: glove, bomber jacket, cue case, chalk, tumbler, dan jersey official. Tersedia di Tokopedia.",
  openGraph: {
    title: "Merchandise 911 Billiard — Official Store",
    description:
      "Merchandise resmi 911 Billiard. Glove, jacket, cue case, dan lainnya. Beli di Tokopedia.",
    images: ["/images/og-image.jpg"],
    siteName: "911 Billiard™",
    locale: "id_ID",
    type: "website",
  },
};

export default async function MerchandisePage() {
  const { data: merchandise } = await sanityFetch({ query: ALL_MERCHANDISE_QUERY }) as { data: ALL_MERCHANDISE_QUERY_RESULT };

  return (
    <main>
      <PageHeader
        tag="OFFICIAL STORE"
        title="MERCHANDISE 911"
        subtitle="Produk resmi 911 Billiard. Tersedia di Tokopedia."
      />
      <div className="max-w-[1140px] mx-auto px-5 sm:px-10 pb-12 sm:pb-20">
        <MerchGrid merchandise={merchandise} />
      </div>
    </main>
  );
}
