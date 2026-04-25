import Image from "next/image";
import type { Tournament } from "@/types";

interface TournamentItemProps {
  tournament: Tournament;
}

export default function TournamentItem({ tournament }: TournamentItemProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden group min-h-[260px] flex flex-col justify-between">
      {/* Background photo */}
      <Image
        src={tournament.photo}
        alt={tournament.name}
        fill
        className="object-cover brightness-[0.3] group-hover:brightness-[0.4] group-hover:scale-105 transition-all duration-500"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />

      {/* Orange glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 80%, rgba(232,146,10,0.18) 0%, transparent 60%)",
        }}
      />

      {/* Date badge — top left */}
      <div className="relative z-10 m-5 self-start">
        <div className="bg-orange text-black rounded-2xl px-4 py-3 text-center min-w-[56px]">
          <div className="font-condensed font-black text-[32px] leading-none">
            {tournament.day}
          </div>
          <div className="font-condensed font-bold text-[11px] tracking-[1px] uppercase">
            {tournament.month}
          </div>
          <div className="font-condensed text-[10px] opacity-70">
            {tournament.year}
          </div>
        </div>
      </div>

      {/* Info — bottom */}
      <div className="relative z-10 p-5 pt-0">
        <div className="font-condensed font-black text-[18px] leading-tight mb-1">
          {tournament.name}
        </div>
        <div className="font-body text-[12px] text-text-2 mb-3">
          {tournament.location}
        </div>
        <div className="inline-flex items-center gap-2 bg-orange/15 border border-orange/30 text-orange font-condensed font-bold text-[11px] tracking-[1px] uppercase px-3 py-[5px] rounded-full">
          🏆 Hadiah: {tournament.prize}
        </div>
      </div>
    </div>
  );
}
