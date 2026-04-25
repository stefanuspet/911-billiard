import Image from "next/image";
import type { Promo } from "@/types";

interface PromoCardProps {
  promo: Promo;
  featured?: boolean;
}

export default function PromoCard({ promo, featured = false }: PromoCardProps) {
  if (featured) {
    return (
      <div
        className={`bg-bg-2 rounded-3xl overflow-hidden group border flex flex-col sm:flex-row transition-colors duration-300${
          promo.isHot
            ? " border-orange/40 hover:border-orange"
            : " border-white/8 hover:border-orange/30"
        }`}
      >
        {/* Image — wider on desktop */}
        <div className="relative h-[220px] sm:h-auto sm:w-[52%] shrink-0 overflow-hidden">
          <Image
            src={promo.photo}
            alt={promo.title}
            fill
            className="object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
            sizes="(max-width: 640px) 100vw, 52vw"
          />
          <div className="absolute top-4 left-4 bg-orange text-black font-condensed font-bold text-[10px] tracking-[1px] uppercase px-3 py-[5px] rounded-full">
            {promo.label}
          </div>
          {promo.isHot && (
            <div className="absolute bottom-4 left-4 bg-bg/70 backdrop-blur-sm border border-orange/30 text-orange font-condensed font-bold text-[10px] tracking-[1px] uppercase px-3 py-[4px] rounded-full">
              HOT PROMO
            </div>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-col justify-center p-7 sm:p-10">
          <h3 className="font-condensed font-black text-[clamp(22px,3vw,34px)] leading-tight mb-3">
            {promo.title}
          </h3>
          <p className="font-body text-[14px] text-text-2 leading-relaxed mb-6">
            {promo.description}
          </p>
          <div className="font-condensed font-bold text-[11px] tracking-[1.5px] uppercase text-orange">
            {promo.validInfo}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-bg-2 rounded-2xl overflow-hidden group border transition-colors duration-300${
        promo.isHot
          ? " border-orange/40 hover:border-orange"
          : " border-white/8 hover:border-orange/30"
      }`}
    >
      <div className="relative h-[190px] overflow-hidden">
        <Image
          src={promo.photo}
          alt={promo.title}
          fill
          className="object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-3 left-3 bg-orange text-black font-condensed font-bold text-[10px] tracking-[1px] uppercase px-3 py-[4px] rounded-full">
          {promo.label}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-condensed font-bold text-[18px] mb-2">
          {promo.title}
        </h3>
        <p className="font-body text-[13px] text-text-2 leading-relaxed mb-4">
          {promo.description}
        </p>
        <div className="font-condensed font-bold text-[11px] tracking-[1px] uppercase text-orange border-t border-border pt-4">
          {promo.validInfo}
        </div>
      </div>
    </div>
  );
}
