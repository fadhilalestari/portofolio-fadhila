import React from 'react';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import { Briefcase, Calendar, Clock, CheckCircle2, Monitor, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-sky-600 uppercase flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-sky-500" />
              <span>04. Pengalaman Praktik</span>
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Praktik Kerja Lapangan (PKL)
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
            Pengalaman nyata menangani alur kefarmasian langsung di fasilitas kesehatan masyarakat dan mengenal sistem digital pelayanan.
          </p>
        </div>

        {/* Experience Showcase Card */}
        {EXPERIENCE_LIST.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden p-8 sm:p-12 space-y-8"
          >
            {/* Header Lockup */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 uppercase tracking-wider">
                  <span>{exp.role}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </span>
                </div>
                <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900">
                  {exp.organization}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Kec. Wanareja, Kab. Cilacap</span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-200 text-xs font-mono text-slate-700">
                <Calendar className="w-4 h-4 text-sky-500" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              {exp.description}
            </p>

            {/* 5 Specific Tasks requested by the user */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Tugas & Tanggung Jawab Utama
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.tasks.map((task, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50/70 border border-slate-200/70 hover:bg-sky-50/40 hover:border-sky-200 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800 leading-snug">
                      {task}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* e-Puskesmas Highlight Banner */}
            <div className="p-6 rounded-xl bg-sky-50 border border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-sky-500 text-white flex items-center justify-center shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-950">
                    Sistem Digital Kesehatan yang Dipelajari
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {exp.systemHighlight}
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold text-sky-700 bg-white px-3.5 py-1.5 rounded-md border border-sky-200 self-start sm:self-auto">
                Pengalaman Praktik Langsung
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
