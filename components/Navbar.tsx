
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isMenuOpen ? 'bg-[#FFFFFF]/95 backdrop-blur-md py-4' : 'bg-transparent py-8'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
            className="text-xl serif font-semibold tracking-tight z-50"
          >
            Esencia Animal
          </button>

          {/* Burger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 p-2 text-stone-900"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-px bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-px bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-px bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 text-xs uppercase tracking-[0.2em] font-light text-stone-500">
            <button onClick={() => scrollToSection('galeria')} className="hover:text-stone-900 transition-colors">Galería</button>
            <button onClick={() => scrollToSection('planes')} className="hover:text-stone-900 transition-colors">Planes</button>
            <button onClick={() => scrollToSection('sobre-mi')} className="hover:text-stone-900 transition-colors">Sobre mí</button>
            <button onClick={() => scrollToSection('contacto')} className="hover:text-stone-900 transition-colors">Contacto</button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-sm uppercase tracking-[0.3em] font-light text-stone-600">
          <button onClick={() => scrollToSection('galeria')} className="hover:text-stone-900 transition-colors py-2">Galería</button>
          <button onClick={() => scrollToSection('planes')} className="hover:text-stone-900 transition-colors py-2">Planes</button>
          <button onClick={() => scrollToSection('sobre-mi')} className="hover:text-stone-900 transition-colors py-2">Sobre mí</button>
          <button onClick={() => scrollToSection('contacto')} className="hover:text-stone-900 transition-colors py-2 text-stone-900 font-medium border-b border-stone-200 pb-1">Contacto</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

