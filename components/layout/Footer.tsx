import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

const halamanLinks = [
  { href: "/cabang", label: "Cabang" },
  { href: "/merchandise", label: "Merchandise" },
  { href: "/franchise", label: "Franchise" },
  { href: "/promo", label: "Promo & Event" },
];

const infoLinks = [
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/kontak", label: "Kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-2 border-t border-border">
      <div className="max-w-[1140px] mx-auto px-10 pt-14 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2.5fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Col 1 — Brand */}
          <div>
            <div className="mb-3">
              <Image
                src="/images/logo/logo.png"
                alt="911 Billiard"
                width={140}
                height={62}
                className="object-contain"
              />
            </div>
            <p className="text-[13px] text-text-2 leading-[1.7] max-w-[260px] mb-6">
              The Largest Billiard Chain in Indonesia. Safe, comfort, dan fun di
              22+ zona seluruh Indonesia.
              <br />
              <br />
              Managed by Ayo Bangun Bangsa
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/911.billiard"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram 911 Billiard"
                className="flex items-center gap-2 text-text-2 hover:text-orange transition-colors duration-200"
              >
                <FaInstagram size={20} />
                <span className="font-condensed font-bold text-[11px] tracking-[1px] uppercase">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@911.billiard"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok 911 Billiard"
                className="flex items-center gap-2 text-text-2 hover:text-orange transition-colors duration-200"
              >
                <FaTiktok size={18} />
                <span className="font-condensed font-bold text-[11px] tracking-[1px] uppercase">TikTok</span>
              </a>
            </div>
          </div>

          {/* Col 2 — Halaman */}
          <div>
            <div className="font-condensed font-bold text-[11px] tracking-[3px] uppercase text-text-2 mb-4">
              Halaman
            </div>
            <ul className="list-none flex flex-col gap-2">
              {halamanLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-text-2 hover:text-orange transition-colors duration-200 no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Info */}
          <div>
            <div className="font-condensed font-bold text-[11px] tracking-[3px] uppercase text-text-2 mb-4">
              Info
            </div>
            <ul className="list-none flex flex-col gap-2">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-text-2 hover:text-orange transition-colors duration-200 no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.instagram.com/911.billiard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-text-2 hover:text-orange transition-colors duration-200 no-underline"
                >
                  @911.billiard
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Kontak */}
          <div>
            <div className="font-condensed font-bold text-[11px] tracking-[3px] uppercase text-text-2 mb-4">
              Kontak
            </div>
            <ul className="list-none flex flex-col gap-2">
              <li>
                <a
                  href="https://wa.me/6281990819911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-text-2 hover:text-orange transition-colors duration-200 no-underline"
                >
                  0819-9081-9911
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/911.billiard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-text-2 hover:text-orange transition-colors duration-200 no-underline"
                >
                  @911.billiard
                </a>
              </li>
              <li>
                <a
                  href="https://www.tokopedia.com/911billiard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-text-2 hover:text-orange transition-colors duration-200 no-underline"
                >
                  Tokopedia Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex justify-between items-center text-[12px] text-text-2">
          <span>© 2026 911 Billiard™ — All rights reserved</span>
          <span className="text-orange font-condensed font-bold tracking-[1px]">
            #IAM911BILLIARD
          </span>
        </div>
      </div>
    </footer>
  );
}
