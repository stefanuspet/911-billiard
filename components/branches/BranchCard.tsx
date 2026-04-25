import Image from "next/image";
import type { Branch } from "@/types";

interface BranchCardProps {
  branch: Branch;
}

export default function BranchCard({ branch }: BranchCardProps) {
  return (
    <div className="bg-bg-2 border border-white/8 rounded-2xl overflow-hidden cursor-pointer group hover:border-orange/30 transition-colors duration-300">
      {/* Image */}
      <div className="relative h-[170px] overflow-hidden">
        <Image
          src={branch.photo ?? `https://picsum.photos/seed/branch-${branch.id}/800/600`}
          alt={`Suasana cabang 911 Billiard ${branch.name}`}
          fill
          className="object-cover brightness-75 group-hover:brightness-90 transition-[filter] duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(17,17,17,0.8) 100%)" }} />

        {/* Zone pill */}
        <div className="absolute top-3 left-3 bg-bg/75 backdrop-blur-sm border border-orange/30 text-orange font-body text-[10px] tracking-[1.5px] uppercase px-2 py-[3px] rounded-full">
          {branch.zone}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="font-condensed font-bold text-[22px] leading-tight mb-[2px]">
          {branch.name}
        </div>
        <div className="font-body text-[11px] tracking-[1px] uppercase text-text-3 mb-2">
          {branch.city}
        </div>
        <p className="font-body text-[12px] text-text-2 leading-relaxed mb-4">
          {branch.address}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline gap-1">
            <span className="font-condensed font-bold text-[22px] text-orange leading-none">
              {branch.tables}
            </span>
            <span className="font-body text-[11px] text-text-3">meja</span>
          </div>
          <div className="flex gap-1 flex-wrap justify-end">
            {branch.tags.map((tag) => (
              <span
                key={tag}
                className={`font-body text-[10px] px-2 py-[3px] rounded-full border ${
                  tag === "VIP Room"
                    ? "border-orange/30 text-orange bg-orange/8"
                    : "border-border-2 text-text-3"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <a
            href={branch.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-bg-3 hover:bg-bg-4 border border-border-2 hover:border-teal/40 text-center font-body text-[11px] text-text-2 hover:text-teal py-[7px] rounded-xl transition-colors duration-200"
          >
            Maps
          </a>
          {branch.waNumber && (
            <a
              href={`https://wa.me/${branch.waNumber.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-bg-3 hover:bg-bg-4 border border-border-2 hover:border-teal/40 text-center font-body text-[11px] text-text-2 hover:text-teal py-[7px] rounded-xl transition-colors duration-200"
            >
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
