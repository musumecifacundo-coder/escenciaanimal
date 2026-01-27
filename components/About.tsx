
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 md:py-32 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-64 h-80 md:h-80 flex-shrink-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/escenciaanimal-ecaa9.firebasestorage.app/o/Animales-Landing%2F886dd7_86aa08f00de945f790e8961466b80e47~mv2.jpg?alt=media"
            alt="Victoria, fotógrafa"
            className="w-full h-full object-cover filter sepia-[20%] grayscale-[10%]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600';
            }}
          />
        </div>
        <div className="text-center md:text-left">
          <span className="text-stone-400 text-xs tracking-[0.3em] uppercase mb-4 block">La mirada</span>
          <h2 className="text-4xl mb-6 font-light italic serif">Soy Victoria.</h2>
          <p className="text-stone-600 font-light leading-relaxed text-lg mb-6">
            Busco retratar la honestidad de tu compañero de vida, lejos de las poses forzadas. Mi trabajo no consiste en capturar la "mejor foto", sino en capturar la verdadera esencia de ese ser que te acompaña cada día.
          </p>
          <p className="text-stone-500 font-light leading-relaxed">
            Entiendo que cada animal tiene sus miedos y sus alegrías. Respeto sus tiempos, espero el momento justo y dejo que la luz natural haga el resto.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 grayscale opacity-60">
            <a
              href="https://www.instagram.com/victoriamonestes.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 border-b border-stone-900 pb-1 text-xs tracking-widest uppercase cursor-pointer hover:opacity-100 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@victoriamonestes.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 border-b border-stone-900 pb-1 text-xs tracking-widest uppercase cursor-pointer hover:opacity-100 transition-opacity"
            >
              TikTok
            </a>
            <a
              href="https://vickymonestes.wixsite.com/victoriamonestes?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnoyiH9DgklQ2Om056ADw-YRTOsstxu7g0qkSsFsklM6oZ4m8cJUs_r8w58qo_aem_oiGKDa32QCfSYcgpPoq2YA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 border-b border-stone-900 pb-1 text-xs tracking-widest uppercase cursor-pointer hover:opacity-100 transition-opacity"
            >
              Wix Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
