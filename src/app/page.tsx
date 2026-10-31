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
  Scissors,
  Truck,
  Gem,
} from "lucide-react";

// Client's Exact Real Brand Details
const BRAND_NAME = "ak Creation's";
const DESIGNER_NAME = "Aasiya Khan";
const DESIGNER_TITLE = "Fashion Designer • Fashion Freelancer";
const BRAND_TAGLINE = "Designing attire beyond bodies";
const PHONE_NUMBER = "9619094687";
const WHATSAPP_NUMBER = "919619094687";
const EMAIL_ADDRESS = "Akcreationsdesigner@gmail.com";

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

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
    price: "Bespoke Bridal",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    tag: "Masterpiece",
  },
  {
    id: 2,
    title: "Mehtab Ivory & Gold Trousseau",
    category: "Bridal Couture",
    craft: "Mulberry silk with gold cutdana and double-drape scalloped organza dupatta",
    price: "Made to Order",
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
    price: "Heirloom Edition",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80",
    tag: "Festive Luxe",
  },
  {
    id: 5,
    title: "Aura Midnight Sapphire Reception Gown",
    category: "Reception Gowns",
    craft: "Structured corset bodice with crystals & French silk drape flare",
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
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const filteredCollections =
    selectedCategory === "All"
      ? COLLECTIONS
      : COLLECTIONS.filter((item) => item.category === selectedCategory);

  function getWhatsAppLink(customText?: string) {
    const text = customText
      ? encodeURIComponent(customText)
      : encodeURIComponent(
          `Hello Aasiya Khan (${BRAND_NAME}), I would like to inquire about your custom fashion design & bridal couture services.`
        );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_FREE_WEB3FORMS_KEY");
    formData.append("subject", `New Inquiry for ${BRAND_NAME} by ${DESIGNER_NAME}`);

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
    <div className="min-h-screen bg-[#FAF8F5] text-[#111A29]">
      
      {/* 1. TOP ANNOUNCEMENT BANNER */}
      <aside
        aria-label="Announcement"
        className="bg-[#0F1E36] text-[#E5D2AF] text-[11px] uppercase tracking-[0.25em] py-2.5 px-4 text-center font-medium"
      >
        <span>{BRAND_NAME} &bull; {BRAND_TAGLINE} &bull; Private Consultations Open</span>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 underline text-white hover:text-[#C5A059] transition inline-flex items-center gap-1 font-semibold"
        >
          WhatsApp: +91 {PHONE_NUMBER} <ArrowRight className="w-3 h-3" />
        </a>
      </aside>

      {/* 2. LUXURY BOUTIQUE HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5DFD5] shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          
          {/* Logo Matching the Bag Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full border-2 border-[#0F1E36] flex items-center justify-center font-editorial text-xl font-bold text-[#0F1E36] bg-[#F7F4EE] group-hover:border-[#C5A059] transition">
              ak
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-2xl md:text-3xl font-semibold tracking-wider text-[#0F1E36] leading-none">
                {BRAND_NAME}
              </span>
              <span className="text-[11px] text-[#C5A059] font-medium tracking-wide mt-1">
                by {DESIGNER_NAME}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase font-semibold text-[#3B4554]">
            <a href="#collections" className="hover:text-[#0F1E36] transition">
              Collections
            </a>
            <a href="#about" className="hover:text-[#0F1E36] transition">
              About Aasiya
            </a>
            <a href="#branding" className="hover:text-[#0F1E36] transition">
              Boutique Studio
            </a>
            <a href="#contact" className="hover:text-[#0F1E36] transition">
              Book Appointment
            </a>
          </nav>

          {/* Direct WhatsApp Call-to-Action */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="p-2.5 rounded-full border border-[#D0D6DF] text-[#0F1E36] hover:bg-[#F0F4F8] transition"
              title="Call Studio"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F8246] hover:bg-[#186a38] text-white transition duration-300 text-xs tracking-[0.15em] uppercase font-semibold shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#0F1E36] p-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#E5DFD5] px-6 py-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3 text-xs tracking-[0.2em] uppercase text-[#3B4554] font-semibold">
              <a
                href="#collections"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0F1E36] py-1"
              >
                Collections
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0F1E36] py-1"
              >
                About Aasiya
              </a>
              <a
                href="#branding"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0F1E36] py-1"
              >
                Boutique Studio
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0F1E36] py-1"
              >
                Book Appointment
              </a>
            </nav>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#1F8246] text-white text-xs font-semibold uppercase tracking-widest shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Chat on WhatsApp ({PHONE_NUMBER})
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO SHOWCASE (ROYAL MIDNIGHT BLUE THEME MATCHING BAG & SALON) */}
      <section className="relative bg-[#0F1E36] text-white py-20 md:py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#E5D2AF] text-[11px] tracking-[0.3em] uppercase font-semibold">
              <Crown className="w-3.5 h-3.5 text-[#C5A059]" />
              {DESIGNER_TITLE}
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.1]">
              &ldquo;{BRAND_TAGLINE}&rdquo;
            </h1>

            <p className="max-w-xl text-sm sm:text-base text-[#B0BCCB] font-light leading-relaxed">
              Welcome to <strong className="font-semibold text-white">{BRAND_NAME}</strong> by{" "}
              <strong className="font-semibold text-[#E5D2AF]">{DESIGNER_NAME}</strong>. Bespoke bridal lehengas,
              royal shararas, couture gowns, and luxury pret tailored to perfection for the contemporary woman.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={getWhatsAppLink("Hello Aasiya, I would like to book a bespoke bridal consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1F8246] hover:bg-[#186a38] text-white font-semibold text-xs tracking-[0.15em] uppercase transition shadow-lg inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                WhatsApp Consultation (+91 {PHONE_NUMBER})
              </a>
              <a
                href="#collections"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#C5A059] hover:bg-[#C5A059] hover:text-[#0F1E36] text-[#E5D2AF] font-semibold text-xs tracking-[0.2em] uppercase transition"
              >
                View Lookbook
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/10 text-left">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059]">Karigari</p>
                <p className="font-editorial text-lg text-white">Handcrafted Zardozi</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059]">Fitting</p>
                <p className="font-editorial text-lg text-white">Made-to-Measure</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059]">Freelance</p>
                <p className="font-editorial text-lg text-white">Custom Styling</p>
              </div>
            </div>
          </div>

          {/* Real Boutique Branding Photo Display */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#C5A059]/40 shadow-2xl bg-[#091322]">
              <img
                src="/ak-bag-logo.jpg"
                alt="ak Creation's by Aasiya Khan"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-[#0F1E36] p-5 rounded-2xl shadow-2xl max-w-xs border border-[#E5DFD5] hidden sm:block">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                Official Atelier
              </span>
              <p className="font-editorial text-xl font-semibold mt-0.5">{BRAND_NAME}</p>
              <p className="text-xs text-[#5A6578]">Bespoke Fashion &amp; Bridal Studio</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE REAL BRAND IDENTITY & CONTACT DISPLAY */}
      <section id="branding" className="py-20 px-6 max-w-7xl mx-auto border-b border-[#E5DFD5]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-[#D2DAE5] shadow-xl bg-white max-w-md mx-auto">
            <img
              src="/ak-bag-contact.jpg"
              alt="Aasiya Khan Contact & Details"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F1E36]/5 text-[#0F1E36] text-[11px] tracking-[0.25em] uppercase font-bold">
              <Scissors className="w-3.5 h-3.5" />
              Direct Studio Access
            </div>

            <h2 className="font-editorial text-3xl md:text-5xl font-light text-[#0F1E36]">
              {DESIGNER_NAME}
            </h2>
            <p className="text-sm font-semibold text-[#C5A059] uppercase tracking-widest">
              {DESIGNER_TITLE}
            </p>

            <p className="text-sm text-[#4E596B] leading-relaxed">
              Every garment created under <strong>{BRAND_NAME}</strong> is customized to honor your individuality.
              Whether you need a royal wedding trousseau, a celebrity-inspired reception gown, or bespoke freelance design consulting, we bring your vision to life.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#E5DFD5] shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#1F8246]/10 text-[#1F8246] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#7A8799]">Direct Phone / WhatsApp</p>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#0F1E36] hover:text-[#1F8246] transition"
                  >
                    +91 {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#E5DFD5] shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#0F1E36]/10 text-[#0F1E36] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#7A8799]">Official Email</p>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="text-base font-semibold text-[#0F1E36] hover:text-[#C5A059] transition"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#1F8246] hover:bg-[#186a38] text-white font-semibold text-xs tracking-wider uppercase transition shadow-sm inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Inquire on WhatsApp
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="px-6 py-3 rounded-full border border-[#0F1E36] hover:bg-[#0F1E36] hover:text-white text-[#0F1E36] font-semibold text-xs tracking-wider uppercase transition"
              >
                Call Now
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 5. WOMEN'S LOOKBOOK & COLLECTIONS */}
      <section id="collections" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#E5DFD5] pb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A059] block mb-2 font-semibold">
              Curated Lookbook
            </span>
            <h2 className="font-editorial text-3xl md:text-5xl font-light text-[#0F1E36]">
              Haute Couture Ensembles
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
            {["All", "Bridal Couture", "Festive & Shararas", "Reception Gowns", "Luxury Pret"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] transition duration-200 whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-[#0F1E36] text-white font-semibold shadow-md"
                    : "bg-white border border-[#D2DAE5] text-[#4E596B] hover:border-[#0F1E36] hover:text-[#0F1E36]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Collection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-[#E5DFD5] rounded-3xl overflow-hidden hover:border-[#C5A059] hover:shadow-xl transition duration-500 flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F0F4F8]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-[#E5DFD5] text-[#0F1E36] text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full font-bold">
                  {item.tag}
                </span>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                    {item.category}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#0F1E36] group-hover:text-[#C5A059] transition mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#616E82] font-light mt-1.5 leading-relaxed">
                    {item.craft}
                  </p>
                  <p className="text-xs font-semibold text-[#0F1E36] mt-2 uppercase tracking-wider">
                    {item.price}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2EDE4]">
                  <a
                    href={getWhatsAppLink(`Hi Aasiya (${BRAND_NAME}), I would like to order or customize: ${item.title}`)}
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

      {/* 6. SOCIAL MEDIA & CHANNELS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A059] font-semibold">
            Follow Our Designs
          </span>
          <h2 className="font-editorial text-3xl md:text-4xl text-[#0F1E36]">
            Social Channels &amp; Studio Desk
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white border border-[#E5DFD5] hover:border-[#1F8246] hover:shadow-lg transition group flex flex-col justify-between space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#1F8246]/10 text-[#1F8246] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <ExternalLink className="w-4 h-4 text-[#8C98A8] group-hover:text-[#1F8246] transition" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C98A8] font-medium">WhatsApp</p>
              <h4 className="font-editorial text-xl text-[#0F1E36] mt-1">+91 {PHONE_NUMBER}</h4>
              <p className="text-xs text-[#616E82] mt-1">Instant chat for brides &amp; fittings.</p>
            </div>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white border border-[#E5DFD5] hover:border-[#E1306C] hover:shadow-lg transition group flex flex-col justify-between space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-[#8C98A8] group-hover:text-[#E1306C] transition" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C98A8] font-medium">Instagram</p>
              <h4 className="font-editorial text-xl text-[#0F1E36] mt-1">@Akcreationsdesigner</h4>
              <p className="text-xs text-[#616E82] mt-1">Latest fashion drops and bridal trials.</p>
            </div>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white border border-[#E5DFD5] hover:border-[#1877F2] hover:shadow-lg transition group flex flex-col justify-between space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center">
                <FacebookIcon className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-[#8C98A8] group-hover:text-[#1877F2] transition" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C98A8] font-medium">Facebook</p>
              <h4 className="font-editorial text-xl text-[#0F1E36] mt-1">ak Creation&apos;s</h4>
              <p className="text-xs text-[#616E82] mt-1">Customer stories &amp; collection showcase.</p>
            </div>
          </a>

          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="p-6 rounded-2xl bg-white border border-[#E5DFD5] hover:border-[#0F1E36] hover:shadow-lg transition group flex flex-col justify-between space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#0F1E36]/10 text-[#0F1E36] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-[#8C98A8] group-hover:text-[#0F1E36] transition" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C98A8] font-medium">Email Desk</p>
              <h4 className="font-editorial text-lg text-[#0F1E36] mt-1 truncate">{EMAIL_ADDRESS}</h4>
              <p className="text-xs text-[#616E82] mt-1">Official design inquiries &amp; collaborations.</p>
            </div>
          </a>

        </div>
      </section>

      {/* 7. CONTACT & BESPOKE APPOINTMENT FORM */}
      <section id="contact" className="py-24 px-6 bg-[#F0F4F8] border-t border-[#D9E1EB]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">
              Private Fitting Appointment
            </span>
            <h2 className="font-editorial text-3xl md:text-5xl font-light text-[#0F1E36]">
              Book with {DESIGNER_NAME}
            </h2>
            <p className="text-xs text-[#5A6578] tracking-wider uppercase">
              Schedule your bridal fitting or customized fashion design inquiry
            </p>
          </div>

          <div className="bg-white border border-[#D0D9E5] rounded-3xl p-8 sm:p-12 shadow-xl">
            {formStatus === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#1F8246]/10 border border-[#1F8246] text-[#1F8246] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-3xl text-[#0F1E36]">Appointment Request Received</h3>
                <p className="text-sm text-[#5A6578] max-w-md mx-auto">
                  Thank you for reaching out to {BRAND_NAME}. Aasiya Khan will contact you directly on WhatsApp (+91 {PHONE_NUMBER}) within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="px-6 py-2.5 rounded-full border border-[#0F1E36] text-[#0F1E36] text-xs uppercase tracking-widest hover:bg-[#0F1E36] hover:text-white transition"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#4E596B] mb-2 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Fatima Shaikh"
                      className="w-full bg-[#FAF8F5] border border-[#D0D9E5] rounded-xl px-4 py-3 text-sm text-[#0F1E36] focus:outline-none focus:border-[#0F1E36] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#4E596B] mb-2 font-semibold">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#FAF8F5] border border-[#D0D9E5] rounded-xl px-4 py-3 text-sm text-[#0F1E36] focus:outline-none focus:border-[#0F1E36] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#4E596B] mb-2 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-[#FAF8F5] border border-[#D0D9E5] rounded-xl px-4 py-3 text-sm text-[#0F1E36] focus:outline-none focus:border-[#0F1E36] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#4E596B] mb-2 font-semibold">
                      Occasion / Event Date
                    </label>
                    <input
                      type="text"
                      name="event_date"
                      placeholder="e.g. Wedding Dec 2026"
                      className="w-full bg-[#FAF8F5] border border-[#D0D9E5] rounded-xl px-4 py-3 text-sm text-[#0F1E36] focus:outline-none focus:border-[#0F1E36] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#4E596B] mb-2 font-semibold">
                    Category of Interest
                  </label>
                  <select
                    name="category_interest"
                    className="w-full bg-[#FAF8F5] border border-[#D0D9E5] rounded-xl px-4 py-3 text-sm text-[#0F1E36] focus:outline-none focus:border-[#0F1E36] transition"
                  >
                    <option value="Bridal Lehenga">Bridal Lehenga</option>
                    <option value="Festive Sharara / Farshi">Festive Sharara / Farshi Gharara</option>
                    <option value="Reception / Party Gown">Reception / Party Gown</option>
                    <option value="Freelance Design Project">Fashion Freelancing / Custom Styling</option>
                    <option value="Other Bespoke">Other Custom Bespoke</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#4E596B] mb-2 font-semibold">
                    Message / Customization Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell Aasiya about your preferred fabric, colors, or design requirements..."
                    className="w-full bg-[#FAF8F5] border border-[#D0D9E5] rounded-xl px-4 py-3 text-sm text-[#0F1E36] focus:outline-none focus:border-[#0F1E36] transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 rounded-full bg-[#0F1E36] hover:bg-[#1A2E4F] text-white text-xs font-semibold uppercase tracking-[0.25em] transition duration-300 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
                >
                  {formStatus === "submitting" ? (
                    "Sending Request..."
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" /> Book Consultation with Aasiya Khan
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-[#7A8799] pt-2">
                  Prefer direct instant chat?{" "}
                  <a
                    href={getWhatsAppLink("Hi Aasiya, I want to inquire directly regarding a design.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1F8246] underline font-bold"
                  >
                    Click to WhatsApp (+91 {PHONE_NUMBER})
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="border-t border-[#D0D9E5] bg-[#0F1E36] text-[#B0BCCB] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left space-y-1">
            <span className="font-editorial text-2xl tracking-[0.2em] text-white font-semibold">
              {BRAND_NAME.toUpperCase()}
            </span>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">
              {DESIGNER_NAME} &bull; {DESIGNER_TITLE}
            </p>
            <p className="text-xs text-[#8A9AB0] pt-1">
              Call / WhatsApp: +91 {PHONE_NUMBER} &bull; {EMAIL_ADDRESS}
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
            <a href="#collections" className="hover:text-white transition">
              Collections
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#contact" className="hover:text-white transition">
              Appointments
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline"
            >
              WhatsApp
            </a>
          </div>

          <p className="text-[11px] text-[#7A8A9E] text-center md:text-right">
            &copy; {new Date().getFullYear()} {BRAND_NAME} by {DESIGNER_NAME}. All rights reserved.
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
          WhatsApp: {PHONE_NUMBER}
        </span>
      </a>

    </div>
  );
}
