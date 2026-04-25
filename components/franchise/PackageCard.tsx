import Button from "@/components/ui/Button";

interface PackageCardProps {
  name: string;
  price: string;
  priceNote?: string;
  features: string[];
  featured?: boolean;
}

export default function PackageCard({
  name,
  price,
  priceNote,
  features,
  featured,
}: PackageCardProps) {
  return (
    <div
      className={`bg-bg-2 rounded-2xl p-8 flex flex-col border transition-colors duration-200${
        featured
          ? " border-orange/50 hover:border-orange"
          : " border-white/8 hover:border-orange/30"
      }`}
    >
      {featured && (
        <div className="inline-block bg-orange text-black font-condensed font-bold text-[11px] tracking-[2px] uppercase px-3 py-[5px] rounded-full mb-4 self-start">
          PALING POPULER
        </div>
      )}

      <div className="font-condensed font-bold text-[13px] tracking-[2px] uppercase text-text-2 mb-2">
        {name}
      </div>

      <div className="font-condensed font-black text-[38px] text-orange leading-none mb-1">
        {price}
      </div>
      {priceNote && (
        <div className="font-body text-[12px] text-text-2 mb-6">{priceNote}</div>
      )}
      {!priceNote && <div className="mb-6" />}

      <ul className="space-y-3 flex-1 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span className="text-orange font-condensed text-[16px] leading-none mt-[3px]">
              ✓
            </span>
            <span className="font-body text-[13px] text-text-2">{f}</span>
          </li>
        ))}
      </ul>

      <Button href="#franchise-form" variant={featured ? "primary" : "outline"}>
        Pilih Paket Ini →
      </Button>
    </div>
  );
}
