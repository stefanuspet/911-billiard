import { FaShieldAlt, FaChartLine, FaHeadset, FaPaintBrush } from "react-icons/fa";

const reasons = [
  {
    icon: <FaShieldAlt />,
    number: "22+",
    title: "Zona Terbukti",
    desc: "Jaringan aktif di 10+ kota, brand sudah dikenal luas.",
  },
  {
    icon: <FaChartLine />,
    number: "< 24 Bln",
    title: "Balik Modal",
    desc: "Rata-rata ROI franchisee kami dalam 18–24 bulan.",
  },
  {
    icon: <FaHeadset />,
    number: "Full",
    title: "Support Tim",
    desc: "Marketing, SOP, training staff — semua kami handle.",
  },
  {
    icon: <FaPaintBrush />,
    number: "by 911",
    title: "Desain Interior",
    desc: "Tim desain kami kerjakan dari awal sampai siap buka.",
  },
];

export default function StatsBand() {
  return (
    <section className="bg-bg-2 px-5 sm:px-10 py-14 sm:py-20">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-bg border border-white/8 rounded-2xl p-6 hover:border-orange/30 transition-colors duration-200"
            >
              <div className="w-10 h-10 bg-orange/10 border border-orange/20 rounded-xl flex items-center justify-center text-orange text-[16px] mb-5">
                {r.icon}
              </div>
              <div className="font-condensed font-black text-[28px] text-orange leading-none mb-1">
                {r.number}
              </div>
              <div className="font-condensed font-bold text-[14px] text-text mb-2">
                {r.title}
              </div>
              <p className="font-body text-[12px] text-text-2 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
