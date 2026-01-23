
import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-stone-400 text-xs tracking-[0.4em] uppercase mb-8 block font-light">Manifiesto</span>
        <h2 className="text-3xl md:text-5xl leading-relaxed font-light italic serif text-stone-800">
          "Cada animal propone su propio ritmo. La sesión se construye a partir de eso. 
          Sin prisas, con luz natural y en la intimidad de su hogar."
        </h2>
        <div className="mt-12 h-16 w-px bg-stone-200 mx-auto"></div>
      </div>
    </section>
  );
};

export default Manifesto;
