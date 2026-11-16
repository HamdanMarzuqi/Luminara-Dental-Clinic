import React, { useEffect, useRef, useState } from 'react';
import { testimonials } from '../data/luminaraData';
import { Star, Quote, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { lang } = useLanguage();
  const currentTestimonials = testimonials[lang] || testimonials.id;
  const isEn = lang === 'en';

  // Mobile: native scroll-snap swipe (no carousel library). Desktop keeps the grid.
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const first = el.firstElementChild;
      if (!first) return;
      const step = first.offsetWidth + 20; // card width + gap-5
      setActive(Math.min(currentTestimonials.length - 1, Math.max(0, Math.round(el.scrollLeft / step))));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [currentTestimonials.length]);

  const goTo = (idx) => {
    const el = trackRef.current;
    const card = el?.children[idx];
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' });
  };

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
                : 'Dengar langsung cerita kepuasan dari ribuan pasien, influencer, dan keluarga yang telah mempercayakan senyum mereka kepada kami.'}
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile: swipeable scroll-snap track. Desktop (md+): 2–3 column grid. */}
        <ScrollReveal delay={100} direction="up">
          <div
            ref={trackRef}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label={isEn ? 'Patient testimonials, swipe or use arrow keys' : 'Testimoni pasien, geser atau pakai tombol panah'}
            className="mt-12 md:mt-14 flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8
                       overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth
                       scroll-px-4 -mx-4 px-4 md:mx-0 md:px-0 pb-2 md:pb-0
                       focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-400
                       [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {currentTestimonials.map((item, idx) => (
              <div
                key={idx}
                role="group"
                aria-roledescription={isEn ? 'slide' : 'slide'}
                aria-label={`${idx + 1} / ${currentTestimonials.length}`}
                className="snap-center w-[85%] shrink-0 md:w-auto md:shrink md:snap-align-none"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-7 sm:p-8 rounded-3xl flex flex-col justify-between hover:bg-white/15 transition-colors duration-300 shadow-xl group h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-400 gap-1" aria-label={`${item.rating} / 5`}>
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-pink-400/40 group-hover:text-pink-400 transition-colors" aria-hidden="true" />
                    </div>

                    <p className="text-slate-200 text-sm leading-relaxed italic">
                      &ldquo;{item.text}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt=""
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover border-2 border-pink-400 shrink-0"
                    />
                    <div>
                      <h3 className="font-bold text-white text-sm">{item.name}</h3>
                      <span className="text-xs text-pink-300 font-medium block">{item.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Swipe affordance: dots on mobile only, desktop keeps the grid */}
        <div className="mt-2 flex md:hidden items-center justify-center">
          {currentTestimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              aria-label={
                isEn
                  ? `Go to testimonial ${idx + 1} of ${currentTestimonials.length}`
                  : `Ke testimoni ${idx + 1} dari ${currentTestimonials.length}`
              }
              aria-current={active === idx ? 'true' : undefined}
              className="w-11 h-11 grid place-items-center"
            >
              <span
                className={`block rounded-full transition-all ${
                  active === idx ? 'w-6 h-2 bg-pink-400' : 'w-2 h-2 bg-white/40'
                }`}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}