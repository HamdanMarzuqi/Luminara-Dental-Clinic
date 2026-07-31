import React, { useState, useEffect, useRef } from 'react';
import { navLinks, siteInfo } from '../data/luminaraData';
import { ChevronDown, Globe, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef(null);
  const langRef = useRef(null);

  const { lang, setLang } = useLanguage();
  const currentNavLinks = navLinks[lang] || navLinks.id;
  const currentSiteInfo = siteInfo[lang] || siteInfo.id;

  const languages = [
    { code: 'id', label: 'ID', full: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'en', label: 'EN', full: 'English', flag: '🇬🇧' },
  ];
  const currentLang = languages.find(l => l.code === lang) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setLangOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5' : 'bg-white/80 backdrop-blur-sm py-3.5 border-b border-pink-100/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Brand Logo */}
          <a href="#beranda" className="flex items-center group shrink-0">
            <img
              src="/luminara-logo.svg"
              alt="Luminara Aesthetic Dental Clinic"
              className="h-9 sm:h-11 w-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navigasi utama">
            {currentNavLinks.map((link, idx) => (
              <div key={idx} className="relative" ref={link.dropdown ? dropdownRef : undefined}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setDropdownOpen(!dropdownOpen);
                        }
                        if (e.key === 'ArrowDown' && !dropdownOpen) {
                          e.preventDefault();
                          setDropdownOpen(true);
                        }
                      }}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      className="flex items-center gap-1 font-medium text-sm text-slate-700 hover:text-pink-600 transition-colors px-3 py-2 rounded-lg hover:bg-slate-50 focus:outline-none focus:text-pink-600 focus:bg-slate-50"
                    >
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-pink-600' : ''}`} />
                    </button>
                    {dropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg ring-1 ring-slate-200/60 py-1.5 animate-fadeIn"
                        role="menu"
                      >
                        {link.dropdown.map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href={sub.href}
                            role="menuitem"
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center px-4 py-2 text-sm text-slate-600 hover:bg-pink-50 hover:text-pink-700 transition-colors focus:outline-none focus:bg-pink-50 focus:text-pink-700"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="font-medium text-sm text-slate-700 hover:text-pink-600 transition-colors px-3 py-2 rounded-lg hover:bg-slate-50 focus:outline-none focus:text-pink-600 focus:bg-slate-50"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Right Cluster: only Language switcher (phone + CTA removed — covered by floating WhatsApp button) */}
          <div className="hidden md:flex items-center shrink-0">

            {/* Language Switcher — compact dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                aria-expanded={langOpen}
                aria-haspopup="true"
                aria-label="Switch language"
                className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none focus:bg-slate-100"
              >
                <Globe className="w-4 h-4 text-slate-500" />
                <span className="hidden xl:inline">{currentLang.label}</span>
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div
                  className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-lg ring-1 ring-slate-200/60 py-1.5 animate-fadeIn z-10"
                  role="menu"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      role="menuitem"
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors focus:outline-none ${
                        lang === l.code
                          ? 'bg-pink-50 text-pink-700 font-semibold'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span className="flex-1 text-left">{l.full}</span>
                      {lang === l.code && <Check className="w-3.5 h-3.5 text-pink-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Right Controls — animated hamburger (CTA removed; floating WhatsApp covers it) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 -m-1 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              <span className="relative flex h-5 w-6 flex-col justify-between">
                <span
                  className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-in-out origin-center ${
                    mobileMenuOpen ? 'translate-y-2.25 rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-in-out origin-center ${
                    mobileMenuOpen ? '-translate-y-2.25 -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation — height/opacity transition via CSS grid trick (no JS height measuring needed) */}
      <div
        id="mobile-nav-drawer"
        className={`md:hidden grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          mobileMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="bg-white border-b border-slate-100 shadow-xl px-4 pt-3 pb-6 space-y-1">
            {currentNavLinks.map((link, idx) => (
              <div key={idx}>
                {link.dropdown ? (
                  <div>
                    <span className="block font-semibold text-slate-900 text-sm py-2 text-pink-700">
                      {link.name}
                    </span>
                    <div className="pl-3 space-y-0.5 border-l-2 border-pink-100 mb-2">
                      {link.dropdown.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-slate-600 py-1.5 hover:text-pink-600"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-medium text-slate-700 text-sm py-2.5 hover:text-pink-600"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile cluster: language only (phone removed — covered by floating WhatsApp button) */}
            <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-end">
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  aria-expanded={langOpen}
                  className="flex items-center gap-1 px-3 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-sm font-semibold text-slate-700 transition-colors"
                >
                  <Globe className="w-4 h-4 text-slate-500" />
                  <span>{currentLang.label}</span>
                  <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
                </button>
                {langOpen && (
                  <div className="absolute right-0 bottom-full mb-1 w-40 bg-white rounded-xl shadow-lg ring-1 ring-slate-200/60 py-1.5 animate-fadeIn z-10">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); setLangOpen(false); }}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                          lang === l.code
                            ? 'bg-pink-50 text-pink-700 font-semibold'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span className="flex-1 text-left">{l.full}</span>
                        {lang === l.code && <Check className="w-3.5 h-3.5 text-pink-600" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
