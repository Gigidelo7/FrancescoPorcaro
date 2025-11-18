
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-white">Centro Dentale Porcaro</h3>
            <p className="text-slate-300 mt-2 text-sm">di Francesco Maria Porcaro</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-100">Contatti</h4>
            <ul className="mt-2 space-y-1 text-slate-300 text-sm">
              <li>Via della Repubblica, 20 - Modugno (BA)</li>
              <li>Tel: <a href="tel:0802020652" className="hover:underline">080 2020652</a></li>
            </ul>
          </div>
          <div>
             <h4 className="font-semibold text-slate-100">Link Utili</h4>
            <ul className="mt-2 space-y-1 text-slate-300 text-sm">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#servizi" className="hover:underline">Servizi</a></li>
                <li><a href="#contatti" className="hover:underline">Prenota Visita</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Centro Dentale Porcaro. Tutti i diritti riservati.</p>
          <p className="mt-1">P.IVA 12345678901 - Sito web realizzato con professionalità.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
