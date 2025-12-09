import { JobListing, FAQItem } from './types';

export const MOCK_JOBS: JobListing[] = [
  {
    id: '1',
    title: 'Bestattungsfachkraft (m/w/d)',
    employer: 'Bestattungsinstitut Pietät & Würde',
    location: 'Berlin',
    type: 'Vollzeit',
    date: 'Heute',
    description: 'Wir suchen eine einfühlsame Verstärkung für unser Team. Aufgaben: Beratung, Versorgung Verstorbener, Behördengänge.',
    tags: ['Beratung', 'Versorgung', 'Führerschein B']
  },
  {
    id: '2',
    title: 'Geprüfter Bestatter / Filialleiter (m/w/d)',
    employer: 'Trauerhilfe Nord',
    location: 'Hamburg',
    type: 'Vollzeit',
    date: 'Gestern',
    description: 'Leitung einer unserer Filialen. Sie bringen Erfahrung in der Thanatopraxie und Kundenbetreuung mit.',
    tags: ['Leitung', 'Thanatopraxie', 'Kundenkontakt']
  },
  {
    id: '3',
    title: 'Auszubildende/r zur Bestattungsfachkraft',
    employer: 'Friedhofsverwaltung Stadt München',
    location: 'München',
    type: 'Ausbildung',
    date: 'Vor 2 Tagen',
    description: 'Starten Sie Ihre Karriere in einem krisensicheren Beruf. Wir bieten eine fundierte Ausbildung in allen Bereichen.',
    tags: ['Azubi', 'Ausbildung 2024', 'Öffentlicher Dienst']
  },
  {
    id: '4',
    title: 'Kaufmännischer Mitarbeiter (m/w/d) Friedhofsverwaltung',
    employer: 'Städtisches Krematorium',
    location: 'Köln',
    type: 'Teilzeit',
    date: 'Vor 3 Tagen',
    description: 'Verwaltung von Grabstätten, Terminplanung und Abrechnung. Sicherer Umgang mit MS Office erforderlich.',
    tags: ['Büro', 'Verwaltung', 'Teilzeit']
  },
  {
    id: '5',
    title: 'Trauerredner / Trauerbegleiter (Freiberuflich)',
    employer: 'Agentur Abschied',
    location: 'Frankfurt am Main',
    type: 'Minijob',
    date: 'Vor 1 Woche',
    description: 'Für die Gestaltung individueller Abschiedsfeiern suchen wir empathische Redner mit rhetorischem Geschick.',
    tags: ['Redner', 'Freiberuflich', 'Empathie']
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