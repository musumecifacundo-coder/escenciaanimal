
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#FFFFFF]/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl serif font-semibold tracking-tight"
        >
          Esencia Animal
        </button>
        <div className="hidden md:flex space-x-12 text-xs uppercase tracking-[0.2em] font-light text-stone-500">
          <button onClick={() => scrollToSection('galeria')} className="hover:text-stone-900 transition-colors">Galería</button>
          <button onClick={() => scrollToSection('planes')} className="hover:text-stone-900 transition-colors">Planes</button>
          <button onClick={() => scrollToSection('sobre-mi')} className="hover:text-stone-900 transition-colors">Sobre mí</button>
          <button onClick={() => scrollToSection('contacto')} className="hover:text-stone-900 transition-colors">Contacto</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
