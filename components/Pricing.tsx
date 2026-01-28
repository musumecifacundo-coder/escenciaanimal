
import React, { useState } from 'react';
import Modal from './Modal';

interface PlanDetail {
  title: string;
  price: string;
  shortDesc: string;
  duration: string;
  photos: string;
  description: string;
  experience: string[];
  includes: string[];
  optional?: string;
  recommended?: boolean;
}

const plans: PlanDetail[] = [
  {
    title: "Esencia Simple",
    price: "$ 90.000",
    shortDesc: "Un encuentro breve y cuidado. Ideal para registros sensibles o animales que se adaptan rápido.",
    duration: "1 hora aprox.",
    photos: "12 a 15 fotos editadas.",
    description: "¿Para quién es esta sesión? Pensada para animales de adaptación rápida o, por el contrario, para aquellos muy sensibles que necesitan una experiencia corta y controlada. Buscamos un registro auténtico en un tiempo acotado.",
    experience: [
      "Duración: Hasta 1 hora de sesión fotográfica.",
      "Enfoque: Acompañamiento respetuoso sin forzar situaciones.",
      "Dinámica: Se respeta el ritmo y la disposición del animal en todo momento."
    ],
    includes: [
      "12 a 15 fotografías finales, seleccionadas y editadas profesionalmente.",
      "Entrega en formato digital en alta calidad.",
      "Posibilidad de incluir 1 imagen con la persona (humano), si así lo deseas.",
      "Guía previa con recomendaciones para prepararse."
    ],
    optional: "Animal adicional: $ 30.000 (Incluye extensión de tiempo y 6-8 fotos extras)."
  },
  {
    title: "Esencia Completa",
    price: "$ 120.000",
    shortDesc: "Una experiencia amplia y fluida. Mayor tiempo para generar confianza y captar la esencia profunda.",
    duration: "1 hora 30 min aprox.",
    photos: "20 a 25 fotos editadas.",
    recommended: true,
    description: "¿Para quién es esta sesión? Es la experiencia recomendada. Al tener mayor duración, permite que el animal se relaje completamente, dándonos tiempo para acompañar cambios de clima, ritmo y energía.",
    experience: [
      "Duración: Hasta 1 hora y media.",
      "Enfoque: Registro profundo del animal interactuando con su entorno.",
      "Dinámica: Mayor tiempo de observación para ganar confianza y fluidez natural."
    ],
    includes: [
      "20 a 25 fotografías finales, seleccionadas y editadas profesionalmente.",
      "Entrega en formato digital en alta calidad.",
      "Posibilidad de incluir 2 o 3 imágenes con la persona (humano), si así lo deseas.",
      "Guía previa con recomendaciones para prepararse."
    ],
    optional: "Animal adicional: $ 30.000 (Incluye extensión de tiempo y 6-8 fotos extras)."
  },
  {
    title: "Familia Multiespecie",
    price: "$ 170.000",
    shortDesc: "Contempla hasta 3 animales. Foco en la dinámica grupal y vínculos compartidos.",
    duration: "2 horas aprox.",
    photos: "30 a 35 fotos editadas.",
    description: "¿Para quién es esta sesión? Un diseño que busca capturar la esencia de la \"manada\", mediante registros individuales y grupales que respetan la dinámica existente.",
    experience: [
      "Cobertura: Hasta 3 animales incluidos en el valor.",
      "Duración: 2 horas aprox. (Con duración flexible según el grupo).",
      "Enfoque: Registro individual de cada animal y registro compartido del grupo."
    ],
    includes: [
      "30 a 35 fotografías finales, seleccionadas y editadas profesionalmente.",
      "Fotografías individuales y en conjunto (según lo permita la dinámica del grupo).",
      "Entrega en formato digital en alta calidad.",
      "Posibilidad de incluir 2 o 3 imágenes con la persona, si así lo deseas.",
      "Guía previa con recomendaciones."
    ]
  }
];

const PlanCard: React.FC<{ plan: PlanDetail; onOpen: () => void }> = ({ plan, onOpen }) => (
  <div className={`p-10 md:p-12 flex flex-col h-full border transition-all duration-500 ${plan.recommended
    ? 'bg-[#d1d5cb] border-stone-300 shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:scale-[1.05] z-10'
    : 'bg-white border-stone-100 hover:border-stone-200'
    }`}>
    {plan.recommended && (
      <div className="mb-8 flex items-center justify-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">— RECOMENDADO</span>
      </div>
    )}

    <div className="text-center mb-10">
      <h3 className="text-4xl md:text-5xl mb-4 font-light serif leading-tight">{plan.title}</h3>
      <p className="text-3xl text-stone-400 italic serif">{plan.price}</p>
    </div>

    <div className="flex-grow flex flex-col justify-center">
      <ul className="space-y-6 mb-12">
        <li className="flex items-center justify-center text-stone-500 font-light text-sm text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-200 mr-4 flex-shrink-0"></span>
          {plan.shortDesc}
        </li>
        <li className="flex items-center justify-center text-stone-500 font-light text-sm text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-200 mr-4 flex-shrink-0"></span>
          {plan.duration}
        </li>
        <li className="flex items-center justify-center text-stone-500 font-light text-sm text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-200 mr-4 flex-shrink-0"></span>
          {plan.photos}
        </li>
      </ul>
    </div>

    <button
      onClick={onOpen}
      className={`w-full py-5 text-[10px] uppercase tracking-[0.4em] transition-all duration-300 ${plan.recommended ? 'bg-stone-800 text-white hover:bg-stone-900' : 'border border-stone-100 text-stone-400 hover:border-stone-800 hover:text-stone-800'}`}
    >
      VER DETALLES
    </button>
  </div>
);

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanDetail | null>(null);

  return (
    <section id="planes" className="py-20 md:py-32 px-6 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto space-y-10">
          {/* 1. Banner de Descuento */}
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-stone-100 blur-2xl opacity-40 -z-10"></div>
            <div className="border border-stone-300 py-3 px-8 rounded-full flex items-center gap-4 bg-stone-50/90 backdrop-blur-sm shadow-sm animate-fade-in">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-stone-600"></span>
              </span>
              <p className="text-[11px] uppercase tracking-[0.3em] font-semibold text-stone-900">
                Especial Lanzamiento: <span className="underline decoration-stone-400 underline-offset-4">20% OFF</span> en todas las reservas
              </p>
            </div>
          </div>

          {/* 2. Nota de Fecha */}
          <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-stone-400 animate-fade-in">
            * Válido para compras en febrero, sesiones en cualquier mes.
          </p>

          {/* 3. Texto Introductorio */}
          <p className="text-xl md:text-2xl serif font-light italic text-stone-600 leading-relaxed uppercase tracking-widest">
            Formas de contar la historia
          </p>
        </div>

        {/* Mobile: Horizontal Slider | Desktop: Grid */}
        <div className="relative group/pricing">
          {/* Mobile indicator - subtle helper above */}
          <div className="flex md:hidden items-center justify-center gap-2 mb-4 text-stone-400">
            <span className="text-[10px] uppercase tracking-[0.2em]">Desliza para explorar</span>
            <div className="flex gap-1">
              <span className="w-1 h-1 rounded-full bg-stone-300 animate-pulse"></span>
              <span className="w-1 h-1 rounded-full bg-stone-300 animate-pulse [animation-delay:200ms]"></span>
              <span className="w-1 h-1 rounded-full bg-stone-300 animate-pulse [animation-delay:400ms]"></span>
            </div>
          </div>

          <div className="relative">
            {/* Visual Arrows - Decorative indicators for mobile */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 md:hidden z-20 pointer-events-none opacity-40">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-stone-400">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 md:hidden z-20 pointer-events-none animate-bounce-horizontal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-stone-400">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div
              id="plans-slider"
              className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-10 pb-12 md:pb-0 snap-x snap-mandatory hide-scrollbar group"
            >
              {plans.map((plan, index) => (
                <div key={index} className="min-w-[85vw] md:min-w-0 snap-center">
                  <PlanCard
                    plan={plan}
                    onOpen={() => setSelectedPlan(plan)}
                  />
                </div>
              ))}
            </div>

            {/* Pagination Dots - Mobile only */}
            <div className="flex md:hidden justify-center gap-3 mt-4">
              {plans.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === 1 ? 'w-6 bg-stone-400 shadow-sm' : 'w-1.5 bg-stone-200'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Welfare Note - Footer of Pricing */}
        <div className="mt-20 pt-10 border-t border-stone-100 max-w-3xl mx-auto text-center">
          <p className="text-stone-400 font-light text-sm leading-relaxed serif italic">
            "El foco siempre estará puesto en el bienestar del animal y en la calidad del registro, por lo que la cantidad de fotografías podrá variar dentro del rango indicado según el desarrollo natural del encuentro."
          </p>
        </div>
      </div>

      <Modal
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        title={`Detalle de Sesión: ${selectedPlan?.title}`}
      >
        {selectedPlan && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 text-stone-600">
            <div>
              <p className="font-light leading-loose serif italic text-xl tracking-wide">
                {selectedPlan.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-[11px] uppercase tracking-[0.5em] font-bold text-stone-900 opacity-70">La Experiencia</h4>
                <ul className="space-y-5">
                  {selectedPlan.experience.map((item, i) => (
                    <li key={i} className="text-base font-light flex items-start leading-relaxed">
                      <span className="w-2 h-[1px] bg-stone-300 mr-5 mt-3.5"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-[11px] uppercase tracking-[0.5em] font-bold text-stone-900 opacity-70">¿Qué incluye el entregable?</h4>
                <ul className="space-y-5">
                  {selectedPlan.includes.map((item, i) => (
                    <li key={i} className="text-base font-light flex items-start leading-relaxed">
                      <span className="text-stone-400 mr-5 mt-0.5 text-lg">✅</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {selectedPlan.optional && (
              <div className="pt-10 border-t border-stone-100">
                <h4 className="text-[11px] uppercase tracking-[0.5em] font-bold text-stone-900 opacity-70 mb-4">Opcionales</h4>
                <p className="text-lg font-light italic serif leading-loose tracking-wide">
                  {selectedPlan.optional}
                </p>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Pricing;
