import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Fatma Ezzahra Hadhri — Full-Stack & AI Developer",
  description:
    "Portfolio de Fatma Ezzahra Hadhri — développeuse full-stack, IA et automatisation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={spaceGrotesk.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
