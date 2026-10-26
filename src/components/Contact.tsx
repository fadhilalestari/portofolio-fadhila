import React, { useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import { formatWhatsAppUrl, formatInstagramUrl, validateContactForm } from '../utils/helpers';
import { Mail, Phone, Instagram, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const validation = validateContactForm(name, email, message);
    if (!validation.isValid) {
      setErrorMsg(validation.error || 'Mohon lengkapi formulir dengan benar.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    setErrorMsg('');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info (6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-[0.2em] text-sky-600 uppercase">
                06. Informasi Kontak
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                Mari Terhubung & Berkolaborasi
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Terbuka untuk diskusi seputar sistem informasi kesehatan, peluang magang, proyek kolaboratif, maupun konsultasi akademik.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-sky-300 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center border-[1.5px] border-sky-500 text-sky-500 rounded-lg bg-sky-50/50 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Email
                  </span>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors truncate block"
                  >
                    {PROFILE.email}
                  </a>
                </div>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-xs text-sky-600 font-semibold hover:underline hidden sm:inline"
                >
                  Kirim Email
                </a>
              </div>

              {/* Telepon / WhatsApp */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-sky-300 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center border-[1.5px] border-emerald-500 text-emerald-600 rounded-lg bg-emerald-50/50 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Telepon / WhatsApp
                  </span>
                  <a
                    href={formatWhatsAppUrl(PROFILE.phone)}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors truncate block"
                  >
                    {PROFILE.phone}
                  </a>
                </div>
                <a
                  href={formatWhatsAppUrl(PROFILE.phone)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs text-emerald-600 font-semibold hover:underline hidden sm:inline"
                >
                  Chat WhatsApp
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-sky-300 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center border-[1.5px] border-pink-500 text-pink-600 rounded-lg bg-pink-50/50 shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Instagram
                  </span>
                  <a
                    href={formatInstagramUrl(PROFILE.instagram)}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-pink-600 transition-colors truncate block"
                  >
                    {PROFILE.instagram}
                  </a>
                </div>
                <a
                  href={formatInstagramUrl(PROFILE.instagram)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs text-pink-600 font-semibold hover:underline hidden sm:inline"
                >
                  Kunjungi Profil
                </a>
              </div>

              {/* Lokasi */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-10 h-10 flex items-center justify-center border-[1.5px] border-slate-400 text-slate-600 rounded-lg bg-slate-50 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Lokasi
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {PROFILE.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (6 Cols) */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
                  Pesan Berhasil Terkirim
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Terima kasih, {name}! Fadhila telah menerima pesan Anda dan akan menghubungi Anda di {email} segera.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-editorial text-2xl font-bold text-slate-900 mb-1">
                    Tinggalkan Pesan
                  </h3>
                  <p className="text-xs text-slate-500">
                    Kirimkan pesan langsung kepada Fadhila melalui formulir berikut.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Nama Lengkap *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Rian Pratama"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Alamat Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rian@example.com"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Isi Pesan *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold tracking-wider text-white bg-slate-900 hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/20 rounded-lg transition-all flex items-center justify-center gap-2 uppercase disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Mengirim...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
