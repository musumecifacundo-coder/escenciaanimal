
import React from 'react';

interface PlanDetail {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

const plans: PlanDetail[] = [
  {
    title: "Instantes",
    price: "$150",
    features: [
      "1 hora de sesión",
      "5 fotografías editadas digitales",
      "Luz natural a domicilio"
    ]
  },
  {
    title: "Ritmos",
    price: "$280",
    recommended: true,
    features: [
      "2 horas de sesión (con pausas)",
      "15 fotografías editadas digitales",
      "3 impresiones Fine Art (13×18cm)",
      "Asesoría previa"
    ]
  },
  {
    title: "Legado",
    price: "$550",
    features: [
      "Tiempo ilimitado",
      "Galería digital completa",
      "Photobook artesanal de lino",
      "Caja de madera grabada"
    ]
  }
];

const PlanCard: React.FC<{ plan: PlanDetail }> = ({ plan }) => (
  <div className={`p-10 md:p-12 flex flex-col h-full bg-white border border-stone-100 transition-all duration-500 ${plan.recommended ? 'shadow-[0_20px_50px_rgba(0,0,0,0.05)] scale-[1.05] z-10' : 'hover:border-stone-200'}`}>
    {plan.recommended && (
      <div className="mb-8 flex items-center justify-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">— RECOMENDADO</span>
      </div>
    )}

    <div className="text-center mb-12">
      <h3 className="text-4xl md:text-5xl mb-4 font-light serif">{plan.title}</h3>
      <p className="text-3xl text-stone-400 italic serif">{plan.price}</p>
    </div>

    <ul className="space-y-6 mb-16 flex-grow">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-center justify-center text-stone-500 font-light text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-200 mr-4"></span>
          {feature}
        </li>
      ))}
    </ul>

    <button
      className={`w-full py-5 text-[10px] uppercase tracking-[0.4em] transition-all duration-300 ${plan.recommended ? 'bg-stone-800 text-white hover:bg-stone-900' : 'border border-stone-100 text-stone-400 hover:border-stone-800 hover:text-stone-800'}`}
    >
      SELECCIONAR
    </button>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="planes" className="py-32 px-6 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <p className="text-stone-500 font-light tracking-wide text-lg italic serif mb-4">
            Cada historia merece ser contada de forma única.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 lg:gap-10">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
