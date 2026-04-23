import Image from "next/image";
import SectionTag from "@/components/ui/SectionTag";
import Timeline from "@/components/about/Timeline";

export default function AboutHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-border">
      {/* Left — Photo */}
      <div className="relative min-h-[400px] lg:min-h-[600px] overflow-hidden bg-bg-3">
        <Image
          src="/images/hero/tentang.png"
          alt="Interior 911 Billiard"
          fill
          className="object-cover brightness-75"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        {/* Overlay badge */}
        <div className="absolute bottom-0 left-0 right-0 bg-bg/[0.85] px-5 sm:px-8 py-4 sm:py-6">
          <div className="font-condensed text-[clamp(28px,4vw,44px)] leading-none tracking-[1px]">
            THE LARGEST <span className="text-orange">BILLIARD CHAIN</span>
            <br />
            IN INDONESIA
          </div>
        </div>
      </div>

      {/* Right — Brand text + Timeline */}
      <div className="bg-bg-2 px-6 sm:px-10 py-10 sm:py-14">
        <div className="mb-5">
          <SectionTag>TENTANG KAMI</SectionTag>
        </div>
        <h1 className="font-condensed text-[clamp(36px,4vw,52px)] leading-none tracking-[1px] mb-6">
          911 BILLIARD™
        </h1>
        <p className="font-body text-[14px] text-text-2 leading-relaxed mb-4">
          Didirikan pada 2020, 911 Billiard tumbuh menjadi jaringan billiard
          terbesar di Indonesia dengan 22+ zona aktif di 10+ kota. Kami
          menghadirkan pengalaman bermain billiard bertaraf internasional dengan
          standar fasilitas yang konsisten di setiap cabang.
        </p>
        <p className="font-body text-[14px] text-text-2 leading-relaxed mb-10">
          Dikelola oleh <span className="text-text font-bold">PT Ayo Bangun Bangsa</span>,
          911 Billiard menjadi rumah bagi 7000+ member aktif dan tempat
          pembinaan atlet billiard nasional melalui program Puslatcab resmi.
        </p>

        <Timeline />
      </div>
    </section>
  );
}
