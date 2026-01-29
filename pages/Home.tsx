
import React from 'react';
import { COMPANY, SERVICES, IconMap, GALLERY } from '../constants';
import { Page } from '../types';
import { ShieldCheck, Clock, Award, CheckCircle2 } from 'lucide-react';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={GALLERY[0].url} 
            alt="Plumbing Van" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 w-full text-white">
          <div className="max-w-2xl">
            <h2 className="text-red-500 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Need a Plumber Right Now?</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Houston's 24/7 <br/>
              <span className="text-blue-400">Emergency</span> Plumber
            </h1>
            <p className="text-lg md:text-xl mb-8 text-slate-200">
              Trusted plumbing specialists serving Houston, Pearland, and surrounding areas. 
              Diagnostic expertise and professional solutions for every pipe and drain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${COMPANY.phone}`}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-bold text-center flex items-center justify-center transition-all shadow-xl"
              >
                CALL {COMPANY.phone}
              </a>
              <button 
                onClick={() => setPage('services')}
                className="bg-white/10 backdrop-blur hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded font-bold transition-all text-center"
              >
                OUR SERVICES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <Clock className="w-10 h-10 text-blue-600 shrink-0" />
              <div>
                <p className="font-bold text-slate-900 leading-tight">24/7 Support</p>
                <p className="text-xs text-slate-500">Day or night service</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ShieldCheck className="w-10 h-10 text-blue-600 shrink-0" />
              <div>
                <p className="font-bold text-slate-900 leading-tight">Licensed & Insured</p>
                <p className="text-xs text-slate-500">Fully professional team</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Award className="w-10 h-10 text-blue-600 shrink-0" />
              <div>
                <p className="font-bold text-slate-900 leading-tight">Quality Parts</p>
                <p className="text-xs text-slate-500">Long-lasting repairs</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle2 className="w-10 h-10 text-blue-600 shrink-0" />
              <div>
                <p className="font-bold text-slate-900 leading-tight">Fixed Pricing</p>
                <p className="text-xs text-slate-500">No hidden surprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src={GALLERY[3].url} 
              alt="Plumbing Work" 
              className="rounded-lg shadow-2xl relative z-10 w-full aspect-video object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-lg -z-0 opacity-20"></div>
          </div>
          <div>
            <h3 className="text-blue-600 font-bold tracking-widest uppercase mb-4">Welcome to First Aid Plumbing</h3>
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Your First Response for Any Plumbing Emergency</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              At First Aid Plumbing Specialist INC, we treat every job with the urgency it deserves. Based in Houston, TX, we are a locally owned and operated business that prioritizes customer satisfaction and quality craftsmanship above all else.
            </p>
            <ul className="space-y-4 mb-8">
              {['Residential & Commercial Expertise', 'State-of-the-Art Leak Detection', 'Transparent Upfront Estimates'].map((item) => (
                <li key={item} className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mr-3" /> {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setPage('about')}
              className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-700 transition-colors"
            >
              LEARN MORE ABOUT US
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h3 className="text-red-600 font-bold tracking-widest uppercase mb-4">What We Do</h3>
          <h2 className="text-4xl font-bold text-slate-900">Full-Service Plumbing Solutions</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="p-8 border border-slate-100 rounded-xl hover:shadow-xl transition-all group bg-slate-50 hover:bg-white">
              <div className="bg-white group-hover:bg-blue-600 group-hover:text-white transition-colors w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                {IconMap[service.icon]}
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h4>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">{service.description}</p>
              <button 
                onClick={() => setPage('services')}
                className="text-blue-600 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform"
              >
                READ MORE <span className="ml-2">→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Got a plumbing emergency in Houston?</h2>
            <p className="text-blue-200">Our specialists are standing by 24 hours a day.</p>
          </div>
          <a 
            href={`tel:${COMPANY.phone}`}
            className="bg-white text-blue-900 px-10 py-5 rounded font-black text-xl hover:scale-105 transition-transform shadow-2xl"
          >
            {COMPANY.phone}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
