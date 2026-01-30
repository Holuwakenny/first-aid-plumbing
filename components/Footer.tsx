
import React from 'react';
import { COMPANY, IconMap } from '../constants.tsx';
import { Page } from '../types.ts';

interface FooterProps {
  setPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-1.5 rounded">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <span className="font-oswald text-xl font-bold tracking-tight text-white uppercase">First Aid Plumbing</span>
          </div>
          <p className="text-sm leading-relaxed">
            Professional plumbing solutions for Houston, Pearland, and surrounding areas. Our first-aid approach ensures your plumbing issues are diagnosed accurately and fixed permanently.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><button onClick={() => setPage('home')} className="hover:text-blue-400 transition-colors">Home</button></li>
            <li><button onClick={() => setPage('about')} className="hover:text-blue-400 transition-colors">About Our Team</button></li>
            <li><button onClick={() => setPage('services')} className="hover:text-blue-400 transition-colors">Plumbing Services</button></li>
            <li><button onClick={() => setPage('gallery')} className="hover:text-blue-400 transition-colors">Our Work Gallery</button></li>
            <li><button onClick={() => setPage('contact')} className="hover:text-blue-400 transition-colors">Contact Us</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Popular Services</h3>
          <ul className="space-y-3 text-sm">
            <li>Emergency Drain Repair</li>
            <li>Water Heater Installation</li>
            <li>Sewer Line Cleaning</li>
            <li>Leak Detection Specialists</li>
            <li>Bathroom Remodeling</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Contact Info</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">{IconMap.MapPin}</span>
              <span>{COMPANY.address}</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-400 mr-3">{IconMap.Phone}</span>
              <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">{COMPANY.phone}</a>
            </li>
            <li className="flex items-center">
              <span className="text-blue-400 mr-3">{IconMap.Clock}</span>
              <span>{COMPANY.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        <p className="mt-2 md:mt-0 uppercase tracking-widest">Plumbing License: HQP7+2J Pearland</p>
      </div>
    </footer>
  );
};

export default Footer;
