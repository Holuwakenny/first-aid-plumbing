
import React from 'react';
import { SERVICES, IconMap, COMPANY } from '../constants.tsx';

const Services: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-slate-900">Our Plumbing Expertise</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From routine maintenance to complex commercial installations, our licensed plumbers handle every project with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all flex flex-col items-start group">
              <div className="mb-8 p-4 bg-slate-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                {IconMap[service.icon]}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {service.description} We use professional-grade materials and verify all work meets local building codes for maximum safety and durability.
              </p>
              <div className="mt-auto pt-6 border-t border-slate-50 w-full flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Starting at Competitive Rates</span>
                <a href={`tel:${COMPANY.phone}`} className="text-blue-600 font-bold hover:underline">Get Estimate</a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-3xl p-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
             <h2 className="text-3xl font-bold mb-6 text-blue-900 leading-tight">Preventive Maintenance: <br/>Save Money Before the Leak Starts</h2>
             <p className="text-slate-700 mb-8 leading-relaxed">
               Most major plumbing disasters could have been avoided with a simple inspection. Our maintenance plans include checking for pipe corrosion, water pressure testing, and sewer line inspections to catch issues early.
             </p>
             <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg">
               BOOK A MAINTENANCE CHECK
             </button>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-blue-600 text-lg mb-2">Lower Bills</h4>
                <p className="text-xs text-slate-500">Fixing tiny leaks can save hundreds per year on your water bill.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-blue-600 text-lg mb-2">Longevity</h4>
                <p className="text-xs text-slate-500">Extend the life of your expensive appliances like water heaters.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
