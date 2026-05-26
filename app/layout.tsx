import { Barlow_Condensed, Nunito_Sans } from "next/font/google";
import ConditionalShell from "@/components/layout/ConditionalShell";
import { baseMetadata } from "@/lib/metadata";
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";

export { baseMetadata as metadata };

const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${barlowCondensed.variable} ${nunitoSans.variable}`}
    >
      <body>
        <ConditionalShell>{children}</ConditionalShell>
        <SanityLive />
      </body>
    </html>
  );
}
