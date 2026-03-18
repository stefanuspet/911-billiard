"use client";

import { useState } from "react";
import BranchCard from "@/components/branches/BranchCard";
import { branches } from "@/data/branches";

const cities = [
  "Semua",
  "Jakarta",
  "Tangerang",
  "Depok",
  "Yogyakarta",
  "Solo",
  "Pontianak",
  "Singkawang",
  "Balikpapan",
];

export default function CityFilter() {
  const [activeCity, setActiveCity] = useState("Semua");

  const filtered =
    activeCity === "Semua"
      ? branches
      : branches.filter((b) => b.city.includes(activeCity));

  return (
    <>
      {/* Filter buttons */}
      <div className="flex gap-[6px] flex-wrap mb-10">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setActiveCity(city)}
            className={`font-condensed font-bold text-[13px] tracking-[0.5px] px-[18px] py-[7px] border transition-colors duration-200 cursor-pointer ${
              activeCity === city
                ? "bg-orange text-black border-orange"
                : "bg-bg-3 text-text-2 border-border hover:bg-orange hover:text-black hover:border-orange"
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Branch grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border">
        {filtered.length > 0 ? (
          filtered.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))
        ) : (
          <p className="text-text-3 col-span-3 py-10 text-center font-condensed text-[15px]">
            Tidak ada cabang ditemukan.
          </p>
        )}
      </div>
    </>
  );
}
