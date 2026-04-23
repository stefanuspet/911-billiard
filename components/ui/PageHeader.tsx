import SectionTag from "@/components/ui/SectionTag";

interface PageHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ tag, title, subtitle }: PageHeaderProps) {
  return (
    <div className="max-w-[1140px] mx-auto px-5 sm:px-10 pt-16 sm:pt-20 pb-8 sm:pb-10">
      <SectionTag>{tag}</SectionTag>
      <h1 className="font-condensed text-[clamp(38px,5vw,60px)] tracking-[1px] leading-none mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-text-2 text-[15px] max-w-[520px] mt-3">{subtitle}</p>
      )}
    </div>
  );
}
