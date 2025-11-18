
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technology from './components/Technology';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-slate-700">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Technology />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;