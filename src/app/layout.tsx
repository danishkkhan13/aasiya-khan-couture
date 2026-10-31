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
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Aasiya Khan Haute Couture | Luxury Women's Bridal Atelier",
  description:
    "Exquisite handcrafted bridal lehengas, royal festive shararas, luxury pret, and bespoke ensembles for women by fashion designer Aasiya Khan.",
  keywords: [
    "Aasiya Khan",
    "Fashion Designer",
    "Bridal Couture",
    "Luxury Lehengas",
    "Women Designer Wear",
    "Manish Malhotra Style",
    "Bespoke Bridal Wear",
    "Fatima Boutique",
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
      <body className="min-h-screen bg-[#FAF8F5] text-[#1A1816] selection:bg-[#C5A059] selection:text-white">
        {children}
      </body>
    </html>
  );
}
