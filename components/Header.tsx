
import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-slate-600 hover:text-blue-600 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-blue-700">
              Centro Dentale <span className="text-slate-800">Porcaro</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#chi-siamo">Chi Siamo</NavLink>
              <NavLink href="#servizi">Servizi</NavLink>
              <NavLink href="#tecnologia">Tecnologia</NavLink>
              <NavLink href="#testimonianze">Testimonianze</NavLink>
              <NavLink href="#contatti">Contatti</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
             <a href="#contatti" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-transform duration-300 hover:scale-105">
                Prenota Consulenza
              </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-slate-100 inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Apri menù principale</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#chi-siamo" onClick={closeMenu}>Chi Siamo</NavLink>
            <NavLink href="#servizi" onClick={closeMenu}>Servizi</NavLink>
            <NavLink href="#tecnologia" onClick={closeMenu}>Tecnologia</NavLink>
            <NavLink href="#testimonianze" onClick={closeMenu}>Testimonianze</NavLink>
            <NavLink href="#contatti" onClick={closeMenu}>Contatti</NavLink>
          </div>
           <div className="pt-4 pb-3 border-t border-slate-200">
                <div className="flex justify-center">
                    <a href="#contatti" onClick={closeMenu} className="bg-blue-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-blue-700 transition-transform duration-300 hover:scale-105">
                        Prenota Consulenza
                    </a>
                </div>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;