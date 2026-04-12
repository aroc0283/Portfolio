import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-block",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Austin R — Community & Social Management",
  description:
    "Community manager and social strategist who builds the tools he wishes existed. Working at the intersection of social intelligence, AI tooling, and community systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable} ${bebasNeue.variable}`}>
      <body style={{ fontFamily: "var(--font-body), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
