import MerchCard from "@/components/merchandise/MerchCard";
import { merchandise } from "@/data/merchandise";

export default function MerchGrid() {
  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border mb-[1px]">
        {merchandise.map((item) => (
          <MerchCard key={item.id} item={item} />
        ))}
      </div>

      {/* Tokopedia Banner */}
      <div className="bg-bg-2 border border-border px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-[1px]">
        <div>
          <div className="font-condensed font-bold text-[13px] tracking-[1px] text-text-2 uppercase mb-1">
            Official Store
          </div>
          <div className="font-bebas text-[22px] leading-none">
            TEMUKAN SEMUA PRODUK DI TOKOPEDIA
          </div>
        </div>
        <a
          href="https://www.tokopedia.com/911billiard"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-orange text-black font-condensed font-bold text-[13px] tracking-[1px] uppercase px-8 py-[10px] hover:bg-orange-2 transition-colors duration-200"
        >
          Kunjungi Toko →
        </a>
      </div>
    </>
  );
}
