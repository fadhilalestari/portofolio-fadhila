import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'BERANDA', id: 'home' },
    { href: '#about', label: 'TENTANG', id: 'about' },
    { href: '#education', label: 'PENDIDIKAN', id: 'education' },
    { href: '#experience', label: 'PENGALAMAN', id: 'experience' },
    { href: '#skills', label: 'KEAHLIAN', id: 'skills' },
    { href: '#contact', label: 'KONTAK', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-slate-900 font-bold tracking-tight text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
        >
          <span className="text-sky-500 font-extrabold tracking-tighter text-2xl group-hover:scale-105 transition-transform">
            /FL
          </span>
          <span className="text-slate-900 tracking-wider text-base font-semibold uppercase">
            Fadhila
          </span>
        </a>

        {/* Zone 2: Clean single-line uppercase nav links */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-widest text-slate-600 uppercase"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                  isActive ? 'text-sky-600 font-bold' : 'text-slate-600 hover:text-sky-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider text-white bg-slate-900 hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/20 rounded-md transition-all whitespace-nowrap shrink-0 uppercase"
          >
            <span>Hubungi Saya</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md"
            aria-expanded={mobileMenuOpen}
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-6 py-6 shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-widest text-slate-800 hover:text-sky-600 py-2 border-b border-slate-100 last:border-none uppercase"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-xs font-semibold tracking-wider text-white bg-sky-500 rounded-md hover:bg-sky-600 block uppercase"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
