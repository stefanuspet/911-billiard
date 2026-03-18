import BranchCard from "@/components/branches/BranchCard";
import Button from "@/components/ui/Button";
import SectionTag from "@/components/ui/SectionTag";
import { branches } from "@/data/branches";

const featuredBranches = branches.slice(0, 6);

export default function FeaturedBranches() {
  return (
    <section className="bg-bg-2 py-12 sm:py-20 px-5 sm:px-10">
      <div className="max-w-[1140px] mx-auto">
        <SectionTag>ZONA PILIHAN</SectionTag>
        <h2 className="font-bebas text-[clamp(38px,5vw,60px)] tracking-[1px] leading-none mb-2">
          CABANG TERPOPULER
        </h2>
        <p className="text-text-2 text-[15px] max-w-[520px] mb-12">
          Dari Tangerang hingga Balikpapan — temukan zona 911 terdekat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border">
          {featuredBranches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button href="/cabang" variant="outline">
            Lihat Semua 22+ Cabang →
          </Button>
        </div>
      </div>
    </section>
  );
}
