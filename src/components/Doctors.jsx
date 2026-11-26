import React from 'react';
import { doctors } from '../data/luminaraData';
import { UserCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

/** Tooth pattern: 1 odontogram glyph tiled, ~6KB inline, no image request. */
const TOOTH_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 24 24' fill='none' stroke='%23ec4899' stroke-width='0.7' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2C8.5 2 6 4.5 6 8c0 3 1.5 6.5 2.5 9.5.6 1.8 1.4 3.5 2.3 4.5.4.4.9.5 1.2.1.3-.3.4-.8.4-1.3v-5c0-.6.4-1 1-1s1 .4 1 1v5c0 .5.1 1 .4 1.3.3.4.8.3 1.2-.1.9-1 1.7-2.7 2.3-4.5C19.5 14.5 21 11 21 8c0-3.5-2.5-6-6-6-1.2 0-2.2.4-3 1.1C14.2 2.4 13.2 2 12 2z'/%3E%3C/svg%3E\")";

export default function Doctors() {
  const { lang } = useLanguage();
  const currentDoctors = doctors[lang] || doctors.id;
  const isEn = lang === 'en';

  return (
    <section
      id="jadwal-dokter"
      className="relative py-20 bg-gradient-to-b from-[#FDF3FA] via-white to-[#FBEAF7] overflow-hidden"
    >
      {/* Tooth pattern + soft pink glows */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: TOOTH_PATTERN, backgroundRepeat: 'repeat', backgroundSize: '110px 110px' }}
        aria-hidden="true"
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-200/30 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-fuchsia-200/25 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wide mb-3">
              <UserCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{isEn ? 'Professional Medical Team' : 'Tim Medis Profesional'}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
              {isEn ? 'Dentists Team & ' : 'Tim Dokter Gigi & '}
              <span className="text-pink-700">{isEn ? 'Practice Schedule' : 'Jadwal Praktik'}</span>
            </h2>
            <p className="text-slate-600 text-sm lg:text-base mt-2">
              {isEn
                ? 'Every treatment is handled directly by experienced general dentists and dental specialists.'
                : 'Setiap perawatan ditangani langsung oleh dokter gigi umum & dokter gigi spesialis berpengalaman.'}
            </p>
          </div>
        </ScrollReveal>

        {/* 4-column grid — one row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentDoctors.map((doc, idx) => (
            <ScrollReveal key={idx} delay={idx * 120} direction="up">
              <div className="bg-gradient-to-b from-pink-50/80 to-white rounded-2xl border border-pink-100 shadow-sm hover:shadow-xl hover:border-pink-300 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group h-full">

                {/* Photo */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-pink-50">
                  <img
                    src={doc.image || '/doctors/placeholder-doctor.svg'}
                    alt={doc.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/doctors/placeholder-doctor.svg';
                    }}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-emerald-700 border border-emerald-100 shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                    <span>{isEn ? 'Available' : 'Ada Jadwal'}</span>
                  </div>
                </div>

                {/* Profile + Schedule */}
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-pink-700">{doc.role}</span>
                  <h3 className="text-lg font-bold text-slate-800 mt-1">{doc.name}</h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{doc.spec}</p>

                  <div className="mt-4 pt-4 border-t border-pink-100 space-y-2 text-xs text-slate-600">
                    {doc.schedules.map((sched, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between gap-2">
                        <span className="font-medium text-slate-600">{sched.day}</span>
                        <span className="font-semibold text-slate-700 bg-white px-2 py-0.5 rounded whitespace-nowrap">
                          {sched.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}