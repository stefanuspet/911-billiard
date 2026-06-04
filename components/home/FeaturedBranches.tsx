import BranchCard from "@/components/branches/BranchCard";
import Button from "@/components/ui/Button";
import SectionTag from "@/components/ui/SectionTag";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_BRANCHES_QUERY } from "@/sanity/lib/queries";
import type { ALL_BRANCHES_QUERY_RESULT } from "@/sanity.types";

export default async function FeaturedBranches() {
  const { data: branches } = await sanityFetch({ query: ALL_BRANCHES_QUERY }) as { data: ALL_BRANCHES_QUERY_RESULT };
  const featuredBranches = branches.slice(0, 6);

  return (
    <section className="bg-bg py-16 sm:py-24 px-5 sm:px-10">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <SectionTag>ZONA PILIHAN</SectionTag>
            <h2 className="font-condensed font-black text-[clamp(36px,5vw,58px)] leading-none uppercase">
              Cabang <span className="text-orange">Terpopuler</span>
            </h2>
            <p className="font-body text-text-2 text-[14px] max-w-[420px] mt-3">
              Dari Tangerang hingga Balikpapan — temukan zona 911 terdekat.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button href="/cabang" variant="outline">
              Lihat Semua 22+ →
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredBranches.map((branch) => (
            <BranchCard key={branch._id} branch={branch} />
          ))}
        </div>
      </div>
    </section>
  );
}
