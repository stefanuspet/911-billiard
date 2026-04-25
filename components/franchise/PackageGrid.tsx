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
    <section className="bg-bg px-5 sm:px-10 py-14 sm:py-20">
      <div className="max-w-[1140px] mx-auto">
      <div className="mb-10">
        <SectionTag>PAKET FRANCHISE</SectionTag>
        <h2 className="font-condensed font-black text-[clamp(32px,4vw,52px)] leading-none mt-2">
          Pilih Paket{" "}
          <span className="text-orange">Yang Sesuai</span>
        </h2>
        <p className="font-body text-text-2 text-[14px] mt-4 max-w-[480px] leading-[1.8]">
          Tiga paket tersedia sesuai luas tempat dan target bisnismu. Semua
          paket sudah termasuk lisensi brand dan dukungan penuh dari franchisor.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <PackageCard key={pkg.name} {...pkg} />
        ))}
      </div>
      </div>
    </section>
  );
}
