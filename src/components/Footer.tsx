import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { formatWhatsAppUrl, formatInstagramUrl } from '../utils/helpers';
import { ArrowUp, Instagram, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800">
          {/* Brand mark */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-sky-400 font-extrabold tracking-tighter text-2xl">
                /FL
              </span>
              <span className="text-white tracking-wider text-base font-semibold uppercase">
                {PROFILE.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 italic">
              "{PROFILE.quote}"
            </p>
          </div>

          {/* Nav links */}
          <nav
            aria-label="Footer Navigasi"
            className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold tracking-wider text-slate-400 uppercase"
          >
            <a href="#home" className="hover:text-white transition-colors">
              Beranda
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              Tentang
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              Pendidikan
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Pengalaman
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Keahlian
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Kontak
            </a>
          </nav>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Email Fadhila"
              className="p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={formatWhatsAppUrl(PROFILE.phone)}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp Fadhila"
              className="p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={formatInstagramUrl(PROFILE.instagram)}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram @fadhilalestari_"
              className="p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-pink-400 hover:bg-slate-700 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-sky-500 text-slate-900 hover:bg-sky-400 transition-colors ml-2"
              aria-label="Kembali ke atas"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Hak cipta dilindungi.</p>
          <p className="text-slate-400">
            Sistem Informasi Kesehatan · {PROFILE.location}
          </p>
        </div>
      </div>
    </footer>
  );
};
