import type { Metadata } from "next";
import Image from "next/image";
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

const [featuredPromo, ...restPromos] = promos;

export default function PromoPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-bg-2 overflow-hidden px-5 sm:px-10 pt-14 sm:pt-20 pb-0">
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 40%, rgba(232,146,10,0.07) 0%, transparent 50%), radial-gradient(ellipse at 10% 60%, rgba(232,146,10,0.04) 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-8">
          {/* Left — heading */}
          <div className="pb-10 sm:pb-14">
            <SectionTag>PENAWARAN TERKINI</SectionTag>
            <h1 className="font-condensed font-black text-[clamp(52px,8vw,100px)] leading-none mt-4">
              PROMO
              <br />
              <span className="text-orange">&amp;</span> EVENT
            </h1>
            <p className="font-body text-text-2 text-[14px] max-w-[380px] mt-5 leading-[1.8]">
              Nikmati promo eksklusif dan ikuti turnamen 911 Series di kota
              Anda.
            </p>
            {/* Quick stats */}
            <div className="flex gap-3 mt-6 flex-wrap">
              <div className="bg-orange/10 border border-orange/20 text-orange font-condensed font-bold text-[12px] tracking-[1px] uppercase px-4 py-[7px] rounded-full">
                {promos.length} Promo Aktif
              </div>
              <div className="bg-bg-3 border border-white/8 text-text-2 font-condensed font-bold text-[12px] tracking-[1px] uppercase px-4 py-[7px] rounded-full">
                {tournaments.length} Jadwal Turnamen
              </div>
            </div>
          </div>

          {/* Right — mascot */}
          <div className="hidden lg:block self-end pointer-events-none">
            <Image
              src="/images/maskot/maskot_2.png"
              alt=""
              width={420}
              height={306}
              className="object-contain"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Promo section */}
      <section className="bg-bg px-5 sm:px-10 py-14 sm:py-20">
        <div className="max-w-[1140px] mx-auto">
          <SectionTag>PROMO AKTIF</SectionTag>
          <h2 className="font-condensed font-black text-[clamp(28px,4vw,48px)] leading-none mt-2 mb-8">
            Hemat Lebih,{" "}
            <span className="text-orange">Main Lebih Seru</span>
          </h2>

          {/* Featured promo — wide horizontal */}
          <div className="mb-5">
            <PromoCard promo={featuredPromo} featured />
          </div>

          {/* Remaining promos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {restPromos.map((promo) => (
              <PromoCard key={promo.id} promo={promo} />
            ))}
          </div>
        </div>
      </section>

      {/* Tournament section */}
      <section className="bg-bg-2 px-5 sm:px-10 py-14 sm:py-20">
        <div className="max-w-[1140px] mx-auto">
          <SectionTag>JADWAL TURNAMEN</SectionTag>
          <h2 className="font-condensed font-black text-[clamp(28px,4vw,48px)] leading-none mt-2 mb-8">
            911 Series{" "}
            <span className="text-orange">Tournament</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tournaments.map((t) => (
              <TournamentItem key={t.id} tournament={t} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
