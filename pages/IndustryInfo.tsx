import React from 'react';
import { SEO_TEXT_INDUSTRY, INDUSTRY_FAQ } from '../constants';
import { ChevronDown } from 'lucide-react';

const IndustryInfo: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header Image */}
      <div className="h-64 md:h-80 w-full relative bg-slate-800">
        <img 
          src="https://picsum.photos/id/1029/1200/400" 
          alt="Bücher in einer Bibliothek - Symbol für Wissen"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center px-4 shadow-black drop-shadow-lg">
            Karriere-Ratgeber & Branchenwissen
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="prose prose-slate max-w-none mb-16">
          <div dangerouslySetInnerHTML={{ __html: SEO_TEXT_INDUSTRY }} />
        </div>

        {/* FAQ Section (Accordion) */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8 border-b pb-4">Häufige Fragen (FAQ)</h2>
          <div className="space-y-4">
            {INDUSTRY_FAQ.map((faq, idx) => (
              <details key={idx} className="group border border-slate-200 rounded-lg bg-slate-50 open:bg-white open:shadow-md transition-all">
                <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900">
                  <span className="font-serif text-lg">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180 text-primary-600" />
                </summary>
                <div className="p-4 pt-0 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Additional Content / Call to Action */}
        <div className="bg-primary-50 p-8 rounded-xl border border-primary-100 text-center">
          <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">Sie haben weitere Fragen?</h3>
          <p className="text-primary-800 mb-6">
            Unser KI-gestützter Karriere-Assistent (unten rechts) kann Ihnen rund um die Uhr Fragen zu Berufsbildern, Voraussetzungen und Bewerbungsverfahren beantworten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustryInfo;