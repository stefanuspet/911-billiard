import Image from "next/image";
import type { Promo } from "@/types";

interface PromoCardProps {
  promo: Promo;
}

export default function PromoCard({ promo }: PromoCardProps) {
  return (
    <div
      className={`bg-bg-2 overflow-hidden group${promo.isHot ? " border-t-[3px] border-orange" : ""}`}
    >
      {/* Image */}
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={promo.photo}
          alt={promo.title}
          fill
          className="object-cover brightness-75 group-hover:brightness-100 transition-[filter] duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-0 left-0 bg-orange text-black font-condensed font-bold text-[11px] tracking-[1px] uppercase px-3 py-1">
          {promo.label}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-condensed font-bold text-[18px] mb-2">
          {promo.title}
        </h3>
        <p className="font-body text-[13px] text-text-2 leading-relaxed mb-4">
          {promo.description}
        </p>
        <div className="font-condensed font-bold text-[11px] tracking-[1px] uppercase text-text-3 border-t border-border pt-4">
          {promo.validInfo}
        </div>
      </div>
    </div>
  );
}
