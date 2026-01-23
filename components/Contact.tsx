
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    mascota: '',
    email: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por escribir. Victoria se pondrá en contacto pronto.');
  };

  return (
    <section id="contacto" className="py-32 px-6 bg-stone-900 text-stone-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl md:text-7xl mb-8 leading-tight font-light italic serif">Comienza la <br />historia.</h2>
          <p className="text-stone-400 font-light text-xl mb-12 max-w-sm">
            ¿Listo para capturar el alma de tu compañero? Escríbeme y charlemos sobre vuestro ritmo.
          </p>
          
          <div className="space-y-6">
            <button 
              className="flex items-center space-x-4 group text-stone-200 hover:text-white transition-colors"
              onClick={() => window.open('https://wa.me/123456789', '_blank')}
            >
              <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center group-hover:border-stone-500 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm tracking-widest uppercase">Escribir por WhatsApp</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-stone-800/30 p-10 backdrop-blur-sm border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Tu Nombre</label>
              <input 
                type="text" 
                required
                className="w-full bg-transparent border-b border-stone-700 py-2 focus:border-stone-400 outline-none transition-all font-light"
                value={formData.nombre}
                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Tipo de Mascota</label>
              <input 
                type="text" 
                placeholder="Ej. Gato, Perro..."
                className="w-full bg-transparent border-b border-stone-700 py-2 focus:border-stone-400 outline-none transition-all font-light"
                value={formData.mascota}
                onChange={(e) => setFormData({...formData, mascota: e.target.value})}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Email</label>
            <input 
              type="email" 
              required
              className="w-full bg-transparent border-b border-stone-700 py-2 focus:border-stone-400 outline-none transition-all font-light"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Mensaje (Opcional)</label>
            <textarea 
              rows={3}
              className="w-full bg-transparent border-b border-stone-700 py-2 focus:border-stone-400 outline-none transition-all font-light resize-none"
              value={formData.mensaje}
              onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
            />
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-stone-50 text-stone-900 hover:bg-white transition-all duration-300 text-xs uppercase tracking-[0.3em] font-medium"
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
