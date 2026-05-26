import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative w-full aspect-video my-8 rounded-xl overflow-hidden">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt ?? ""}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="font-condensed font-black text-[clamp(22px,3vw,32px)] leading-tight mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-condensed font-bold text-[clamp(18px,2.5vw,24px)] leading-tight mt-8 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="font-body text-[15px] text-text-2 leading-[1.85] mb-5">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange pl-5 my-6 font-body text-[15px] text-text-2 italic leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-text">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange underline underline-offset-2 hover:text-orange-2 transition-colors"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside font-body text-[15px] text-text-2 leading-[1.85] mb-5 space-y-1 pl-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside font-body text-[15px] text-text-2 leading-[1.85] mb-5 space-y-1 pl-2">
        {children}
      </ol>
    ),
  },
};
