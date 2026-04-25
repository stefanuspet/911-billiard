import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import SectionTag from "@/components/ui/SectionTag";
import {
  FaWhatsapp,
  FaInstagram,
  FaMusic,
  FaShoppingBag,
} from "react-icons/fa";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kontak 911 Billiard — Hubungi Kami",
  description:
    "Hubungi 911 Billiard via WhatsApp, Instagram, atau TikTok. Tim kami siap membantu informasi cabang, franchise, dan merchandise.",
  openGraph: {
    title: "Kontak 911 Billiard — Hubungi Kami",
    description:
      "Hubungi 911 Billiard via WhatsApp +62 819-9081-9911. Informasi cabang, franchise, dan merchandise.",
    images: ["/images/og-image.jpg"],
    siteName: "911 Billiard™",
    locale: "id_ID",
    type: "website",
  },
};

const contactItems: {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    label: "WhatsApp",
    value: "+62 819-9081-9911",
    href: "https://wa.me/6281990819911",
    icon: <FaWhatsapp />,
  },
  {
    label: "Instagram",
    value: "@911.billiard",
    href: "https://www.instagram.com/911.billiard",
    icon: <FaInstagram />,
  },
  {
    label: "TikTok",
    value: "@911.billiard",
    href: "https://www.tiktok.com/@911.billiard",
    icon: <FaMusic />,
  },
  {
    label: "Tokopedia",
    value: "911 Billiard Official Store",
    href: "https://www.tokopedia.com/911billiard",
    icon: <FaShoppingBag />,
  },
];

export default function KontakPage() {
  return (
    <main>
      <PageHeader
        tag="HUBUNGI KAMI"
        title="KONTAK"
        subtitle="Ada pertanyaan? Tim kami siap membantu via WhatsApp."
      />

      <div className="max-w-[1140px] mx-auto px-5 sm:px-10 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left — Contact info */}
          <div className="flex flex-col gap-4">
            <SectionTag>INFORMASI KONTAK</SectionTag>

            {/* Contact channel cards */}
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-2 border border-white/8 rounded-2xl p-5 flex items-center gap-4 hover:border-orange/30 group transition-colors duration-200"
              >
                <div className="w-11 h-11 bg-orange/10 border border-orange/20 rounded-xl flex items-center justify-center text-orange text-[18px] flex-shrink-0 group-hover:bg-orange/20 transition-colors duration-200">
                  {item.icon}
                </div>
                <div>
                  <div className="font-condensed font-bold text-[11px] tracking-[1.5px] uppercase text-text-3 mb-[2px]">
                    {item.label}
                  </div>
                  <div className="font-condensed font-bold text-[16px] group-hover:text-orange transition-colors duration-200">
                    {item.value}
                  </div>
                </div>
                <div className="ml-auto text-text-3 group-hover:text-orange transition-colors duration-200 text-[14px]">
                  →
                </div>
              </a>
            ))}

            {/* Jam operasional */}
            <div className="bg-bg-2 border border-white/8 rounded-2xl p-5">
              <div className="font-condensed font-bold text-[11px] tracking-[1.5px] uppercase text-text-3 mb-3">
                Jam Operasional CS
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-condensed font-bold text-[16px]">
                    Senin – Minggu
                  </div>
                  <div className="font-body text-[13px] text-text-2 mt-[2px]">
                    13.00 – 22.00 WIB
                  </div>
                </div>
                <div className="bg-orange/10 border border-orange/20 text-orange font-condensed font-bold text-[11px] tracking-[1px] uppercase px-3 py-[5px] rounded-full">
                  Buka Setiap Hari
                </div>
              </div>
            </div>

            {/* Managed by */}
            <div
              className="rounded-2xl p-5 border border-orange/20"
              style={{ background: "rgba(232,146,10,0.06)" }}
            >
              <div className="font-condensed font-bold text-[11px] tracking-[1.5px] uppercase text-text-3 mb-1">
                Dikelola Oleh
              </div>
              <div className="font-condensed font-bold text-[16px]">
                PT Ayo Bangun Bangsa
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-bg-2 border border-white/8 rounded-2xl p-6 sm:p-8">
            <SectionTag>KIRIM PESAN</SectionTag>
            <p className="font-body text-[13px] text-text-2 mb-6 mt-2">
              Isi form di bawah dan kami akan membalas via WhatsApp dalam
              1×24 jam.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
