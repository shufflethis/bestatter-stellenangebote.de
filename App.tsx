// HR-UPDATER: v1.0
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import IndustryInfo from './pages/IndustryInfo';
import Employers from './pages/Employers';
import Impressum from './pages/Impressum';

import { Menu, X, Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import AutorSeite from './pages/AutorSeite';
import Datenschutz from './pages/Datenschutz';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [currentPage]);

  const navLinks = [
    { label: 'Startseite', page: Page.HOME },
    { label: 'Stellenmarkt', page: Page.JOBS },
    { label: 'Für Arbeitgeber', page: Page.EMPLOYERS },
    { label: 'Ratgeber', page: Page.INDUSTRY },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME: return <Home setPage={setCurrentPage} />;
      case Page.JOBS: return <Jobs />;
      case Page.EMPLOYERS: return <Employers />;
      case Page.INDUSTRY: return <IndustryInfo />;
      case Page.IMPRESSUM: return <Impressum />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    
    <HashRouter>
      <Routes>
        <Route path="/" element={<div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white shadow-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => setCurrentPage(Page.HOME)}
            className="cursor-pointer flex items-center gap-2 group"
          >
            <div className="bg-primary-800 text-white p-2 rounded-sm font-serif text-xl font-bold">B</div>
            <div>
              <div className="font-serif font-bold text-slate-800 leading-none group-hover:text-primary-800 transition-colors">bestatter</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 leading-none">stellenangebote.de</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => setCurrentPage(link.page)}
                className={`text-sm font-semibold tracking-wide hover:text-primary-700 transition-colors ${currentPage === link.page ? 'text-primary-700 border-b-2 border-primary-700' : 'text-slate-600'}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 flex flex-col items-center gap-4 z-40">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => setCurrentPage(link.page)}
                className="text-lg font-medium text-slate-700 w-full text-center py-2 hover:bg-slate-50"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>



      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-serif font-bold text-lg mb-4">Über uns</h4>
            <p className="text-sm leading-relaxed mb-4 max-w-sm">
              Wir sind die führende Plattform für Jobs im Bestattungswesen. Unser Ziel ist es, würdevolle Arbeitgeber mit engagierten Fachkräften zusammenzubringen, um die Zukunft dieser wichtigen Branche zu sichern.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-4">Service</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setCurrentPage(Page.EMPLOYERS)} className="hover:text-white transition-colors">Für Arbeitgeber</button></li>
              <li><button onClick={() => setCurrentPage(Page.JOBS)} className="hover:text-white transition-colors">Stellengesuche</button></li>
              <li><button onClick={() => setCurrentPage(Page.INDUSTRY)} className="hover:text-white transition-colors">Karriere-Ratgeber</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Preise & Mediadaten</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} /> info@socialmediaventure.com</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +49 (0) 30 123456</li>
              <li className="mt-4"><button onClick={() => setCurrentPage(Page.IMPRESSUM)} className="hover:text-white transition-colors underline">Impressum & Datenschutz</button></li>
            </ul>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-xs text-center">
          &copy; {new Date().getFullYear()} bestatter-stellenangebote.de - Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/autor/thomas-sander" element={<AutorSeite />} />
      </Routes>
    </HashRouter>);
};

export default App;