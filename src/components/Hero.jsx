import React from 'react';
import { MessageCircle, ShieldCheck, Heart, Star, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onOpenBooking }) {
  const { lang } = useLanguage();

  const isEn = lang === 'en';

  return (
    <section id="beranda" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-hero-pink overflow-hidden">

      {/* Decorative Sparkles — scattered Lucide icons */}
      <div className="absolute top-24 left-[12%] text-pink-400 pointer-events-none select-none">
        <Sparkles className="w-7 h-7 animate-sparkle" strokeWidth={1.5} />
      </div>
      <div className="absolute top-44 right-[18%] text-pink-400 pointer-events-none select-none">
        <Sparkles className="w-6 h-6 animate-sparkle animate-sparkle-delay-1" strokeWidth={1.5} />
      </div>
      <div className="absolute top-72 left-[8%] text-pink-300 pointer-events-none select-none">
        <Sparkles className="w-5 h-5 animate-sparkle animate-sparkle-delay-2" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-32 right-[10%] text-pink-400 pointer-events-none select-none">
        <Sparkles className="w-6 h-6 animate-sparkle animate-sparkle-delay-3" strokeWidth={1.5} />
      </div>
      <div className="absolute top-1/3 left-[45%] text-pink-300 pointer-events-none select-none">
        <Sparkles className="w-5 h-5 animate-sparkle animate-sparkle-delay-1" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-20 left-[30%] text-pink-400 pointer-events-none select-none">
        <Sparkles className="w-6 h-6 animate-sparkle animate-sparkle-delay-2" strokeWidth={1.5} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/80 border border-pink-200 text-pink-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-pink-600 animate-pulse" />
              <span>{isEn ? 'Orthodontics & Aesthetic Dentistry Specialist Yogyakarta' : 'Spesialis Ortodonti & Estetika Gigi Yogyakarta'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {isEn ? 'Caring for Your Healthy Smile with ' : 'Merawat Senyum Sehat Anda dengan '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600">
                {isEn ? 'All Our Heart' : 'Sepenuh Hati'}
              </span>
            </h1>

            {/* Sub-headline Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {isEn 
                ? 'Luminara believes dental care is not just technical skill, but about creating a comfortable, safe, and painless experience. Supported by family-friendly specialists & modern facilities.'
                : 'Luminara percaya bahwa perawatan gigi bukan sekedar keterampilan teknis, melainkan tentang menciptakan pengalaman yang nyaman, aman, dan tanpa rasa sakit. Didukung tim dokter spesialis ramah keluarga & fasilitas modern.'
              }
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="pt-1 grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                <span>{isEn ? 'Painless Scaling & Treatment' : 'Scaling & Perawatan Tanpa Sakit'}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                <span>{isEn ? 'Damon Braces & Ortho Specialist' : 'Spesialis Behel Damon & Ortodonti'}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                <span>{isEn ? 'Kids & Special Needs Friendly' : 'Ramah Anak & Spesialis ABK'}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                <span>{isEn ? 'Affordable Installment Plans' : 'Cicilan Behel Terjangkau'}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:from-pink-600 hover:via-fuchsia-600 hover:to-purple-700 text-white font-bold text-base px-7 py-3.5 rounded-2xl shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>{isEn ? 'WhatsApp Consultation' : 'Reservasi Konsultasi WA'}</span>
              </button>
              <a
                href="#perawatan"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base px-6 py-3.5 rounded-2xl border border-slate-200 hover:border-pink-300 shadow-sm transition-all"
              >
                <span>{isEn ? 'Explore Services' : 'Lihat Layanan'}</span>
              </a>
            </div>

            {/* Rating & Social Proof Footer */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-800 text-sm ml-1">4.9 / 5.0</span>
                <span>{isEn ? '(500+ Patient Reviews)' : '(500+ Review Pasien)'}</span>
              </div>
              <div className="flex items-center gap-2 font-medium text-slate-600">
                <ShieldCheck className="w-4 h-4 text-pink-600" />
                <span>{isEn ? '100% Sterile & Certified' : '100% Steril & Tersertifikasi'}</span>
              </div>
            </div>

          </div>

          {/* Right Hero Image Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Clinic Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900&auto=format&fit=crop"
                  alt="Luminara Dental Treatment Room"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Floating Patient Review Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Demi Langston</span>
                    <span className="text-xs bg-pink-100 text-pink-800 font-semibold px-2 py-0.5 rounded-full">Influencer</span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {isEn 
                      ? '"Treatments at Luminara Dental are so comfortable and painless. The doctors are friendly and informative!"'
                      : '"Treatment di Luminara Dental benar-benar nyaman dan tanpa rasa sakit. Dokternya ramah dan informatif!"'
                    }
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Kids & ABK Friendly */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-pulse-subtle">
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5 fill-pink-600" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-sm">{isEn ? 'Kids & Special Needs' : 'Ramah Anak & ABK'}</div>
                  <div className="text-xs text-slate-500">{isEn ? 'Playground & Gentle Dentists' : 'Playground & Dokter Sabar'}</div>
                </div>
              </div>

              {/* Floating Badge 2: Jam Layanan */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">{isEn ? 'Open Everyday' : 'Buka Setiap Hari'}</div>
                  <div className="text-[11px] text-slate-500">08:00 - 21:00 WIB</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
