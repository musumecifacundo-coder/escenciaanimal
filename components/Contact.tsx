import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'victoriamonestes.ph@gmail.com';

  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="py-24 md:py-40 px-6 bg-stone-900 text-stone-50 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-800/20 skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-8xl mb-8 leading-tight font-light italic serif">Comienza la <br />historia.</h2>

        <p className="text-stone-400 font-light text-xl md:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
          ¿Listo para retratar el alma de tu compañero? <br className="hidden md:block" />
          Escríbeme y te ayudo a elegir la mejor opción para su personalidad.
        </p>

        <div className="flex flex-col items-center gap-8">
          {/* Main CTA: WhatsApp */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => window.open('https://wa.me/5493413033411', '_blank')}
              className="group relative flex items-center justify-center space-x-6 px-12 py-6 bg-stone-50 text-stone-900 rounded-full hover:bg-white transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-sm md:text-base tracking-[0.3em] font-medium uppercase">Escribime por WhatsApp</span>
            </button>
            <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500 font-medium">
              Rosario & Alrededores — CP 2000
            </p>
          </div>

          {/* Secondary CTA: Email with Copy Fallback */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Consulta%20desde%20la%20web`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-stone-400 hover:text-white transition-colors duration-300 group py-4 px-4"
              >
                <div className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-light border-b border-transparent group-hover:border-stone-500 pb-1">o mandame un mail</span>
              </a>

              {/* Copy button fallback for desktop reliability */}
              <button
                onClick={copyToClipboard}
                title="Copiar email al portapapeles"
                className="p-2 text-stone-500 hover:text-stone-100 transition-colors flex items-center gap-2"
              >
                {copied ? (
                  <span className="text-[10px] uppercase tracking-widest text-[#d1d5cb] animate-fade-in">Copiado</span>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 opacity-50">
                    <path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H14a2 2 0 0 0-2 2v5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Logo Integration */}
        <div className="mt-20 flex justify-center opacity-80 hover:opacity-100 transition-opacity duration-700">
          <img
            src="/logo.png"
            alt="Victoria Monestes Logo"
            className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
          />
        </div>

        <div className="mt-20 pt-12 border-t border-stone-800/50">
          <p className="serif italic text-stone-500 text-lg">
            "Para ellos, el tiempo es ahora. Capturémoslo."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
