import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionTag from "@/components/ui/SectionTag";

const keunggulan = [
  "Brand yang sudah dikenal luas di Indonesia",
  "SOP operasional lengkap & terstandarisasi",
  "Training staff dan manajemen by franchisor",
  "Support marketing digital & offline",
  "ROI 18–24 bulan rata-rata",
];

export default function FranchiseHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-border">
      {/* Left — Photo */}
      <div className="relative min-h-[420px] lg:min-h-[560px] overflow-hidden bg-bg-3">
        <Image
          src="/images/hero/franchise.png"
          alt="Interior cabang 911 Billiard"
          fill
          className="object-cover brightness-75"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        {/* Maskot */}
        <div className="absolute bottom-0 right-0 hidden lg:block pointer-events-none z-10">
          <Image
            src="/images/maskot/maskot_3.png"
            alt=""
            width={220}
            height={306}
            className="object-contain"
            aria-hidden="true"
          />
        </div>
        {/* 22+ Zona badge */}
        <div className="absolute bottom-6 left-6 bg-orange text-black font-condensed font-bold text-[13px] tracking-[1px] uppercase px-4 py-2">
          22+ ZONA AKTIF
        </div>
      </div>

      {/* Right — Content */}
      <div className="bg-bg-2 px-6 sm:px-10 py-10 sm:py-14 flex flex-col justify-center">
        <div className="mb-5">
          <SectionTag>PELUANG BISNIS</SectionTag>
        </div>
        <h1 className="font-condensed text-[clamp(40px,5vw,64px)] leading-none tracking-[1px] mb-6">
          BUKA CABANG <span className="text-orange">911 BILLIARD</span>
        </h1>
        <p className="text-text-2 text-[15px] mb-8 max-w-[460px]">
          Bergabunglah dengan jaringan billiard terbesar di Indonesia. Dapatkan
          dukungan penuh mulai dari desain interior, SOP, training, hingga
          marketing. Modal mulai{" "}
          <span className="text-text font-bold">Rp 150 juta</span>.
        </p>

        {/* Keunggulan list */}
        <ul className="space-y-3 mb-10">
          {keunggulan.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-orange font-condensed text-[18px] leading-none mt-[2px]">
                ✓
              </span>
              <span className="font-body text-[14px] text-text-2">{item}</span>
            </li>
          ))}
        </ul>

        <div>
          <Button href="#franchise-form" variant="primary">
            Daftar Sekarang →
          </Button>
        </div>
      </div>
    </section>
  );
}
