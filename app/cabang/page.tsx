import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CityFilter from "@/components/branches/CityFilter";
import { branches } from "@/data/branches";

export const metadata: Metadata = {
  title: "Cabang 911 Billiard — 22+ Zona di Seluruh Indonesia",
  description:
    "Temukan cabang 911 Billiard terdekat di Jakarta, Tangerang, Depok, Yogyakarta, Solo, Pontianak, Singkawang, Balikpapan, dan kota lainnya.",
  openGraph: {
    title: "Cabang 911 Billiard — 22+ Zona di Seluruh Indonesia",
    description:
      "Temukan cabang 911 Billiard terdekat di kota Anda. 22+ zona aktif di seluruh Indonesia.",
    images: ["/images/og-image.jpg"],
    siteName: "911 Billiard™",
    locale: "id_ID",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Cabang 911 Billiard",
  numberOfItems: branches.length,
  itemListElement: branches.map((branch, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SportsActivityLocation",
      name: `911 Billiard ${branch.name}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: branch.address,
        addressLocality: branch.city,
        addressRegion: branch.province,
        addressCountry: "ID",
      },
      ...(branch.lat && branch.lng
        ? {
            geo: {
              "@type": "GeoCoordinates",
              latitude: branch.lat,
              longitude: branch.lng,
            },
          }
        : {}),
      openingHours: `Mo-Su ${branch.openHour}-${branch.closeHour}`,
      telephone: branch.waNumber ?? "+62-819-9081-9911",
      url: branch.mapsUrl,
    },
  })),
};

export default function CabangPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <main>
        <PageHeader
          tag="DIREKTORI ZONA"
          title="SEMUA CABANG"
          subtitle="Filter berdasarkan kota untuk menemukan zona 911 terdekat."
        />
        <div className="max-w-[1140px] mx-auto px-5 sm:px-10 pb-12 sm:pb-20">
          <CityFilter />
        </div>
      </main>
    </>
  );
}
