import SectionTag from "@/components/ui/SectionTag";

const benefits = [
  { title: "Ladies Free", desc: "Khusus member wanita" },
  { title: "Single Free", desc: "Benefit member individu" },
  { title: "Diskon", desc: "Harga spesial member" },
  { title: "Priority Queue", desc: "Waiting list prioritas" },
];

export default function MemberSection() {
  return (
    <section className="bg-bg-2 border-t border-b border-border">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-border">
        {/* Left — stat */}
        <div className="bg-bg-2 p-6 sm:p-8 lg:p-12 flex items-center gap-8">
          <div>
            <SectionTag>KOMUNITAS</SectionTag>
            <div className="font-bebas text-[80px] text-orange leading-none">
              7000+
            </div>
            <div className="font-condensed font-bold text-[18px] text-text-2 tracking-[1px] mb-3">
              MEMBER AKTIF
            </div>
            <p className="text-[13px] text-text-2 max-w-[280px] leading-[1.6]">
              Daftar sekali, gunakan di semua cabang 911 Billiard Indonesia.
            </p>
          </div>

        </div>

        {/* Right — benefits 2x2 */}
        <div className="grid grid-cols-2 gap-[1px] bg-border">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-bg-2 hover:bg-bg-3 transition-colors p-6 text-center"
            >
              <div className="font-condensed font-bold text-[16px] text-orange mb-1">
                {b.title}
              </div>
              <div className="text-[12px] text-text-2">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
