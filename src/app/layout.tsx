import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const sansFont = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Aasiya Khan Haute Couture | Luxury Bridal & Designer Wear",
  description:
    "Exquisite handcrafted bridal couture, royal lehengas, luxury pret, and bespoke festive ensembles by celebrity fashion designer Aasiya Khan.",
  keywords: [
    "Aasiya Khan",
    "Fashion Designer",
    "Bridal Couture",
    "Luxury Lehengas",
    "Haute Couture",
    "Bespoke Designer Wear",
    "Indian Luxury Fashion",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#0C0B0A] text-[#EDE7DE] selection:bg-[#C9A25D] selection:text-black">
        {children}
      </body>
    </html>
  );
}
