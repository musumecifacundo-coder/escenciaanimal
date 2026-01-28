
import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFFFFF' }} className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-stone-400 text-xs tracking-[0.4em] uppercase mb-8 block font-light">Manifiesto</span>
        <h2 className="text-3xl md:text-5xl leading-relaxed font-light italic serif text-stone-800">
          "Cada animal tiene su propio ritmo. Construir un recuerdo sensible y auténtico, que permanezca en el tiempo, será nuestra ilusión. Sin forzar situaciones ni dirigiendo escenas, sino generando un encuentro tranquilo, donde la presencia, la observación y el cuidado permitan registrar aquella esencia que los hace únicos."
        </h2>
        <div className="mt-12 h-16 w-px bg-stone-200 mx-auto"></div>
      </div>
    </section>
  );
};

export default Manifesto;
