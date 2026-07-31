import React, { useState, useEffect } from 'react';
import { siteInfo } from '../data/luminaraData';
import { X, MessageCircle, User, Phone, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useModalA11y } from '../hooks/useModalA11y';

export default function BookingModal({ isOpen, onClose, initialTreatment = '' }) {
  const { lang } = useLanguage();
  const currentSiteInfo = siteInfo[lang] || siteInfo.id;
  const isEn = lang === 'en';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: initialTreatment || (isEn ? 'General Consultation / Check-up' : 'Konsultasi Umum / Check-up'),
    date: '',
    time: isEn ? 'Morning (09:00 - 12:00)' : 'Pagi (09:00 - 12:00)',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    if (initialTreatment) {
      setFormData(prev => ({ ...prev, treatment: initialTreatment }));
    }
  }, [initialTreatment]);

  const modalRef = useModalA11y(isOpen, onClose);

  if (!isOpen) return null;

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[\s\-().]/g, '');
    const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,11}$/;
    return phoneRegex.test(cleaned);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, phone: value });
    if (value && !validatePhone(value)) {
      setPhoneError(isEn ? 'Invalid format. Example: 081234567890' : 'Format nomor tidak valid. Contoh: 081234567890');
    } else {
      setPhoneError('');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      treatment: isEn ? 'General Consultation / Check-up' : 'Konsultasi Umum / Check-up',
      date: '',
      time: isEn ? 'Morning (09:00 - 12:00)' : 'Pagi (09:00 - 12:00)',
      notes: ''
    });
    setPhoneError('');
    setIsSubmitting(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate phone before submit
    if (!validatePhone(formData.phone)) {
      setPhoneError(isEn ? 'Invalid phone format. Example: 08xxx or +628xxx' : 'Format nomor tidak valid. Gunakan format: 08xxx atau +628xxx');
      return;
    }

    // Prevent double submit
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    const message = isEn
      ? `Hello Luminara Dental! 👋\nI would like to book a dental appointment:\n\n👤 *Name:* ${formData.name || '-'}\n📞 *Phone/WA:* ${formData.phone || '-'}\n🦷 *Treatment:* ${formData.treatment}\n📅 *Preferred Date:* ${formData.date || 'ASAP'}\n⏰ *Time Session:* ${formData.time}\n📝 *Notes/Symptoms:* ${formData.notes || 'None'}\n\nPlease inform doctor availability. Thank you!`
      : `Halo Luminara Dental! 👋\nSaya ingin melakukan reservasi perawatan gigi:\n\n👤 *Nama:* ${formData.name || '-'}\n📞 *No. HP/WA:* ${formData.phone || '-'}\n🦷 *Jenis Perawatan:* ${formData.treatment}\n📅 *Rencana Tanggal:* ${formData.date || 'Secepatnya'}\n⏰ *Pilihan Waktu:* ${formData.time}\n📝 *Catatan Keluhan:* ${formData.notes || 'Tidak ada'}\n\nMohon informasi ketersediaan jadwal dokter. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${currentSiteInfo.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    resetForm();
    onClose();
  };

  return (
    <div 
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/70 backdrop-blur-sm animate-fadeIn overflow-y-auto"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[90vh] sm:max-h-[85vh] flex flex-col shadow-2xl border border-slate-100 relative animate-scaleUp overflow-hidden my-auto"
      >
        
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600 p-4 sm:p-6 text-white relative shrink-0">
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup Modal"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] sm:text-xs font-semibold mb-1.5 sm:mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isEn ? 'Online Reservation 24/7' : 'Reservasi Online 24/7'}</span>
          </div>
          <h3 id="booking-modal-title" className="text-xl sm:text-2xl font-bold pr-6 sm:pr-8 leading-tight">{isEn ? 'Book Treatment Appointment' : 'Reservasi Jadwal Perawatan'}</h3>
          <p className="text-pink-100 text-xs sm:text-sm mt-1 leading-snug">
            {isEn ? 'Fill out this short form to directly connect with Luminara WhatsApp Admin.' : 'Isi formulir singkat ini untuk langsung terhubung dengan Admin WhatsApp Luminara Dental.'}
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3.5 sm:space-y-4 text-left overflow-y-auto flex-1 custom-scrollbar">
          
          {/* Nama */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
              {isEn ? 'Patient Full Name *' : 'Nama Lengkap Pasien *'}
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                required
                minLength={2}
                placeholder={isEn ? 'e.g. John Doe' : 'Contoh: Budi Santoso'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* No WhatsApp */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
              {isEn ? 'WhatsApp Number *' : 'Nomor WhatsApp *'}
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="tel"
                required
                placeholder="Contoh: 081234567890"
                value={formData.phone}
                onChange={handlePhoneChange}
                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                  phoneError 
                    ? 'border-rose-400 focus:ring-rose-500' 
                    : 'border-slate-200 focus:ring-pink-500'
                }`}
              />
            </div>
            {phoneError && (
              <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{phoneError}</span>
              </p>
            )}
          </div>

          {/* Jenis Perawatan */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
              {isEn ? 'Select Treatment' : 'Pilihan Perawatan'}
            </label>
            <select
              value={formData.treatment}
              onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all truncate"
            >
              <option value={isEn ? "General Consultation / Check-up" : "Konsultasi Umum / Check-up"}>{isEn ? "General Consultation / Check-up" : "Konsultasi Umum / Check-up"}</option>
              <option value={isEn ? "Dental Braces (Orthodontics)" : "Behel Gigi (Orthodontics)"}>{isEn ? "Dental Braces (Orthodontics)" : "Behel Gigi (Orthodontics)"}</option>
              <option value={isEn ? "Teeth Scaling" : "Scaling Gigi (Pembersihan Karang)"}>{isEn ? "Teeth Scaling" : "Scaling Gigi (Pembersihan Karang)"}</option>
              <option value="Painless Scaling">Painless Scaling</option>
              <option value={isEn ? "Teeth Bleaching (Whitening)" : "Bleaching Gigi (Whitening)"}>{isEn ? "Teeth Bleaching (Whitening)" : "Bleaching Gigi (Whitening)"}</option>
              <option value="Direct Veneer Estetik">Direct Veneer Estetik</option>
              <option value={isEn ? "Composite Dental Fillings" : "Tambal Gigi Komposit"}>{isEn ? "Composite Dental Fillings" : "Tambal Gigi Komposit"}</option>
              <option value={isEn ? "Pediatric Dentistry" : "Perawatan Gigi Anak / ABK"}>{isEn ? "Pediatric Dentistry" : "Perawatan Gigi Anak / ABK"}</option>
              <option value={isEn ? "Crown & Bridge" : "Crown / Gigi Tiruan"}>{isEn ? "Crown & Bridge" : "Crown / Gigi Tiruan"}</option>
            </select>
          </div>

          {/* Tanggal & Waktu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
                {isEn ? 'Preferred Date' : 'Rencana Tanggal'}
              </label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all min-h-[42px]"
              />
            </div>
            <div>
              <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
                {isEn ? 'Time Session' : 'Sesi Waktu'}
              </label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all min-h-[42px] truncate"
              >
                <option value={isEn ? "Morning (09:00 - 12:00)" : "Pagi (09:00 - 12:00)"}>{isEn ? "Morning (09:00 - 12:00)" : "Pagi (09:00 - 12:00)"}</option>
                <option value={isEn ? "Afternoon (13:00 - 16:00)" : "Siang (13:00 - 16:00)"}>{isEn ? "Afternoon (13:00 - 16:00)" : "Siang (13:00 - 16:00)"}</option>
                <option value={isEn ? "Evening (16:30 - 20:30)" : "Sore/Malam (16:30 - 20:30)"}>{isEn ? "Evening (16:30 - 20:30)" : "Sore/Malam (16:30 - 20:30)"}</option>
              </select>
            </div>
          </div>

          {/* Catatan Keluhan */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
              {isEn ? 'Short Notes / Symptoms (Optional)' : 'Catatan / Keluhan Singkat (Opsional)'}
            </label>
            <textarea
              rows={2}
              placeholder={isEn ? 'e.g. Cavity in back molar tooth...' : 'Contoh: Gigi belakang berlubang dan ngilu...'}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 font-bold text-xs sm:text-sm py-3 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-lg transition-all transform active:scale-[0.98] ${
                isSubmitting
                  ? 'bg-slate-400 cursor-not-allowed shadow-none'
                  : 'bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-pink-500/30 hover:shadow-xl hover:-translate-y-0.5'
              }`}
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white/20 shrink-0" />
              <span>{isSubmitting ? (isEn ? 'Sending...' : 'Mengirim...') : (isEn ? 'Send Form to Admin WhatsApp' : 'Kirim Formulir ke WhatsApp Admin')}</span>
            </button>
          </div>

          <div className="text-[10px] sm:text-[11px] text-slate-400 text-center flex items-center justify-center gap-1 pt-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0" />
            <span>{isEn ? 'Free consultation & schedule confirmation via WhatsApp' : 'Gratis konsultasi & konfirmasi ketersediaan via WhatsApp'}</span>
          </div>

        </form>

      </div>
    </div>
  );
}
