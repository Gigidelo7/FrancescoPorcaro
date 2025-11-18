import React from 'react';
import Counter from './Counter';

const Technology: React.FC = () => {
  return (
    <section id="tecnologia" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="rounded-lg shadow-xl overflow-hidden">
               <img 
                src="https://picsum.photos/600/500?random=3"
                alt="Tecnologia CAD-CAM dentale"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Approccio Full Digital e CAD-CAM
            </h2>
             <p className="text-lg text-blue-600 font-semibold mb-4">
              Il Futuro dell'Odontoiatria, Oggi.
            </p>
            <p className="text-slate-600 mb-6">
              La nostra specializzazione in tecnologie CAD-CAM e riabilitazioni full digital ci permette di offrirti un'esperienza di cura rivoluzionaria. Dall'impronta digitale alla progettazione e realizzazione di protesi, ogni fase del trattamento è gestita con una precisione micrometrica.
            </p>
            <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Maggiore Precisione:</strong> Risultati impeccabili e naturali.</span>
                </li>
                <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Comfort Elevato:</strong> Nessuna pasta da impronta, solo una scansione rapida e confortevole.</span>
                </li>
                 <li className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Tempi Ridotti:</strong> Procedure più veloci e meno appuntamenti necessari.</span>
                </li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg shadow-sm">
                    <span className="text-3xl font-bold text-blue-600"><Counter end={40} suffix="%" /></span>
                    <p className="text-sm text-slate-600 mt-1">Tempi di Lavorazione Ridotti</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg shadow-sm">
                    <span className="text-3xl font-bold text-blue-600"><Counter end={99.9} decimals={1} suffix="%" /></span>
                    <p className="text-sm text-slate-600 mt-1">Precisione dei Manufatti</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;