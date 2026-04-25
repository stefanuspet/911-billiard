import MerchCard from "@/components/merchandise/MerchCard";
import { merchandise } from "@/data/merchandise";

export default function MerchGrid() {
  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {merchandise.map((item) => (
          <MerchCard key={item.id} item={item} />
        ))}
      </div>

      {/* Tokopedia Banner */}
      <div
        className="rounded-2xl border border-orange/20 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ background: "rgba(232,146,10,0.06)" }}
      >
        <div>
          <div className="font-body text-[11px] tracking-[2px] text-orange uppercase mb-1">
            Official Store
          </div>
          <div className="font-condensed font-black text-[22px] leading-tight">
            Temukan Semua Produk di{" "}
            <span className="text-orange">Tokopedia</span>
          </div>
        </div>
        <a
          href="https://www.tokopedia.com/911billiard"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-orange text-black font-condensed font-bold text-[13px] tracking-[1px] uppercase px-8 py-[11px] rounded-xl hover:bg-orange-2 transition-colors duration-200"
        >
          Kunjungi Toko →
        </a>
      </div>
    </>
  );
}
