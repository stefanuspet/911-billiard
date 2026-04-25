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
    <section className="bg-bg-2 py-16 sm:py-24 px-5 sm:px-10">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — features */}
          <div>
            <SectionTag>SAFE & COMFORT</SectionTag>
            <h2 className="font-condensed font-black text-[clamp(36px,5vw,58px)] leading-none uppercase mb-3">
              Kenapa <span className="text-orange">911 Billiard?</span>
            </h2>
            <p className="font-body text-[14px] text-text-2 max-w-[380px] mb-10 leading-[1.8]">
              Lebih dari sekadar tempat billiard — ini adalah pengalaman premium
              yang accessible.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl p-5 border border-orange/20 bg-orange/5 hover:border-orange/40 transition-colors duration-200"
                >
                  <div className="text-[24px] mb-3 text-orange">{f.icon}</div>
                  <div className="font-condensed font-bold text-[16px] mb-1 text-text">
                    {f.title}
                  </div>
                  <p className="font-body text-[12px] text-text-2 leading-[1.6]">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative rounded-3xl overflow-hidden border border-white/8">
            <div className="relative h-[460px]">
              <Image
                src="/images/hero/bar.png"
                alt="Interior cabang 911 Billiard dengan fasilitas premium"
                fill
                className="object-cover brightness-[0.75]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.85) 100%)",
                }}
              />

              {/* Bottom label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="font-condensed font-black text-[22px] text-white tracking-[2px]">
                  #IAM911BILLIARD
                </div>
                <div className="bg-orange rounded-2xl px-4 py-2 text-center">
                  <div className="font-condensed font-black text-[24px] text-black leading-none">
                    500
                  </div>
                  <div className="font-body text-[10px] text-black/80 tracking-[1px] mt-[2px]">
                    SQM MIN.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
