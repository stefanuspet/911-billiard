import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import FacilityCard from "@/components/about/FacilityCard";
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
      <AboutHero />

      {/* Stats Band */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border">
        {statsData.map((stat) => (
          <div key={stat.label} className="bg-bg-3 px-4 sm:px-8 py-6 sm:py-8 text-center">
            <div className="font-bebas text-[42px] text-orange leading-none mb-1">
              {stat.number}
            </div>
            <div className="font-condensed font-bold text-[11px] tracking-[1.5px] uppercase text-text-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Facility Highlights */}
      <div className="max-w-[1140px] mx-auto px-5 sm:px-10 py-12 sm:py-20">
        <div className="flex items-center mb-10">
          <SectionTag>FASILITAS UNGGULAN</SectionTag>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border">
          {facilities.map((f) => (
            <FacilityCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </main>
  );
}
