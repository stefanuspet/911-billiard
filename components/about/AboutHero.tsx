import Image from "next/image";
import SectionTag from "@/components/ui/SectionTag";

export default function AboutHero() {
  return (
    <section className="bg-bg-2 py-16 sm:py-20 px-5 sm:px-10">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left — Photo */}
        <div className="relative min-h-[420px] lg:min-h-[520px] rounded-3xl overflow-hidden bg-bg-3">
          <Image
            src="/images/hero/tentang.png"
            alt="Interior 911 Billiard"
            fill
            className="object-cover brightness-75"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Mascot */}
          <div className="absolute bottom-0 right-0 hidden lg:block pointer-events-none z-10">
            <Image
              src="/images/maskot/maskot_3.png"
              alt=""
              width={200}
              height={278}
              className="object-contain"
              aria-hidden="true"
            />
          </div>
          {/* Label badge */}
          <div className="absolute top-5 left-5 bg-bg/75 backdrop-blur-sm border border-white/10 text-text font-condensed font-bold text-[11px] tracking-[1.5px] uppercase px-4 py-2 rounded-full">
            Est. 2020 · PT Ayo Bangun Bangsa
          </div>
        </div>

        {/* Right — Story */}
        <div>
          <SectionTag>KISAH KAMI</SectionTag>
          <h2 className="font-condensed font-black text-[clamp(32px,4vw,52px)] leading-none mt-2 mb-5">
            Dari Satu Meja{" "}
            <span className="text-orange">ke Seluruh Indonesia</span>
          </h2>
          <p className="font-body text-[14px] text-text-2 leading-relaxed mb-4">
            Didirikan pada 2020, 911 Billiard tumbuh menjadi jaringan billiard
            terbesar di Indonesia dengan 22+ zona aktif di 10+ kota. Kami
            menghadirkan pengalaman bermain billiard bertaraf internasional
            dengan standar fasilitas yang konsisten di setiap cabang.
          </p>
          <p className="font-body text-[14px] text-text-2 leading-relaxed mb-8">
            Dikelola oleh{" "}
            <span className="text-text font-semibold">PT Ayo Bangun Bangsa</span>
            , 911 Billiard menjadi rumah bagi 7000+ member aktif dan tempat
            pembinaan atlet billiard nasional melalui program Puslatcab resmi.
          </p>

          {/* Inline mini stats */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="rounded-2xl p-5 border border-orange/20"
              style={{ background: "rgba(232,146,10,0.06)" }}
            >
              <div className="font-condensed font-black text-[42px] text-orange leading-none">
                22+
              </div>
              <div className="font-condensed font-bold text-[11px] tracking-[1.5px] uppercase text-text-2 mt-1">
                Zona Aktif
              </div>
            </div>
            <div
              className="rounded-2xl p-5 border border-orange/20"
              style={{ background: "rgba(232,146,10,0.06)" }}
            >
              <div className="font-condensed font-black text-[42px] text-orange leading-none">
                7K+
              </div>
              <div className="font-condensed font-bold text-[11px] tracking-[1.5px] uppercase text-text-2 mt-1">
                Member Aktif
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
