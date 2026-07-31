import React from 'react';
import { doctors } from '../data/luminaraData';
import { Calendar, Clock, UserCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function Doctors({ onOpenBooking }) {
  const { lang } = useLanguage();
  const currentDoctors = doctors[lang] || doctors.id;
  const isEn = lang === 'en';

  return (
    <section id="jadwal-dokter" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-bold uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5" />
              <span>{isEn ? 'Professional Medical Team' : 'Tim Medis Profesional'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isEn ? 'Specialist Dentists & ' : 'Dokter Gigi Spesialis & '}
              <span className="text-pink-600">{isEn ? 'Practice Schedule' : 'Jadwal Praktik'}</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {isEn
                ? 'Every treatment is handled directly by trained, friendly, and highly competent specialist dentists.'
                : 'Setiap perawatan ditangani langsung oleh dokter gigi spesialis terlatih, ramah, dan kompeten di bidangnya.'
              }
            </p>
          </div>
        </ScrollReveal>

        {/* Doctor Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentDoctors.map((doc, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} direction="up">
              <div 
                className="bg-slate-50 hover:bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group hover:-translate-y-1 h-full"
              >
                {/* Doctor Photo */}
                <div className="relative h-72 overflow-hidden bg-pink-100">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="bg-pink-600 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                      {doc.role}
                    </span>
                    <h3 className="text-xl font-bold mt-1 text-white">{doc.name}</h3>
                  </div>
                </div>

                {/* Details & Schedule */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="font-semibold text-slate-400 text-xs uppercase tracking-wider block mb-1">
                        {isEn ? 'Core Expertise:' : 'Keahlian Utama:'}
                      </span>
                      <p className="text-slate-700 font-medium">
                        {doc.spec}
                      </p>
                    </div>

                    <div className="bg-pink-50/70 p-3 rounded-2xl border border-pink-100 flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-pink-900 text-xs block">{isEn ? 'Practice Schedule:' : 'Jadwal Praktik:'}</span>
                        <span className="text-pink-800 text-xs font-semibold">{doc.schedule}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking(isEn ? `Consultation with ${doc.name}` : `Pemeriksaan dengan ${doc.name}`)}
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-pink-600 text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition-all shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{isEn ? 'Select Doctor & Book' : 'Pilih Dokter & Reservasi'}</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
