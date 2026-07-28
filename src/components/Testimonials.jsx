import React from 'react';
import { testimonials } from '../data/duwaData';
import { Star, Quote, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { lang } = useLanguage();
  const currentTestimonials = testimonials[lang] || testimonials.id;
  const isEn = lang === 'en';

  return (
    <section id="testimoni" className="py-20 bg-gradient-to-b from-slate-900 to-purple-950 text-white relative overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-pink-400" />
              <span>{isEn ? 'Patient Experience' : 'Pengalaman Pasien'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isEn ? 'Words From ' : 'Kata '}
              <span className="text-pink-400">{isEn ? 'Luminara Friends' : 'Sahabat Luminara'}</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              {isEn
                ? 'Hear real stories of satisfaction from thousands of patients, influencers, and families who trusted us.'
                : 'Dengar langsung cerita kepuasan dari ribuan pasien, influencer, dan keluarga yang telah mempercayakan senyum mereka kepada kami.'
              }
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTestimonials.map((item, idx) => (
            <ScrollReveal key={idx} delay={(idx % 3) * 150} direction="up">
              <div 
                className="bg-white/10 backdrop-blur-md border border-white/15 p-8 rounded-3xl flex flex-col justify-between hover:bg-white/15 transition-all duration-300 shadow-xl group hover:-translate-y-1 h-full"
              >
                <div className="space-y-4">
                  {/* Quote Icon & Stars */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-pink-400/40 group-hover:text-pink-400 transition-colors" />
                  </div>

                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed italic">
                    "{item.text}"
                  </p>
                </div>

                {/* Author Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-pink-400"
                  />
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.name}</h4>
                    <span className="text-xs text-pink-300 font-medium block">{item.title}</span>
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
