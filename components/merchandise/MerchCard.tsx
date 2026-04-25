import Image from "next/image";
import type { MerchItem } from "@/types";

interface MerchCardProps {
  item: MerchItem;
}

function formatPrice(price: number) {
  return "Rp " + price.toLocaleString("id-ID");
}

export default function MerchCard({ item }: MerchCardProps) {
  return (
    <div className="bg-bg-2 border border-white/8 rounded-2xl overflow-hidden cursor-pointer group hover:border-orange/30 transition-colors duration-300">
      {/* Image */}
      <div className="relative h-[210px] overflow-hidden">
        <Image
          src={item.photo}
          alt={item.name}
          fill
          className="object-cover brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {item.badge && (
          <div className="absolute top-3 left-3 bg-orange text-black font-body font-semibold text-[10px] tracking-[1px] uppercase px-3 py-[4px] rounded-full">
            {item.badge}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="font-condensed font-bold text-[15px] mb-2 leading-tight">
          {item.name}
        </div>
        <div className="font-condensed font-black text-[22px] text-orange leading-none mb-4">
          {formatPrice(item.price)}
          {item.originalPrice && (
            <span className="font-body text-[13px] text-text-3 line-through ml-2">
              {formatPrice(item.originalPrice)}
            </span>
          )}
        </div>
        <a
          href={item.tokopediaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-bg-3 border border-border-2 text-text-2 font-body text-[12px] uppercase py-[9px] text-center rounded-xl hover:bg-orange hover:text-black hover:border-orange transition-colors duration-200"
        >
          Beli di Tokopedia →
        </a>
      </div>
    </div>
  );
}
