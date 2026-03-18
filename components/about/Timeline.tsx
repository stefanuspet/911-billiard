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
    <div className="relative pl-8 border-l-2 border-border-2 space-y-10">
      {milestones.map((item) => (
        <div key={item.year} className="relative">
          {/* Orange dot */}
          <div className="absolute -left-[25px] top-[5px] w-3 h-3 bg-orange" />

          <div className="font-bebas text-[20px] text-orange leading-none mb-1">
            {item.year}
          </div>
          <div className="font-condensed font-bold text-[15px] mb-1">
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
