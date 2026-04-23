interface SectionTagProps {
  children: React.ReactNode;
}

export default function SectionTag({ children }: SectionTagProps) {
  return (
    <div
      className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 text-teal font-body text-[11px] tracking-[2.5px] uppercase      
         px-3 py-[5px] rounded-full mb-5"
    >
      <span className="w-[5px] h-[5px] rounded-full bg-teal flex-shrink-0" />
      {children}
    </div>
  );
}
