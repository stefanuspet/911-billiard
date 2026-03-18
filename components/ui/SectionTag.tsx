interface SectionTagProps {
  children: React.ReactNode;
}

export default function SectionTag({ children }: SectionTagProps) {
  return (
    <div className="flex items-center gap-2 font-condensed font-bold text-[11px] tracking-[4px] uppercase text-orange mb-3">
      <span className="block w-6 h-[2px] bg-orange flex-shrink-0" />
      {children}
    </div>
  );
}
