import React from 'react';
import Counter from './Counter';

const About: React.FC = () => {
  return (
    <section id="chi-siamo" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              La Nostra Storia: Esperienza e Innovazione
            </h2>
            <p className="text-slate-600 mb-4">
              Fondato dal titolare Francesco Maria Porcaro, il Centro Dentale Porcaro è un punto di riferimento per l'odontoiatria a Modugno. La nostra missione è sempre stata quella di coniugare la maestria artigianale con le più avanzate tecnologie per garantire cure di altissima qualità.
            </p>
            <p className="text-slate-600 mb-8">
              Crediamo in un rapporto di fiducia e trasparenza con ogni paziente. Per questo, creiamo percorsi di cura su misura, ascoltando le tue esigenze in un ambiente accogliente e professionale. La tua serenità e la salute del tuo sorriso sono la nostra più grande soddisfazione.
            </p>
            
            <div className="grid grid-cols-2 gap-6 text-center border-t border-b border-slate-200 py-6">
                <div>
                    <span className="text-4xl font-bold text-blue-600"><Counter end={30} /></span>
                    <p className="text-sm font-medium text-slate-500 mt-1">Anni di Esperienza</p>
                </div>
                <div>
                    <span className="text-4xl font-bold text-blue-600"><Counter end={5000} suffix="+" /></span>
                    <p className="text-sm font-medium text-slate-500 mt-1">Pazienti Soddisfatti</p>
                </div>
            </div>

          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-lg shadow-xl overflow-hidden">
               <img 
                src="https://picsum.photos/600/700?random=2" 
                alt="Il Dott. Francesco Maria Porcaro e il suo team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;