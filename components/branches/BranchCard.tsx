import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { ALL_BRANCHES_QUERY_RESULT } from "@/sanity.types";

type Branch = ALL_BRANCHES_QUERY_RESULT[number] & { slug?: string | null };

export default function BranchCard({ branch }: { branch: Branch }) {
  const href = branch.slug ? `/cabang/${branch.slug}` : null;

  return (
    <div className="relative bg-bg-2 border border-white/8 rounded-2xl overflow-hidden group hover:border-orange/30 transition-colors duration-300">
      {/* Stretched link covers the whole card — no nested <a> */}
      {href && (
        <Link
          href={href}
          className="absolute inset-0 z-0"
          aria-label={`Lihat detail cabang ${branch.name}`}
        />
      )}

      {/* Image */}
      <div className="relative h-[170px] overflow-hidden">
        <Image
          src={
            branch.photo
              ? urlFor(branch.photo).width(800).height(500).url()
              : `https://picsum.photos/seed/branch-${branch._id}/800/600`
          }
          alt={`Suasana cabang 911 Billiard ${branch.name ?? ""}`}
          fill
          className="object-cover brightness-75 group-hover:brightness-90 transition-[filter] duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 50%, rgba(17,17,17,0.8) 100%)",
          }}
        />
        <div className="absolute top-3 left-3 z-10 bg-bg/75 backdrop-blur-sm border border-orange/30 text-orange font-body text-[10px] tracking-[1.5px] uppercase px-2 py-[3px] rounded-full">
          {branch.city}
        </div>
        {href && (
          <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="bg-orange text-black font-body text-[10px] font-semibold px-2.5 py-1 rounded-full">
              Lihat Detail →
            </span>
          </div>
        )}
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
            {(branch.tags ?? []).map((tag) => (
              <span
                key={tag}
                className="font-body text-[10px] px-2 py-[3px] rounded-full border border-white/12 text-text-3"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons — z-10 so they sit above the stretched link */}
        <div className="relative z-10 flex gap-2">
          <a
            href={branch.mapsUrl ?? undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-bg-3 hover:bg-bg-4 border border-border-2 hover:border-teal/40 text-center font-body text-[11px] text-text-2 hover:text-teal py-[7px] rounded-xl transition-colors duration-200"
          >
            Maps
          </a>
          {href && (
            <Link
              href={href}
              className="flex-1 bg-bg-3 hover:bg-orange/10 border border-border-2 hover:border-orange/30 text-center font-body text-[11px] text-text-2 hover:text-orange py-[7px] rounded-xl transition-colors duration-200"
            >
              Detail & Menu
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
