import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { Quote, Activity, Heart, Database, Sparkles, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-sky-600 uppercase">
              02. Tentang Saya
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Menjembatani Farmasi & Teknologi Informasi
            </h2>
          </div>
        </div>

        {/* Narrative & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Main Story (8 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Biografi Singkat
              </span>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {PROFILE.bio}
              </p>
            </div>

            {/* Interest Highlights */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-sky-50/50 border border-sky-100">
                <Heart className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Latar Belakang</span>
                  <span className="text-[11px] text-slate-600">SMK Farmasi Majenang</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-sky-50/50 border border-sky-100">
                <Activity className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Pengalaman Nyata</span>
                  <span className="text-[11px] text-slate-600">5 Bulan PKL Puskesmas</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-sky-50/50 border border-sky-100">
                <Database className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Cita-Cita Karir</span>
                  <span className="text-[11px] text-slate-600">SIMRS Rumah Sakit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote & Motto Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-sky-500/10 blur-2xl pointer-events-none"
            />

            <div>
              <Quote className="w-10 h-10 text-sky-400/40 mb-6" />
              <span className="text-xs uppercase tracking-widest text-sky-400 font-bold block mb-3">
                Motto Hidup
              </span>
              <blockquote className="font-editorial text-2xl sm:text-3xl font-bold text-white tracking-wide leading-snug italic">
                "{PROFILE.quote}"
              </blockquote>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-300">
                Fadhila · Mahasiswa Sistem Informasi
              </span>
              <a
                href="#education"
                className="text-xs font-bold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 uppercase tracking-wider"
              >
                <span>Pendidikan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
