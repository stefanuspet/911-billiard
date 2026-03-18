import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PromoCard from "@/components/promo/PromoCard";
import TournamentItem from "@/components/promo/TournamentItem";
import SectionTag from "@/components/ui/SectionTag";
import { promos } from "@/data/promos";
import { tournaments } from "@/data/tournaments";

export const metadata: Metadata = {
  title: "Promo & Event 911 Billiard — Penawaran Terkini dan Jadwal Turnamen",
  description:
    "Promo terbaru 911 Billiard: Ladies Free, Single Free, dan jadwal turnamen 911 Series di Jakarta, Yogyakarta, dan Depok.",
  openGraph: {
    title: "Promo & Event 911 Billiard — Penawaran Terkini dan Jadwal Turnamen",
    description:
      "Ladies Free, Single Free, dan 911 Series Tournament. Cek promo terbaru 911 Billiard.",
    images: ["/images/og-image.jpg"],
    siteName: "911 Billiard™",
    locale: "id_ID",
    type: "website",
  },
};

export default function PromoPage() {
  return (
    <main>
      <PageHeader
        tag="PENAWARAN TERKINI"
        title="PROMO & EVENT"
        subtitle="Nikmati promo eksklusif dan ikuti turnamen 911 Series di kota Anda."
      />

      <div className="max-w-[1140px] mx-auto px-5 sm:px-10 pb-12 sm:pb-20">
        {/* Promo Grid */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <SectionTag>PROMO AKTIF</SectionTag>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border">
            {promos.map((promo) => (
              <PromoCard key={promo.id} promo={promo} />
            ))}
          </div>
        </div>

        {/* Tournament List */}
        <div>
          <div className="flex items-center mb-8">
            <SectionTag>JADWAL TURNAMEN</SectionTag>
          </div>
          <div className="flex flex-col gap-[1px] bg-border">
            {tournaments.map((t) => (
              <TournamentItem key={t.id} tournament={t} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
