import SectionTag from "@/components/ui/SectionTag";

interface PageHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ tag, title, subtitle }: PageHeaderProps) {
  return (
    <div
      className="relative bg-bg-2 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 80% 50%, rgba(232,146,10,0.07) 0%, transparent 55%), radial-gradient(ellipse at 10% 50%, rgba(232,146,10,0.04) 0%, transparent 50%)",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-5 sm:px-10 pt-16 sm:pt-20 pb-10 sm:pb-12">
        <SectionTag>{tag}</SectionTag>
        <h1 className="font-condensed font-black text-[clamp(40px,6vw,72px)] leading-none uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-text-2 text-[14px] max-w-[480px] mt-4 leading-[1.8]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
