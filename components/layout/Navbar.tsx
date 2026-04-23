"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/cabang", label: "Cabang" },
  { href: "/merchandise", label: "Merchandise" },
  { href: "/franchise", label: "Franchise" },
  { href: "/promo", label: "Promo & Event" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border-2 bg-bg/[0.97] backdrop-blur-sm h-[64px] flex items-center justify-between px-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center no-underline"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/logo/logo.png"
            alt="911 Billiard"
            width={100}
            height={71}
            className="object-contain md:w-27.5 sm:w-40 h-auto"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-condensed font-medium text-[13px] tracking-[0.5px] transition-colors duration-200 no-underline ${
                  pathname === link.href
                    ? "text-orange"
                    : "text-text-2 hover:text-orange"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/cabang"
          className="hidden md:block bg-orange text-black font-condensed font-bold text-[14px] tracking-[1px] uppercase px-[22px] py-[9px] rounded-xl hover:bg-orange-2 transition-colors duration-200"
        >
          Cari Cabang
        </Link>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 bg-transparent border-0 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
        >
          <span
            className={`block w-6 h-[2px] bg-text transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-text transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-text transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-bg z-40 flex flex-col px-10 pt-[64px]">
          <ul className="list-none flex flex-col mt-10 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-condensed text-[28px] tracking-[2px] block py-2 no-underline transition-colors duration-200 ${
                    pathname === link.href ? "text-orange" : "text-text"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/cabang"
              onClick={() => setMenuOpen(false)}
              className="inline-block bg-orange text-black font-condensed font-bold text-[15px] tracking-[1px] uppercase px-[30px] py-[13px] rounded-xl hover:bg-orange-2 transition-colors duration-200"
            >
              Cari Cabang
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
