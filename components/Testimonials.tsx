
import React, { useState } from 'react';

// Star Icon Component
const StarIcon: React.FC<{ filled: boolean; onClick?: () => void; onMouseEnter?: () => void; onMouseLeave?: () => void; }> = ({ filled, onClick, onMouseEnter, onMouseLeave }) => (
  <svg
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`w-6 h-6 cursor-pointer ${filled ? 'text-yellow-400' : 'text-slate-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);


interface Testimonial {
  quote: string;
  name: string;
  avatar: string;
}

const testimonialsList: Testimonial[] = [
  {
    quote: "Professionalità e cortesia al primo posto. Il Dott. Porcaro e il suo team mi hanno messo subito a mio agio, spiegandomi ogni passaggio con chiarezza. L'impronta digitale è fantastica!",
    name: 'Maria Rossi',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    quote: "Dopo anni di problemi, ho finalmente trovato una soluzione definitiva grazie all'implantologia. Tecnologia all'avanguardia e un'attenzione al paziente che fa la differenza. Consigliatissimo.",
    name: 'Giovanni Verdi',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    quote: "Ho portato mio figlio per la sua prima visita e sono rimasta colpita dalla pazienza e dalla dolcezza con cui è stato trattato. Ora non ha più paura del dentista. Grazie di cuore!",
    name: 'Laura Bianchi',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, avatar }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
    <img src={avatar} alt={`Foto di ${name}`} className="w-20 h-20 rounded-full mb-4 border-4 border-blue-200" />
    <p className="text-slate-600 italic mb-4">"{quote}"</p>
    <div className="flex">
        {[...Array(5)].map((_, i) => <StarIcon key={i} filled={true} />)}
    </div>
    <h4 className="font-bold text-slate-800 mt-4">- {name}</h4>
  </div>
);

const Testimonials: React.FC = () => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would send this data to a server.
        console.log({ name, review, rating });
        setSubmitted(true);
        setName('');
        setReview('');
        setRating(0);
    };


  return (
    <section id="testimonianze" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Dicono di Noi</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">La fiducia dei nostri pazienti è la nostra più grande ricompensa. Leggi cosa pensano della loro esperienza.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonialsList.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
             <h3 className="text-2xl font-bold text-slate-800 text-center mb-2">Lascia la tua Testimonianza</h3>
             <p className="text-center text-slate-600 mb-8">La tua opinione è importante per noi e per gli altri pazienti.</p>
             
             {submitted ? (
                 <div className="text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Grazie! </strong>
                    <span className="block sm:inline">La tua testimonianza è stata inviata con successo.</span>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700">Il tuo nome</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Mario Rossi"
                        />
                    </div>
                    <div>
                        <label htmlFor="review" className="block text-sm font-medium text-slate-700">La tua recensione</label>
                        <textarea
                            id="review"
                            name="review"
                            rows={4}
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Descrivi la tua esperienza..."
                        ></textarea>
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-slate-700 mb-2">Valutazione</label>
                         <div className="flex items-center">
                            {[...Array(5)].map((_, index) => {
                                const starValue = index + 1;
                                return (
                                    <StarIcon
                                        key={starValue}
                                        filled={starValue <= (hoverRating || rating)}
                                        onClick={() => setRating(starValue)}
                                        onMouseEnter={() => setHoverRating(starValue)}
                                        onMouseLeave={() => setHoverRating(0)}
                                    />
                                );
                            })}
                         </div>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-transform duration-300 hover:scale-105 shadow-lg"
                        >
                            Invia Recensione
                        </button>
                    </div>
                </form>
             )}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
