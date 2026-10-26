import React from 'react';
import { EDUCATION_LIST } from '../data/portfolioData';
import { GraduationCap, Calendar, Building2, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-sky-600 uppercase flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-sky-500" />
              <span>03. Riwayat Pendidikan</span>
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Jejak Akademik & Studi
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
            Fondasi keilmuan kefarmasian yang kini diperkuat dengan pendidikan formal bidang Sistem Informasi.
          </p>
        </div>

        {/* Structured Table matching user markdown */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <th scope="col" className="py-4 px-6 sm:px-8">
                    Periode
                  </th>
                  <th scope="col" className="py-4 px-6 sm:px-8">
                    Institusi
                  </th>
                  <th scope="col" className="py-4 px-6 sm:px-8">
                    Keterangan
                  </th>
                  <th scope="col" className="py-4 px-6 sm:px-8 text-right">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {EDUCATION_LIST.map((edu) => (
                  <tr key={edu.id} className="hover:bg-sky-50/30 transition-colors">
                    <td className="py-5 px-6 sm:px-8 font-mono text-xs text-slate-600 tabular-nums whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                        <span>{edu.period}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 sm:px-8 font-bold text-slate-900 whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{edu.institution}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 sm:px-8 text-slate-700">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-sky-500 shrink-0" />
                        <span className="font-medium">{edu.detail}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 sm:px-8 text-right whitespace-nowrap">
                      <span className="text-xs font-semibold text-slate-600">
                        {edu.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2-Card Visual Representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-xl border border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-sky-600 font-semibold tracking-wider">
                  {edu.period}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  {edu.badge}
                </span>
              </div>
              <h3 className="font-editorial text-2xl font-bold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">
                {edu.institution}
              </h3>
              <p className="text-sm font-semibold text-slate-700">
                {edu.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
