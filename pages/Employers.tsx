import React from 'react';
import { EMPLOYER_TEXT } from '../constants';
import { Check } from 'lucide-react';

const Employers: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-slate-900 text-white py-20 px-4">
         <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Mitarbeiter finden mit Niveau</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Schalten Sie Ihre Stellenanzeigen dort, wo Fachkräfte suchen. <br/>
              Spezialisiert. Diskret. Erfolgreich.
            </p>
         </div>
       </div>

       <div className="max-w-5xl mx-auto px-4 py-16">
         {/* Main Content */}
         <div dangerouslySetInnerHTML={{ __html: EMPLOYER_TEXT }} />

         {/* Pricing / Packages */}
         <h2 className="text-3xl font-serif font-bold text-center text-slate-800 mb-12 mt-12">Unsere Anzeigenpakete</h2>
         
         <div className="grid md:grid-cols-3 gap-8">
           {/* Basic */}
           <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
             <h3 className="text-xl font-bold text-slate-800 mb-2">Basis</h3>
             <div className="text-3xl font-bold text-primary-700 mb-4">99€ <span className="text-sm font-normal text-slate-500">/ 30 Tage</span></div>
             <ul className="space-y-3 mb-8">
               <li className="flex items-center gap-2 text-sm text-slate-600"><Check size={16} className="text-green-500" /> Standard Listing</li>
               <li className="flex items-center gap-2 text-sm text-slate-600"><Check size={16} className="text-green-500" /> Firmenlogo</li>
             </ul>
             <button className="w-full bg-slate-100 text-slate-800 py-2 rounded font-semibold hover:bg-slate-200">Buchen</button>
           </div>

           {/* Pro */}
           <div className="border-2 border-primary-500 rounded-lg p-6 shadow-md relative transform md:-translate-y-4 bg-white">
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold">Empfohlen</div>
             <h3 className="text-xl font-bold text-slate-800 mb-2">Premium</h3>
             <div className="text-3xl font-bold text-primary-700 mb-4">199€ <span className="text-sm font-normal text-slate-500">/ 60 Tage</span></div>
             <ul className="space-y-3 mb-8">
               <li className="flex items-center gap-2 text-sm text-slate-600"><Check size={16} className="text-green-500" /> Top-Platzierung</li>
               <li className="flex items-center gap-2 text-sm text-slate-600"><Check size={16} className="text-green-500" /> Social Media Boost</li>
               <li className="flex items-center gap-2 text-sm text-slate-600"><Check size={16} className="text-green-500" /> KI-Optimierung des Textes</li>
             </ul>
             <button className="w-full bg-primary-700 text-white py-2 rounded font-semibold hover:bg-primary-800">Buchen</button>
           </div>

           {/* Enterprise */}
           <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
             <h3 className="text-xl font-bold text-slate-800 mb-2">Jahresflat</h3>
             <div className="text-3xl font-bold text-primary-700 mb-4">Individuell</div>
             <ul className="space-y-3 mb-8">
               <li className="flex items-center gap-2 text-sm text-slate-600"><Check size={16} className="text-green-500" /> Unbegrenzte Anzeigen</li>
               <li className="flex items-center gap-2 text-sm text-slate-600"><Check size={16} className="text-green-500" /> Employer Branding Profil</li>
             </ul>
             <button className="w-full bg-slate-100 text-slate-800 py-2 rounded font-semibold hover:bg-slate-200">Kontaktieren</button>
           </div>
         </div>
       </div>
    </div>
  );
};

export default Employers;