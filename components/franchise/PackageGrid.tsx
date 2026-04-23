import PackageCard from "@/components/franchise/PackageCard";
import SectionTag from "@/components/ui/SectionTag";

const packages = [
  {
    name: "Starter Zone",
    price: "Rp 150 Jt",
    priceNote: "Modal awal mulai dari",
    features: [
      "Luas minimal 200m²",
      "6–8 meja billiard",
      "Lisensi brand 911 Billiard",
      "SOP operasional lengkap",
      "Training staff (3 hari)",
      "Starter kit marketing",
    ],
    featured: false,
  },
  {
    name: "Standard Zone",
    price: "Rp 250 Jt",
    priceNote: "Modal awal mulai dari",
    features: [
      "Luas minimal 350m²",
      "10–14 meja billiard",
      "Lisensi brand 911 Billiard",
      "SOP operasional lengkap",
      "Training staff (5 hari)",
      "Full marketing support",
      "VIP Room setup",
      "Desain interior by 911",
    ],
    featured: true,
  },
  {
    name: "Premium Zone",
    price: "Rp 450 Jt",
    priceNote: "Modal awal mulai dari",
    features: [
      "Luas minimal 500m²",
      "18–25 meja billiard",
      "Lisensi brand 911 Billiard",
      "SOP operasional lengkap",
      "Training staff (7 hari)",
      "Full marketing support",
      "VIP Room + Lounge & Bar",
      "Desain interior by 911",
      "Priority support franchisor",
    ],
    featured: false,
  },
];

export default function PackageGrid() {
  return (
    <section className="max-w-[1140px] mx-auto px-10 py-20">
      <div className="mb-10 text-center">
        <div className="flex justify-center mb-4">
          <SectionTag>PAKET FRANCHISE</SectionTag>
        </div>
        <h2 className="font-condensed text-[clamp(32px,4vw,52px)] leading-none tracking-[1px]">
          PILIH PAKET YANG SESUAI
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-border">
        {packages.map((pkg) => (
          <PackageCard key={pkg.name} {...pkg} />
        ))}
      </div>
    </section>
  );
}
