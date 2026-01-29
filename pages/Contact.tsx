
import React, { useState } from 'react';
import { COMPANY, IconMap } from '../constants';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h1 className="text-5xl font-bold mb-6 text-slate-900">Get In Touch</h1>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed">
              Facing a plumbing emergency or planning a remodel? Reach out to First Aid Plumbing Specialist INC today. We provide free estimates and are available 24 hours a day.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-6 shrink-0">
                  {IconMap.Phone}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Call Us Anytime</h4>
                  <a href={`tel:${COMPANY.phone}`} className="text-blue-600 font-bold text-xl hover:underline">
                    {COMPANY.phone}
                  </a>
                  <p className="text-slate-500 text-sm mt-1">Available 24/7 for Emergencies</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-6 shrink-0">
                  {IconMap.MapPin}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Our Location</h4>
                  <p className="text-slate-600">{COMPANY.address}</p>
                  <p className="text-slate-400 text-sm mt-1">Houston / Pearland Area</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-6 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Email Inquiry</h4>
                  <p className="text-slate-600">{COMPANY.email}</p>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white h-64 bg-slate-200 flex items-center justify-center relative group">
              <img 
                src="https://picsum.photos/seed/map/800/400" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3">
                   <div className="w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
                   <span className="font-bold text-slate-900">Serving Houston & Pearland</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 -mr-16 -mt-16 rounded-full"></div>
            
            <h3 className="text-2xl font-bold mb-8 text-slate-900 relative z-10">Send a Message</h3>
            
            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-xl text-center">
                 <h4 className="font-bold text-2xl mb-2">Message Received!</h4>
                 <p>Thank you for reaching out. A specialist will call you shortly.</p>
                 <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-green-700 font-bold underline"
                 >
                   Send another message
                 </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="(832) 000-0000"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Service Type</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all">
                    <option>Emergency Repair</option>
                    <option>Drain Cleaning</option>
                    <option>Water Heater</option>
                    <option>Leak Detection</option>
                    <option>Remodeling</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">How can we help?</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Briefly describe your plumbing issue..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  ></textarea>
                </div>
                <button 
                  disabled={formStatus === 'sending'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center space-x-3 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50"
                >
                  {formStatus === 'sending' ? (
                    <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>SEND REQUEST</span>
                    </>
                  )}
                </button>
                <p className="text-xs text-slate-400 text-center italic">
                  By clicking send, you agree to receive a callback from our plumbing team.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
