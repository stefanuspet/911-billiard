import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionTag from "@/components/ui/SectionTag";
import { FaCheckCircle } from "react-icons/fa";

const perks = ["Modal mulai Rp 150 juta", "Support tim 911", "ROI < 24 bulan"];

export default function FranchiseCTA() {
  return (
    <section className="relative bg-bg-2 py-16 sm:py-24 px-5 sm:px-10 overflow-hidden">
      {/* Background glows */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(232,146,10,0.08) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(232,146,10,0.04) 0%, transparent 55%)",
        }}
      />

      {/* Watermark */}
      <div
        className="absolute font-condensed pointer-events-none select-none"
        style={{
          fontSize: "280px",
          color: "rgba(255,255,255,0.02)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          letterSpacing: "-10px",
          lineHeight: 1,
          fontWeight: 900,
        }}
      >
        911
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1140px] mx-auto">
        <div
          className="rounded-3xl border border-white/8 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-end">
            {/* Left — text */}
            <div className="px-10 sm:px-14 pt-12 sm:pt-16 pb-12 sm:pb-16">
              <SectionTag>PELUANG BISNIS</SectionTag>
              <h2 className="font-condensed font-black text-[clamp(36px,5vw,62px)] leading-none uppercase mt-4 mb-4">
                Buka Cabang <span className="text-orange">911 Billiard</span>
              </h2>
              <p className="font-body text-text-2 text-[15px] max-w-[400px] mb-8 leading-[1.8]">
                Bergabung dengan jaringan billiard terbesar di Indonesia dan
                mulai bisnis menguntungkan bersama kami.
              </p>

              {/* Perks */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
                {perks.map((p) => (
                  <div key={p} className="flex items-center gap-2">
                    <FaCheckCircle
                      size={13}
                      className="text-orange flex-shrink-0"
                    />
                    <span className="font-body text-[13px] text-text-2">
                      {p}
                    </span>
                  </div>
                ))}
              </div>

              <Button href="/franchise" variant="primary">
                Pelajari Paket Franchise →
              </Button>
            </div>

            {/* Right — mascot */}
            <div className="hidden lg:flex justify-center items-center px-8 pt-8 pb-16">
              <Image
                src="/images/maskot/maskot_1.png"
                alt=""
                width={340}
                height={460}
                className="object-contain w-auto max-h-[420px]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
