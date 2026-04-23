const stats = [
  { number: "22+", label: "ZONA AKTIF" },
  { number: "10+", label: "KOTA DI INDONESIA" },
  { number: "7000+", label: "MEMBER AKTIF" },
  { number: "5+", label: "TAHUN BERDIRI" },
];

export default function StatsBand() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-bg-3 px-8 py-8 text-center"
        >
          <div className="font-condensed text-[48px] text-orange leading-none mb-1">
            {stat.number}
          </div>
          <div className="font-condensed font-bold text-[11px] tracking-[2px] uppercase text-text-2">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
