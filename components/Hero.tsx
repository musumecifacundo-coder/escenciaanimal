
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 leading-tight">
            Esencia <br />
            <span className="italic">Animal</span>
          </h1>
          <p className="text-stone-600 text-lg md:text-xl font-light max-w-md leading-relaxed mb-10">
            Un encuentro. Un tiempo compartido. <br />
            Fotografía que respeta su propio ritmo.
          </p>
          <button
            onClick={() => document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-[#44403C] text-stone-50 rounded-full hover:bg-stone-900 transition-all duration-300 tracking-widest text-xs uppercase"
          >
            Reservar Sesión
          </button>
        </div>
        <div className="relative h-[60vh] md:h-[80vh] w-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/escenciaanimal-ecaa9.firebasestorage.app/o/Animales-Landing%2FIMG_1041.webp?alt=media"
            alt="Perro mirando a la cámara en luz natural"
            className="w-full h-full object-cover grayscale-[20%] sepia-[10%] brightness-[95%] shadow-2xl rounded-sm"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200';
            }}
          />
          <div className="absolute -bottom-6 -left-6 hidden lg:block bg-[#FAFAF9] p-8 max-w-xs shadow-lg border border-stone-100 italic serif text-stone-500 text-lg">
            "La mirada de un animal es un puente hacia su alma."
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
