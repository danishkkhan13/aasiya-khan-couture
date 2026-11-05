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
  Info,
  Layers,
  ChevronLeft,
} from "lucide-react";

// Client's Official Details
const BRAND_NAME = "ak Creation's";
const DESIGNER_NAME = "Aasiya Khan";
const DESIGNER_TITLE = "Fashion Designer • Fashion Freelancer";
const BRAND_TAGLINE = "Designing attire beyond bodies";
const PHONE_NUMBER = "9619094687";
const WHATSAPP_NUMBER = "919619094687";
const EMAIL_ADDRESS = "Akcreationsdesigner@gmail.com";

// Real Social Media Links
const INSTAGRAM_URL = "https://www.instagram.com/aasiya_khan_95?utm_source=qr&dlrf=c3Y1M2hvY3dyaGg=";
const FACEBOOK_URL = "https://www.facebook.com/share/1Cce2bp8wj/";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
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

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
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

// Client's 5 Authentic Exclusive Designs
const ORIGINAL_DESIGNS = [
  {
    id: "navy-gown",
    title: "Royal Navy Blue Embroidered Gown",
    tagline: "An exquisite blend of royal elegance and timeless sophistication",
    category: "Reception & Evening Gowns",
    badge: "Masterpiece Collection",
    images: ["/designs/navy-gown-standing.jpg", "/designs/navy-gown-flare.jpg"],
    price: "Custom Bespoke Order",
    summary:
      "Floor-length heavily flared Anarkali-style gown in rich royal navy blue net with delicate golden floral & vine embroidery, sheer puff sleeves with frill cuffs, and matching embellished hijab.",
    specs: [
      { label: "Outfit Style", value: "Floor-length, heavily flared Anarkali-style gown." },
      { label: "Colour", value: "Rich royal navy blue." },
      { label: "Fabric", value: "Elegant net fabric with a beautiful layered, flowy finish." },
      { label: "Bodice", value: "Beautifully detailed with intricate golden embroidery, creating a rich and luxurious look." },
      { label: "Embroidery", value: "Delicate golden floral and vine embroidery spread gracefully across the entire gown." },
      { label: "Waistline", value: "Beautifully defined waist with fine golden detailing." },
      { label: "Sleeves", value: "Sheer full-length puff sleeves with richly embroidered cuffs and delicate frill finishing." },
      { label: "Hemline", value: "Heavily embroidered golden border with a layered net ruffle finish." },
      { label: "Hijab Styling", value: "Matching navy blue hijab adorned with a delicate pearl and stone embellishment." },
      { label: "Overall Look", value: "Perfect for weddings, receptions, evening parties and festive celebrations." },
    ],
  },
  {
    id: "emerald-angrakha",
    title: "Royal Emerald Green Angrakha Anarkali Set",
    tagline: "A perfect blend of elegance, tradition and royal charm",
    category: "Festive & Bridal Anarkalis",
    badge: "Signature Collection",
    images: ["/designs/emerald-angrakha-standing.jpg", "/designs/emerald-angrakha-sitting.jpg"],
    price: "Made-to-Measure",
    summary:
      "Angrakha-style flared Anarkali gown in rich emerald green paired with vibrant magenta. Features traditional gold ornamental embroidery, sheer embroidered dupatta, and ornamental hanging tassels.",
    specs: [
      { label: "Outfit Style", value: "Angrakha-style flared Anarkali gown." },
      { label: "Colour Combination", value: "Rich emerald green paired with beautiful magenta." },
      { label: "Neckline", value: "Elegant overlapping V-neckline with intricate golden detailing." },
      { label: "Sleeves", value: "Three-quarter sleeves adorned with delicate golden embroidery." },
      { label: "Embroidery", value: "Traditional gold floral and ornamental embroidery all over, with an elaborate embroidered hemline." },
      { label: "Bottom", value: "Matching magenta flared bottom for a graceful and voluminous look." },
      { label: "Dupatta", value: "Sheer magenta net dupatta featuring golden diamond-pattern embroidery, embellished border and delicate hanging details." },
      { label: "Special Details", value: "Decorative magenta and gold tassels enhance the waistline." },
      { label: "Overall Look", value: "A luxurious ethnic ensemble, perfect for weddings, festive celebrations and traditional gatherings." },
    ],
  },
  {
    id: "pink-ombre-saree",
    title: "Pink Ombre Designer Saree with Embroidered Blouse",
    tagline: "Feminine charm, graceful draping and delicate embroidery",
    category: "Designer Sarees",
    badge: "Exclusive Dual-Tone",
    images: ["/designs/pink-ombre-saree-front.jpg", "/designs/pink-ombre-saree-back.jpg"],
    price: "Custom Bespoke Order",
    summary:
      "Premium designer dual-tone saree blending soft baby pink with vibrant hot pink. Features delicate floral lace borders, subtle shimmering work, and a designer sheer embroidered blouse with ornate cuffs.",
    specs: [
      { label: "Outfit Style", value: "Premium designer saree with a stunning dual-tone look." },
      { label: "Colour Combination", value: "Soft baby pink blended with vibrant hot pink." },
      { label: "Saree Fabric", value: "Lightweight, flowy fabric with an elegant and graceful drape." },
      { label: "Saree Detailing", value: "Subtle shimmering embellishments scattered across the saree for a sophisticated finish." },
      { label: "Blouse", value: "Designer blouse featuring a sheer net neckline and full-length sheer sleeves." },
      { label: "Embroidery", value: "Intricate floral embroidery with delicate pink and silver embellishments on the blouse." },
      { label: "Sleeve Cuffs", value: "Beautifully embroidered cuffs adding a rich designer touch." },
      { label: "Saree Border", value: "Heavily embroidered floral lace border in soft pink and silver detailing." },
      { label: "Pallu", value: "Long flowing pallu with a contrasting hot-pink border and elegant embroidered finishing." },
      { label: "Perfect For", value: "Wedding functions, receptions, engagement ceremonies, festive occasions and evening parties." },
    ],
  },
  {
    id: "wine-palazzo-suit",
    title: "Royal Wine Burgundy Embroidered Palazzo Suit",
    tagline: "A sophisticated blend of royal charm and timeless craftsmanship",
    category: "Festive & Palazzo Suits",
    badge: "Royal Pret",
    images: ["/designs/wine-burgundy-palazzo.jpg"],
    price: "Made-to-Measure",
    summary:
      "Three-piece designer ethnic suit in rich wine burgundy / deep maroon with straight-cut kurti, wide-leg palazzo, and scalloped dupatta. Intricate tone-on-tone floral embroidery with delicate beadwork and front tie-up accents.",
    specs: [
      { label: "Outfit Style", value: "Three-piece designer ethnic suit with a straight-cut kurti, wide-leg palazzo and matching dupatta." },
      { label: "Colour", value: "Rich wine burgundy / deep maroon." },
      { label: "Kurti", value: "Beautifully tailored kurti featuring a graceful round neckline with an elegant V-shaped embellished overlay." },
      { label: "Embroidery", value: "Intricate tone-on-tone floral embroidery, enhanced with delicate beadwork, sequins and handcrafted embellishments." },
      { label: "Sleeves", value: "Three-quarter sleeves with rich textured embroidery and decorative finishing." },
      { label: "Palazzo", value: "Matching wide-leg palazzo pants featuring subtle self-design detailing for comfort and grace." },
      { label: "Dupatta", value: "Matching flowing dupatta with delicate embroidered detailing and an elegant scalloped border." },
      { label: "Special Details", value: "Beautiful tie-up detailing at the front, delicate bead accents and finely finished edges." },
      { label: "Perfect For", value: "Wedding celebrations, festive gatherings, family functions, Eid celebrations and special occasions." },
    ],
  },
  {
    id: "champagne-gold-anarkali",
    title: "Champagne Gold & Red Floral Embroidered Anarkali Gown",
    tagline: "Soft champagne elegance with vibrant royal red floral accents",
    category: "Bridal & Reception Anarkalis",
    badge: "Haute Couture",
    images: ["/designs/champagne-gold-anarkali.jpg"],
    price: "Custom Bespoke Order",
    summary:
      "Floor-length full-flared Anarkali gown in champagne beige featuring red floral motifs, golden sequins, full fitted sleeves, and a sheer champagne net dupatta with gold embroidery and tassel finish.",
    specs: [
      { label: "Outfit Style", value: "Floor-length, full-flared Anarkali gown." },
      { label: "Colour", value: "Beautiful champagne beige with rich red floral accents." },
      { label: "Fabric", value: "Elegant, flowy fabric with an all-over embellished finish." },
      { label: "Neckline", value: "Classic round neckline with delicate detailing." },
      { label: "Sleeves", value: "Full-length fitted sleeves featuring intricate floral embellishments." },
      { label: "Embroidery", value: "Beautiful red floral motifs combined with golden sequins and delicate shimmering work throughout." },
      { label: "Dupatta", value: "Matching sheer champagne net dupatta with delicate golden floral embroidery, embellished border and tassel finish." },
      { label: "Silhouette", value: "Graceful, voluminous flare that creates a beautiful flow and royal appearance." },
      { label: "Perfect For", value: "Weddings, receptions, engagement ceremonies, and festive celebrations." },
    ],
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDesignModal, setSelectedDesignModal] = useState<typeof ORIGINAL_DESIGNS[0] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Form State
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formFeedback, setFormFeedback] = useState("");

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
    setFormFeedback("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      event_date: formData.get("event_date"),
      category_interest: formData.get("category_interest"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
        setFormFeedback(data.error || "Failed to submit. Please try WhatsApp directly.");
      }
    } catch {
      setFormStatus("error");
      setFormFeedback("Network error. Please message us directly on WhatsApp.");
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111A29]">
      
      {/* 1. TOP ANNOUNCEMENT BANNER */}
      <aside
        aria-label="Announcement"
        className="bg-[#0F1E36] text-[#E5D2AF] text-[11px] uppercase tracking-[0.2em] py-2 px-4 text-center font-medium"
      >
        <span>{BRAND_NAME} &bull; {BRAND_TAGLINE} &bull; Private Consultations Available</span>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 underline text-white hover:text-[#C5A059] transition inline-flex items-center gap-1 font-semibold"
        >
          WhatsApp: +91 {PHONE_NUMBER} <ArrowRight className="w-3 h-3" />
        </a>
      </aside>

      {/* 2. REFINED & SLEEK DESKTOP HEADER (NO WRAPPING, BALANCED PROPORTIONS) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EAE3D6] shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-full border-2 border-[#0F1E36] flex items-center justify-center font-editorial text-lg font-bold text-[#0F1E36] bg-[#F7F4EE] group-hover:border-[#C5A059] transition">
              ak
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-xl md:text-2xl font-bold tracking-wide text-[#0F1E36] leading-tight">
                {BRAND_NAME}
              </span>
              <span className="text-[10px] text-[#C5A059] font-medium tracking-wide">
                by {DESIGNER_NAME}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Clean Single-Line with Whitespace-Nowrap) */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold tracking-wider text-[#3B4554] whitespace-nowrap">
            <a
              href="#featured-designs"
              className="hover:text-[#0F1E36] hover:border-b-2 border-[#C5A059] py-1 transition"
            >
              Original Collections
            </a>
            <a
              href="#about"
              className="hover:text-[#0F1E36] hover:border-b-2 border-[#C5A059] py-1 transition"
            >
              The Atelier
            </a>
            <a
              href="#social"
              className="hover:text-[#0F1E36] hover:border-b-2 border-[#C5A059] py-1 transition"
            >
              Social Desk
            </a>
            <a
              href="#contact"
              className="hover:text-[#0F1E36] hover:border-b-2 border-[#C5A059] py-1 transition"
            >
              Book Appointment
            </a>
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#D0D6DF] text-[#E1306C] hover:bg-[#FDF2F5] flex items-center justify-center transition"
              title="Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#D0D6DF] text-[#1877F2] hover:bg-[#EFF6FF] flex items-center justify-center transition"
              title="Facebook Page"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F8246] hover:bg-[#186a38] text-white transition text-xs font-semibold tracking-wide shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#0F1E36] p-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#EAE3D6] px-6 py-5 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3 text-xs tracking-wider uppercase text-[#3B4554] font-semibold">
              <a
                href="#featured-designs"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0F1E36] py-1"
              >
                Original Collections
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0F1E36] py-1"
              >
                The Atelier &amp; Designer
              </a>
              <a
                href="#social"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0F1E36] py-1"
              >
                Social Media Desk
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0F1E36] py-1"
              >
                Book Appointment
              </a>
            </nav>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl border border-[#D0D6DF] text-[#E1306C] flex items-center justify-center gap-2 text-xs font-semibold"
              >
                <InstagramIcon className="w-4 h-4" /> Instagram
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl border border-[#D0D6DF] text-[#1877F2] flex items-center justify-center gap-2 text-xs font-semibold"
              >
                <FacebookIcon className="w-4 h-4" /> Facebook
              </a>
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#1F8246] text-white text-xs font-semibold uppercase tracking-wider shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Chat on WhatsApp ({PHONE_NUMBER})
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO SHOWCASE (ROYAL MIDNIGHT NAVY THEME) */}
      <section className="relative bg-[#0F1E36] text-white py-20 md:py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#E5D2AF] text-[11px] tracking-[0.25em] uppercase font-semibold">
              <Crown className="w-3.5 h-3.5 text-[#C5A059]" />
              {DESIGNER_TITLE}
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.1]">
              &ldquo;{BRAND_TAGLINE}&rdquo;
            </h1>

            <p className="max-w-xl text-sm sm:text-base text-[#B0BCCB] font-light leading-relaxed">
              Welcome to <strong className="font-semibold text-white">{BRAND_NAME}</strong> by{" "}
              <strong className="font-semibold text-[#E5D2AF]">{DESIGNER_NAME}</strong>. Bespoke bridal gowns,
              designer sarees, royal anarkalis, palazzo suits, and luxury pret tailored for every special moment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={getWhatsAppLink("Hello Aasiya, I would like to book a bespoke consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1F8246] hover:bg-[#186a38] text-white font-semibold text-xs tracking-wider uppercase transition shadow-lg inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                WhatsApp Consultation (+91 {PHONE_NUMBER})
              </a>
              <a
                href="#featured-designs"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#C5A059] hover:bg-[#C5A059] hover:text-[#0F1E36] text-[#E5D2AF] font-semibold text-xs tracking-wider uppercase transition"
              >
                View 5 Exclusive Collections
              </a>
            </div>

            {/* Badges */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/10 text-left">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Artisanship</p>
                <p className="font-editorial text-lg text-white">Handcrafted Karigari</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Fitting</p>
                <p className="font-editorial text-lg text-white">Made-to-Measure</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Orders</p>
                <p className="font-editorial text-lg text-white">Worldwide Delivery</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#C5A059]/40 shadow-2xl bg-[#091322] relative group">
              <img
                src="/designs/navy-gown-standing.jpg"
                alt="Aasiya Khan Royal Navy Blue Embroidered Gown"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/90 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold">
                  Featured Masterpiece
                </span>
                <h3 className="font-editorial text-2xl text-white font-medium mt-1">
                  Royal Navy Blue Embroidered Gown
                </h3>
                <p className="text-xs text-[#B0BCCB] mt-1">
                  Floor-length flared gown with golden floral vine embroidery &amp; puff sleeves.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. REAL EXCLUSIVE DESIGNS SHOWCASE (ALL 5 COLLECTIONS) */}
      <section id="featured-designs" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">
            The Designer&apos;s Signature Ateliers
          </span>
          <h2 className="font-editorial text-3xl md:text-5xl font-light text-[#0F1E36]">
            Aasiya Khan Exclusive Collections
          </h2>
          <p className="text-xs text-[#5A6578] tracking-wider uppercase max-w-xl mx-auto">
            Explore authentic handcrafted ensembles created by Aasiya Khan with complete fabric, styling, and embroidery specifications
          </p>
        </div>

        <div className="space-y-20">
          {ORIGINAL_DESIGNS.map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-white border border-[#E5DFD5] shadow-lg ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              
              {/* Image Frame: If 2 images, show dual layout; if 1 image, show single high-impact frame */}
              <div className="lg:col-span-6">
                {item.images.length > 1 ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#D0D9E5] bg-[#F0F4F8] group">
                      <img
                        src={item.images[0]}
                        alt={`${item.title} - View 1`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-3 left-3 bg-[#0F1E36]/80 backdrop-blur-md text-white text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md font-medium">
                        Front View
                      </span>
                    </div>

                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#D0D9E5] bg-[#F0F4F8] group">
                      <img
                        src={item.images[1]}
                        alt={`${item.title} - View 2`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-3 left-3 bg-[#0F1E36]/80 backdrop-blur-md text-white text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md font-medium">
                        Detail / Flare View
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden border border-[#D0D9E5] bg-[#F0F4F8] group shadow-md">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#0F1E36]/80 backdrop-blur-md text-white text-[10px] tracking-wider uppercase px-3 py-1 rounded-md font-medium">
                      Studio Portrait
                    </span>
                  </div>
                )}
              </div>

              {/* Outfit Details & Specifications */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F1E36]/5 text-[#C5A059] text-[10px] tracking-[0.25em] uppercase font-bold mb-3">
                    <Gem className="w-3 h-3" />
                    {item.badge}
                  </div>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-[#0F1E36] font-normal leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8C7A5E] uppercase tracking-wider mt-1.5">
                    {item.tagline}
                  </p>
                </div>

                <p className="text-sm text-[#4E596B] leading-relaxed">
                  {item.summary}
                </p>

                {/* Key Spec Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs border-y border-[#F0EAE1] py-4">
                  <div>
                    <span className="text-[#8C7A5E] font-medium block">Style:</span>
                    <span className="text-[#0F1E36] font-semibold">{item.specs[0].value}</span>
                  </div>
                  <div>
                    <span className="text-[#8C7A5E] font-medium block">Colour:</span>
                    <span className="text-[#0F1E36] font-semibold">{item.specs[1].value}</span>
                  </div>
                  <div>
                    <span className="text-[#8C7A5E] font-medium block">Fabric / Craft:</span>
                    <span className="text-[#0F1E36] font-semibold">{item.specs[2].value}</span>
                  </div>
                  <div>
                    <span className="text-[#8C7A5E] font-medium block">Occasions:</span>
                    <span className="text-[#0F1E36] font-semibold">Weddings, Receptions, Festive</span>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <a
                    href={getWhatsAppLink(`Hi Aasiya (${BRAND_NAME}), I would like to order/customize: ${item.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#1F8246] hover:bg-[#186a38] text-white text-xs font-semibold uppercase tracking-wider transition shadow-sm inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    Order on WhatsApp
                  </a>
                  
                  <button
                    onClick={() => {
                      setSelectedDesignModal(item);
                      setActiveImageIndex(0);
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#0F1E36] hover:bg-[#0F1E36] hover:text-white text-[#0F1E36] text-xs font-semibold uppercase tracking-wider transition inline-flex items-center justify-center gap-2"
                  >
                    <Info className="w-4 h-4" />
                    View Specifications
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 5. ABOUT THE DESIGNER & BRANDING */}
      <section id="about" className="py-24 bg-[#F5F0E8] border-y border-[#EAE3D6] px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A059] font-semibold">
              The Designer &amp; Atelier
            </span>
            <h2 className="font-editorial text-3xl md:text-5xl font-light text-[#0F1E36] leading-tight">
              Aasiya Khan
            </h2>
            <p className="text-xs font-bold text-[#8C7A5E] uppercase tracking-widest">
              {DESIGNER_TITLE} &bull; {BRAND_NAME}
            </p>
            <p className="text-sm text-[#5A6578] font-light leading-relaxed">
              &ldquo;{BRAND_TAGLINE}&rdquo; is our guiding philosophy. Every piece is an artistic expression crafted to fit your measurements, personality, and special occasion with absolute perfection.
            </p>
            <p className="text-sm text-[#5A6578] font-light leading-relaxed">
              From bespoke bridal gowns and royal embroidered anarkalis to full-scale fashion freelancing and celebrity styling, Aasiya Khan brings deep karigari knowledge and modern silhouette aesthetics to every client.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#D5C5A8] flex items-center justify-center text-[#C5A059] shrink-0">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#0F1E36] uppercase tracking-wider">
                    Bespoke Made-to-Measure
                  </h4>
                  <p className="text-xs text-[#7A8799] mt-0.5">
                    Individual body patterning, custom sleeve styling, can-can volume, and neckline personalization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#D5C5A8] flex items-center justify-center text-[#C5A059] shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#0F1E36] uppercase tracking-wider">
                    Worldwide Shipping &amp; Safe Delivery
                  </h4>
                  <p className="text-xs text-[#7A8799] mt-0.5">
                    Carefully boxed couture delivered directly to your doorstep across India, UAE, UK, and USA.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <a
                href={getWhatsAppLink("Hello Aasiya, I would like to schedule a private fitting appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0F1E36] hover:bg-[#1A2E4F] text-white text-xs uppercase tracking-widest font-semibold transition shadow-md"
              >
                Schedule Fitting <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#D5C5A8] shadow-2xl bg-white">
              <img
                src="/ak-bag-logo.jpg"
                alt="ak Creation's Boutique Bag"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-[#E0D7C9] p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C5A059] font-bold">Official Studio</p>
              <p className="font-editorial text-2xl text-[#0F1E36] mt-1">{BRAND_NAME}</p>
              <p className="text-[11px] text-[#7A8799] mt-1">Elegance Crafted with Perfection</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SOCIAL CHANNELS & DIRECT CONNECT */}
      <section id="social" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A059] font-semibold">
            Connect With The Designer
          </span>
          <h2 className="font-editorial text-3xl md:text-4xl text-[#0F1E36]">
            Official Social Media &amp; Direct Desk
          </h2>
          <p className="text-xs text-[#7A8799] tracking-wider uppercase">
            Stay updated with our latest runway drops, bridal trials, and real client photos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Instagram */}
          <a
            href={INSTAGRAM_URL}
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
              <p className="text-[10px] uppercase tracking-wider text-[#8C98A8] font-medium">Instagram Profile</p>
              <h4 className="font-editorial text-xl text-[#0F1E36] mt-1">@aasiya_khan_95</h4>
              <p className="text-xs text-[#616E82] mt-1">Reels, bridal trials &amp; backstage fittings.</p>
            </div>
          </a>

          {/* Facebook */}
          <a
            href={FACEBOOK_URL}
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
              <p className="text-[10px] uppercase tracking-wider text-[#8C98A8] font-medium">Facebook Page</p>
              <h4 className="font-editorial text-xl text-[#0F1E36] mt-1">ak Creation&apos;s</h4>
              <p className="text-xs text-[#616E82] mt-1">Community updates &amp; client reviews.</p>
            </div>
          </a>

          {/* WhatsApp Direct */}
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
              <p className="text-[10px] uppercase tracking-wider text-[#8C98A8] font-medium">WhatsApp</p>
              <h4 className="font-editorial text-xl text-[#0F1E36] mt-1">+91 {PHONE_NUMBER}</h4>
              <p className="text-xs text-[#616E82] mt-1">Direct instant chat with Aasiya Khan.</p>
            </div>
          </a>

          {/* Email */}
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
              <p className="text-[10px] uppercase tracking-wider text-[#8C98A8] font-medium">Official Email</p>
              <h4 className="font-editorial text-base text-[#0F1E36] mt-1 truncate">{EMAIL_ADDRESS}</h4>
              <p className="text-xs text-[#616E82] mt-1">Design proposals &amp; bridal queries.</p>
            </div>
          </a>

        </div>
      </section>

      {/* 7. APPOINTMENT BOOKING & CONTACT FORM (DELIVERS DIRECT TO AKCREATIONSDESIGNER@GMAIL.COM) */}
      <section id="contact" className="py-24 px-6 bg-[#F0F4F8] border-t border-[#D9E1EB]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">
              Private Fitting &amp; Consultation
            </span>
            <h2 className="font-editorial text-3xl md:text-5xl font-light text-[#0F1E36]">
              Book Appointment with {DESIGNER_NAME}
            </h2>
            <p className="text-xs text-[#5A6578] tracking-wider uppercase">
              Your inquiry details will be delivered directly to Akcreationsdesigner@gmail.com
            </p>
          </div>

          <div className="bg-white border border-[#D0D9E5] rounded-3xl p-8 sm:p-12 shadow-xl">
            {formStatus === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#1F8246]/10 border border-[#1F8246] text-[#1F8246] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-3xl text-[#0F1E36]">Appointment Request Sent!</h3>
                <p className="text-sm text-[#5A6578] max-w-md mx-auto">
                  Thank you for writing to {BRAND_NAME}. We have received your inquiry at our studio desk and Aasiya Khan will connect with you on WhatsApp (+91 {PHONE_NUMBER}) shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="px-6 py-2.5 rounded-full border border-[#0F1E36] text-[#0F1E36] text-xs uppercase tracking-widest hover:bg-[#0F1E36] hover:text-white transition"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#4E596B] mb-2 font-semibold">
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
                    <label className="block text-[11px] uppercase tracking-wider text-[#4E596B] mb-2 font-semibold">
                      WhatsApp / Mobile Number *
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
                    <label className="block text-[11px] uppercase tracking-wider text-[#4E596B] mb-2 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full bg-[#FAF8F5] border border-[#D0D9E5] rounded-xl px-4 py-3 text-sm text-[#0F1E36] focus:outline-none focus:border-[#0F1E36] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#4E596B] mb-2 font-semibold">
                      Occasion / Event Date
                    </label>
                    <input
                      type="text"
                      name="event_date"
                      placeholder="e.g. Wedding Dec 2026 / Reception"
                      className="w-full bg-[#FAF8F5] border border-[#D0D9E5] rounded-xl px-4 py-3 text-sm text-[#0F1E36] focus:outline-none focus:border-[#0F1E36] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#4E596B] mb-2 font-semibold">
                    Select Outfit / Design
                  </label>
                  <select
                    name="category_interest"
                    className="w-full bg-[#FAF8F5] border border-[#D0D9E5] rounded-xl px-4 py-3 text-sm text-[#0F1E36] focus:outline-none focus:border-[#0F1E36] transition"
                  >
                    <option value="Royal Navy Blue Embroidered Gown">Royal Navy Blue Embroidered Gown</option>
                    <option value="Royal Emerald Green Angrakha Anarkali Set">Royal Emerald Green Angrakha Anarkali Set</option>
                    <option value="Pink Ombre Designer Saree with Embroidered Blouse">Pink Ombre Designer Saree with Embroidered Blouse</option>
                    <option value="Royal Wine Burgundy Embroidered Palazzo Suit">Royal Wine Burgundy Embroidered Palazzo Suit</option>
                    <option value="Champagne Gold & Red Floral Embroidered Anarkali Gown">Champagne Gold & Red Floral Embroidered Anarkali Gown</option>
                    <option value="Other Custom Bespoke Outfit">Other Custom Bespoke Outfit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#4E596B] mb-2 font-semibold">
                    Message / Customization Notes
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Share your preferred colors, fabrics, or customization notes..."
                    className="w-full bg-[#FAF8F5] border border-[#D0D9E5] rounded-xl px-4 py-3 text-sm text-[#0F1E36] focus:outline-none focus:border-[#0F1E36] transition"
                  />
                </div>

                {formStatus === "error" && (
                  <p className="text-rose-600 text-xs font-semibold">{formFeedback}</p>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 rounded-full bg-[#0F1E36] hover:bg-[#1A2E4F] text-white text-xs font-semibold uppercase tracking-[0.25em] transition duration-300 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
                >
                  {formStatus === "submitting" ? (
                    "Sending Request to Studio..."
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" /> Book Consultation with Aasiya Khan
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-[#7A8799] pt-2">
                  Prefer instant chat?{" "}
                  <a
                    href={getWhatsAppLink("Hi Aasiya, I want to book a consultation directly.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1F8246] underline font-bold"
                  >
                    WhatsApp Directly (+91 {PHONE_NUMBER})
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. LUXURY MODAL DRAWER FOR DETAILED SPECIFICATIONS */}
      {selectedDesignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#D0D9E5] flex flex-col">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#E5DFD5] flex items-center justify-between z-10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold">
                  {selectedDesignModal.category}
                </span>
                <h3 className="font-editorial text-2xl text-[#0F1E36] font-semibold">
                  {selectedDesignModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDesignModal(null)}
                className="w-9 h-9 rounded-full bg-[#F0F4F8] hover:bg-[#E5DFD5] text-[#0F1E36] flex items-center justify-center transition"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              
              {/* Photo Switcher */}
              <div className="space-y-3">
                <div className="relative aspect-[3/4] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-[#F0F4F8] border border-[#E5DFD5]">
                  <img
                    src={selectedDesignModal.images[activeImageIndex]}
                    alt={selectedDesignModal.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {selectedDesignModal.images.length > 1 && (
                  <div className="flex gap-2">
                    {selectedDesignModal.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-20 h-24 rounded-lg overflow-hidden border-2 transition ${
                          activeImageIndex === idx ? "border-[#0F1E36] scale-102" : "border-transparent opacity-60"
                        }`}
                      >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Full Specs Table */}
              <div className="space-y-4">
                <h4 className="font-editorial text-xl text-[#0F1E36] border-b border-[#E5DFD5] pb-2 font-semibold">
                  Complete Ensemble Specifications
                </h4>

                <div className="divide-y divide-[#F0EAE1] text-xs">
                  {selectedDesignModal.specs.map((spec, i) => (
                    <div key={i} className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1">
                      <span className="font-bold text-[#8C7A5E] uppercase tracking-wider">
                        {spec.label}:
                      </span>
                      <span className="sm:col-span-2 text-[#111A29] leading-relaxed">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Action CTA */}
              <div className="pt-4 border-t border-[#E5DFD5] flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppLink(`Hi Aasiya (${BRAND_NAME}), I would like to order or customize the ${selectedDesignModal.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-full bg-[#1F8246] hover:bg-[#186a38] text-white text-xs font-semibold uppercase tracking-wider transition text-center shadow-md inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Order on WhatsApp (+91 {PHONE_NUMBER})
                </a>
                <button
                  onClick={() => {
                    const dressTitle = selectedDesignModal.title;
                    setSelectedDesignModal(null);
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                      const select = document.querySelector('select[name="category_interest"]') as HTMLSelectElement;
                      if (select) {
                        select.value = dressTitle;
                      }
                    }
                  }}
                  className="py-3.5 px-6 rounded-full border border-[#0F1E36] text-[#0F1E36] hover:bg-[#0F1E36] hover:text-white text-xs font-semibold uppercase tracking-wider transition"
                >
                  Book Fitting
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* 9. LUXURY FOOTER */}
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

          <div className="flex items-center gap-6 text-xs uppercase tracking-wider text-[#C5A059] font-semibold">
            <a href="#featured-designs" className="hover:text-white transition">
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

      {/* 10. FLOATING WHATSAPP PILL */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1F8246] text-white shadow-2xl hover:scale-105 transition-transform duration-300"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold tracking-wide pr-1 hidden sm:inline-block">
          WhatsApp: {PHONE_NUMBER}
        </span>
      </a>

    </div>
  );
}
