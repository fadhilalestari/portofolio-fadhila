import React, { useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import { formatWhatsAppUrl } from '../utils/helpers';
import { Mail, Phone, ArrowDown, ArrowUpRight, Check, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 lg:pt-32 lg:pb-24 flex items-center overflow-hidden bg-white"
    >
      {/* Background Soft Curved Geometry */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 sm:-right-12 lg:right-0 top-1/2 -translate-y-1/2 w-[550px] sm:w-[700px] lg:w-[900px] h-[550px] sm:h-[700px] lg:h-[900px] rounded-full bg-gradient-to-br from-sky-50 via-slate-50/80 to-transparent -z-10 blur-sm"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:space-y-8 z-10">
            {/* Kicker with accent line */}
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-500 uppercase block">
                HALO, NAMA SAYA
              </span>
              <div className="w-10 sm:w-12 h-[2.5px] bg-slate-400 rounded-full" />
            </div>

            {/* Headline: Fadhila */}
            <div className="space-y-3">
              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.08] text-balance">
                {PROFILE.name}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-700 max-w-xl leading-relaxed">
                "{PROFILE.tagline}"
              </p>
            </div>

            {/* Quick Contact Items with Cyan Outline Boxes */}
            <div className="pt-2 space-y-3.5">
              {/* Email row */}
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 flex items-center justify-center border-[1.5px] border-sky-500 text-sky-500 rounded bg-sky-50/40 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-xs sm:text-sm font-semibold tracking-wider text-slate-700 hover:text-sky-600 uppercase transition-colors"
                >
                  {PROFILE.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-[11px] text-slate-400 hover:text-sky-600 ml-1 underline decoration-dotted transition-colors"
                  title="Salin email"
                >
                  {copiedEmail ? 'Tersalin!' : 'Salin'}
                </button>
              </div>

              {/* Phone / WhatsApp row */}
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 flex items-center justify-center border-[1.5px] border-sky-500 text-sky-500 rounded bg-sky-50/40 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href={formatWhatsAppUrl(PROFILE.phone)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs sm:text-sm font-semibold tracking-wider text-slate-700 hover:text-sky-600 uppercase transition-colors"
                >
                  {PROFILE.phone}
                </a>
                <span className="text-[11px] text-emerald-600 font-medium">· WhatsApp</span>
              </div>
            </div>

            {/* Requested Action Buttons: Lihat Pengalaman | Hubungi Saya */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                className="px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white bg-slate-900 hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/20 rounded-md transition-all inline-flex items-center gap-2 uppercase"
              >
                <span>Lihat Pengalaman</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors inline-flex items-center gap-2 uppercase"
              >
                <span>Hubungi Saya</span>
                <ArrowUpRight className="w-4 h-4 text-sky-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Circular Hero Frame with Formal Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
            <div className="relative group">
              {/* Outer decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-sky-100 -z-10 animate-pulse duration-1000" />
              <div className="absolute -inset-8 rounded-full border border-slate-100/60 -z-10" />

              {/* The Circular Hero Frame */}
              <div className="w-[290px] h-[290px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden bg-sky-700 shadow-2xl shadow-sky-950/20 relative border-4 border-white transition-transform duration-500 group-hover:scale-[1.01]">
                <img
                  src={PROFILE.heroImage}
                  alt="Fadhila - Mahasiswa Sistem Informasi"
                  className="w-full h-full object-cover object-[center_18%] select-none transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-3 -left-3 sm:bottom-4 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-slate-200/80 shadow-lg flex items-center gap-2.5 max-w-[260px]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  Mahasiswa S1 Sistem Informasi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
