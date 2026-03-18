import type { Promo } from "@/types";

export const promos: Promo[] = [
  {
    id: "ladies-free",
    label: "PROMO",
    isHot: true,
    title: "Ladies Free Every Day",
    description:
      "Wanita bermain GRATIS setiap hari di semua cabang 911 Billiard. Cukup tunjukkan KTP dan nikmati sesi bermain tanpa biaya.",
    validInfo: "Berlaku setiap hari • Semua cabang",
    photo: "https://picsum.photos/seed/promo-ladies/800/600",
  },
  {
    id: "single-free",
    label: "PROMO",
    isHot: true,
    title: "Single Free Monday–Friday",
    description:
      "Bermain solo di hari kerja? Gratis! Promo single free berlaku Senin–Jumat untuk semua member 911 Billiard.",
    validInfo: "Berlaku Senin–Jumat • Member 911 Billiard",
    photo: "https://picsum.photos/seed/promo-single/800/600",
  },
  {
    id: "tournament-series",
    label: "EVENT",
    isHot: false,
    title: "911 Series Tournament 2025",
    description:
      "Turnamen billiard resmi 911 Series hadir di berbagai kota. Total hadiah jutaan rupiah untuk juara 1, 2, dan 3.",
    validInfo: "Jadwal menyusul • Berbagai kota",
    photo: "https://picsum.photos/seed/promo-tournament/800/600",
  },
];
