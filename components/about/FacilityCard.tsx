import type { ReactNode } from "react";

interface FacilityCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FacilityCard({
  icon,
  title,
  description,
}: FacilityCardProps) {
  return (
    <div className="bg-bg-2 border border-orange/15 rounded-2xl p-6 hover:border-orange/30 transition-colors duration-200">
      <div className="text-[28px] text-orange mb-3">{icon}</div>
      <div className="font-condensed font-bold text-[15px] text-text mb-2">
        {title}
      </div>
      <p className="font-body text-[13px] text-text-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
