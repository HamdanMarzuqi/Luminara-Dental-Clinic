import React from 'react';
import { articles } from '../data/luminaraData';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function Articles() {
  const { lang } = useLanguage();
  const currentArticles = articles[lang] || articles.id;
  const isEn = lang === 'en';

  return (
    <section id="artikel" className="py-20 bg-slate-50 relative border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isEn ? 'Dental Education & Info' : 'Edukasi & Informasi Gigi'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {isEn ? 'Dental Health ' : 'Artikel & Tips '}
                <span className="text-pink-600">{isEn ? 'Articles & Tips' : 'Kesehatan Gigi'}</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                {isEn
                  ? 'Discover insights about braces care, gum health, and family dental tips from our specialist team.'
                  : 'Pelajari informasi seputar perawatan behel, kesehatan gusi, dan tips merawat senyum keluarga dari tim spesialis kami.'
                }
              </p>
            </div>

            <a
              href="https://luminaradental.com/artikel.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-pink-600 hover:text-pink-700 hover:underline"
            >
              <span>{isEn ? 'View All Articles' : 'Lihat Semua Artikel'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>

        {/* Article Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentArticles.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 150} direction="up">
              <article 
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group hover:-translate-y-1 h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                      <span>{item.date}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-pink-600 transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-3">
                      {item.snippet}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-pink-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>{isEn ? 'Read Full Article' : 'Baca Selengkapnya'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
