
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
    shortDesc: "Para hogares con 2 o más animales (hasta 3). Foco en la dinámica grupal y vínculos compartidos.",
    duration: "2 horas aprox.",
    photos: "30 a 35 fotos editadas.",
    description: "¿Para quién es esta sesión? Diseñada específicamente para capturar la \"manada\". No es solo hacer fotos a varios animales, sino registrar la atención y la dinámica que existe entre ellos.",
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
  <div className={`group relative p-8 md:p-12 flex flex-col h-full transition-all duration-700 ${plan.recommended ? 'bg-[#FAFAF9] shadow-[0_20px_50px_rgba(0,0,0,0.05)] scale-[1.02] z-10 border border-stone-200' : 'bg-white border border-stone-100 hover:border-stone-300'}`}>
    {plan.recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-stone-900 text-[9px] uppercase tracking-[0.3em] text-stone-100 px-4 py-1.5 font-medium shadow-sm">
        Recomendado
      </div>
    )}

    <div className="mb-10 text-center md:text-left">
      <h3 className="text-2xl md:text-3xl mb-3 font-light serif italic">{plan.title}</h3>
      <p className="text-xl text-stone-900 font-light tracking-tight">{plan.price}</p>
    </div>

    <div className="flex-grow">
      <p className="text-stone-500 text-sm font-light leading-relaxed mb-10 italic serif">
        {plan.shortDesc}
      </p>

      <div className="space-y-5 mb-12 border-t border-stone-100 pt-8">
        <div className="flex items-center text-[11px] uppercase tracking-widest text-stone-600">
          <svg className="w-4 h-4 mr-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {plan.duration}
        </div>
        <div className="flex items-center text-[11px] uppercase tracking-widest text-stone-600">
          <svg className="w-4 h-4 mr-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {plan.photos}
        </div>
      </div>
    </div>

    <button
      onClick={onOpen}
      className={`w-full py-5 text-[10px] uppercase tracking-[0.4em] transition-all duration-500 relative overflow-hidden group/btn ${plan.recommended ? 'bg-stone-900 text-stone-50 hover:bg-black' : 'border border-stone-200 text-stone-800 hover:border-stone-900'}`}
    >
      <span className="relative z-10 flex items-center justify-center">
        Explorar detalles
        <svg className="w-3 h-3 ml-3 transform transition-transform duration-500 group-hover/btn:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </button>
  </div>
);

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanDetail | null>(null);

  return (
    <section id="planes" className="py-24 md:py-40 px-6 bg-[#F5F5F4] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 md:mb-32 max-w-2xl mx-auto space-y-6">
          <div className="w-12 h-[1px] bg-stone-300 mx-auto opacity-50"></div>
          <h2 className="text-4xl md:text-6xl font-light serif italic leading-tight">Propuestas</h2>
          <p className="text-stone-500 font-light tracking-widest text-xs uppercase pt-2">
            Historias Narradas a través de la Luz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-14">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              plan={plan}
              onOpen={() => setSelectedPlan(plan)}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        title={selectedPlan?.title || ""}
      >
        {selectedPlan && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="border-l border-stone-200 pl-8 py-2">
              <p className="text-stone-600 font-light leading-relaxed serif italic text-lg">
                {selectedPlan.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-stone-900 font-semibold mb-6">La Experiencia</h4>
                <ul className="space-y-5">
                  {selectedPlan.experience.map((item, i) => (
                    <li key={i} className="text-stone-500 text-sm font-light flex items-start">
                      <span className="w-1 h-[1px] bg-stone-300 mr-4 mt-2.5"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-stone-900 font-semibold mb-6">El Entregable</h4>
                <ul className="space-y-5">
                  {selectedPlan.includes.map((item, i) => (
                    <li key={i} className="text-stone-500 text-sm font-light flex items-start">
                      <svg className="w-3.5 h-3.5 mr-4 mt-0.5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {selectedPlan.optional && (
              <div className="pt-10 border-t border-stone-100">
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-stone-900 font-semibold mb-4">Servicios Opcionales</h4>
                <p className="text-stone-500 text-sm font-light italic serif">
                  {selectedPlan.optional}
                </p>
              </div>
            )}

            <div className="bg-white p-8 md:p-12 border border-stone-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-[2px] h-full bg-stone-900 opacity-20"></div>
              <div className="flex items-start gap-6">
                <div className="text-stone-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold mb-3">Nota Importante</h5>
                  <p className="text-sm text-stone-500 leading-relaxed italic serif opacity-80">
                    "El foco siempre está puesto en el bienestar del animal y la calidad del registro, no en la cantidad.
                    Por eso, la cantidad final de imágenes puede variar levemente dentro del rango indicado,
                    respondiendo siempre al desarrollo natural del encuentro."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Pricing;
