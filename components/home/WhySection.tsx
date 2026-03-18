import Image from "next/image";
import SectionTag from "@/components/ui/SectionTag";
import { FaCrown, FaCoffee } from "react-icons/fa";
import { GiPoolTableCorner, GiPoolTriangle } from "react-icons/gi";
import type { ReactNode } from "react";

const features: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <FaCrown />,
    title: "VIP Room",
    desc: "Ruangan premium tersedia di semua cabang utama.",
  },
  {
    icon: <GiPoolTableCorner />,
    title: "Kaizen Tables",
    desc: "Meja billiard terbaik dari Kaizen International.",
  },
  {
    icon: <GiPoolTriangle />,
    title: "Carbon Fiber Cue",
    desc: "Pertama di Indonesia, gratis untuk semua pengunjung.",
  },
  {
    icon: <FaCoffee />,
    title: "Lounge & Bar",
    desc: "Menu lokal, Asia, hingga western — lengkap tersedia.",
  },
];

export default function WhySection() {
  return (
    <section className="py-12 sm:py-20 px-5 sm:px-10">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-border">
          {/* Left — features */}
          <div className="bg-bg p-6 sm:p-10 lg:p-16">
            <SectionTag>SAFE & COMFORT</SectionTag>
            <h2 className="font-bebas text-[clamp(38px,5vw,60px)] tracking-[1px] leading-none mb-2">
              KENAPA 911 BILLIARD?
            </h2>
            <div className="w-9 h-[3px] bg-orange mt-5 mb-10" />

            <div className="grid grid-cols-2 gap-[1px] bg-border">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-bg-2 hover:bg-bg-3 transition-colors p-4 sm:p-6 lg:p-8"
                >
                  <div className="text-[28px] text-orange mb-4">{f.icon}</div>
                  <div className="font-condensed font-bold text-[17px] text-orange mb-2">
                    {f.title}
                  </div>
                  <p className="text-[13px] text-text-2 leading-[1.6]">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative bg-bg">
            <div className="relative h-[440px] overflow-hidden">
              <Image
                src="/images/hero/bar.png"
                alt="Interior cabang 911 Billiard dengan fasilitas premium"
                fill
                className="object-cover brightness-[0.7]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Bottom gradient + hashtag */}
              <div
                className="absolute bottom-0 left-0 right-0 p-8"
                style={{
                  background:
                    "linear-gradient(transparent, rgba(10,10,10,0.9))",
                }}
              >
                <div className="font-bebas text-[20px] text-orange tracking-[2px]">
                  #IAM911BILLIARD
                </div>
              </div>
            </div>

            {/* 500 SQM badge */}
            <div className="absolute top-6 right-6 bg-orange px-5 py-3 text-center">
              <div className="font-bebas text-[28px] text-black leading-none">
                500
              </div>
              <div className="font-condensed text-[12px] text-black tracking-[1px] leading-none mt-1">
                SQM MIN.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
