import Button from "@/components/ui/Button";
import SectionTag from "@/components/ui/SectionTag";

const features = [
  "Meja billiard full size",
  "Include aksesoris lengkap",
  "Kualitas tournament grade",
  "Pengiriman & instalasi",
];

export default function TableOnlySection() {
  return (
    <section className="bg-bg-2 px-5 sm:px-10 py-14 sm:py-20">
      <div className="max-w-[1140px] mx-auto">
        <div className="bg-bg border border-white/8 rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-start lg:items-center hover:border-orange/20 transition-colors duration-300">
          {/* Left */}
          <div className="flex-1">
            <SectionTag>ALTERNATIF</SectionTag>
            <h2 className="font-condensed font-black text-[clamp(28px,3.5vw,44px)] leading-none mt-3 mb-3">
              TABLE ONLY{" "}
              <span className="text-orange">by Kaizen International</span>
            </h2>
            <p className="font-body text-text-2 text-[14px] leading-[1.8] max-w-[480px] mb-6">
              Sudah punya tempat tapi butuh meja billiard berkualitas? Pilih
              opsi TABLE ONLY — beli meja langsung dari partner resmi kami,
              Kaizen International, sudah termasuk aksesoris lengkap.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-orange font-condensed text-[14px]">✓</span>
                  <span className="font-body text-[13px] text-text-2">{f}</span>
                </li>
              ))}
            </ul>
            <Button href="#franchise-form" variant="outline">
              Tanya via WhatsApp →
            </Button>
          </div>

          {/* Right — price highlight */}
          <div className="shrink-0 bg-bg-2 border border-orange/20 rounded-2xl px-10 py-8 text-center">
            <div className="font-body text-[11px] tracking-[2px] uppercase text-text-3 mb-2">
              Mulai dari
            </div>
            <div className="font-condensed font-black text-[48px] text-orange leading-none mb-1">
              Rp 40 Jt
            </div>
            <div className="font-body text-[12px] text-text-3">
              per meja, include aksesoris
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
