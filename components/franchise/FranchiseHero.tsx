import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionTag from "@/components/ui/SectionTag";
import { FaCheckCircle } from "react-icons/fa";

const keunggulan = [
  "Brand dikenal luas di Indonesia",
  "SOP operasional terstandarisasi",
  "Training staff by franchisor",
  "Support marketing digital & offline",
  "ROI 18–24 bulan rata-rata",
];

export default function FranchiseHero() {
  return (
    <section className="bg-bg py-16 sm:py-24 px-5 sm:px-10 overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-end">
          {/* Left — content */}
          <div>
            <SectionTag>PELUANG BISNIS</SectionTag>
            <h1 className="font-condensed font-black text-[clamp(44px,5.5vw,80px)] leading-none mt-4 mb-5">
              BUKA CABANG
              <br />
              <span className="text-orange">911 BILLIARD</span>
            </h1>
            <p className="font-body text-text-2 text-[15px] max-w-[480px] mb-8 leading-[1.8]">
              Bergabunglah dengan jaringan billiard terbesar di Indonesia.
              Dapatkan dukungan penuh mulai dari desain interior, SOP, training,
              hingga marketing. Modal mulai{" "}
              <span className="text-text font-semibold">Rp 150 juta</span>.
            </p>

            {/* Keunggulan — mini card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-[520px]">
              {keunggulan.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-bg-2 border border-white/8 rounded-xl px-4 py-3 hover:border-orange/25 transition-colors duration-200"
                >
                  <FaCheckCircle
                    size={12}
                    className="text-orange flex-shrink-0"
                  />
                  <span className="font-body text-[12px] text-text-2">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5 flex-wrap">
              <Button href="#franchise-form" variant="primary">
                Daftar Sekarang →
              </Button>
              <span className="font-body text-[12px] text-text-3">
                Dibalas dalam 1×24 jam
              </span>
            </div>
          </div>

          {/* Right — mascot + floating stat badges */}
          <div className="relative hidden lg:flex justify-center items-end">
            {/* Floating badge — Zona Aktif */}
            <div
              className="absolute top-4 left-0 z-10 rounded-2xl px-5 py-4 border border-orange/30"
              style={{ background: "rgba(232,146,10,0.12)" }}
            >
              <div className="font-condensed font-black text-[36px] text-orange leading-none">
                22+
              </div>
              <div className="font-condensed font-bold text-[10px] tracking-[1.5px] uppercase text-text-2 mt-[2px]">
                Zona Aktif
              </div>
            </div>

            {/* Floating badge — ROI */}
            <div className="absolute top-36 -left-6 z-10 bg-bg-2 border border-white/10 rounded-2xl px-4 py-3">
              <div className="font-condensed font-black text-[22px] text-orange leading-none">
                &lt; 24 Bln
              </div>
              <div className="font-condensed font-bold text-[10px] tracking-[1.5px] uppercase text-text-3 mt-[2px]">
                Rata-rata ROI
              </div>
            </div>

            {/* Mascot */}
            <Image
              src="/images/maskot/maskot_2.png"
              alt=""
              width={360}
              height={500}
              className="object-contain w-auto max-h-[500px] relative z-0"
              priority
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
