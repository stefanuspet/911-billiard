import Image from "next/image";

const galleryImages = [
  {
    src: "/images/random/rand1.png",
    alt: "Suasana meja billiard 911 Billiard",
  },
  { src: "/images/random/rand2.png", alt: "VIP Room 911 Billiard" },
  { src: "/images/random/rand3.png", alt: "Interior cabang 911 Billiard" },
  { src: "/images/random/rand4.png", alt: "Lounge area 911 Billiard" },
  { src: "/images/random/rand5.png", alt: "Fasilitas premium 911 Billiard" },
];

export default function GalleryStrip() {
  return (
    <div className="bg-bg px-5 sm:px-10 pb-16">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "col-span-2 sm:col-span-1 h-[160px]" : "h-[160px]"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover brightness-[0.65] group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 rounded-2xl border border-white/8 group-hover:border-teal/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
