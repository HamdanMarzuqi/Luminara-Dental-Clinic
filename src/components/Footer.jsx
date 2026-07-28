import React from 'react';
import { siteInfo } from '../data/duwaData';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();
  const currentSiteInfo = siteInfo[lang] || siteInfo.id;
  const isEn = lang === 'en';

  return (
    <footer id="kontak" className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">

          {/* Brand Info & Address Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#beranda" className="inline-block group">
              <img 
                src="/luminara-logo-white.svg" 
                alt="Luminara Aesthetic Dental Clinic" 
                className="h-11 sm:h-12 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {currentSiteInfo.description}
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                <span>{currentSiteInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span>WA / Telp: {currentSiteInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span>{currentSiteInfo.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-pink-400 flex-shrink-0" />
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
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href={currentSiteInfo.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Luminara Dental"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
              <a
                href={currentSiteInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Luminara Dental"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wider uppercase">{isEn ? 'Main Menu' : 'Menu Utama'}</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#beranda" className="hover:text-pink-400 transition-colors">{isEn ? 'Home' : 'Beranda'}</a></li>
              <li><a href="#tentang-kami" className="hover:text-pink-400 transition-colors">{isEn ? 'About Us' : 'Profil & Filosofi'}</a></li>
              <li><a href="#perawatan" className="hover:text-pink-400 transition-colors">{isEn ? 'Treatments' : 'Layanan Perawatan'}</a></li>
              <li><a href="#jadwal-dokter" className="hover:text-pink-400 transition-colors">{isEn ? 'Doctors' : 'Jadwal Dokter'}</a></li>
              <li><a href="#testimoni" className="hover:text-pink-400 transition-colors">{isEn ? 'Testimonials' : 'Kata Sahabat Luminara'}</a></li>
              <li><a href="#artikel" className="hover:text-pink-400 transition-colors">{isEn ? 'Articles' : 'Artikel Kesehatan'}</a></li>
              <li><a href="#faq" className="hover:text-pink-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Perawatan Populer Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wider uppercase">{isEn ? 'Popular Services' : 'Perawatan Populer'}</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>{isEn ? 'Damon Self-Ligating Braces' : 'Behel Gigi Damon Self Ligating'}</li>
              <li>{isEn ? 'Painless Teeth Scaling' : 'Painless Scaling (Pembersihan Karang)'}</li>
              <li>{isEn ? 'Instant Whitening (9 Shades)' : 'Bleaching Gigi (Pemutihan 9 Tingkat)'}</li>
              <li>{isEn ? 'Direct Aesthetic Veneers' : 'Direct Veneer Estetik'}</li>
              <li>{isEn ? 'Pediatric & Special Needs Care' : 'Perawatan Gigi Anak & ABK'}</li>
              <li>{isEn ? 'Dental Crown & Restoration' : 'Crown & Restorasi Gigi'}</li>
            </ul>
          </div>

          {/* Google Maps / Location Preview */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wider uppercase">{isEn ? 'Clinic Location' : 'Lokasi Klinik'}</h4>
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-lg h-36 bg-slate-900 relative group">
              <iframe
                title="Luminara Dental Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126499.76176505676!2d110.3340578!3d-7.7554907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599bd35e07bd%3A0x6b30c14b2d56a31c!2sYogyakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Luminara+Dental+Yogyakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-pink-400 hover:text-pink-300 font-semibold"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{isEn ? 'Open Google Maps' : 'Buka Google Maps'}</span>
            </a>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} <strong>Luminara Aesthetic Dental Clinic</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </footer>
  );
}
