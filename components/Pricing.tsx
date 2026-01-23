
import React from 'react';

interface PlanProps {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

const PlanCard: React.FC<PlanProps> = ({ name, price, features, recommended }) => (
  <div className={`p-10 flex flex-col h-full border transition-all duration-300 ${recommended ? 'bg-[#FAFAF9] border-stone-300 shadow-xl scale-[1.02]' : 'bg-white border-stone-100 hover:border-stone-200'}`}>
    {recommended && <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-6 block font-medium">— Recomendado</span>}
    <h3 className="text-3xl mb-2 font-light">{name}</h3>
    <p className="text-2xl text-stone-400 font-light mb-8 italic serif">{price}</p>
    <ul className="space-y-4 mb-12 flex-grow">
      {features.map((f, i) => (
        <li key={i} className="text-stone-500 text-sm font-light flex items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-300 mr-3"></span>
          {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${recommended ? 'bg-[#44403C] text-stone-50 hover:bg-stone-900' : 'border border-stone-200 text-stone-600 hover:bg-stone-50'}`}>
      Seleccionar
    </button>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="planes" className="py-32 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-4 font-light">Propuestas</h2>
          <p className="text-stone-500 font-light">Cada historia merece ser contada de forma única.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PlanCard 
            name="Instantes" 
            price="$150" 
            features={["1 hora de sesión", "5 fotografías editadas digitales", "Luz natural a domicilio"]} 
          />
          <PlanCard 
            name="Ritmos" 
            price="$280" 
            recommended 
            features={["2 horas de sesión (con pausas)", "15 fotografías editadas digitales", "3 impresiones Fine Art (13x18cm)", "Asesoría previa"]} 
          />
          <PlanCard 
            name="Legado" 
            price="$550" 
            features={["Tiempo ilimitado", "Galería digital completa", "Photobook artesanal de lino", "Caja de madera grabada"]} 
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
