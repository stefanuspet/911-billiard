const pioneerItems = [
  "LED LAMP PIONEER IN JAKARTA",
  "OFFICIAL PUSLATCAB FOR ATHLETES",
  "FIRST TO PROVIDE BLACK CARBON FIBER CUES",
  "TOURNAMENT QUALITY BALL (DYNA SPHERES)",
  "FASTEST POOL GROWTH IN INDONESIA",
];

export default function PioneerStrip() {
  return (
    <div className="bg-orange py-4 px-5 sm:px-10 overflow-hidden">
      <div className="max-w-[1140px] mx-auto flex gap-x-10 gap-y-2 items-center flex-wrap">
        {pioneerItems.map((item) => (
          <div
            key={item}
            className="font-condensed font-bold text-[13px] tracking-[1px] text-black flex items-center gap-2 whitespace-nowrap"
          >
            <span className="text-[10px]">★</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
