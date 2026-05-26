import PackageCard from "@/components/franchise/PackageCard";
import SectionTag from "@/components/ui/SectionTag";
import { client } from "@/sanity/lib/client";
import { ALL_FRANCHISE_PACKAGES_QUERY } from "@/sanity/lib/queries";
import type { ALL_FRANCHISE_PACKAGES_QUERY_RESULT } from "@/sanity.types";

export default async function PackageGrid() {
  const packages: ALL_FRANCHISE_PACKAGES_QUERY_RESULT = await client.fetch(ALL_FRANCHISE_PACKAGES_QUERY);

  return (
    <section className="bg-bg px-5 sm:px-10 py-14 sm:py-20">
      <div className="max-w-[1140px] mx-auto">
        <div className="mb-10">
          <SectionTag>PAKET FRANCHISE</SectionTag>
          <h2 className="font-condensed font-black text-[clamp(32px,4vw,52px)] leading-none mt-2">
            Paket <span className="text-orange">Franchise Kami</span>
          </h2>
          <p className="font-body text-text-2 text-[14px] mt-4 max-w-[480px] leading-[1.8]">
            Satu paket komprehensif dengan dukungan penuh dari franchisor —
            termasuk lisensi brand, renovasi, training staff, dan marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg._id} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
