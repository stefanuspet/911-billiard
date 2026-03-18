import Image from "next/image";
import type { Branch } from "@/types";

interface BranchCardProps {
  branch: Branch;
}

export default function BranchCard({ branch }: BranchCardProps) {
  return (
    <div className="bg-bg-2 overflow-hidden cursor-pointer group hover:bg-bg-3 transition-colors">
      {/* Image */}
      <div className="relative h-[170px] overflow-hidden">
        <Image
          src={branch.photo ?? `https://picsum.photos/seed/branch-${branch.id}/800/600`}
          alt={`Suasana cabang 911 Billiard ${branch.name}`}
          fill
          className="object-cover brightness-75 group-hover:brightness-100 transition-[filter] duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="font-condensed font-bold text-[11px] tracking-[2px] uppercase text-orange mb-1">
          {branch.zone}
        </div>
        <div className="font-condensed font-bold text-[22px] leading-tight mb-1">
          {branch.name}
        </div>
        <div className="font-condensed font-bold text-[11px] tracking-[1px] uppercase text-orange mb-2">
          {branch.city}
        </div>
        <p className="font-body text-[12px] text-text-2 leading-relaxed mb-3">
          {branch.address}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between border-t border-border pt-3 mt-3">
          <div>
            <span className="font-bebas text-[20px] text-orange leading-none">
              {branch.tables}
            </span>
            <span className="font-body text-[11px] text-text-2 ml-1">
              MEJA
            </span>
          </div>
          <div className="flex gap-1 flex-wrap justify-end">
            {branch.tags.map((tag) => (
              <span
                key={tag}
                className={`font-condensed font-bold text-[10px] tracking-[0.5px] uppercase px-2 py-[2px] border ${
                  tag === "VIP Room"
                    ? "border-orange-3 text-orange"
                    : "border-border-2 text-text-2"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-[1px] mt-3">
          <a
            href={branch.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-bg-3 hover:bg-bg-4 border border-border-2 text-center font-condensed font-bold text-[11px] tracking-[1px] uppercase text-text-2 hover:text-orange py-[7px] transition-colors duration-200"
          >
            Google Maps
          </a>
          {branch.waNumber && (
            <a
              href={`https://wa.me/${branch.waNumber.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-bg-3 hover:bg-bg-4 border border-border-2 text-center font-condensed font-bold text-[11px] tracking-[1px] uppercase text-text-2 hover:text-orange py-[7px] transition-colors duration-200"
            >
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
