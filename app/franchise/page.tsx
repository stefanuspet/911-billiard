import type { Metadata } from "next";
import FranchiseHero from "@/components/franchise/FranchiseHero";
import StatsBand from "@/components/franchise/StatsBand";
import PackageGrid from "@/components/franchise/PackageGrid";
import TableOnlySection from "@/components/franchise/TableOnlySection";
import FranchiseForm from "@/components/franchise/FranchiseForm";

export const metadata: Metadata = {
  title:
    "Franchise 911 Billiard — Peluang Bisnis Billiard Terbesar di Indonesia",
  description:
    "Buka cabang 911 Billiard di kota Anda. Modal mulai Rp 800 juta. Dukungan penuh dari franchisor: SOP, training, desain interior, dan marketing.",
  openGraph: {
    title:
      "Franchise 911 Billiard — Peluang Bisnis Billiard Terbesar di Indonesia",
    description:
      "Bergabung dengan jaringan billiard terbesar di Indonesia. Modal mulai Rp 800 juta. 22+ zona aktif.",
    images: ["/images/og-image.jpg"],
    siteName: "911 Billiard™",
    locale: "id_ID",
    type: "website",
  },
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Franchise 911 Billiard",
  price: "800000000",
  priceCurrency: "IDR",
  description:
    "Paket franchise 911 Billiard. Luas minimal 500m², minimal 10 meja billiard. Termasuk lisensi brand, renovasi interior, training staff, full marketing support, dan 1 bulan manajemen gratis.",
  seller: {
    "@type": "Organization",
    name: "911 Billiard",
  },
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
        <TableOnlySection />
        <FranchiseForm />
      </main>
    </>
  );
}
