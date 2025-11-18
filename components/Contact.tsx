
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contatti" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Contattaci per una Consulenza</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Siamo a tua disposizione per valutare le tue esigenze e proporti la soluzione migliore per il tuo sorriso.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">I Nostri Recapiti</h3>
                <div className="space-y-4 text-slate-600">
                    <div className="flex items-center justify-center md:justify-start">
                        <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span>Via della Repubblica, 20 - Modugno (BA)</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                        <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        <a href="tel:0802020652" className="hover:text-blue-600 hover:underline">080 2020652</a>
                    </div>
                </div>
                 <div className="mt-8">
                    <a href="tel:0802020652" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-transform duration-300 hover:scale-105 shadow-lg">
                        Chiama Ora
                    </a>
                </div>
            </div>
            <div>
                 <a 
                    href="https://www.google.com/maps/place/Via+della+Repubblica,+20,+70026+Modugno+BA,+Italy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block rounded-lg overflow-hidden shadow-md"
                >
                    <img src="https://picsum.photos/600/400?random=4" alt="Mappa della sede in Via della Repubblica, 20 a Modugno" className="w-full h-full object-cover" />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
