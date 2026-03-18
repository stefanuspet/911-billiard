import Image from "next/image";

const galleryImages = [
  { src: "/images/random/rand1.png", alt: "Suasana meja billiard 911 Billiard" },
  { src: "/images/random/rand2.png", alt: "VIP Room 911 Billiard" },
  { src: "/images/random/rand3.png", alt: "Interior cabang 911 Billiard" },
  { src: "/images/random/rand4.png", alt: "Lounge area 911 Billiard" },
  { src: "/images/random/rand5.png", alt: "Fasilitas premium 911 Billiard" },
];

export default function GalleryStrip() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[2px] bg-border">
      {galleryImages.map((img) => (
        <div key={img.src} className="relative h-[180px] overflow-hidden group">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover brightness-[0.7] group-hover:brightness-100 transition-[filter] duration-300"
            sizes="(max-width: 768px) 50vw, 20vw"
          />
        </div>
      ))}
    </div>
  );
}
