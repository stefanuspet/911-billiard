import Button from "@/components/ui/Button";
import SectionTag from "@/components/ui/SectionTag";

export default function FranchiseCTA() {
  return (
    <section className="relative bg-bg-2 border-t border-b border-border py-12 sm:py-20 px-5 sm:px-10 text-center overflow-hidden">
      {/* 911 watermark */}
      <div
        className="absolute font-bebas text-orange pointer-events-none select-none"
        style={{
          fontSize: "300px",
          color: "rgba(232,146,10,0.04)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          letterSpacing: "-10px",
          lineHeight: 1,
        }}
      >
        911
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <SectionTag>PELUANG BISNIS</SectionTag>
        </div>
        <h2 className="font-bebas text-[clamp(40px,6vw,72px)] tracking-[1px] leading-none mb-4">
          BUKA CABANG 911 BILLIARD
        </h2>
        <p className="text-text-2 text-[15px] max-w-[480px] mx-auto mb-10">
          Bergabung dengan jaringan billiard terbesar di Indonesia. Modal mulai
          Rp 150 juta.
        </p>
        <Button href="/franchise" variant="primary">
          Pelajari Paket Franchise →
        </Button>
      </div>
    </section>
  );
}
