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
    <footer id="kontak" className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">

          {/* Brand Info & Address Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#beranda" className="inline-block group">
              <img
                src="/luminara-logo-white.png"
                alt="Luminara Aesthetic Dental Clinic"
                className="h-16 sm:h-20 w-auto group-hover:scale-105 transition-transform duration-300"
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
                <span>{isEn ? 'WA / Phone' : 'WA / Telp'}: {currentSiteInfo.phone}</span>
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
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href={currentSiteInfo.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Luminara Dental"
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
              <a
                href={currentSiteInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Luminara Dental"
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-bold text-white text-sm tracking-wider uppercase">{isEn ? 'Main Menu' : 'Menu Utama'}</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#beranda" className="inline-flex items-center min-h-11 hover:text-pink-400 transition-colors">{isEn ? 'Home' : 'Beranda'}</a></li>
              <li><a href="#tentang-kami" className="inline-flex items-center min-h-11 hover:text-pink-400 transition-colors">{isEn ? 'About Us' : 'Profil & Filosofi'}</a></li>
              <li><a href="#perawatan" className="inline-flex items-center min-h-11 hover:text-pink-400 transition-colors">{isEn ? 'Treatments' : 'Layanan Perawatan'}</a></li>
              <li><a href="#jadwal-dokter" className="inline-flex items-center min-h-11 hover:text-pink-400 transition-colors">{isEn ? 'Doctors' : 'Jadwal Dokter'}</a></li>
              <li><a href="#testimoni" className="inline-flex items-center min-h-11 hover:text-pink-400 transition-colors">{isEn ? 'Testimonials' : 'Kata Sahabat Luminara'}</a></li>
              <li><a href="#artikel" className="inline-flex items-center min-h-11 hover:text-pink-400 transition-colors">{isEn ? 'Articles' : 'Artikel Kesehatan'}</a></li>
              <li><a href="#faq" className="inline-flex items-center min-h-11 hover:text-pink-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Perawatan Populer Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-bold text-white text-sm tracking-wider uppercase">{isEn ? 'Popular Services' : 'Perawatan Populer'}</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>{isEn ? 'Teeth Bleaching' : 'Bleaching Gigi'}</li>
              <li>{isEn ? 'Direct Veneer' : 'Direct Veneer'}</li>
              <li>{isEn ? 'Pediatric Dental Care' : 'Perawatan Gigi Anak'}</li>
              <li>{isEn ? 'Crown & Dental Restoration' : 'Crown & Restorasi Gigi'}</li>
              <li>{isEn ? 'Aesthetic Dental Care' : 'Perawatan Gigi Aestetik'}</li>
            </ul>
          </div>

          {/* Google Maps / Location Preview */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-bold text-white text-sm tracking-wider uppercase">{isEn ? 'Clinic Location' : 'Lokasi Klinik'}</h3>
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-lg h-36 bg-slate-900 relative group">
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
              className="inline-flex items-center gap-1.5 min-h-11 text-sm text-pink-400 hover:text-pink-300 font-semibold"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{isEn ? 'Open Google Maps' : 'Buka Google Maps'}</span>
            </a>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 pb-16 sm:pb-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} <strong>Luminara Aesthetic Dental Clinic</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </footer >
  );
}
