import React, { useState } from 'react';
import { faqs } from '../data/luminaraData';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ({ onOpenBooking }) {
  const { lang } = useLanguage();
  const currentFaqs = faqs[lang] || faqs.id;
  const isEn = lang === 'en';

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{isEn ? 'Patient FAQ' : 'Tanya Jawab Pasien'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isEn ? 'Frequently Asked ' : 'Pertanyaan yang Sering '}
              <span className="text-pink-600">{isEn ? 'Questions' : 'Diajukan'}</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {isEn
                ? 'Find direct answers about booking, braces installation, costs, and pediatric care.'
                : 'Temukan jawaban langsung untuk pertanyaan seputar reservasi, pasang behel, biaya, hingga dokter anak.'
              }
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion List */}
        <div className="mt-12 space-y-4">
          {currentFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} delay={idx * 80} direction="up">
                <div
                  className={`group rounded-2xl border border-l-4 transition-all duration-500 ease-out overflow-hidden ${
                    isOpen
                      ? 'bg-pink-50/40 border-pink-200 border-l-pink-400 shadow-sm'
                      : 'bg-white border-slate-200 border-l-transparent hover:border-pink-100 hover:border-l-pink-300 hover:shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="flex items-center gap-3.5 flex-1">
                      {/* Number badge accent */}
                      <span
                        className={`w-8 h-8 rounded-xl grid place-items-center text-xs font-bold shrink-0 transition-colors duration-500 ${
                          isOpen
                            ? 'bg-pink-600 text-white'
                            : 'bg-pink-100 text-pink-700 group-hover:bg-pink-200'
                        }`}
                        aria-hidden="true"
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <span
                        className={`font-bold text-sm sm:text-base transition-colors duration-500 ${
                          isOpen ? 'text-pink-700' : 'text-slate-900'
                        }`}
                      >
                        {faq.question}
                      </span>
                    </span>

                    <span
                      className={`w-9 h-9 rounded-full grid place-items-center shrink-0 transition-all duration-500 ease-out ${
                        isOpen ? 'bg-pink-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-4 ml-0 sm:ml-11 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-pink-100/60 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* FAQ Contact CTA Banner */}
        <ScrollReveal delay={200} direction="scale">
          <div className="mt-12 bg-gradient-to-br from-pink-700 via-pink-700 to-pink-800 text-white rounded-3xl p-8 text-center space-y-4 shadow-xl">
            <h3 className="text-xl font-bold">
              {isEn ? 'Have More Questions Unanswered?' : 'Punya Pertanyaan Lain yang Belum Terjawab?'}
            </h3>
            <p className="text-pink-50 text-xs sm:text-sm max-w-xl mx-auto">
              {isEn
                ? 'Our customer service team is ready to assist you with detailed explanations & appointment scheduling.'
                : 'Tim customer service kami siap membantu memberikan penjelasan detail & membantu penjadwalan konsultasi Anda.'
              }
            </p>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-white hover:bg-pink-50 text-pink-700 font-bold text-sm px-6 min-h-12 rounded-2xl transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isEn ? 'Contact Us on WhatsApp' : 'Hubungi Kami via WhatsApp'}</span>
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}