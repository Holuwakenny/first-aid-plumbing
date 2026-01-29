
import React from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-slate-900">Our Work in Action</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Take a look at our team and some of the specialized projects we've completed across the Houston area.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GALLERY.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-video md:aspect-auto h-[400px]">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2">{img.title}</h3>
                <p className="text-slate-300 text-sm">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Commitment Banner */}
        <div className="mt-20 bg-slate-100 rounded-3xl p-12 text-center border border-slate-200">
           <h2 className="text-3xl font-bold mb-4 text-slate-900">Quality You Can See</h2>
           <p className="text-slate-600 max-w-xl mx-auto mb-8">
             Every image here is a testament to our commitment to precision. We don't take shortcuts, and we stand by every joint, pipe, and installation we perform.
           </p>
           <div className="inline-flex space-x-12">
              <div>
                <p className="text-4xl font-bold text-blue-600">100%</p>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">24/7</p>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Availability</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">1000+</p>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Jobs Completed</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
