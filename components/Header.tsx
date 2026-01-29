
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY } from '../constants';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'Gallery', value: 'gallery' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNav = (value: Page) => {
    setPage(value);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-red-700 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> Emergency 24/7 Service</span>
            <span className="opacity-75">|</span>
            <span>Serving Houston & Pearland</span>
          </div>
          <div className="font-bold tracking-wider">
            CALL US: <a href={`tel:${COMPANY.phone}`} className="hover:underline">{COMPANY.phone}</a>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleNav('home')}
        >
          <div className="bg-blue-600 p-2 rounded">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <div>
            <span className="font-oswald text-xl font-bold leading-tight block text-blue-900">FIRST AID PLUMBING</span>
            <span className="text-xs font-bold text-red-600 tracking-widest uppercase">Specialist INC</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNav(item.value)}
              className={`font-semibold text-sm uppercase tracking-wide transition-colors ${
                currentPage === item.value ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a 
            href={`tel:${COMPANY.phone}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            FREE ESTIMATE
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 absolute w-full shadow-xl">
          <div className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={`text-left font-semibold py-2 border-b border-slate-50 ${
                  currentPage === item.value ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href={`tel:${COMPANY.phone}`}
              className="bg-red-600 text-white text-center py-3 rounded font-bold"
            >
              CALL NOW: {COMPANY.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
