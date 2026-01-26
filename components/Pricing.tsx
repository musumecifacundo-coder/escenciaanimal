
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
  <div
    style={{
      backgroundColor: plan.recommended ? '#D4E0D4' : '#E8F3E8',
      borderColor: '#8FA998',
      color: '#2F4F4F'
    }}
    className={`group relative p-8 md:p-12 flex flex-col h-full transition-all duration-700 shadow-sm border ${plan.recommended ? 'scale-[1.02] z-10' : 'hover:border-stone-400'}`}
  >
    {plan.recommended && (
      <div
        style={{ backgroundColor: '#2F4F4F', color: '#F5E6CC' }}
        className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] px-4 py-1.5 font-medium shadow-sm"
      >
        Recomendado
      </div>
    )}

    <div className="mb-10 text-center md:text-left">
      <h3 className="text-2xl md:text-3xl mb-3 font-light serif italic">{plan.title}</h3>
      <p className="text-xl font-light tracking-tight">{plan.price}</p>
    </div>

    <div className="flex-grow">
      <p style={{ color: '#2F4F4F', opacity: 0.8 }} className="text-sm font-light leading-loose mb-10 italic serif tracking-wide">
        {plan.shortDesc}
      </p>

      <div className="space-y-6 mb-12 border-t border-[#8FA998]/20 pt-8">
        <div className="flex items-center text-[11px] uppercase tracking-[0.4em]">
          <svg style={{ color: '#8FA998' }} className="w-4 h-4 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {plan.duration}
        </div>
        <div className="flex items-center text-[11px] uppercase tracking-[0.4em]">
          <svg style={{ color: '#8FA998' }} className="w-4 h-4 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {plan.photos}
        </div>
      </div>
    </div>

    <button
      onClick={onOpen}
      style={{
        backgroundColor: plan.recommended ? '#2F4F4F' : 'transparent',
        borderColor: '#8FA998',
        color: plan.recommended ? '#F5E6CC' : '#2F4F4F'
      }}
      className={`w-full py-6 text-[10px] uppercase tracking-[0.5em] transition-all duration-500 relative overflow-hidden group/btn border ${plan.recommended ? 'hover:bg-[#1f3a3a] font-semibold' : 'hover:bg-[#8FA998]/10'}`}
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
    <section id="planes" style={{ backgroundColor: '#FAFAF9' }} className="py-24 md:py-48 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 md:mb-40 max-w-2xl mx-auto space-y-8">
          <div style={{ backgroundColor: '#8FA998' }} className="w-16 h-[1px] mx-auto opacity-30"></div>
          <h2 style={{ color: '#2F4F4F' }} className="text-5xl md:text-7xl font-light serif italic leading-tight tracking-tight">Propuestas</h2>
          <p style={{ color: '#8FA998' }} className="font-light tracking-[0.5em] text-[10px] uppercase pt-2">
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
          <div style={{ color: '#2F4F4F' }} className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div style={{ borderColor: '#8FA998' }} className="border-l pl-8 md:pl-12 py-4">
              <p style={{ color: '#2F4F4F' }} className="font-light leading-loose serif italic text-xl tracking-wide opacity-90">
                {selectedPlan.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
              <div className="space-y-8">
                <h4 style={{ color: '#2F4F4F' }} className="text-[11px] uppercase tracking-[0.5em] font-bold mb-8 opacity-70">La Experiencia</h4>
                <ul className="space-y-6">
                  {selectedPlan.experience.map((item, i) => (
                    <li key={i} className="text-base font-light flex items-start leading-relaxed opacity-80">
                      <span style={{ backgroundColor: '#8FA998' }} className="w-2 h-[1px] mr-5 mt-3.5"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <h4 style={{ color: '#2F4F4F' }} className="text-[11px] uppercase tracking-[0.5em] font-bold mb-8 opacity-70">El Entregable</h4>
                <ul className="space-y-6">
                  {selectedPlan.includes.map((item, i) => (
                    <li key={i} className="text-base font-light flex items-start leading-relaxed opacity-80">
                      <span className="mr-5 mt-0.5 text-lg">✅</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {selectedPlan.optional && (
              <div style={{ borderColor: '#8FA998' }} className="pt-12 border-t opacity-20">
                <h4 style={{ color: '#2F4F4F' }} className="text-[11px] uppercase tracking-[0.5em] font-bold mb-6 opacity-70">Servicios Opcionales</h4>
                <p style={{ color: '#2F4F4F' }} className="text-lg font-light italic serif leading-loose tracking-wide opacity-80">
                  {selectedPlan.optional}
                </p>
              </div>
            )}

            <div
              style={{ backgroundColor: '#E8F3E8', borderColor: '#8FA998' }}
              className="p-10 md:p-16 border shadow-sm relative overflow-hidden group/note"
            >
              <div style={{ backgroundColor: '#2F4F4F' }} className="absolute top-0 left-0 w-[4px] h-full opacity-20 group-hover/note:opacity-100 transition-opacity duration-700"></div>
              <div className="flex items-start gap-8">
                <div style={{ color: '#8FA998' }} className="transition-colors duration-500 group-hover/note:text-[#2F4F4F]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h5 style={{ color: '#2F4F4F' }} className="text-[11px] uppercase tracking-[0.4em] font-bold mb-4">Nota Importante</h5>
                  <p style={{ color: '#2F4F4F' }} className="text-base leading-loose italic serif opacity-80 tracking-wide">
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
