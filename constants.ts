import { JobListing, FAQItem } from './types';

export const MOCK_JOBS: JobListing[] = [
  {
    id: '1',
    title: 'Bestattungsfachkraft (m/w/d) im Technischen Dienst',
    employer: 'Sereni Deutschland GmbH',
    location: 'Kandel, Pfalz',
    type: 'Vollzeit',
    description: 'Bestattungsfachkraft (m/w/d) im Technischen Dienst',
    tags: ['Bestattungsfachkraft'],
    date: '2026-03-03'
  },
  {
    id: '2',
    title: 'Bestattungsfachkraft (m/w/d)',
    employer: 'I. K.Hofmann GmbH',
    location: 'Eisenhüttenstadt',
    type: 'Vollzeit',
    description: 'Bestattungsfachkraft (m/w/d)',
    tags: ['Bestattungsfachkraft'],
    date: '2026-02-25'
  },
  {
    id: '3',
    title: 'Bestatter (m/w/d)',
    employer: 'Bestattungshaus Friedensruh GmbH',
    location: 'Cottbus',
    type: 'Vollzeit',
    description: 'Bestatter (m/w/d)',
    tags: ['Bestattungsfachkraft'],
    date: '2026-02-24'
  },
  {
    id: '4',
    title: 'Bestattungsberater (m/w/d) gesucht',
    employer: 'Bestattungen Mayr GmbH',
    location: 'Peißenberg',
    type: 'Vollzeit',
    description: 'Bestattungsberater (m/w/d) gesucht',
    tags: ['Bestattungsgehilfe/-gehilfin'],
    date: '2026-02-19'
  },
  {
    id: '5',
    title: 'Bestattungsfachkraft (m/w/d)',
    employer: 'Bestattungshaus Müller GmbH',
    location: 'Fürstenberg/Havel',
    type: 'Vollzeit',
    description: 'Bestattungsfachkraft (m/w/d)',
    tags: ['Bestattungsfachkraft'],
    date: '2026-02-17'
  },
  {
    id: '6',
    title: 'Bestattungsberater (m/w/d)',
    employer: 'Sereni Deutschland GmbH',
    location: 'Mannheim',
    type: 'Vollzeit',
    description: 'Bestattungsberater (m/w/d)',
    tags: ['Bestattungsfachkraft'],
    date: '2026-02-10'
  },
  {
    id: '7',
    title: 'Bestatter / Quereinsteiger (m/w/d) gesucht',
    employer: 'Bestattungsdienst Weiß & Mozer GmbH',
    location: 'Jettingen, Württemberg',
    type: 'Vollzeit',
    description: 'Bestatter / Quereinsteiger (m/w/d) gesucht',
    tags: ['Bestattungsfachkraft'],
    date: '2026-02-04'
  },
  {
    id: '8',
    title: 'Fahrer/Bestattungshelfer (m/w/d) im Technischen Dienst',
    employer: 'Sereni Deutschland GmbH',
    location: 'Bad Dürkheim',
    type: 'Vollzeit',
    description: 'Fahrer/Bestattungshelfer (m/w/d) im Technischen Dienst',
    tags: ['Bestattungsfachkraft'],
    date: '2026-02-04'
  },
  {
    id: '9',
    title: 'Bestatterhelfer/in (m/w/d) für den Bereitschaftsdienst',
    employer: 'Fritz Freuer KG Beerdigungsinstitut',
    location: 'Delmenhorst',
    type: 'Vollzeit',
    description: 'Bestatterhelfer/in (m/w/d) für den Bereitschaftsdienst',
    tags: ['Bestattungsgehilfe/-gehilfin'],
    date: '2026-02-04'
  },
  {
    id: '10',
    title: 'Bestattungsfachkraft /Bestatter (m/w/d)',
    employer: 'Radoslaw Bukolt Omega Bestattungen',
    location: 'Kleinrinderfeld',
    type: 'Vollzeit',
    description: 'Bestattungsfachkraft /Bestatter (m/w/d)',
    tags: ['Bestattungsfachkraft'],
    date: '2026-02-02'
  },
  {
    id: '11',
    title: 'Bestatter - im Technischen Dienst',
    employer: 'Beerdigungs-Institut Tielitz oHG',
    location: 'Bremen',
    type: 'Vollzeit',
    description: 'Bestatter - im Technischen Dienst',
    tags: ['Bestattungsfachkraft'],
    date: '2026-01-27'
  },
  {
    id: '12',
    title: 'Bestatter - Beratung von Angehörigen',
    employer: 'Beerdigungs-Institut Tielitz oHG',
    location: 'Bremen',
    type: 'Vollzeit',
    description: 'Bestatter - Beratung von Angehörigen',
    tags: ['Bestattungsfachkraft'],
    date: '2026-01-27'
  },
  {
    id: '13',
    title: 'Bestatter (m/w/d) mit Berufserfahrung, Bestattungsfachkraft, Moderner Arbeitsplatz garantiert',
    employer: 'Bestattungsinstitut Muschter Inhaber Benjamin Wolf',
    location: 'Ottendorf-Okrilla',
    type: 'Vollzeit',
    description: 'Bestatter (m/w/d) mit Berufserfahrung, Bestattungsfachkraft, Moderner Arbeitsplatz garantiert',
    tags: ['Bestattungsfachkraft'],
    date: '2026-01-22'
  },
  {
    id: '14',
    title: 'Bestattungsfachkraft (m/w/d) in Teilzeit oder Vollzeit für Kirchweyhe gesucht',
    employer: 'Wolle Bestattungen GmbH',
    location: 'Weyhe bei Bremen',
    type: 'Vollzeit',
    description: 'Bestattungsfachkraft (m/w/d) in Teilzeit oder Vollzeit für Kirchweyhe gesucht',
    tags: ['Bestattermeister/in'],
    date: '2026-01-20'
  },
  {
    id: '15',
    title: 'Geschäftsleiter (m/w/d) für Bestattungshaus',
    employer: 'Sereni Deutschland GmbH',
    location: 'Bad Krozingen',
    type: 'Vollzeit',
    description: 'Geschäftsleiter (m/w/d) für Bestattungshaus',
    tags: ['Bestattermeister/in'],
    date: '2026-01-19'
  },
  {
    id: '16',
    title: 'Bestattermeister (m/w/d)',
    employer: 'BS Pfeiffer GmbH',
    location: 'Achern, Baden',
    type: 'Vollzeit',
    description: 'Bestattermeister (m/w/d)',
    tags: ['Bestattermeister/in'],
    date: '2026-01-05'
  },
  {
    id: '17',
    title: 'Bestattungsfachkraft / Quereinsteiger*innen (m/w/d) gesucht',
    employer: 'Gerd Wuscher Bestattungsunternehmen',
    location: 'Eberbach, Baden',
    type: 'Vollzeit',
    description: 'Bestattungsfachkraft / Quereinsteiger*innen (m/w/d) gesucht',
    tags: ['Bestattungsfachkraft'],
    date: '2025-12-25'
  },
  {
    id: '18',
    title: 'Trauerberater und Bestatter (m/w/d)',
    employer: 'Bestattungen Werner GmbH & Co. KG',
    location: 'Mössingen',
    type: 'Vollzeit',
    description: 'Trauerberater und Bestatter (m/w/d)',
    tags: ['Bestattungsfachkraft'],
    date: '2025-12-23'
  },
  {
    id: '19',
    title: 'Bestatter/Bestattungshilfskraft/Quereinsteiger',
    employer: 'Manja Herrfurth',
    location: 'Bad Belzig',
    type: 'Vollzeit',
    description: 'Bestatter/Bestattungshilfskraft/Quereinsteiger',
    tags: ['Bestattungsfachkraft'],
    date: '2025-11-28'
  },
  {
    id: '20',
    title: 'Bestatter/-in (m/w/d)',
    employer: 'Adolf Volk Bestattungsinstitut GmbH',
    location: 'Mainz am Rhein',
    type: 'Vollzeit',
    description: 'Bestatter/-in (m/w/d)',
    tags: ['Bestattungsfachkraft'],
    date: '2025-11-20'
  },
  {
    id: '21',
    title: 'Betriebsleiter (m/w/d) Bestattungswesen',
    employer: 'Bestatterfamilie Süd GmbH',
    location: 'Kulmbach',
    type: 'Vollzeit',
    description: 'Betriebsleiter (m/w/d) Bestattungswesen',
    tags: ['Fachwirt/in - Bestattung'],
    date: '2025-11-14'
  },
  {
    id: '22',
    title: 'Bestatter (m/w/d)',
    employer: 'Bestattungsunternehmen Pietät Forchheim Rösch GmbH',
    location: 'Flachslanden, Mittelfranken',
    type: 'Vollzeit',
    description: 'Bestatter (m/w/d)',
    tags: ['Bestattungsfachkraft'],
    date: '2025-10-27'
  },
  {
    id: '23',
    title: 'Technischer Mitarbeiter / Bestatter (m/w/d)',
    employer: 'Bestattung & Floristik Axel Schmidt GmbH',
    location: 'Laucha an der Unstrut',
    type: 'Vollzeit',
    description: 'Technischer Mitarbeiter / Bestatter (m/w/d)',
    tags: ['Bestattungsgehilfe/-gehilfin'],
    date: '2025-10-13'
  },
  {
    id: '24',
    title: 'Bestatter/in / Bestattungsfachkraft / gepr. Bestatter / Quereinsteiger (m/w/d)',
    employer: 'Manfred Kraus Bestattungsunternehmen',
    location: 'Crailsheim',
    type: 'Vollzeit',
    description: 'Bestatter/in / Bestattungsfachkraft / gepr. Bestatter / Quereinsteiger (m/w/d)',
    tags: ['Bestattungsfachkraft'],
    date: '2025-09-26'
  },
  {
    id: '25',
    title: 'Bürohilfe beim Bestatter - auch für Quereinsteiger',
    employer: 'Libitina Bestattungen GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Bürohilfe beim Bestatter - auch für Quereinsteiger',
    tags: ['Bürogehilf(e/in)'],
    date: '2025-09-19'
  }
];

export const INDUSTRY_FAQ: FAQItem[] = [
  {
    question: "Welche Voraussetzungen brauche ich für die Ausbildung zur Bestattungsfachkraft?",
    answer: "Für die Ausbildung zur Bestattungsfachkraft wird in der Regel ein Realschulabschluss vorausgesetzt. Wichtiger als Noten sind jedoch psychische Stabilität, Einfühlungsvermögen, gute Umgangsformen und körperliche Belastbarkeit. Ein Führerschein der Klasse B ist meist unverzichtbar."
  },
  {
    question: "Wie sind die Verdienstmöglichkeiten im Bestattungswesen?",
    answer: "Das Gehalt variiert stark nach Region und Erfahrung. Auszubildende erhalten zwischen 800€ und 1.100€. Einstiegsgehälter für Fachkräfte liegen oft zwischen 2.200€ und 2.800€ brutto. Mit Weiterbildungen zum Bestattermeister oder Thanatopraktiker sind Gehälter von 3.500€ bis 4.500€ möglich."
  },
  {
    question: "Ist der Beruf krisensicher?",
    answer: "Ja, das Bestattungswesen gilt als äußerst krisensicher (systemrelevant). Gestorben wird immer, und der Bedarf an professioneller Begleitung und Organisation von Beisetzungen bleibt konstant bestehen, unabhängig von der konjunkturellen Lage."
  },
  {
    question: "Was macht ein Thanatopraktiker?",
    answer: "Ein Thanatopraktiker (Einbalsamierer) kümmert sich um die hygienische und ästhetische Versorgung Verstorbener. Dies umfasst die Rekonstruktion nach Unfällen sowie die Konservierung für Auslandsüberführungen oder offene Aufbahrungen."
  }
];

export const SEO_TEXT_INDUSTRY = `
  <h2 class="text-2xl font-serif font-bold mb-4 text-slate-800">Karriere im Bestattungswesen: Ein Beruf mit Zukunft und Würde</h2>
  <p class="mb-4 text-slate-700 leading-relaxed">
    Das Bestattungswesen ist eine der stabilsten und zugleich sensibelsten Branchen in Deutschland. Wer hier arbeitet, übt keinen gewöhnlichen "Nine-to-Five"-Job aus. Es ist eine Tätigkeit, die ein hohes Maß an Empathie, psychischer Stabilität und Organisationstalent erfordert. Gleichzeitig bietet die Branche sichere Arbeitsplätze und vielfältige Karrieremöglichkeiten – vom handwerklichen Bereich über die kaufmännische Verwaltung bis hin zur psychologischen Trauerbegleitung.
  </p>
  
  <h3 class="text-xl font-serif font-bold mb-3 text-slate-800">Berufsbilder im Überblick</h3>
  <ul class="list-disc pl-6 mb-6 text-slate-700 space-y-2">
    <li><strong>Bestattungsfachkraft:</strong> Der klassische Ausbildungsberuf (3 Jahre). Fachkräfte organisieren Beisetzungen, beraten Angehörige, erledigen Formalitäten und versorgen Verstorbene.</li>
    <li><strong>Geprüfter Bestatter:</strong> Eine Fortbildungsprüfung der Handwerkskammer, die oft nach mehrjähriger Berufserfahrung abgelegt wird.</li>
    <li><strong>Bestattermeister:</strong> Die höchste Qualifikationsstufe im Handwerk, die zur Führung eines Unternehmens und zur Ausbildung von Lehrlingen berechtigt.</li>
    <li><strong>Thanatopraktiker:</strong> Spezialisten für die hygienische Grundversorgung und die ästhetische Wiederherstellung von Verstorbenen (Modern Embalming).</li>
    <li><strong>Krematoriumsmitarbeiter:</strong> Technische Fachkräfte, die für den ordnungsgemäßen Ablauf der Einäscherung und die Wartung der Anlagen zuständig sind.</li>
    <li><strong>Friedhofsgärtner / Friedhofsverwalter:</strong> Zuständig für die Pflege der Ruhestätten und die Organisation der Belegungspläne.</li>
  </ul>

  <h3 class="text-xl font-serif font-bold mb-3 text-slate-800">Warum in der Bestattungsbranche arbeiten?</h3>
  <p class="mb-4 text-slate-700 leading-relaxed">
    Arbeitnehmer im Bestattungswesen berichten oft von einer hohen Sinnhaftigkeit ihrer Tätigkeit. Sie begleiten Menschen in Ausnahmesituationen und leisten einen unverzichtbaren Dienst an der Gesellschaft. 
    Zudem ist die Branche kaum konjunkturabhängig. Durch den demografischen Wandel in Deutschland wird der Bedarf an qualifizierten Bestattern und Trauerbegleitern in den kommenden Jahren weiter steigen. 
    Die Digitalisierung hält ebenfalls Einzug: "Gedenkseiten im Internet", digitale Nachlassverwaltung und moderne CRM-Systeme für Bestatter verändern das Berufsbild und machen es auch für IT-affine Quereinsteiger interessant.
  </p>

  <h3 class="text-xl font-serif font-bold mb-3 text-slate-800">Generative Engine Optimization (GEO) & Sichtbarkeit</h3>
  <p class="mb-4 text-slate-700 leading-relaxed">
    Für Arbeitgeber ist es heute wichtigerdenn je, online sichtbar zu sein. Da immer mehr Menschen KI-gestützte Suchmaschinen nutzen, um nach "Ausbildung Bestatter Voraussetzungen" oder "Bestatter Jobs in meiner Nähe" zu suchen, optimieren wir unsere Stellenanzeigen semantisch. Wir sorgen dafür, dass Ihre Angebote nicht nur von Menschen, sondern auch von Algorithmen als hochrelevant und vertrauenswürdig eingestuft werden.
  </p>
`;

export const EMPLOYER_TEXT = `
  <h2 class="text-3xl font-serif font-bold mb-6 text-slate-800">Fachkräfte finden in Zeiten des Wandels</h2>
  <p class="text-lg text-slate-700 mb-6 leading-relaxed">
    Der Fachkräftemangel macht auch vor dem Bestattungshandwerk nicht halt. Während die Auftragslage durch den demografischen Wandel steigt, wird es schwieriger, geeignetes Personal zu finden, das die physischen und psychischen Anforderungen des Berufs erfüllt.
  </p>
  <div class="grid md:grid-cols-2 gap-8 mb-8">
    <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-600">
      <h3 class="text-xl font-bold mb-3 text-slate-900">Zielgenaue Ansprache</h3>
      <p class="text-slate-600">
        Auf bestatter-stellenangebote.de erreichen Sie keine "Laufkundschaft", sondern qualifizierte Fachkräfte und motivierte Quereinsteiger, die sich bewusst für diese Branche interessieren. Streuverluste werden minimiert.
      </p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-600">
      <h3 class="text-xl font-bold mb-3 text-slate-900">Seriosität & Vertrauen</h3>
      <p class="text-slate-600">
        Unser Umfeld ist werbefrei von themenfremden Inhalten. Ihre Marke wird in einem pietätvollen, professionellen Kontext präsentiert, der zu Ihrem Unternehmensimage passt.
      </p>
    </div>
  </div>
`;