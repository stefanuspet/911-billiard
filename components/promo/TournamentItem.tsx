import Image from "next/image";
import type { Tournament } from "@/types";

interface TournamentItemProps {
  tournament: Tournament;
}

export default function TournamentItem({ tournament }: TournamentItemProps) {
  return (
    <div className="bg-bg-2 flex items-center gap-[1px] group">
      {/* Thumbnail */}
      <div className="relative w-[80px] h-[80px] shrink-0 overflow-hidden">
        <Image
          src={tournament.photo}
          alt={tournament.name}
          fill
          className="object-cover brightness-75 group-hover:brightness-100 transition-[filter] duration-300"
          sizes="80px"
        />
      </div>

      {/* Date block */}
      <div className="bg-bg-3 w-[64px] h-[80px] shrink-0 flex flex-col items-center justify-center border-r border-border">
        <div className="font-bebas text-[28px] text-orange leading-none">
          {tournament.day}
        </div>
        <div className="font-condensed font-bold text-[11px] tracking-[1px] uppercase text-text-2">
          {tournament.month}
        </div>
        <div className="font-condensed text-[10px] text-text-3">
          {tournament.year}
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 px-5 py-4">
        <div className="font-condensed font-bold text-[15px] mb-1">
          {tournament.name}
        </div>
        <div className="font-body text-[12px] text-text-2 mb-2">
          {tournament.location}
        </div>
        <div className="font-condensed font-bold text-[11px] tracking-[1px] uppercase text-orange">
          Hadiah: {tournament.prize}
        </div>
      </div>
    </div>
  );
}
