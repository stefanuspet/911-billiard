import type { Metadata } from "next";
import Image from "next/image";
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
        <div className="relative overflow-hidden">
          <PageHeader
            tag="DIREKTORI ZONA"
            title="SEMUA CABANG"
            subtitle="Filter berdasarkan kota untuk menemukan zona 911 terdekat."
          />
          <div className="absolute right-10 bottom-0 hidden lg:block pointer-events-none">
            <Image
              src="/images/maskot/maskot_2.png"
              alt=""
              width={180}
              height={180}
              className="object-contain"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="max-w-[1140px] mx-auto px-5 sm:px-10 pb-12 sm:pb-20">
          <CityFilter />
        </div>

        {/* Bottom CTA Banner */}
        <div className="px-5 sm:px-10 pb-16 sm:pb-24">
          <div className="max-w-[1140px] mx-auto">
            <div className="relative rounded-3xl overflow-hidden min-h-[320px] flex items-center">
              {/* Background image */}
              <Image
                src="/images/hero/hero.jpg"
                alt=""
                fill
                className="object-cover brightness-[0.35]"
                sizes="100vw"
                aria-hidden="true"
              />

              {/* Orange glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 25% 50%, rgba(232,146,10,0.22) 0%, transparent 60%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 px-8 sm:px-14 py-12 max-w-[580px]">
                <div className="font-condensed font-bold text-[11px] tracking-[3px] uppercase text-orange mb-3">
                  BELUM NEMUIN YANG PAS?
                </div>
                <h2 className="font-condensed font-black text-[clamp(28px,4vw,52px)] leading-none mb-4">
                  Zona Baru Terus{" "}
                  <span className="text-orange">Bertambah</span>
                </h2>
                <p className="font-body text-text-2 text-[14px] max-w-[380px] mb-8 leading-[1.8]">
                  Tidak menemukan cabang di kotamu? Hubungi kami — tim 911
                  Billiard siap bantu dan update info zona terbaru.
                </p>
                <a
                  href="https://wa.me/6281990819911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange text-black font-condensed font-bold text-[13px] tracking-[1px] uppercase px-8 py-[12px] rounded-xl hover:bg-orange-2 transition-colors duration-200"
                >
                  Tanya via WhatsApp →
                </a>
              </div>

              {/* Mascot */}
              <div className="absolute right-8 bottom-0 hidden lg:block pointer-events-none z-10">
                <Image
                  src="/images/maskot/maskot_3.png"
                  alt=""
                  width={260}
                  height={362}
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
