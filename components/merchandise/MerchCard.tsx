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
    <div className="bg-bg-2 overflow-hidden cursor-pointer group hover:bg-bg-3 transition-colors">
      {/* Image */}
      <div className="relative h-[210px] overflow-hidden">
        <Image
          src={item.photo}
          alt={item.name}
          fill
          className="object-cover brightness-[0.85] group-hover:brightness-100 transition-[filter] duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {item.badge && (
          <div className="absolute top-0 left-0 bg-orange text-black font-condensed font-bold text-[11px] tracking-[1px] px-3 py-1">
            {item.badge}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="font-condensed font-bold text-[14px] mb-2">
          {item.name}
        </div>
        <div className="font-bebas text-[22px] text-orange leading-none">
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
          className="block w-full mt-4 bg-transparent border border-border-2 text-text-2 font-condensed font-bold text-[13px] tracking-[1px] uppercase py-[9px] text-center hover:bg-orange hover:text-black hover:border-orange transition-colors duration-200"
        >
          Beli → Tokopedia
        </a>
      </div>
    </div>
  );
}
