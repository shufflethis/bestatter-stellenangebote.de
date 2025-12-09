export enum Page {
  HOME = 'HOME',
  JOBS = 'JOBS',
  EMPLOYERS = 'EMPLOYERS',
  INDUSTRY = 'INDUSTRY',
  IMPRESSUM = 'IMPRESSUM',
  DATENSCHUTZ = 'DATENSCHUTZ'
}

export interface JobListing {
  id: string;
  title: string;
  employer: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Ausbildung' | 'Minijob';
  date: string;
  description: string;
  tags: string[];
}

export interface Article {
  title: string;
  content: string; // HTML-like string or just text
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}