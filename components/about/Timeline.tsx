const milestones = [
  {
    year: "2020",
    title: "Berdiri & Zona Pertama",
    description:
      "911 Billiard berdiri dan membuka zona pertama di Tangerang. Konsep Dark Industrial dengan lampu LED geometris pertama di Jakarta.",
  },
  {
    year: "2021–2022",
    title: "Ekspansi Jakarta & Jabar",
    description:
      "Ekspansi ke Jakarta Selatan, Jakarta Timur, Jakarta Barat, dan Depok. Total 8 zona aktif dengan standar VIP Room mulai diterapkan.",
  },
  {
    year: "2023",
    title: "Pioneer LED & Carbon Fiber Cue",
    description:
      "Pertama di Jakarta menggunakan LED lamp system dan carbon fiber cue. Resmi menjadi Puslatcab untuk atlet billiard nasional.",
  },
  {
    year: "2024",
    title: "Ekspansi Luar Jawa",
    description:
      "Membuka zona di Pontianak, Singkawang, dan Balikpapan. Jaringan mencapai 18+ zona di 8 kota. Peluncuran program franchise resmi.",
  },
  {
    year: "2025",
    title: "22+ Zona & 7000+ Member",
    description:
      "Jaringan terbesar billiard di Indonesia. 22+ zona aktif, 7000+ member, dan 911 Series Tournament berjalan di berbagai kota.",
  },
];

export default function Timeline() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {milestones.map((item) => (
        <div
          key={item.year}
          className="bg-bg-2 border border-white/8 rounded-2xl p-6 hover:border-orange/30 transition-colors duration-200"
        >
          <div className="inline-block bg-orange text-black font-condensed font-bold text-[11px] tracking-[1px] uppercase px-3 py-[4px] rounded-full mb-4">
            {item.year}
          </div>
          <div className="font-condensed font-bold text-[16px] mb-2">
            {item.title}
          </div>
          <p className="font-body text-[13px] text-text-2 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
