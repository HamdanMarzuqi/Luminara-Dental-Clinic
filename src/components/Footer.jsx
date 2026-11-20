import React from 'react';
import { siteInfo } from '../data/luminaraData';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();
  const currentSiteInfo = siteInfo[lang] || siteInfo.id;
  const isEn = lang === 'en';

  return (
    <footer
      id="kontak"
      className="relative overflow-hidden bg-gradient-to-b from-[#FBE3F6] via-[#F7D2EE] to-[#F1C2E6] text-slate-700 pt-16"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">

          {/* Brand Info & Address Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#beranda" className="inline-block group">
              <img
                src="/luminara-logo.png"
                alt="Luminara Aesthetic Dental Clinic"
                className="h-16 sm:h-20 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </a>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {currentSiteInfo.description}
            </p>

            <div className="space-y-2 text-xs text-slate-700 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                <span>{currentSiteInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-600 flex-shrink-0" />
                <span>{isEn ? 'WA / Phone' : 'WA / Telp'}: {currentSiteInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pink-600 flex-shrink-0" />
                <span>{currentSiteInfo.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-pink-600 flex-shrink-0" />
                <span>{currentSiteInfo.hours}</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={currentSiteInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Luminara Dental"
                className="w-11 h-11 rounded-xl bg-white border border-pink-200 text-pink-700 hover:bg-pink-600 hover:text-white hover:border-pink-600 flex items-center justify-center transition-colors shadow-sm"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href={currentSiteInfo.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Luminara Dental"
                className="w-11 h-11 rounded-xl bg-white border border-pink-200 text-pink-700 hover:bg-pink-600 hover:text-white hover:border-pink-600 flex items-center justify-center transition-colors shadow-sm"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
              <a
                href={currentSiteInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Luminara Dental"
                className="w-11 h-11 rounded-xl bg-white border border-pink-200 text-pink-700 hover:bg-pink-600 hover:text-white hover:border-pink-600 flex items-center justify-center transition-colors shadow-sm"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-bold text-slate-900 text-sm tracking-wider uppercase">{isEn ? 'Main Menu' : 'Menu Utama'}</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#beranda" className="inline-flex items-center min-h-11 text-slate-600 hover:text-pink-700 transition-colors">{isEn ? 'Home' : 'Beranda'}</a></li>
              <li><a href="#tentang-kami" className="inline-flex items-center min-h-11 text-slate-600 hover:text-pink-700 transition-colors">{isEn ? 'About Us' : 'Profil & Filosofi'}</a></li>
              <li><a href="#perawatan" className="inline-flex items-center min-h-11 text-slate-600 hover:text-pink-700 transition-colors">{isEn ? 'Treatments' : 'Layanan Perawatan'}</a></li>
              <li><a href="#jadwal-dokter" className="inline-flex items-center min-h-11 text-slate-600 hover:text-pink-700 transition-colors">{isEn ? 'Doctors' : 'Jadwal Dokter'}</a></li>
              <li><a href="#testimoni" className="inline-flex items-center min-h-11 text-slate-600 hover:text-pink-700 transition-colors">{isEn ? 'Testimonials' : 'Kata Sahabat Luminara'}</a></li>
              <li><a href="#artikel" className="inline-flex items-center min-h-11 text-slate-600 hover:text-pink-700 transition-colors">{isEn ? 'Articles' : 'Artikel Kesehatan'}</a></li>
              <li><a href="#faq" className="inline-flex items-center min-h-11 text-slate-600 hover:text-pink-700 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Perawatan Populer Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-bold text-slate-900 text-sm tracking-wider uppercase">{isEn ? 'Popular Services' : 'Perawatan Populer'}</h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>{isEn ? 'Teeth Bleaching' : 'Bleaching Gigi'}</li>
              <li>{isEn ? 'Direct Veneer' : 'Direct Veneer'}</li>
              <li>{isEn ? 'Pediatric Dental Care' : 'Perawatan Gigi Anak'}</li>
              <li>{isEn ? 'Crown & Dental Restoration' : 'Crown & Restorasi Gigi'}</li>
              <li>{isEn ? 'Aesthetic Dental Care' : 'Perawatan Gigi Aestetik'}</li>
            </ul>
          </div>

          {/* Google Maps / Location Preview */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-bold text-slate-900 text-sm tracking-wider uppercase">{isEn ? 'Clinic Location' : 'Lokasi Klinik'}</h3>
            <div className="rounded-2xl overflow-hidden border border-pink-200 shadow-md h-36 bg-white relative group">
              <iframe
                title="Luminara Dental Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3304283329576!2d104.47991139999999!3d0.8960399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d96d0059809147%3A0x52ef0ceb85fd0ba2!2sLuminara%20Dental%20Tanjungpinang!5e0!3m2!1sid!2sid!4v1793674608111!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=0.8960399,104.4799114"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 min-h-11 text-sm text-pink-700 hover:text-pink-800 font-semibold"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{isEn ? 'Open Google Maps' : 'Buka Google Maps'}</span>
            </a>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="relative z-10 pt-8 pb-24 sm:pb-28 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-700 gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-800">Luminara Aesthetic Dental Clinic</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>

      {/* Decorative wave layers — Canva footer design, vector so it stays sharp at any width */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 sm:h-40 lg:h-48 pointer-events-none"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        {/* base lavender field */}
        <path d="M0,150 C200,100 380,180 640,150 C900,120 1120,190 1440,138 L1440,260 L0,260 Z" fill="#D8ABE3" opacity="0.95" />
        {/* soft pink ridge rising to the right */}
        <path d="M420,260 C700,152 980,88 1440,58 L1440,260 Z" fill="#F2B8DE" opacity="0.95" />
        {/* deep indigo hill through the middle */}
        <path d="M180,260 C420,158 700,118 980,168 C1120,194 1260,228 1440,248 L1440,260 Z" fill="#6B36D6" opacity="0.92" />
        {/* magenta crest, tallest at the left */}
        <path d="M0,260 L0,168 C160,108 360,118 560,174 C700,213 840,238 980,252 L980,260 Z" fill="#CA40A4" />
        {/* thin accent curve */}
        <path d="M0,205 C300,150 620,178 900,150 C1120,128 1300,150 1440,118" fill="none" stroke="#7A3FD4" strokeWidth="1.5" opacity="0.45" />
        {/* scattered dots */}
        <g fill="#5B21B6" opacity="0.45">
          <circle cx="120" cy="196" r="5" />
          <circle cx="250" cy="214" r="3.5" />
          <circle cx="330" cy="188" r="4.5" />
          <circle cx="455" cy="222" r="3" />
          <circle cx="620" cy="200" r="5.5" />
          <circle cx="760" cy="226" r="4" />
          <circle cx="880" cy="196" r="3.5" />
          <circle cx="1010" cy="180" r="5" />
          <circle cx="1150" cy="150" r="3" />
          <circle cx="1250" cy="132" r="6" />
          <circle cx="1330" cy="172" r="4" />
          <circle cx="1050" cy="228" r="3.5" />
          <circle cx="200" cy="126" r="4" />
          <circle cx="520" cy="92" r="3" />
          <circle cx="1180" cy="72" r="4.5" />
        </g>
      </svg>

    </footer>
  );
}
