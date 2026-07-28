import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Treatments from './components/Treatments';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Articles from './components/Articles';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { MessageCircle, ChevronUp } from 'lucide-react';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (treatmentName = '') => {
    setSelectedTreatment(treatmentName);
    setIsBookingOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-pink-500 selection:text-white relative">
      
      {/* Header & Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking('')} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={() => handleOpenBooking('')} />
        <WhyUs />
        <Treatments onOpenBooking={handleOpenBooking} />
        <Doctors onOpenBooking={handleOpenBooking} />
        <Testimonials />
        <Articles />
        <FAQ onOpenBooking={() => handleOpenBooking('')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTreatment={selectedTreatment}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <button
        onClick={() => handleOpenBooking('')}
        aria-label="Chat WhatsApp Admin Luminara Dental"
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-600 hover:to-fuchsia-700 text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
          Chat Admin WA
        </span>
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          className="fixed bottom-6 left-6 z-40 bg-slate-800 hover:bg-pink-600 text-white w-11 h-11 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center animate-fadeIn"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}

export default App;
