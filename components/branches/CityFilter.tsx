"use client";

import { useState } from "react";
import BranchCard from "@/components/branches/BranchCard";
import type { ALL_BRANCHES_QUERY_RESULT } from "@/sanity.types";

interface CityFilterProps {
  branches: ALL_BRANCHES_QUERY_RESULT;
}

export default function CityFilter({ branches }: CityFilterProps) {
  const [activeCity, setActiveCity] = useState("Semua");

  const cities = [
    "Semua",
    ...Array.from(new Set(branches.map((b) => b.city).filter((c): c is string => !!c))).sort(),
  ];

  const filtered =
    activeCity === "Semua"
      ? branches
      : branches.filter((b) => b.city?.includes(activeCity));

  return (
    <>
      {/* Filter pills */}
      <div className="flex gap-2 flex-wrap mb-10">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setActiveCity(city)}
            className={`font-body text-[12px] tracking-[0.5px] px-4 py-[7px] rounded-full border transition-colors duration-200 cursor-pointer ${
              activeCity === city
                ? "bg-orange text-black border-orange font-semibold"
                : "bg-bg-3 text-text-2 border-border hover:border-orange/50 hover:text-orange"
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Branch grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.length > 0 ? (
          filtered.map((branch) => (
            <BranchCard key={branch._id} branch={branch} />
          ))
        ) : (
          <p className="text-text-3 col-span-3 py-16 text-center font-body text-[14px]">
            Tidak ada cabang ditemukan.
          </p>
        )}
      </div>
    </>
  );
}
