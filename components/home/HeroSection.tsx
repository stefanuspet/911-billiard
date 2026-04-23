import Button from "@/components/ui/Button";
import { FaCrown, FaStar, FaCircle } from "react-icons/fa";
import { MdLocationOn, MdPeople } from "react-icons/md";
import { IoSparkles } from "react-icons/io5";

const stats = [
  { icon: MdLocationOn, label: "Zona Aktif", value: "22+", color: "teal" },
  { icon: MdPeople, label: "Members", value: "7K+", color: "orange" },
  { icon: FaCrown, label: "VIP Rooms", value: "15+", color: "teal" },
  { icon: FaStar, label: "Rating", value: "4.9", color: "orange" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[93vh] flex items-center overflow-hidden bg-bg-2">
      {/* Background glows */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 15% 50%, rgba(232,146,10,0.08) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(0,180,200,0.10) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(0,180,200,0.06) 0%, transparent 45%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1140px] mx-auto px-5 sm:px-10 py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* LEFT — Text content */}
        <div className="flex-1 lg:max-w-[480px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 text-teal font-body text-[11px] tracking-[2.5px] uppercase px-4 py-[6px] rounded-full mb-7">
            <IoSparkles size={11} />
            The Largest Billiard Chain in Indonesia
          </div>

          {/* Heading */}
          <h1 className="font-condensed font-black text-[clamp(56px,7.5vw,96px)] leading-[0.88] mb-6 uppercase">
            Play
            <span className="text-orange block">Your</span>
            <span className="text-teal block">Game.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-[15px] text-text-2 max-w-[400px] mb-10 leading-[1.85]">
            Tempat billiard terbaik dengan fasilitas premium, VIP room, dan cafe
            — tersebar di 22+ zona di seluruh Indonesia.
          </p>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap">
            <Button href="/cabang" variant="primary">
              Find a Branch
            </Button>
            <Button href="/franchise" variant="outline">
              Franchise
            </Button>
          </div>

          {/* Mini rating row */}
          <div className="flex items-center gap-3 mt-8">
            <div className="flex gap-[3px]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={13} className="text-orange" />
              ))}
            </div>
            <span className="font-body text-[12px] text-text-2">
              <span className="text-text font-semibold">7,000+</span> members
              aktif
            </span>
          </div>
        </div>

        {/* RIGHT — Featured Card */}
        <div className="flex-1 w-full max-w-[480px] lg:max-w-none">
          {/* Main card */}
          <div
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Photo area */}
            <div
              className="relative w-full"
              style={{
                paddingTop: "55%",
                backgroundImage: "url('/images/hero/hero.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
              }}
            >
              {/* Gradient fade to card bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(17,17,17,0) 40%, rgba(17,17,17,0.95) 100%)",
                }}
              />

              {/* Live badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-bg/80 backdrop-blur-md border border-teal/30 text-teal font-body text-[11px] tracking-[1.5px] uppercase px-3 py-[5px] rounded-full">
                <span className="w-[6px] h-[6px] rounded-full bg-teal inline-block" />
                Open Now
              </div>

              {/* VIP pill */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-orange/20 backdrop-blur-md border border-orange/30 text-orange font-body text-[11px] tracking-[1px] uppercase px-3 py-[5px] rounded-full">
                <FaCrown size={10} />
                VIP Available
              </div>
            </div>

            {/* Card bottom — stats grid */}
            <div className="p-5">
              <div className="grid grid-cols-4 gap-2">
                {stats.map(({ icon: Icon, label, value, color }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1 rounded-2xl py-3 px-2"
                    style={{
                      background:
                        color === "teal"
                          ? "rgba(0,180,200,0.08)"
                          : "rgba(232,146,10,0.08)",
                      border:
                        color === "teal"
                          ? "1px solid rgba(0,180,200,0.2)"
                          : "1px solid rgba(232,146,10,0.2)",
                    }}
                  >
                    <Icon
                      size={16}
                      className={color === "teal" ? "text-teal" : "text-orange"}
                    />
                    <span
                      className={`font-condensed font-black text-[20px] leading-none ${color === "teal" ? "text-teal" : "text-orange"}`}
                    >
                      {value}
                    </span>
                    <span className="font-body text-[9px] text-text-3 text-center leading-tight">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom row */}
              <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex items-center gap-2">
                  <FaCircle size={10} className="text-teal" />
                  <span className="font-body text-[12px] text-text-2">
                    Kaizen Tables · Carbon Fiber Cue
                  </span>
                </div>
                <span className="font-body text-[11px] text-text-3">
                  911 Billiard™
                </span>
              </div>
            </div>
          </div>

          {/* Floating tags below card */}
          <div className="flex gap-3 mt-4 justify-end flex-wrap">
            {["Lounge & Bar", "AC 24 Jam", "Free Parking"].map((tag) => (
              <span
                key={tag}
                className="font-body text-[11px] text-text-2 bg-bg-3 border border-border rounded-full px-3 py-[5px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
