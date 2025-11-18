
import React from 'react';

// Icons components
const ToothIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DigitalIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const ChildIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 14.818l4.4-4.4a2 2 0 000-2.828l-4.4-4.4a2 2 0 00-2.828 0L9.172 7.172a2 2 0 000 2.828l4.4 4.4a2 2 0 002.828 0zM12 12a3 3 0 100-6 3 3 0 000 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2.5a2.5 2.5 0 012.5 2.5v13a2.5 2.5 0 01-2.5 2.5H3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 3h-2.5a2.5 2.5 0 00-2.5 2.5v13a2.5 2.5 0 002.5 2.5H21" />
  </svg>
);

const WhiteningIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 16.414l-4.293-4.293a1 1 0 010-1.414L10 6.414l1-1z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);


interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const servicesList: Service[] = [
  {
    icon: <ToothIcon />,
    title: 'Implantologia',
    description: 'Sostituzione di denti mancanti con soluzioni fisse, stabili e durature per ripristinare funzione ed estetica.',
  },
  {
    icon: <DigitalIcon />,
    title: 'Impronta Digitale',
    description: 'Massimo comfort e precisione assoluta con lo scanner intraorale, eliminando le tradizionali paste da impronta.',
  },
  {
    icon: <ChildIcon />,
    title: 'Pedodonzia',
    description: 'Cure dentali dedicate ai più piccoli, con un approccio empatico per creare un rapporto sereno con il dentista.',
  },
  {
    icon: <ToothIcon />,
    title: 'Protesi Fissa e Mobile',
    description: 'Realizzazione di protesi dentali con materiali biocompatibili e tecnologie digitali per un risultato naturale.',
  },
  {
    icon: <WhiteningIcon />,
    title: 'Sbiancamento Dentale',
    description: 'Trattamenti professionali per ridonare luminosità e brillantezza al tuo sorriso in totale sicurezza.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2 1M4 7l2-1M4 7v2.5M12 21.5V14m0-4.5v-4.5" /></svg>,
    title: 'Ortodonzia',
    description: 'Allineamento dei denti e correzione delle malocclusioni per adulti e bambini, con soluzioni anche invisibili.',
  },
];

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servizi" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">I Nostri Servizi per il Tuo Sorriso</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Offriamo una gamma completa di trattamenti per rispondere a ogni esigenza, dalla prevenzione alle riabilitazioni complesse.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
