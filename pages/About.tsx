
import React from 'react';
import { COMPANY, GALLERY } from '../constants.tsx';
import { Shield, Clock, Users, Wrench } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6 text-slate-900">About Our Company</h1>
          <div className="h-1.5 w-24 bg-red-600 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p className="font-bold text-slate-900 italic">
              "We founded First Aid Plumbing Specialist INC with a simple mission: To provide the most reliable, honest, and high-quality plumbing service in the Greater Houston area."
            </p>
            <p>
              Located at 9847 Sageroyal Ln, we've built our reputation on being there when our neighbors need us most. Whether it's a small leak or a major plumbing catastrophe, our team approaches every challenge with professional skill and local care.
            </p>
            <p>
              Our name, "First Aid," represents our philosophy of quick diagnosis and effective treatment for your home's vital systems. We don't just patch problems; we provide lasting cures that keep your property safe and dry.
            </p>
          </div>
          <div className="relative">
            <img 
              src={GALLERY[1].url} 
              alt="Our Workshop" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-lg shadow-xl hidden md:block">
              <p className="text-4xl font-bold">Open 24/7</p>
              <p className="uppercase tracking-widest text-sm opacity-80">For Your Peace of Mind</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why We Stand Out</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Our commitment to excellence is reflected in everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Shield className="w-8 h-8"/>, title: 'Trusted Experience', desc: 'Over a decade of hands-on plumbing knowledge.' },
              { icon: <Clock className="w-8 h-8"/>, title: 'Always Available', desc: 'Your emergency is our priority, any time of day.' },
              { icon: <Users className="w-8 h-8"/>, title: 'Local Expertise', desc: 'Proudly serving Houston, Pearland, and the Bay Area.' },
              { icon: <Wrench className="w-8 h-8"/>, title: 'Master Craftsmen', desc: 'Licensed professionals using the latest techniques.' }
            ].map((value, idx) => (
              <div key={idx} className="text-center group">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
             <h4 className="font-bold text-xl mb-4 text-blue-900">Our Headquarters</h4>
             <p className="text-slate-600">{COMPANY.address}</p>
           </div>
           <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
             <h4 className="font-bold text-xl mb-4 text-blue-900">Service Hours</h4>
             <p className="text-slate-600">Monday - Sunday</p>
             <p className="text-slate-900 font-bold uppercase">{COMPANY.hours}</p>
           </div>
           <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
             <h4 className="font-bold text-xl mb-4 text-blue-900">Contact Us</h4>
             <p className="text-slate-600">Phone: {COMPANY.phone}</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
