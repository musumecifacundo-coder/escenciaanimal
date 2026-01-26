
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
    optional: "➕ Animal adicional: $ 30.000 (Incluye extensión de tiempo y 6-8 fotos extras)."
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
    optional: "➕ Animal adicional: $ 30.000 (Incluye extensión de tiempo y 6-8 fotos extras)."
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
  <div className={`p-8 md:p-10 flex flex-col h-full border transition-all duration-500 ${plan.recommended ? 'bg-[#FAFAF9] border-stone-300 shadow-xl scale-[1.03] z-10' : 'bg-white border-stone-100 hover:border-stone-200'}`}>
    {plan.recommended && <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-6 block font-medium">— Recomendado</span>}
    <h3 className="text-3xl mb-2 font-light">{plan.title}</h3>
    <p className="text-2xl text-stone-900 font-light mb-6">{plan.price}</p>

    <p className="text-stone-500 text-sm font-light leading-relaxed mb-8 flex-grow">
      {plan.shortDesc}
    </p>

    <div className="space-y-4 mb-10 pb-8 border-b border-stone-100">
      <div className="flex items-center text-xs tracking-wide text-stone-600">
        <span className="mr-3 opacity-70 italic font-serif">⏱️</span>
        {plan.duration}
      </div>
      <div className="flex items-center text-xs tracking-wide text-stone-600">
        <span className="mr-3 opacity-70 italic font-serif">📸</span>
        {plan.photos}
      </div>
    </div>

    <button
      onClick={onOpen}
      className={`w-full py-4 text-[10px] uppercase tracking-[0.25em] transition-all duration-300 group ${plan.recommended ? 'bg-stone-800 text-stone-50 hover:bg-stone-950' : 'border border-stone-200 text-stone-600 hover:border-stone-400 hover:text-stone-900'}`}
    >
      Ver detalles
      <span className="inline-block transform transition-transform group-hover:translate-x-1 ml-2">→</span>
    </button>
  </div>
);

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanDetail | null>(null);

  return (
    <section id="planes" className="py-32 px-6 bg-[#F5F5F4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6 font-light serif italic">Propuestas</h2>
          <p className="text-stone-500 font-light tracking-wide">
            Sesiones diseñadas para respetar el tiempo, el espacio y la personalidad de cada animal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10">
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
        title={`Detalle de Sesión: ${selectedPlan?.title}`}
      >
        {selectedPlan && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <p className="text-stone-600 font-light leading-relaxed">
                {selectedPlan.description}
              </p>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-stone-900 font-medium mb-4">La Experiencia</h4>
              <ul className="space-y-3">
                {selectedPlan.experience.map((item, i) => (
                  <li key={i} className="text-stone-500 text-sm font-light flex items-start">
                    <span className="mr-3 mt-1 text-[8px]">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-stone-900 font-medium mb-4">¿Qué incluye el entregable?</h4>
              <ul className="space-y-3">
                {selectedPlan.includes.map((item, i) => (
                  <li key={i} className="text-stone-500 text-sm font-light flex items-start">
                    <span className="mr-3 text-stone-400 text-xs">✅</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {selectedPlan.optional && (
              <div className="pt-4 border-t border-stone-100">
                <h4 className="text-sm uppercase tracking-widest text-stone-900 font-medium mb-4">Opcionales</h4>
                <p className="text-stone-500 text-sm font-light italic">
                  {selectedPlan.optional}
                </p>
              </div>
            )}

            <div className="bg-stone-100 p-6 md:p-8 rounded-sm mt-12 border-l-2 border-stone-300">
              <div className="flex items-start gap-4">
                <span className="text-xl">💡</span>
                <div>
                  <h5 className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold mb-2">Importante sobre tu sesión</h5>
                  <p className="text-xs text-stone-500 leading-relaxed italic">
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
