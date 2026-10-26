import React from 'react';
import { SKILL_LIST } from '../data/portfolioData';
import { Wrench, Pill, Laptop, ArrowRight } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-sky-600 uppercase flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-sky-500" />
              <span>05. Keahlian & Fokus</span>
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Kompetensi & Minat Belajar
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
            Perpaduan kompetensi dasar farmasi praktis dengan proses pembelajaran mendalam di bidang sistem informasi.
          </p>
        </div>

        {/* 2 Primary Pillars Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Pillar 1: Pelayanan farmasi dasar */}
          <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/70 hover:border-sky-300 transition-colors space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
              <Pill className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                Keahlian Utama #1
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
                Pelayanan Farmasi Dasar
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Memahami alur pelayanan kefarmasian, penyiapan obat sesuai resep dokter, pengecekan tanggal kedaluwarsa, penataan stok obat rapi, dan pencatatan mutasi obat harian.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-600">
              <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">Dispensing Obat</span>
              <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">Manajemen Stok</span>
              <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">e-Puskesmas</span>
            </div>
          </div>

          {/* Pillar 2: Sedang belajar dasar-dasar sistem informasi */}
          <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/70 hover:border-sky-300 transition-colors space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                Keahlian Utama #2 (Sedang Ditempuh)
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
                Dasar-Dasar Sistem Informasi
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sedang aktif mempelajari dasar-dasar sistem informasi di Universitas Komputama: logika algoritma, perancangan basis data, analisis alur proses bisnis kesehatan, dan arsitektur SIMRS.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-600">
              <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">Basis Data</span>
              <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">Analisis Sistem</span>
              <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">SIMRS</span>
            </div>
          </div>
        </div>

        {/* Detailed Competency List */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 space-y-6">
          <h3 className="font-editorial text-2xl font-bold text-slate-900">
            Rincian Kompetensi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_LIST.map((skill, sIdx) => (
              <div key={sIdx} className="bg-white p-5 rounded-xl border border-slate-200/80 space-y-2.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-900">{skill.name}</span>
                  <span className="text-xs font-semibold text-sky-600">{skill.categoryLabel}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-slate-900 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Bercita-cita berkontribusi pada pengembangan sistem informasi rumah sakit (SIMRS) yang terintegrasi dan efisien.
            </span>
            <a
              href="#contact"
              className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1 uppercase tracking-wider"
            >
              <span>Hubungi Fadhila</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
