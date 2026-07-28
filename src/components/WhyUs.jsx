import React from 'react';
import { coreValues } from '../data/duwaData';
import { HeartHandshake, ShieldCheck, Sparkles, Smile, Award, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  HeartHandshake: HeartHandshake,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Smile: Smile
};

export default function WhyUs() {
  const { lang } = useLanguage();
  const currentCoreValues = coreValues[lang] || coreValues.id;
  const isEn = lang === 'en';

  return (
    <section id="tentang-kami" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div id="profil" className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>{isEn ? 'Why Choose Us' : 'Mengapa Memilih Kami'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isEn ? 'Why Luminara is Your ' : 'Mengapa Luminara adalah '}
              <span className="text-pink-600">{isEn ? 'Best Choice?' : 'Pilihan Terbaik?'}</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {isEn
                ? 'We are committed to being your trusted partner in maintaining dental health through transparent communication, high professionalism, and a warm clinic environment.'
                : 'Kami berkomitmen menjadi mitra terpercaya dalam menjaga kesehatan gigi Anda dengan mengedepankan komunikasi, menjunjung tinggi profesionalisme, dan menciptakan suasana klinik yang ramah.'
              }
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Core Value Cards Grid */}
        <div id="core-value" className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentCoreValues.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <ScrollReveal key={idx} delay={idx * 120} direction="up">
                <div 
                  className="group relative bg-slate-50 hover:bg-gradient-to-b hover:from-pink-500 hover:to-fuchsia-600 p-8 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 border border-slate-100 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-700 group-hover:bg-white/20 group-hover:text-white flex items-center justify-center mb-6 transition-colors">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 group-hover:text-pink-50 text-sm leading-relaxed transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Philosophy & Facility Highlight Banner */}
        <ScrollReveal delay={200} direction="scale">
          <div id="filosofi" className="mt-16 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-pink-400 font-mono text-xs uppercase tracking-widest font-bold">
                  {isEn ? 'Luminara Service Philosophy' : 'Filosofi Pelayanan Luminara'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {isEn 
                    ? '"Patient Health & Trust Is Our Utmost Priority"' 
                    : '"Kesehatan & Kepercayaan Pasien Adalah Prioritas Utama Kami"'
                  }
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {isEn
                    ? 'As an aesthetic dental clinic focused on orthodontic excellence, we provide modern technology-driven care directly performed by specialist dentists. Every procedure is explained transparently so you feel safe from start to finish.'
                    : 'Sebagai klinik gigi estetik berfokus pada keunggulan ortodonti & estetika, kami menghadirkan pelayanan berbasis teknologi modern yang ditangani langsung oleh tim dokter spesialis. Setiap prosedur dijelaskan secara terbuka sehingga Anda merasa aman dari awal hingga selesai.'
                  }
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-pink-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-pink-400" />
                    <span>{isEn ? 'Clean & Fragrant Waiting Area' : 'Ruang Tunggu Bersih & Wangi'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-pink-400" />
                    <span>{isEn ? 'Kid-Friendly Mini Playground' : 'Mini Playground Ramah Anak'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-pink-400" />
                    <span>{isEn ? 'Before-After Transparency' : 'Before-After Transparency'}</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-4 flex justify-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center space-y-2 max-w-xs w-full">
                  <div className="text-4xl font-extrabold text-pink-400">90.9%</div>
                  <div className="text-sm font-semibold text-slate-200">{isEn ? 'Accuracy & Satisfaction' : 'Akurasi & Kepuasan Pasien'}</div>
                  <div className="text-xs text-slate-400">{isEn ? 'Based on hundreds of patient reviews in Jogja' : 'Berdasarkan ulasan ratusan pasien ortodonti & perbaikan gigi di Jogja'}</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
