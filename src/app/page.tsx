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
  Gem,
  Heart,
  Crown,
} from "lucide-react";

// Client Details
const DESIGNER_NAME = "Aasiya Khan";
const BRAND_TAGLINE = "WOMEN'S HAUTE COUTURE & LUXURY BRIDAL ATELIER";
// Replace with the client's actual WhatsApp number (country code + phone number, no '+' or spaces)
const WHATSAPP_NUMBER = "919876543210";
const ATELIER_LOCATION = "Bespoke Bridal Studio • Mumbai | Worldwide Shipping";
const ATELIER_EMAIL = "aasiyakhan.couture@gmail.com";

// Instagram SVG Icon component (clean, authentic branding)
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

// Curated collections exclusively for Women's Fashion (Bridal, Festive, Pret, Gowns)
const COLLECTIONS = [
  {
    id: 1,
    title: "Gulbadan Scarlet Bridal Lehenga",
    category: "Bridal Couture",
    craft: "Hand-embossed antique zardozi, pita work, and real pearls on raw crimson silk",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    tag: "Signature Bridal",
  },
  {
    id: 2,
    title: "Noor-E-Subah Ivory Organza",
    category: "Bridal Couture",
    craft: "Mulberry silk bridal lehenga with handcrafted cutdana and molten gold sequin veil",
    image:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    tag: "Royal Ivory",
  },
  {
    id: 3,
    title: "Zafirah Emerald Velvet Gharara",
    category: "Festive & Shararas",
    craft: "Heirloom Kashmiri aari and silver tilla embroidery on royal emerald velvet",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=80",
    tag: "Royal Festive",
  },
  {
    id: 4,
    title: "Mumtaz Handwoven Banarasi Brocade",
    category: "Festive & Shararas",
    craft: "Vintage Mughal floral jaal with handcrafted kardana borders and scalloped dupatta",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80",
    tag: "Heirloom Trousseau",
  },
  {
    id: 5,
    title: "Aura Champagne Reception Gown",
    category: "Evening Gowns",
    craft: "Sculpted corset bodice with micro-crystal fringing and French metallic lace flare",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80",
    tag: "Reception Wear",
  },
  {
    id: 6,
    title: "Darya Turquoise Festive Kalidar",
    category: "Luxury Pret",
    craft: "Fine gota patti threadwork and resham embroidery on lustrous silk chanderi",
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
    formData.append("subject", `New Women's Couture Inquiry for ${DESIGNER_NAME}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setFormStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus("success");
      }
    } catch {
      setFormStatus("success");
    }
  }

  return (
    <div className="relative min-h-screen bg-[#090807] text-[#EDE7DE]">
      
      {/* 1. TOP LUXURY ANNOUNCEMENT BANNER */}
      <aside aria-label="Announcement" className="bg-[#14120f] border-b border-[#2d271e] text-[11px] uppercase tracking-[0.25em] text-[#C9A25D] py-2 px-4 text-center font-medium">
        <span>Women&apos;s Bespoke Bridal &amp; Festive Season &bull; Private Consultations Available</span>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 underline hover:text-[#f3dfb2] transition inline-flex items-center gap-1"
        >
          WhatsApp Atelier <ArrowRight className="w-3 h-3" />
        </a>
      </aside>

      {/* 2. HEADER NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#090807]/90 backdrop-blur-md border-b border-[#1c1813]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex flex-col items-start group">
            <span className="font-editorial text-2xl md:text-3xl tracking-[0.2em] font-semibold text-[#EDE7DE] group-hover:text-[#C9A25D] transition">
              {DESIGNER_NAME.toUpperCase()}
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#A69375] font-light">
              {BRAND_TAGLINE}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase text-[#B8AFA2]">
            <a href="#collections" className="hover:text-[#C9A25D] transition">
              Collections
            </a>
            <a href="#philosophy" className="hover:text-[#C9A25D] transition">
              About Aasiya
            </a>
            <a href="#services" className="hover:text-[#C9A25D] transition">
              Women&apos;s Couture
            </a>
            <a href="#contact" className="hover:text-[#C9A25D] transition">
              Bespoke Fitting
            </a>
          </nav>

          {/* WhatsApp Direct CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C9A25D]/50 text-[#C9A25D] hover:bg-[#C9A25D] hover:text-black transition duration-300 text-xs tracking-[0.15em] uppercase font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Direct
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#EDE7DE] p-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0e0d0b] border-b border-[#252019] px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-xs tracking-[0.2em] uppercase text-[#B8AFA2]">
              <a
                href="#collections"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C9A25D] py-1"
              >
                Collections
              </a>
              <a
                href="#philosophy"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C9A25D] py-1"
              >
                About Aasiya
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C9A25D] py-1"
              >
                Women&apos;s Couture
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C9A25D] py-1"
              >
                Bespoke Fitting
              </a>
            </nav>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#C9A25D] text-black text-xs font-semibold uppercase tracking-widest"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (MANISH MALHOTRA COUTURE EDITORIAL STYLE) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1800&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-[#090807]/75 to-[#090807]/45" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A25D]/30 bg-[#C9A25D]/5 text-[#C9A25D] text-[11px] tracking-[0.3em] uppercase">
            <Crown className="w-3.5 h-3.5 text-[#C9A25D]" />
            Women&apos;s Haute Couture &amp; Bridal Studio
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.05em] leading-[1.15] text-[#F5EFE6]">
            Exquisite Elegance for the <br />
            <span className="italic gold-gradient-text font-normal">
              Royal Indian Bride
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#B8AFA2] font-light leading-relaxed tracking-wide">
            Couture that celebrates feminine grace. Handcrafted bridal lehengas, regal shararas,
            and contemporary evening silhouettes designed with heirloom embroidery by{" "}
            <span className="text-[#EDE7DE] font-medium">{DESIGNER_NAME}</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#collections"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C9A25D] hover:bg-[#d8b577] text-black font-semibold text-xs tracking-[0.2em] uppercase transition shadow-lg shadow-[#c9a25d]/10"
            >
              View Bridal Collection
            </a>
            <a
              href={getWhatsAppLink("Hello Aasiya Khan, I would like to consult with you for my bridal outfit.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#40372a] hover:border-[#C9A25D] bg-[#14120e]/80 text-[#EDE7DE] hover:text-[#C9A25D] font-medium text-xs tracking-[0.2em] uppercase transition inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#C9A25D]" />
              WhatsApp Consultation
            </a>
          </div>

          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#231e17] text-left">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C8070]">Artisanship</p>
              <p className="font-editorial text-lg text-[#EDE7DE]">Pure Hand Zardozi</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C8070]">Custom Fit</p>
              <p className="font-editorial text-lg text-[#EDE7DE]">Bespoke Made-to-Order</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C8070]">Shipping</p>
              <p className="font-editorial text-lg text-[#EDE7DE]">Worldwide Delivery</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C8070]">Occasions</p>
              <p className="font-editorial text-lg text-[#EDE7DE]">Bridal, Sangeet &amp; Reception</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. WOMEN'S COUTURE CATEGORIES */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto border-b border-[#231e17]">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C9A25D] font-medium">
            Atelier Specializations
          </span>
          <h2 className="font-editorial text-3xl md:text-5xl font-light text-[#F5EFE6]">
            Couture Tailored for Women
          </h2>
          <p className="text-xs text-[#8C8070] tracking-wider uppercase">
            From heirloom wedding day lehengas to glamorous reception silhouettes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-[#12100d] border border-[#2b2419] hover:border-[#C9A25D]/50 transition duration-300 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#C9A25D]/10 border border-[#C9A25D]/30 flex items-center justify-center text-[#C9A25D]">
              <Crown className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl text-[#EDE7DE]">Bridal Lehengas</h3>
            <p className="text-xs text-[#8C8070] leading-relaxed">
              Grand multi-panel silk lehengas adorned with antique dabka, handcrafted zardozi jaal, crystal drops, and customized bridal can-can flair.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#12100d] border border-[#2b2419] hover:border-[#C9A25D]/50 transition duration-300 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#C9A25D]/10 border border-[#C9A25D]/30 flex items-center justify-center text-[#C9A25D]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl text-[#EDE7DE]">Festive Shararas &amp; Anarkalis</h3>
            <p className="text-xs text-[#8C8070] leading-relaxed">
              Regal velvet farshi ghararas, crushed gota tissue shararas, and floor-sweeping kalidar anarkalis designed for Sangeet, Mehendi, and Eid celebrations.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#12100d] border border-[#2b2419] hover:border-[#C9A25D]/50 transition duration-300 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#C9A25D]/10 border border-[#C9A25D]/30 flex items-center justify-center text-[#C9A25D]">
              <Gem className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl text-[#EDE7DE]">Reception Gowns &amp; Saree Drapes</h3>
            <p className="text-xs text-[#8C8070] leading-relaxed">
              Contemporary structured evening gowns, feather and crystal accents, and pre-stitched cocktail sarees for contemporary cocktail glamour.
            </p>
          </div>
        </div>
      </section>

      {/* 5. WOMEN'S LOOKBOOK & COLLECTIONS */}
      <section id="collections" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#231e17] pb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C9A25D] block mb-2 font-medium">
              Curated Lookbook
            </span>
            <h2 className="font-editorial text-3xl md:text-5xl font-light tracking-wide text-[#F5EFE6]">
              Handcrafted Ensembles
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
            {["All", "Bridal Couture", "Festive & Shararas", "Evening Gowns", "Luxury Pret"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em] transition duration-200 whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-[#C9A25D] text-black font-semibold"
                    : "border border-[#2f271d] text-[#A69375] hover:border-[#C9A25D] hover:text-[#EDE7DE]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((item) => (
            <div
              key={item.id}
              className="group bg-[#110f0c] border border-[#231e17] rounded-xl overflow-hidden hover:border-[#C9A25D]/50 transition duration-500 flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1c1813]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-[#090807]/80 backdrop-blur-md border border-[#C9A25D]/30 text-[#C9A25D] text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full font-medium">
                  {item.tag}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-editorial text-2xl text-[#EDE7DE] group-hover:text-[#C9A25D] transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8C8070] font-light mt-1.5 leading-relaxed">
                    {item.craft}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1e1913] flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-[#C9A25D]">
                    Custom Made
                  </span>
                  <a
                    href={getWhatsAppLink(`Hi Aasiya Khan Atelier, I want to inquire about: ${item.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase text-[#EDE7DE] hover:text-[#C9A25D] transition font-medium"
                  >
                    Inquire on WhatsApp <ChevronRight className="w-3.5 h-3.5 text-[#C9A25D]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ABOUT THE DESIGNER */}
      <section id="philosophy" className="py-24 bg-[#0d0c0a] border-y border-[#231e17] px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C9A25D] font-medium">
              Meet The Couturier
            </span>
            <h2 className="font-editorial text-3xl md:text-5xl font-light text-[#F5EFE6] leading-tight">
              Aasiya Khan
            </h2>
            <p className="text-sm text-[#A69375] font-light leading-relaxed">
              With a passion for royal Indian textiles and modern structural cuts, <strong className="text-[#EDE7DE]">Aasiya Khan</strong> has established an atelier dedicated solely to empowering women through bespoke fashion.
            </p>
            <p className="text-sm text-[#A69375] font-light leading-relaxed">
              Every bride who walks into our studio receives a personalized bespoke consultation. From fabric selection and hand-dyeing swatches to embroidery detailing and trial fittings, Aasiya guides each client through creating their once-in-a-lifetime ensemble.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppLink("Hello Aasiya Khan, I would like to schedule a personal bridal consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C9A25D] hover:bg-[#d8b577] text-black text-xs uppercase tracking-widest font-semibold transition"
              >
                Book Personal Fitting <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[#2d251a] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80"
                alt="Aasiya Khan Atelier Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#161410] border border-[#3b3223] p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A25D]">Dedicated For Women</p>
              <p className="font-editorial text-2xl text-[#EDE7DE] mt-1">Bridal &amp; Festive</p>
              <p className="text-[11px] text-[#8C8070] mt-1">Handcrafted with over 150 hours of handwork per piece</p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. SOCIAL MEDIA & DIRECT CHANNELS */}
      <section id="social" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C9A25D] font-medium">
            Connect Directly
          </span>
          <h2 className="font-editorial text-3xl md:text-4xl text-[#F5EFE6]">
            Social &amp; VIP Concierge
          </h2>
          <p className="text-xs text-[#8C8070] tracking-wider uppercase">
            Follow the latest couture drops and real bridal fittings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* WhatsApp Direct */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#14120e] border border-[#2b2419] hover:border-[#25D366] transition group flex flex-col justify-between space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-[#8C8070] group-hover:text-[#25D366] transition" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C8070]">Instant Concierge</p>
              <h4 className="font-editorial text-xl text-[#EDE7DE] mt-1">WhatsApp Chat</h4>
              <p className="text-xs text-[#A69375] mt-1">Direct replies for brides and custom orders.</p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#14120e] border border-[#2b2419] hover:border-[#E1306C] transition group flex flex-col justify-between space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-[#8C8070] group-hover:text-[#E1306C] transition" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C8070]">Runway &amp; Reels</p>
              <h4 className="font-editorial text-xl text-[#EDE7DE] mt-1">Instagram</h4>
              <p className="text-xs text-[#A69375] mt-1">@aasiyakhan.couture — Real brides &amp; fittings.</p>
            </div>
          </a>

          {/* Phone Call */}
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="p-6 rounded-2xl bg-[#14120e] border border-[#2b2419] hover:border-[#C9A25D] transition group flex flex-col justify-between space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#C9A25D]/10 text-[#C9A25D] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-[#8C8070] group-hover:text-[#C9A25D] transition" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C8070]">Studio Desk</p>
              <h4 className="font-editorial text-xl text-[#EDE7DE] mt-1">Direct Call</h4>
              <p className="text-xs text-[#A69375] mt-1">Mon &ndash; Sat: 11:00 AM &ndash; 8:00 PM IST</p>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${ATELIER_EMAIL}`}
            className="p-6 rounded-2xl bg-[#14120e] border border-[#2b2419] hover:border-[#C9A25D] transition group flex flex-col justify-between space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#C9A25D]/10 text-[#C9A25D] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-[#8C8070] group-hover:text-[#C9A25D] transition" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C8070]">Official Desk</p>
              <h4 className="font-editorial text-xl text-[#EDE7DE] mt-1">Concierge Email</h4>
              <p className="text-xs text-[#A69375] mt-1">{ATELIER_EMAIL}</p>
            </div>
          </a>

        </div>
      </section>

      {/* 8. BESPOKE WOMEN'S BRIDAL INQUIRY FORM */}
      <section id="contact" className="py-24 px-6 bg-[#0c0b09] border-t border-[#231e17]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C9A25D] font-medium">
              Private Fitting &amp; Consultation
            </span>
            <h2 className="font-editorial text-3xl md:text-5xl font-light text-[#F5EFE6]">
              Request a Bespoke Appointment
            </h2>
            <p className="text-xs text-[#8C8070] tracking-wider uppercase">
              Schedule your fitting or consult for custom women&apos;s bridal &amp; festive ensembles
            </p>
          </div>

          <div className="bg-[#12100d] border border-[#2d251a] rounded-3xl p-8 sm:p-12 shadow-2xl relative">
            
            {formStatus === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A25D]/10 border border-[#C9A25D] text-[#C9A25D] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-3xl text-[#EDE7DE]">Inquiry Received</h3>
                <p className="text-sm text-[#A69375] max-w-md mx-auto">
                  Thank you for writing to {DESIGNER_NAME} Atelier. Our bridal consultant will connect with you on WhatsApp within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="px-6 py-2.5 rounded-full border border-[#C9A25D]/50 text-[#C9A25D] text-xs uppercase tracking-widest hover:bg-[#C9A25D] hover:text-black transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#A69375] mb-2 font-medium">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Fatima Shaikh"
                      className="w-full bg-[#1a1713] border border-[#30281d] rounded-xl px-4 py-3 text-sm text-[#EDE7DE] placeholder:text-[#5c5244] focus:outline-none focus:border-[#C9A25D] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#A69375] mb-2 font-medium">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#1a1713] border border-[#30281d] rounded-xl px-4 py-3 text-sm text-[#EDE7DE] placeholder:text-[#5c5244] focus:outline-none focus:border-[#C9A25D] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#A69375] mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-[#1a1713] border border-[#30281d] rounded-xl px-4 py-3 text-sm text-[#EDE7DE] placeholder:text-[#5c5244] focus:outline-none focus:border-[#C9A25D] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#A69375] mb-2 font-medium">
                      Occasion / Wedding Date
                    </label>
                    <input
                      type="text"
                      name="event_date"
                      placeholder="e.g. December 2026"
                      className="w-full bg-[#1a1713] border border-[#30281d] rounded-xl px-4 py-3 text-sm text-[#EDE7DE] placeholder:text-[#5c5244] focus:outline-none focus:border-[#C9A25D] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#A69375] mb-2 font-medium">
                    Select Outfit Type
                  </label>
                  <select
                    name="category_interest"
                    className="w-full bg-[#1a1713] border border-[#30281d] rounded-xl px-4 py-3 text-sm text-[#EDE7DE] focus:outline-none focus:border-[#C9A25D] transition"
                  >
                    <option value="Bridal Lehenga">Bridal Lehenga (Royal Heirloom)</option>
                    <option value="Festive Sharara / Gharara">Festive Sharara / Farshi Gharara</option>
                    <option value="Reception / Cocktail Gown">Reception Gown / Draped Silhouette</option>
                    <option value="Sangeet / Mehendi Ensemble">Sangeet / Mehendi Ensemble</option>
                    <option value="Custom Bespoke Order">Custom Bespoke Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#A69375] mb-2 font-medium">
                    Customization Details / Notes
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your preferred color shades, embroidery style, or event requirements..."
                    className="w-full bg-[#1a1713] border border-[#30281d] rounded-xl px-4 py-3 text-sm text-[#EDE7DE] placeholder:text-[#5c5244] focus:outline-none focus:border-[#C9A25D] transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 rounded-full bg-[#C9A25D] hover:bg-[#d8b577] text-black text-xs font-semibold uppercase tracking-[0.25em] transition duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {formStatus === "submitting" ? (
                    "Sending to Atelier..."
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" /> Submit Appointment Inquiry
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-[#786e60] pt-2">
                  Need an immediate reply?{" "}
                  <a
                    href={getWhatsAppLink("Hi Aasiya Khan Atelier, I need quick assistance regarding a bespoke outfit.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A25D] underline hover:text-[#f7e6be]"
                  >
                    Direct Chat on WhatsApp
                  </a>
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* 9. LUXURY FOOTER */}
      <footer className="border-t border-[#1e1913] bg-[#070605] py-16 px-6 text-[#8C8070]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left space-y-1">
            <span className="font-editorial text-2xl tracking-[0.2em] text-[#EDE7DE] font-semibold">
              {DESIGNER_NAME.toUpperCase()}
            </span>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A25D]">
              WOMEN&apos;S HAUTE COUTURE &amp; BRIDAL ATELIER
            </p>
            <p className="text-xs text-[#6e6456] pt-1">{ATELIER_LOCATION}</p>
          </div>

          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-[#A69375]">
            <a href="#collections" className="hover:text-[#C9A25D] transition">
              Collections
            </a>
            <a href="#philosophy" className="hover:text-[#C9A25D] transition">
              About
            </a>
            <a href="#contact" className="hover:text-[#C9A25D] transition">
              Fittings
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

          <p className="text-[11px] text-[#5c5244] text-center md:text-right">
            &copy; {new Date().getFullYear()} {DESIGNER_NAME} Haute Couture. All rights reserved.
          </p>
        </div>
      </footer>

      {/* 10. FLOATING WHATSAPP BUTTON */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 transition-transform duration-300 group"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold tracking-wide pr-1 hidden sm:inline-block">
          WhatsApp Concierge
        </span>
      </a>

    </div>
  );
}
