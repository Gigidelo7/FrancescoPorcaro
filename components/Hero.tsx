
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-slate-50">
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/1600/900?random=1" 
          alt="Sorrriso sano e naturale" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent"></div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center justify-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
              Il Tuo Sorriso, la Nostra Passione.
              <span className="block text-blue-600 mt-2">Da 30 Anni.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600">
              A Modugno, uniamo esperienza e innovazione digitale per offrirti cure personalizzate e risultati d'eccellenza. La tua salute orale è al centro del nostro lavoro.
            </p>
            <div className="mt-10">
              <a 
                href="#contatti"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-transform duration-300 hover:scale-105 shadow-lg"
              >
                Scopri di Più e Prenota
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
