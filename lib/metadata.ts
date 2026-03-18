import type { Metadata } from "next";

export const siteUrl = "https://911billiard.vercel.app";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "911 Billiard™ — Tempat Billiard Terbesar di Indonesia",
    template: "%s | 911 Billiard™",
  },
  description:
    "911 Billiard adalah jaringan billiard terbesar di Indonesia dengan 22+ zona aktif di Jakarta, Tangerang, Depok, Yogyakarta, Solo, Pontianak, Balikpapan, dan kota lainnya.",
  openGraph: {
    siteName: "911 Billiard™",
    locale: "id_ID",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
};

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "911 Billiard",
    url: siteUrl,
    logo: `${siteUrl}/images/og-image.jpg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-819-9081-9911",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.instagram.com/911.billiard",
      "https://www.tiktok.com/@911.billiard",
    ],
  };
}
