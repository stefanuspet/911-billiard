import type { Metadata } from "next";
import FranchiseHero from "@/components/franchise/FranchiseHero";
import StatsBand from "@/components/franchise/StatsBand";
import PackageGrid from "@/components/franchise/PackageGrid";
import FranchiseForm from "@/components/franchise/FranchiseForm";

export const metadata: Metadata = {
  title: "Franchise 911 Billiard — Peluang Bisnis Billiard Terbesar di Indonesia",
  description:
    "Buka cabang 911 Billiard di kota Anda. Modal mulai Rp 150 juta. Dukungan penuh dari franchisor: SOP, training, desain interior, dan marketing.",
  openGraph: {
    title: "Franchise 911 Billiard — Peluang Bisnis Billiard Terbesar di Indonesia",
    description:
      "Bergabung dengan jaringan billiard terbesar di Indonesia. Modal mulai Rp 150 juta. 22+ zona aktif.",
    images: ["/images/og-image.jpg"],
    siteName: "911 Billiard™",
    locale: "id_ID",
    type: "website",
  },
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Paket Franchise 911 Billiard",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Offer",
        name: "Starter Zone",
        price: "150000000",
        priceCurrency: "IDR",
        description: "Paket franchise 911 Billiard Starter Zone. Luas minimal 200m², 6–8 meja billiard.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Offer",
        name: "Standard Zone",
        price: "250000000",
        priceCurrency: "IDR",
        description: "Paket franchise 911 Billiard Standard Zone. Luas minimal 350m², 10–14 meja billiard, VIP Room.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Offer",
        name: "Premium Zone",
        price: "450000000",
        priceCurrency: "IDR",
        description: "Paket franchise 911 Billiard Premium Zone. Luas minimal 500m², 18–25 meja billiard, VIP Room + Lounge & Bar.",
      },
    },
  ],
};

export default function FranchisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <main>
        <FranchiseHero />
        <StatsBand />
        <PackageGrid />
        <FranchiseForm />
      </main>
    </>
  );
}
