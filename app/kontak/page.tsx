import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/contact/ContactForm";

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

const contactItems = [
  {
    label: "WHATSAPP",
    value: "+62 819-9081-9911",
    href: "https://wa.me/6281990819911",
  },
  {
    label: "INSTAGRAM",
    value: "@911.billiard",
    href: "https://www.instagram.com/911.billiard",
  },
  {
    label: "TIKTOK",
    value: "@911.billiard",
    href: "https://www.tiktok.com/@911.billiard",
  },
  {
    label: "TOKOPEDIA",
    value: "911 Billiard Official Store",
    href: "https://www.tokopedia.com/911billiard",
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

      <div className="max-w-[1140px] mx-auto px-5 sm:px-10 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-border">
          {/* Left — Contact info */}
          <div className="bg-bg-2 p-6 sm:p-8 lg:p-10">
            <div className="font-condensed font-bold text-[11px] tracking-[4px] uppercase text-orange mb-6">
              INFORMASI KONTAK
            </div>

            <div className="space-y-6 mb-10">
              {contactItems.map((item) => (
                <div key={item.label}>
                  <div className="font-condensed font-bold text-[11px] tracking-[1.5px] uppercase text-text-3 mb-1">
                    {item.label}
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-condensed font-bold text-[15px] text-text hover:text-orange transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6">
              <div className="font-condensed font-bold text-[11px] tracking-[1.5px] uppercase text-text-3 mb-1">
                JAM OPERASIONAL CS
              </div>
              <div className="font-condensed font-bold text-[15px]">
                Senin – Minggu
              </div>
              <div className="font-body text-[13px] text-text-2">
                13.00 – 22.00 WIB
              </div>
            </div>

            <div className="border-t border-border pt-6 mt-6">
              <div className="font-condensed font-bold text-[11px] tracking-[1.5px] uppercase text-text-3 mb-1">
                MANAGED BY
              </div>
              <div className="font-condensed font-bold text-[15px]">
                PT Ayo Bangun Bangsa
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-bg-2 p-6 sm:p-8 lg:p-10">
            <div className="font-condensed font-bold text-[11px] tracking-[4px] uppercase text-orange mb-6">
              KIRIM PESAN
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
