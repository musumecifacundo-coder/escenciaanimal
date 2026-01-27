
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }} className="min-h-screen selection:bg-stone-200 selection:text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Gallery />
        <Pricing />
        <About />
        <Contact />
      </main>
      <footer className="py-16 px-6 border-t border-stone-100/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-400 text-[10px] tracking-[0.2em] uppercase">
            &copy; {new Date().getFullYear()} Esencia Animal
          </p>
          <div className="flex items-center gap-4">
            <span className="w-8 h-px bg-stone-100"></span>
            <p className="text-stone-400 text-[10px] tracking-[0.2em] uppercase">
              Hecho por <span className="text-stone-900 font-medium">Facundo Musumeci</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
