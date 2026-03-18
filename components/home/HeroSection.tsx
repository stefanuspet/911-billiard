import Image from "next/image";
import Button from "@/components/ui/Button";
const stats = [
  { num: "22+", label: "ZONA AKTIF" },
  { num: "10+", label: "KOTA" },
  { num: "7000+", label: "MEMBER" },
  { num: "500M²", label: "MIN. AREA/ZONA" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[93vh] flex items-center px-5 sm:px-10 pt-16 overflow-hidden">
      {/* Background image */}
      <Image
        src={"/images/hero/hero.png"}
        alt="Suasana cabang 911 Billiard"
        fill
        priority
        className="object-cover brightness-[0.28] saturate-[0.6]"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(100deg, rgba(10,10,10,0.97) 38%, rgba(10,10,10,0.4) 100%)",
        }}
      />

      {/* Orange left line */}
      <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-orange z-10" />

      {/* Content */}
      <div className="max-w-[640px] relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-orange text-orange font-condensed font-bold text-[11px] tracking-[3px] uppercase px-4 py-[6px] mb-7">
          ★ THE LARGEST BILLIARD CHAIN IN INDONESIA
        </div>

        {/* H1 */}
        <h1 className="font-bebas text-[clamp(72px,10vw,128px)] leading-[0.88] tracking-[1px] mb-6">
          PLAY
          <span className="text-orange block">YOUR</span>
          GAME
        </h1>

        {/* Subtitle */}
        <p className="text-[16px] text-text-2 max-w-[460px] mb-10 leading-[1.75]">
          Tempat billiard terbaik dengan fasilitas premium, VIP room, dan cafe —
          tersebar di 22+ zona di seluruh Indonesia.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <Button href="/cabang" variant="primary">
            Temukan Cabang Terdekat
          </Button>
          <Button href="/franchise" variant="outline">
            Info Franchise
          </Button>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-16 border-t border-l border-border">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-r border-b border-border px-4 py-5"
            >
              <div className="font-bebas text-[40px] text-orange leading-none">
                {stat.num}
              </div>
              <div className="font-condensed text-[11px] text-text-3 tracking-[1px] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
