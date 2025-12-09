import React from 'react';
import { Page } from '../types';
import { ArrowRight, CheckCircle, Users, Heart } from 'lucide-react';
import JobCard from '../components/JobCard';
import { MOCK_JOBS } from '../constants';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1050/1920/1080" 
            alt="Atmosphärisches Hintergrundbild Nebel" 
            className="w-full h-full object-cover filter brightness-50 contrast-75 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/30"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Würdevolles Arbeiten. <br/>Zukunftssichere Perspektiven.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 font-light">
            Die spezialisierte Jobbörse für das Bestattungswesen in Deutschland.
            Verbindet Menschen, die helfen wollen, mit Unternehmen, die Werte leben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setPage(Page.JOBS)}
              className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded text-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Stellenangebote ansehen <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => setPage(Page.EMPLOYERS)}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded text-lg font-semibold transition-all flex items-center justify-center"
            >
              Für Arbeitgeber
            </button>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3 text-slate-900">Sinnstiftende Tätigkeit</h3>
            <p className="text-slate-600">
              Finden Sie einen Beruf, der mehr ist als nur Arbeit. Begleiten Sie Menschen in schweren Stunden und leisten Sie einen wertvollen Dienst.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3 text-slate-900">Fachspezifisches Netzwerk</h3>
            <p className="text-slate-600">
              Wir konzentrieren uns ausschließlich auf Bestatter, Krematorien und Friedhofsverwaltungen. Keine Streuverluste, nur relevante Kontakte.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3 text-slate-900">Seriös & Diskret</h3>
            <p className="text-slate-600">
              Diskretion ist im Bestattungswesen oberstes Gebot. Unsere Plattform respektiert die Sensibilität der Branche in jedem Schritt.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Aktuelle Stellenangebote</h2>
              <p className="text-slate-500">Die neuesten Positionen aus ganz Deutschland</p>
            </div>
            <button 
              onClick={() => setPage(Page.JOBS)}
              className="text-primary-700 font-semibold hover:text-primary-800 hidden md:flex items-center gap-1"
            >
              Alle Jobs anzeigen <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_JOBS.slice(0, 3).map(job => (
              <JobCard key={job.id} job={job} onApply={() => alert('Bewerbungs-Funktion in Demo deaktiviert.')} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <button 
              onClick={() => setPage(Page.JOBS)}
              className="text-primary-700 font-semibold"
            >
              Alle Jobs anzeigen
            </button>
          </div>
        </div>
      </section>

      {/* SEO / Content Teaser */}
      <section className="py-20 bg-slate-900 text-slate-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">Wissen für die Branche</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Ob Ausbildungsinhalte, Gehaltsstrukturen oder die psychologischen Aspekte der Trauerbegleitung – 
            wir bieten umfassende Informationen für Einsteiger und Profis. Informieren Sie sich über die vielfältigen 
            Karrierewege im Bestattungswesen.
          </p>
          <button 
            onClick={() => setPage(Page.INDUSTRY)}
            className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded font-medium transition-colors"
          >
            Zum Karriere-Ratgeber
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;