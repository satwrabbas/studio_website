//app\components\Footer.tsx
"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";
import { useTheme } from "@/app/context/ThemeContext";

export default function Footer() {
  const { lang } = useLanguage();
  const { themeColors, isDarkMode, colorPalette } = useTheme();

  const t = {
    ar: {
      ready: "جاهز لإطلاق مشروعك القادم؟",
      sub: "تواصل معنا فوراً لنبدأ بتجسيد فكرتك على أرض الواقع.",
      rights: "جميع الحقوق محفوظة.",
      available: "متاحون للعمل",
      contactBtn: "تواصل معنا عبر واتساب",
      badge: "دعنا نتحدث! 🚀"
    },
    en: {
      ready: "Ready to launch your next project?",
      sub: "Contact us now to discuss details and bring your idea to life.",
      rights: "All rights reserved.",
      available: "Available for work",
      contactBtn: "Contact via WhatsApp",
      badge: "Let's Talk! 🚀"
    },
  };

  const txt = t[lang];

  // رقم الواتساب مع المفتاح الدولي (بدون أصفار في البداية أو علامة +)
  // افترضت المفتاح السوري 963 بناءً على الرقم، يمكنك تغييره إذا لزم الأمر
  const whatsappNumber = "963938457732"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const getGlowColor = () => {
    if (isDarkMode) {
      switch (colorPalette) {
        case "slate": return "bg-blue-500/10";
        case "stone": return "bg-orange-500/10";
        default: return "bg-zinc-500/10";
      }
    } else {
      switch (colorPalette) {
        case "slate": return "bg-blue-400/30";
        case "stone": return "bg-orange-400/30";
        default: return "bg-zinc-400/30";
      }
    }
  };

  return (
    <footer
      className={`relative pt-16 pb-8 px-6 border-t overflow-hidden transition-all duration-700
      ${themeColors.bg} ${themeColors.border}`}
    >
      {/* Background Blur */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 md:w-175 md:h-100 blur-[100px] rounded-full pointer-events-none transition-colors duration-1000
        ${getGlowColor()}`}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-12">
          
          {/* Logo Profile / Avatar replacement for GIF */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 group flex items-center justify-center">
            {/* Animated Glow */}
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full group-hover:bg-emerald-500/40 transition-all duration-500 animate-pulse"></div>
            
            <div className={`relative w-full h-full flex items-center justify-center rounded-3xl border-2 shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:rotate-3
              ${isDarkMode ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
              <Image
                src="/logo.svg"
                alt="ABCE-S Studio"
                width={80}
                height={80}
                className={`w-16 h-16 md:w-20 md:h-20 transition-all duration-300 ${!isDarkMode && "invert"}`}
              />
            </div>

            {/* Floating Badge */}
            <div
              className={`absolute -right-6 -top-4 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-lg rotate-12 animate-bounce
              ${themeColors.accent} ${themeColors.accentText}`}
            >
              {txt.badge}
            </div>
          </div>

          <h2 className={`text-3xl md:text-5xl font-bold mb-4 tracking-tight transition-colors duration-300 ${themeColors.textMain}`}>
            {txt.ready}
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto transition-colors duration-300 ${themeColors.textSub}`}>
            {txt.sub}
          </p>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-emerald-500/20 transition-all duration-300 shadow-xl
            ${themeColors.accent} ${themeColors.accentText} shadow-black/5 border border-transparent hover:border-emerald-500/50`}
          >
            <FaWhatsapp className="text-2xl" />
            <span>{txt.contactBtn}</span>
          </a>
        </div>

        <div className={`h-px w-full mb-8 bg-gradient-to-r from-transparent via-current to-transparent opacity-20 ${themeColors.textSub}`}></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={24}
                height={24}
                className={`w-6 h-6 ${!isDarkMode && "invert"}`}
              />
              <span className={`font-bold tracking-tighter ${themeColors.textMain}`}>
                ABCE-S
              </span>
            </div>
            <div className={`h-4 w-px bg-current opacity-20 ${themeColors.textSub}`}></div>

            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors duration-300 ${isDarkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"}`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              <span className={`text-[11px] font-medium uppercase tracking-wider ${themeColors.textSub}`}>
                {txt.available}
              </span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className={`text-sm ${themeColors.textSub}`}>
              © {new Date().getFullYear()} ABCE-S. {txt.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}