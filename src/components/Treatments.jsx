import React, { useState } from 'react';
import { treatments } from '../data/duwaData';
import { Sparkles, ArrowRight, CheckCircle2, MessageCircle, Info, X } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function Treatments({ onOpenBooking }) {
  const { lang } = useLanguage();
  const currentTreatments = treatments[lang] || treatments.id;
  const isEn = lang === 'en';

  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeModal, setActiveModal] = useState(null);

  const categories = isEn
    ? ['Semua', 'Orthodontics', 'Cleaning', 'Aesthetics', 'Restoration', 'Pediatric']
    : ['Semua', 'Ortodonti', 'Pembersihan', 'Estetika', 'Restorasi', 'Gigi Anak'];

  const filteredTreatments = selectedCategory === 'Semua' 
    ? currentTreatments 
    : currentTreatments.filter(t => t.category === selectedCategory);

  return (
    <section id="perawatan" className="py-20 bg-slate-50 border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? 'Comprehensive Dental Services' : 'Layanan Kedokteran Gigi Lengkap'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isEn ? 'Professional & Modern ' : 'Perawatan Gigi '}
              <span className="text-pink-600">{isEn ? 'Dental Care' : 'Profesional & Modern'}</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {isEn
                ? 'From orthodontic braces, painless scaling, aesthetic teeth whitening, to specialized pediatric dentistry.'
                : 'Dari perawatan behel ortodonti, pembersihan karang gigi tanpa rasa sakit, bleaching estetika, hingga perawatan khusus anak-anak.'
              }
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={100} direction="up">
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-pink-600 text-white shadow-md shadow-pink-600/25 scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Treatment Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTreatments.map((item, idx) => (
            <ScrollReveal key={item.id} delay={(idx % 4) * 100} direction="up">
              <div
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group hover:-translate-y-1 h-full"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 right-3 bg-pink-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                    {item.badge}
                  </span>
                  
                  <span className="absolute bottom-3 left-3 text-white text-xs font-semibold px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-md border border-white/30">
                    {item.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-pink-600 transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <button
                      onClick={() => setActiveModal(item)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-pink-600 hover:text-pink-700"
                    >
                      <span>{isEn ? 'Details' : 'Detail Info'}</span>
                      <Info className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenBooking(item.name)}
                      className="inline-flex items-center gap-1.5 bg-pink-50 hover:bg-pink-600 text-pink-700 hover:text-white text-xs font-bold px-3 py-1.5 rounded-xl transition-all"
                    >
                      <span>Booking</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Treatment Detail Modal */}
        {activeModal && (
          <div 
            onClick={(e) => e.target === e.currentTarget && setActiveModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/70 backdrop-blur-sm animate-fadeIn overflow-y-auto"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[90vh] sm:max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-slate-100 relative animate-scaleUp my-auto">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                aria-label="Tutup Modal"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 rounded-full bg-slate-900/50 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="relative h-44 sm:h-56 shrink-0">
                <img
                  src={activeModal.image}
                  alt={activeModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6">
                  <span className="bg-pink-500 text-white text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-md">
                    {activeModal.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 leading-tight">{activeModal.name}</h3>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-3.5 sm:space-y-4 overflow-y-auto flex-1 custom-scrollbar text-left">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {activeModal.desc}
                </p>

                <div className="bg-pink-50 p-3.5 sm:p-4 rounded-2xl border border-pink-100 space-y-2 text-xs text-pink-900">
                  <div className="font-bold text-pink-800 text-xs sm:text-sm">{isEn ? 'Key Advantages:' : 'Keunggulan Perawatan Ini:'}</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                    <span>{isEn ? 'Performed directly by experienced specialist dentists' : 'Ditangani langsung oleh Dokter Gigi Spesialis berpengalaman'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                    <span>{isEn ? 'Sterile medical-grade equipment & painless techniques' : 'Peralatan steril standar medis & tanpa rasa sakit'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                    <span>{isEn ? 'Detailed examination & consultation prior to procedure' : 'Konsultasi & pemeriksaan detail sebelum tindakan'}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2.5 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    {isEn ? 'Close' : 'Tutup'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const name = activeModal.name;
                      setActiveModal(null);
                      onOpenBooking(name);
                    }}
                    className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isEn ? 'Book This Treatment' : 'Reservasi Perawatan Ini'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
