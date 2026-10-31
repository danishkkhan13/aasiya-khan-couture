"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Send,
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Crown,
  Heart,
  ShieldCheck,
  Truck,
  Scissors,
} from "lucide-react";

const DESIGNER_NAME = "Aasiya Khan";
const BRAND_TAGLINE = "HAUTE COUTURE & BRIDAL ATELIER";
// Replace with the client's actual WhatsApp number (country code + number, e.g. 919876543210)
const WHATSAPP_NUMBER = "919876543210";
const ATELIER_LOCATION = "Mumbai • Delhi • Dubai (By Appointment Only)";
const ATELIER_EMAIL = "aasiyakhan.couture@gmail.com";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Curated Women's Luxury Haute Couture Collection
const COLLECTIONS = [
  {
    id: 1,
    title: "Gul-e-Noor Crimson Bridal Lehenga",
    category: "Bridal Couture",
    craft: "Antique dabka, handcrafted zardozi & micro pearls on pure raw silk",
    price: "Price on Request",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    tag: "Masterpiece",
  },
  {
    id: 2,
    title: "Mehtab Ivory & Champagne Trousseau",
    category: "Bridal Couture",
    craft: "Mulberry silk with gold cutdana and double-drape scalloped organza dupatta",
    price: "Bespoke Made-to-Order",
    image:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    tag: "Signature Bridal",
  },
  {
    id: 3,
    title: "Zafirah Royal Emerald Velvet Farshi",
    category: "Festive & Shararas",
    craft: "Heirloom Kashmiri aari and silver tilla work on deep midnight velvet",
    price: "Custom Bespoke",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=80",
    tag: "Royal Festive",
  },
  {
    id: 4,
    title: "Mumtaz Handwoven Banarasi Brocade",
    category: "Festive & Shararas",
    craft: "Vintage Mughal floral jaal with handcrafted kardana borders",
    price: "Price on Request",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80",
    tag: "Heirloom Edition",
  },
  {
    id: 5,
    title: "Aura Rose Gold Sculpted Gown",
    category: "Reception Gowns",
    craft: "Corseted bodice embellished with Swarovski crystals & French tulle flare",
    price: "Bespoke Fitting",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80",
    tag: "Reception Luxe",
  },
  {
    id: 6,
    title: "Firozi Jashn Kalidar & Dupatta",
    category: "Luxury Pret",
    craft: "Fine gota patti threadwork & resham embroidery on pure silk chanderi",
    price: "Made-to-Measure",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80",
    tag: "Mehendi & Sangeet",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const filteredCollections =
    selectedCategory === "All"
      ? COLLECTIONS
      : COLLECTIONS.filter((item) => item.category === selectedCategory);

  function getWhatsAppLink(customText?: string) {
    const text = customText
      ? encodeURIComponent(customText)
      : encodeURIComponent(
          `Hello Aasiya Khan Atelier, I would like to inquire about your women's bespoke bridal and couture designs.`
        );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_FREE_WEB3FORMS_KEY");
    formData.append("subject", `New Bridal Inquiry for ${DESIGNER_NAME}`);

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setFormStatus("success");
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1B18]">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <aside
        aria-label="Announcement"
        className="bg-[#1C1A18] text-[#E8D7B8] text-[11px] uppercase tracking-[0.25em] py-2.5 px-4 text-center font-medium"
      >
        <span>Women&apos;s Bespoke Bridal Season Open &bull; Worldwide Shipping &bull; Private Atelier Fittings</span>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 underline text-[#E8D7B8] hover:text-white transition inline-flex items-center gap-1 font-semibold"
        >
          Book on WhatsApp <ArrowRight className="w-3 h-3" />
        </a>
      </aside>

      {/* 2. LUXURY BOUTIQUE HEADER */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE3D6] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex flex-col items-start group">
            <span className="font-editorial text-2xl md:text-3xl tracking-[0.25em] font-semibold text-[#1A1816] group-hover:text-[#9E7D3B] transition">
              {DESIGNER_NAME.toUpperCase()}
            </span>
            <span className="text-[9px] tracking-[0.4em] text-[#8C7A5E] font-medium uppercase">
              {BRAND_TAGLINE}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase font-medium text-[#4A443C]">
            <a href="#collections" className="hover:text-[#9E7D3B] transition">
              Collections
            </a>
            <a href="#about" className="hover:text-[#9E7D3B] transition">
              The Designer
            </a>
            <a href="#services" className="hover:text-[#9E7D3B] transition">
              Women&apos;s Couture
            </a>
            <a href="#contact" className="hover:text-[#9E7D3B] transition">
              Bespoke Fitting
            </a>
          </nav>

          {/* WhatsApp Direct Header Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F8246] hover:bg-[#186a38] text-white transition duration-300 text-xs tracking-[0.15em] uppercase font-medium shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              WhatsApp Atelier
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1A1816] p-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-b border-[#EAE3D6] px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-xs tracking-[0.2em] uppercase text-[#4A443C] font-medium">
              <a
                href="#collections"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#9E7D3B] py-1"
              >
                Collections
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#9E7D3B] py-1"
              >
                The Designer
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#9E7D3B] py-1"
              >
                Women&apos;s Couture
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#9E7D3B] py-1"
              >
                Bespoke Fitting
              </a>
            </nav>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#1F8246] text-white text-xs font-semibold uppercase tracking-widest"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Chat on WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO EDITORIAL SHOWCASE */}
      <section className="relative bg-[#F3EEE6] border-b border-[#E8DFCFC] py-20 md:py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D5C5A8] bg-[#FAF8F5] text-[#9E7D3B] text-[11px] tracking-[0.3em] uppercase font-semibold">
              <Crown className="w-3.5 h-3.5" />
              Women&apos;s Haute Couture &amp; Bridal Studio
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#1A1816] leading-[1.1]">
              Heirloom Bridal Ensembles for the{" "}
              <span className="italic text-[#9E7D3B] font-normal">
                Modern Royal Bride
              </span>
            </h1>

            <p className="max-w-xl text-sm sm:text-base text-[#61584D] font-light leading-relaxed">
              Hand-embroidered zardozi, antique tilla, and molten silk creations curated
              with precision by couturier <strong className="font-medium text-[#1A1816]">{DESIGNER_NAME}</strong>.
              Crafted exclusively for women who demand unmatched haute couture luxury.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#collections"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1A1816] hover:bg-[#332F2B] text-white font-semibold text-xs tracking-[0.2em] uppercase transition shadow-md"
              >
                Explore Bridal Collection
              </a>
              <a
                href={getWhatsAppLink("Hello Aasiya Khan, I would like to book a private bridal consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1F8246] hover:bg-[#186a38] text-white font-semibold text-xs tracking-[0.15em] uppercase transition shadow-md inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                WhatsApp Consultation
              </a>
            </div>

            {/* Value Indicators */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-[#DFD5C4] text-left">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C7A5E]">Karigari</p>
                <p className="font-editorial text-lg text-[#1A1816]">100% Handcrafted</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C7A5E]">Fitting</p>
                <p className="font-editorial text-lg text-[#1A1816]">Made-to-Measure</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C7A5E]">Delivery</p>
                <p className="font-editorial text-lg text-[#1A1816]">Worldwide Courier</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#D5C5A8] shadow-2xl bg-white">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85"
                alt="Aasiya Khan Bridal Masterpiece"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-[#E0D7C9] p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-2 text-[#9E7D3B]">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Bespoke Bridal</span>
              </div>
              <p className="font-editorial text-xl text-[#1A1816] mt-1">Gul-e-Noor Velvet Lehenga</p>
              <p className="text-[11px] text-[#7A6F62] mt-0.5">Over 200 hours of zardozi artisanship</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE COUTURE COLLECTION LOOKBOOK (FATIMA BOUTIQUE & MANISH MALHOTRA STYLE) */}
      <section id="collections" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#E8DFCFC] pb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#9E7D3B] block mb-2 font-semibold">
              Curated Masterpieces
            </span>
            <h2 className="font-editorial text-3xl md:text-5xl font-light text-[#1A1816]">
              Women&apos;s Haute Couture
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
            {["All", "Bridal Couture", "Festive & Shararas", "Reception Gowns", "Luxury Pret"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.15em] transition duration-200 whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-[#1A1816] text-white font-semibold shadow-sm"
                    : "bg-white border border-[#DFD5C4] text-[#61584D] hover:border-[#1A1816] hover:text-[#1A1816]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lookbook Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-[#EAE3D6] rounded-2xl overflow-hidden hover:border-[#9E7D3B] hover:shadow-xl transition duration-500 flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F3EEE6]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-[#EAE3D6] text-[#9E7D3B] text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full font-semibold">
                  {item.tag}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C7A5E] font-medium">
                    {item.category}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#1A1816] group-hover:text-[#9E7D3B] transition mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#7A6F62] font-light mt-1.5 leading-relaxed">
                    {item.craft}
                  </p>
                  <p className="text-xs font-semibold text-[#9E7D3B] mt-2 uppercase tracking-wider">
                    {item.price}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EAE1]">
                  <a
                    href={getWhatsAppLink(`Hi Aasiya Khan Atelier, I want to order/inquire about: ${item.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-[#1F8246] hover:bg-[#186a38] text-white text-xs font-semibold uppercase tracking-wider transition inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ABOUT THE DESIGNER */}
      <section id="about" className="py-24 bg-[#F5F0E8] border-y border-[#EAE3D6] px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#9E7D3B] font-semibold">
              The Atelier &amp; Designer
            </span>
            <h2 className="font-editorial text-3xl md:text-5xl font-light text-[#1A1816] leading-tight">
              Aasiya Khan
            </h2>
            <p className="text-sm text-[#61584D] font-light leading-relaxed">
              Dedicated exclusively to women&apos;s haute couture, <strong className="text-[#1A1816] font-medium">{DESIGNER_NAME}</strong> blends centuries-old Mughal embroidery techniques with cutting-edge runway drapes.
            </p>
            <p className="text-sm text-[#61584D] font-light leading-relaxed">
              Every garment is created as a collectible heirloom. From customized bridal color swatches to personalized karigari consultations, Aasiya personally oversees every stage of fabrication.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#D5C5A8] flex items-center justify-center text-[#9E7D3B] shrink-0">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1816] uppercase tracking-wider">
                    Customized Made-to-Measure
                  </h4>
                  <p className="text-xs text-[#7A6F62] mt-0.5">
                    Every piece is individually cut and tailored to your specific measurements for a flawless silhouette.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#D5C5A8] flex items-center justify-center text-[#9E7D3B] shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1816] uppercase tracking-wider">
                    Global Express Delivery
                  </h4>
                  <p className="text-xs text-[#7A6F62] mt-0.5">
                    Safely delivered with custom luxury bridal packaging across India, UAE, UK, USA, and Canada.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppLink("Hello Aasiya Khan, I would like to schedule a private fitting appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1A1816] hover:bg-[#332F2B] text-white text-xs uppercase tracking-widest font-semibold transition shadow-md"
              >
                Schedule Private Fitting <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-[#D5C5A8] shadow-2xl bg-white">
              <img
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80"
                alt="Aasiya Khan Atelier Artisanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-[#E0D7C9] p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#9E7D3B] font-semibold">Bridal Studio</p>
              <p className="font-editorial text-2xl text-[#1A1816] mt-1">500+ Brides Dressed</p>
              <p className="text-[11px] text-[#7A6F62] mt-1">Celebrating heritage craft across the globe</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SOCIAL CHANNELS & VIP CONCIERGE */}
      <section id="social" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#9E7D3B] font-semibold">
            Connect Directly
          </span>
          <h2 className="font-editorial text-3xl md:text-4xl text-[#1A1816]">
            Social Channels &amp; VIP Concierge
          </h2>
          <p className="text-xs text-[#7A6F62] tracking-wider uppercase">
            Follow our latest runway shows and backstage fittings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white border border-[#EAE3D6] hover:border-[#1F8246] hover:shadow-lg transition group flex flex-col justify-between space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#1F8246]/10 text-[#1F8246] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <ExternalLink className="w-4 h-4 text-[#8C7A5E] group-hover:text-[#1F8246] transition" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C7A5E] font-medium">Instant Concierge</p>
              <h4 className="font-editorial text-xl text-[#1A1816] mt-1">WhatsApp Chat</h4>
              <p className="text-xs text-[#7A6F62] mt-1">Direct replies for brides and custom orders.</p>
            </div>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white border border-[#EAE3D6] hover:border-[#E1306C] hover:shadow-lg transition group flex flex-col justify-between space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-[#8C7A5E] group-hover:text-[#E1306C] transition" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C7A5E] font-medium">Runway &amp; Reels</p>
              <h4 className="font-editorial text-xl text-[#1A1816] mt-1">Instagram</h4>
              <p className="text-xs text-[#7A6F62] mt-1">@aasiyakhan.couture — Real brides &amp; fittings.</p>
            </div>
          </a>

          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="p-6 rounded-2xl bg-white border border-[#EAE3D6] hover:border-[#1A1816] hover:shadow-lg transition group flex flex-col justify-between space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#9E7D3B]/10 text-[#9E7D3B] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-[#8C7A5E] group-hover:text-[#1A1816] transition" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C7A5E] font-medium">Studio Desk</p>
              <h4 className="font-editorial text-xl text-[#1A1816] mt-1">Direct Call</h4>
              <p className="text-xs text-[#7A6F62] mt-1">Mon &ndash; Sat: 11:00 AM &ndash; 8:00 PM IST</p>
            </div>
          </a>

          <a
            href={`mailto:${ATELIER_EMAIL}`}
            className="p-6 rounded-2xl bg-white border border-[#EAE3D6] hover:border-[#1A1816] hover:shadow-lg transition group flex flex-col justify-between space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#9E7D3B]/10 text-[#9E7D3B] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-[#8C7A5E] group-hover:text-[#1A1816] transition" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C7A5E] font-medium">Official Desk</p>
              <h4 className="font-editorial text-xl text-[#1A1816] mt-1">Concierge Email</h4>
              <p className="text-xs text-[#7A6F62] mt-1">{ATELIER_EMAIL}</p>
            </div>
          </a>

        </div>
      </section>

      {/* 7. BESPOKE BRIDAL APPOINTMENT FORM */}
      <section id="contact" className="py-24 px-6 bg-[#F3EEE6] border-t border-[#EAE3D6]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#9E7D3B] font-semibold">
              Private Fitting &amp; Consultation
            </span>
            <h2 className="font-editorial text-3xl md:text-5xl font-light text-[#1A1816]">
              Book Your Bridal Appointment
            </h2>
            <p className="text-xs text-[#7A6F62] tracking-wider uppercase">
              Schedule your fitting or consultation for custom bridal &amp; festive wear
            </p>
          </div>

          <div className="bg-white border border-[#D5C5A8] rounded-3xl p-8 sm:p-12 shadow-xl">
            {formStatus === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#1F8246]/10 border border-[#1F8246] text-[#1F8246] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-3xl text-[#1A1816]">Appointment Request Received</h3>
                <p className="text-sm text-[#61584D] max-w-md mx-auto">
                  Thank you for writing to {DESIGNER_NAME} Atelier. Our senior bridal stylist will connect with you on WhatsApp within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="px-6 py-2.5 rounded-full border border-[#1A1816] text-[#1A1816] text-xs uppercase tracking-widest hover:bg-[#1A1816] hover:text-white transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#61584D] mb-2 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Fatima Shaikh"
                      className="w-full bg-[#FAF8F5] border border-[#D5C5A8] rounded-xl px-4 py-3 text-sm text-[#1A1816] placeholder:text-[#A69989] focus:outline-none focus:border-[#9E7D3B] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#61584D] mb-2 font-semibold">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#FAF8F5] border border-[#D5C5A8] rounded-xl px-4 py-3 text-sm text-[#1A1816] placeholder:text-[#A69989] focus:outline-none focus:border-[#9E7D3B] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#61584D] mb-2 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-[#FAF8F5] border border-[#D5C5A8] rounded-xl px-4 py-3 text-sm text-[#1A1816] placeholder:text-[#A69989] focus:outline-none focus:border-[#9E7D3B] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#61584D] mb-2 font-semibold">
                      Wedding / Occasion Date
                    </label>
                    <input
                      type="text"
                      name="event_date"
                      placeholder="e.g. December 2026"
                      className="w-full bg-[#FAF8F5] border border-[#D5C5A8] rounded-xl px-4 py-3 text-sm text-[#1A1816] placeholder:text-[#A69989] focus:outline-none focus:border-[#9E7D3B] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#61584D] mb-2 font-semibold">
                    Select Outfit Type
                  </label>
                  <select
                    name="category_interest"
                    className="w-full bg-[#FAF8F5] border border-[#D5C5A8] rounded-xl px-4 py-3 text-sm text-[#1A1816] focus:outline-none focus:border-[#9E7D3B] transition"
                  >
                    <option value="Bridal Lehenga">Bridal Lehenga (Royal Heirloom)</option>
                    <option value="Festive Sharara / Gharara">Festive Sharara / Farshi Gharara</option>
                    <option value="Reception / Cocktail Gown">Reception Gown / Draped Silhouette</option>
                    <option value="Sangeet / Mehendi Outfit">Sangeet / Mehendi Outfit</option>
                    <option value="Custom Bespoke Order">Custom Bespoke Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#61584D] mb-2 font-semibold">
                    Customization Details / Vision
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Share your color palette, preferred fabrics, or special design notes..."
                    className="w-full bg-[#FAF8F5] border border-[#D5C5A8] rounded-xl px-4 py-3 text-sm text-[#1A1816] placeholder:text-[#A69989] focus:outline-none focus:border-[#9E7D3B] transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 rounded-full bg-[#1A1816] hover:bg-[#332F2B] text-white text-xs font-semibold uppercase tracking-[0.25em] transition duration-300 disabled:opacity-50 flex items-center justify-center gap-2 shadow-md"
                >
                  {formStatus === "submitting" ? (
                    "Sending Request..."
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" /> Book Bespoke Consultation
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-[#7A6F62] pt-2">
                  Need quick instant assistance?{" "}
                  <a
                    href={getWhatsAppLink("Hi Aasiya Khan Atelier, I need quick assistance regarding an outfit.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1F8246] underline font-semibold"
                  >
                    Direct Chat on WhatsApp
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="border-t border-[#EAE3D6] bg-white py-16 px-6 text-[#7A6F62]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left space-y-1">
            <span className="font-editorial text-2xl tracking-[0.2em] text-[#1A1816] font-semibold">
              {DESIGNER_NAME.toUpperCase()}
            </span>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9E7D3B] font-semibold">
              WOMEN&apos;S HAUTE COUTURE &amp; BRIDAL ATELIER
            </p>
            <p className="text-xs text-[#8C7A5E] pt-1">{ATELIER_LOCATION}</p>
          </div>

          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-[#4A443C] font-medium">
            <a href="#collections" className="hover:text-[#9E7D3B] transition">
              Collections
            </a>
            <a href="#about" className="hover:text-[#9E7D3B] transition">
              About
            </a>
            <a href="#contact" className="hover:text-[#9E7D3B] transition">
              Appointments
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F8246] font-semibold hover:underline"
            >
              WhatsApp
            </a>
          </div>

          <p className="text-[11px] text-[#A69989] text-center md:text-right">
            &copy; {new Date().getFullYear()} {DESIGNER_NAME} Haute Couture. All rights reserved.
          </p>
        </div>
      </footer>

      {/* 9. FLOATING WHATSAPP PILL */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1F8246] text-white shadow-2xl hover:scale-105 transition-transform duration-300"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold tracking-wide pr-1 hidden sm:inline-block">
          WhatsApp Concierge
        </span>
      </a>

    </div>
  );
}
