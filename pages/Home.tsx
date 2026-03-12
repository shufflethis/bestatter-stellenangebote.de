import React, { useState } from 'react';
import { Page } from '../types';
import { ArrowRight, CheckCircle, Users, Heart, ChevronDown, MapPin } from 'lucide-react';
import JobCard from '../components/JobCard';
import { MOCK_JOBS } from '../constants';

interface HomeProps {
  setPage: (page: Page) => void;
}

const BESTATTER_STAEDTE = [
  'Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt am Main', 'Stuttgart', 'Düsseldorf', 'Leipzig',
  'Dortmund', 'Essen', 'Bremen', 'Dresden', 'Hannover', 'Nürnberg', 'Duisburg', 'Bochum',
  'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Mannheim', 'Karlsruhe', 'Augsburg', 'Wiesbaden',
  'Aachen', 'Braunschweig', 'Kiel', 'Chemnitz', 'Magdeburg', 'Freiburg im Breisgau',
  'Lübeck', 'Erfurt', 'Rostock', 'Mainz', 'Kassel', 'Hagen', 'Potsdam', 'Saarbrücken',
  'Hamm', 'Ludwigshafen', 'Oldenburg', 'Osnabrück', 'Regensburg', 'Heidelberg', 'Darmstadt',
  'Wolfsburg', 'Würzburg', 'Göttingen', 'Cottbus', 'Ulm'
];

const HOME_FAQ = [
  {
    question: 'Welche Berufe gibt es im Bestattungswesen?',
    answer: 'Das Bestattungswesen umfasst vielfältige Berufsbilder: Bestattungsfachkraft (3-jährige Ausbildung), Bestattermeister/in, Thanatopraktiker/in, Trauerredner/in, Friedhofsgärtner/in, Krematoriumsmitarbeiter/in sowie kaufmännische und verwaltende Tätigkeiten in Bestattungshäusern. Auch Quereinsteiger mit Empathie und Organisationstalent finden hier Einstiegsmöglichkeiten.'
  },
  {
    question: 'Wie werde ich Bestattungsfachkraft?',
    answer: 'Die Ausbildung zur Bestattungsfachkraft dauert 3 Jahre und ist dual organisiert (Betrieb und Berufsschule). Voraussetzung ist in der Regel ein Realschulabschluss. Inhalte umfassen Trauerbegleitung, hygienische Versorgung, Verwaltung und Rechtsvorschriften. Ein Führerschein Klasse B ist meist erforderlich. Nach der Ausbildung kann man sich zum Bestattermeister oder Thanatopraktiker weiterqualifizieren.'
  },
  {
    question: 'Was verdient man als Bestatter?',
    answer: 'Das Gehalt variiert je nach Region, Qualifikation und Berufserfahrung. Auszubildende verdienen ca. 800-1.100 EUR monatlich. Einstiegsgehälter für Bestattungsfachkräfte liegen bei 2.200-2.800 EUR brutto. Erfahrene Fachkräfte und Bestattermeister können 3.500-4.500 EUR brutto und mehr erreichen. Zuschläge für Bereitschaftsdienste und Wochenendarbeit kommen oft hinzu.'
  },
  {
    question: 'Ist der Bestatterberuf krisensicher?',
    answer: 'Ja, das Bestattungswesen gilt als eine der krisensichersten Branchen überhaupt. Die Dienstleistungen sind systemrelevant und konjunkturunabhängig. Durch den demografischen Wandel steigt der Bedarf an qualifizierten Fachkräften sogar kontinuierlich. Es herrscht in vielen Regionen Deutschlands bereits ein spürbarer Fachkräftemangel.'
  },
  {
    question: 'Warum ein spezialisiertes Jobportal für Bestatter?',
    answer: 'Allgemeine Jobbörsen können die besonderen Anforderungen des Bestattungswesens nicht ausreichend abbilden. Auf bestatter-stellenangebote.de treffen gezielt Arbeitgeber aus der Branche auf qualifizierte Fachkräfte und motivierte Quereinsteiger. Das spart Zeit, reduziert Streuverluste und sorgt für passgenaue Ergebnisse auf beiden Seiten.'
  },
  {
    question: 'Welche Weiterbildungsmöglichkeiten gibt es im Bestattungswesen?',
    answer: 'Nach der Ausbildung zur Bestattungsfachkraft stehen zahlreiche Weiterbildungswege offen: Bestattermeister/in (HWK), Fachwirt/in für Bestattung, Thanatopraktiker/in, Trauerbegleiter/in oder Betriebswirt/in im Handwerk. Auch Studiengänge im Bereich Friedhofs- und Bestattungskultur werden angeboten. Viele Arbeitgeber unterstützen Weiterbildungen aktiv.'
  }
];

const Home: React.FC<HomeProps> = ({ setPage }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full">

      {/* Mobile: Jobs zuerst sichtbar */}
      <section className="md:hidden bg-white py-8 px-4">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Aktuelle Bestatter-Stellenangebote</h2>
        <div className="flex flex-col gap-4">
          {MOCK_JOBS.slice(0, 3).map(job => (
            <JobCard key={job.id} job={job} onApply={() => alert('Bewerbungs-Funktion in Demo deaktiviert.')} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => setPage(Page.JOBS)}
            className="bg-primary-700 text-white px-6 py-3 rounded font-semibold hover:bg-primary-800 transition-colors inline-flex items-center gap-2"
          >
            Alle Stellenangebote <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Hero Section - hidden on mobile, visible on md+ */}
      <section className="relative h-[600px] hidden md:flex items-center justify-center text-center px-4 overflow-hidden">
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
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="text-center p-4 md:p-6">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Heart size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-serif font-bold mb-2 md:mb-3 text-slate-900">Sinnstiftende Tätigkeit</h3>
            <p className="text-slate-600 text-sm md:text-base">
              Finden Sie einen Beruf, der mehr ist als nur Arbeit. Begleiten Sie Menschen in schweren Stunden und leisten Sie einen wertvollen Dienst.
            </p>
          </div>
          <div className="text-center p-4 md:p-6">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Users size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-serif font-bold mb-2 md:mb-3 text-slate-900">Fachspezifisches Netzwerk</h3>
            <p className="text-slate-600 text-sm md:text-base">
              Wir konzentrieren uns ausschließlich auf Bestatter, Krematorien und Friedhofsverwaltungen. Keine Streuverluste, nur relevante Kontakte.
            </p>
          </div>
          <div className="text-center p-4 md:p-6">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-serif font-bold mb-2 md:mb-3 text-slate-900">Seriös & Diskret</h3>
            <p className="text-slate-600 text-sm md:text-base">
              Diskretion ist im Bestattungswesen oberstes Gebot. Unsere Plattform respektiert die Sensibilität der Branche in jedem Schritt.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Jobs - Desktop only (mobile already shown above) */}
      <section className="py-20 bg-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Aktuelle Stellenangebote</h2>
              <p className="text-slate-500">Die neuesten Positionen aus ganz Deutschland</p>
            </div>
            <button
              onClick={() => setPage(Page.JOBS)}
              className="text-primary-700 font-semibold hover:text-primary-800 flex items-center gap-1"
            >
              Alle Jobs anzeigen <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_JOBS.slice(0, 3).map(job => (
              <JobCard key={job.id} job={job} onApply={() => alert('Bewerbungs-Funktion in Demo deaktiviert.')} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO / Content Teaser */}
      <section className="py-12 md:py-20 bg-slate-900 text-slate-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 md:mb-6">Wissen für die Branche</h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
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

      {/* Geo SEO: Bestatter-Stellenangebote in deutschen Städten */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-3 text-center">
            Bestatter-Stellenangebote in Ihrer Stadt
          </h2>
          <p className="text-slate-500 text-center mb-8 max-w-2xl mx-auto">
            Finden Sie offene Stellen im Bestattungswesen in ganz Deutschland. Wählen Sie Ihre Stadt und entdecken Sie aktuelle Jobangebote für Bestatter, Bestattungsfachkräfte und Trauerbegleiter.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {BESTATTER_STAEDTE.map(stadt => (
              <button
                key={stadt}
                onClick={() => setPage(Page.JOBS)}
                className="inline-flex items-center gap-1 bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-sm hover:bg-primary-50 hover:border-primary-300 hover:text-primary-800 transition-colors"
              >
                <MapPin size={14} />
                Bestatter Jobs {stadt}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Bestattungswesen Karriere */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-3 text-center">
            Häufige Fragen zum Bestattungswesen
          </h2>
          <p className="text-slate-500 text-center mb-8">
            Alles Wichtige rund um Karriere, Ausbildung und Beruf als Bestatter
          </p>

          <div className="space-y-3">
            {HOME_FAQ.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg bg-slate-50 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left font-medium text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-serif text-base md:text-lg pr-4">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 text-primary-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 md:px-5 md:pb-5 text-slate-600 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQ Schema.org structured data */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: HOME_FAQ.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          }) }} />
        </div>
      </section>

      {/* Karriere-Info Bestattungswesen */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6 text-center">
            Karriere im Bestattungswesen -- Ein Beruf mit Zukunft
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              Das Bestattungswesen ist eine der stabilsten und zugleich anspruchsvollsten Branchen in Deutschland. Wer sich für eine Karriere als Bestatter, Bestattungsfachkraft oder in verwandten Berufen entscheidet, wählt einen Weg, der Sinnhaftigkeit, Menschlichkeit und berufliche Sicherheit verbindet. Die Branche bietet Arbeitsplätze, die weder von Konjunkturschwankungen noch von Automatisierung bedroht sind.
            </p>
            <h3 className="text-xl font-serif font-bold text-slate-800 mt-6">Ausbildung und Einstieg</h3>
            <p>
              Die dreijährige Ausbildung zur Bestattungsfachkraft ist der klassische Einstieg in die Branche. Sie vereint handwerkliche, kaufmännische und psychologische Kompetenzen. Auszubildende lernen die hygienische Versorgung Verstorbener, die Organisation von Trauerfeiern, rechtliche Grundlagen des Bestattungswesens sowie die einfühlsame Beratung trauernder Angehöriger. Auch Quereinsteiger aus Pflege, Handwerk oder sozialen Berufen finden zunehmend den Weg in das Bestattungswesen.
            </p>
            <h3 className="text-xl font-serif font-bold text-slate-800 mt-6">Weiterbildung und Spezialisierung</h3>
            <p>
              Nach der Ausbildung stehen zahlreiche Weiterbildungsmöglichkeiten offen: Der Bestattermeister (HWK) qualifiziert zur eigenständigen Betriebsführung und Ausbildung. Thanatopraktiker spezialisieren sich auf die ästhetische und konservierende Versorgung Verstorbener. Der Fachwirt für Bestattung verbindet betriebswirtschaftliches Know-how mit Branchenexpertise. Trauerbegleiter und Trauerredner ergänzen das Berufsspektrum um psychologische und rituelle Kompetenzen.
            </p>
            <h3 className="text-xl font-serif font-bold text-slate-800 mt-6">Arbeitsmarkt und Perspektiven</h3>
            <p>
              Der demografische Wandel in Deutschland sorgt für eine kontinuierlich steigende Nachfrage nach qualifizierten Fachkräften im Bestattungswesen. Viele Bestattungshäuser -- insbesondere in ländlichen Regionen -- suchen dringend Nachwuchs. Die Digitalisierung eröffnet zudem neue Tätigkeitsfelder: Digitale Gedenkseiten, Online-Vorsorge, moderne CRM-Systeme und virtuelle Trauerbegleitung sind Bereiche, in denen auch technikaffine Fachkräfte gefragt sind. Bestatter-stellenangebote.de ist die spezialisierte Plattform, die Arbeitgeber und Fachkräfte in diesem wichtigen Berufsfeld zusammenbringt.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;