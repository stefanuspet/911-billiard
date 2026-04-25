import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import { FaStar, FaUsers, FaFemale, FaBullseye, FaTag, FaBolt } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
import type { ReactNode } from "react";

const benefits: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <FaFemale />, title: "Ladies Free", desc: "Khusus member wanita" },
  { icon: <FaBullseye />, title: "Single Free", desc: "Benefit member individu" },
  { icon: <FaTag />, title: "Diskon", desc: "Harga spesial member" },
  { icon: <FaBolt />, title: "Priority Queue", desc: "Waiting list prioritas" },
];

export default function MemberSection() {
  return (
    <section className="bg-bg py-16 sm:py-24 px-5 sm:px-10">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left — big stat card */}
          <div
            className="relative rounded-3xl p-8 sm:p-10 overflow-hidden border border-orange/20 flex flex-col justify-between"
            style={{ background: "rgba(232,146,10,0.06)" }}
          >
            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-[60%] h-[60%] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top right, rgba(232,146,10,0.12) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <SectionTag>KOMUNITAS</SectionTag>
              <div className="flex items-end gap-3 mb-3">
                <span className="font-condensed font-black text-[80px] sm:text-[96px] text-orange leading-none">
                  7K+
                </span>
                <div className="mb-4">
                  <FaUsers size={32} className="text-orange/40" />
                </div>
              </div>
              <div className="font-condensed font-bold text-[18px] text-text-2 tracking-[1px] uppercase mb-3">
                Member Aktif
              </div>
              <p className="font-body text-[13px] text-text-2 max-w-[280px] leading-[1.7]">
                Daftar sekali, gunakan di semua cabang 911 Billiard Indonesia.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-3 mt-8">
              <div className="flex gap-[3px]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={12} className="text-orange" />
                ))}
              </div>
              <span className="font-body text-[12px] text-text-2">
                Rated 4.9 by members
              </span>
            </div>
          </div>

          {/* Right — benefits grid + CTA */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4 flex-1">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl p-5 border border-orange/15 bg-orange/5 hover:border-orange/30 transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-orange/15 border border-orange/25 rounded-xl flex items-center justify-center text-orange text-[16px] mb-4">
                    {b.icon}
                  </div>
                  <div className="font-condensed font-bold text-[16px] text-text mb-1">
                    {b.title}
                  </div>
                  <div className="font-body text-[12px] text-text-2">
                    {b.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div
              className="rounded-2xl p-6 border border-orange/20 flex items-center justify-between gap-4"
              style={{ background: "rgba(232,146,10,0.06)" }}
            >
              <div className="flex items-center gap-3">
                <MdCardMembership
                  size={28}
                  className="text-orange flex-shrink-0"
                />
                <div>
                  <div className="font-condensed font-bold text-[16px] text-text">
                    Daftar Member Sekarang
                  </div>
                  <div className="font-body text-[12px] text-text-2">
                    Gratis pendaftaran
                  </div>
                </div>
              </div>
              <Button href="/kontak" variant="primary">
                Daftar →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
