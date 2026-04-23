import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturedBranches from "@/components/home/FeaturedBranches";
import GalleryStrip from "@/components/home/GalleryStrip";
import WhySection from "@/components/home/WhySection";
import MemberSection from "@/components/home/MemberSection";
import FranchiseCTA from "@/components/home/FranchiseCTA";

export const metadata: Metadata = {
  title: "911 Billiard™ — the largest billiard chain in Indonesia",
  description:
    "911 Billiard adalah jaringan billiard terbesar di Indonesia dengan 22+ zona aktif di Jakarta, Tangerang, Depok, Yogyakarta, Solo, Pontianak, Singkawang, dan Balikpapan.",
  openGraph: {
    title: "911 Billiard™ — the largest billiard chain in Indonesia",
    description:
      "22+ zona aktif di seluruh Indonesia. VIP Room, Kaizen Tables, Carbon Fiber Cue, Lounge & Bar.",
    images: ["/images/og-image.jpg"],
    siteName: "911 Billiard™",
    locale: "id_ID",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "911 Billiard",
  url: "https://911billiard.vercel.app",
  logo: "https://911billiard.vercel.app/images/og-image.jpg",
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main>
        <HeroSection />
        <FeaturedBranches />
        <GalleryStrip />
        <WhySection />
        <MemberSection />
        <FranchiseCTA />
      </main>
    </>
  );
}
