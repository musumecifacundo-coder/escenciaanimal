
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
      <footer className="py-12 px-6 border-t border-stone-200 text-center">
        <p className="text-stone-400 text-sm tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Esencia Animal — Victoria
        </p>
      </footer>
    </div>
  );
};

export default App;
