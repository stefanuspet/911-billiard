import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import AboutHero from "@/components/about/AboutHero";
import FacilityCard from "@/components/about/FacilityCard";
import Timeline from "@/components/about/Timeline";
import SectionTag from "@/components/ui/SectionTag";
import { FaLightbulb, FaBullseye, FaCircle, FaCocktail } from "react-icons/fa";
import { GiPoolTableCorner, GiRolledCloth } from "react-icons/gi";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tentang 911 Billiard — The Largest Billiard Chain in Indonesia",
  description:
    "Mengenal 911 Billiard: sejarah, visi, dan fasilitas. Jaringan billiard terbesar di Indonesia dengan 22+ zona aktif sejak 2020.",
  openGraph: {
    title: "Tentang 911 Billiard — The Largest Billiard Chain in Indonesia",
    description:
      "22+ zona aktif, 7000+ member, Puslatcab resmi. Kenali lebih dalam 911 Billiard.",
    images: ["/images/og-image.jpg"],
    siteName: "911 Billiard™",
    locale: "id_ID",
    type: "website",
  },
};

const statsData = [
  { number: "18–25", label: "Usia Dominan Pengunjung" },
  { number: "30–50", label: "Usia Segmen Premium" },
  { number: "100–250K", label: "Rata-rata Spending (Rp)" },
  { number: "500m²", label: "Luas Minimal Per Zona" },
];

const facilities: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <GiPoolTableCorner />,
    title: "Kaizen Tables",
    description:
      "Meja billiard standar internasional Kaizen dengan kain laken premium untuk pengalaman bermain optimal.",
  },
  {
    icon: <GiRolledCloth />,
    title: "Smooth Laken",
    description:
      "Kain meja diganti secara berkala menggunakan bahan laken berkualitas tinggi untuk kelancaran bola maksimal.",
  },
  {
    icon: <FaCircle />,
    title: "Dyna Spheres",
    description:
      "Bola billiard tournament quality — Dyna Spheres — standar yang digunakan di kompetisi resmi.",
  },
  {
    icon: <FaLightbulb />,
    title: "LED Lamp Pioneer",
    description:
      "Pertama di Jakarta menggunakan sistem pencahayaan LED geometris khusus untuk meja billiard tanpa bayangan.",
  },
  {
    icon: <FaBullseye />,
    title: "Carbon Fiber Cues",
    description:
      "Stik billiard carbon fiber tersedia untuk semua pengunjung — pertama di Indonesia menyediakan standar ini.",
  },
  {
    icon: <FaCocktail />,
    title: "Lounge & Bar",
    description:
      "Area lounge dan bar tersedia di zona Premium untuk menambah kenyamanan sesi bermain bersama teman.",
  },
];

export default function TentangPage() {
  return (
    <main>
      <PageHeader
        tag="TENTANG KAMI"
        title="911 BILLIARD™"
        subtitle="Jaringan billiard terbesar di Indonesia — 22+ zona aktif, 7000+ member, dan terus berkembang."
      />

      {/* Brand Story */}
      <AboutHero />

      {/* Milestones */}
      <section className="bg-bg py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1140px] mx-auto">
          <SectionTag>PERJALANAN KAMI</SectionTag>
          <h2 className="font-condensed font-black text-[clamp(28px,4vw,48px)] leading-none mt-2 mb-10">
            Dari 2020 <span className="text-orange">Hingga Sekarang</span>
          </h2>
          <Timeline />
        </div>
      </section>

      {/* Stats Band */}
      <div className="bg-bg-2 px-5 sm:px-10 py-10">
        <div className="max-w-[1140px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className="bg-bg border border-orange/15 rounded-2xl px-4 sm:px-6 py-6 sm:py-8 text-center hover:border-orange/30 transition-colors duration-200"
            >
              <div className="font-condensed font-black text-[42px] text-orange leading-none mb-1">
                {stat.number}
              </div>
              <div className="font-condensed font-bold text-[11px] tracking-[1.5px] uppercase text-text-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Highlights */}
      <section className="bg-bg py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1140px] mx-auto">
          <SectionTag>FASILITAS UNGGULAN</SectionTag>
          <h2 className="font-condensed font-black text-[clamp(28px,4vw,48px)] leading-none mt-2 mb-10">
            Standar <span className="text-orange">Terbaik</span> untuk Kamu
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((f) => (
              <FacilityCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
