import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
}

const baseClass =
  "inline-block font-condensed font-bold text-[15px] tracking-[1px] uppercase px-[30px] py-[13px] rounded-none transition-colors duration-200 cursor-pointer";

const variantClass = {
  primary: "bg-orange text-black border-0 hover:bg-orange-2",
  outline:
    "bg-transparent text-text border border-border-2 hover:border-orange hover:text-orange",
};

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const classes = `${baseClass} ${variantClass[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
