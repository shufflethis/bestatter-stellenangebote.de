import React, { useState } from 'react';
import { MOCK_JOBS } from '../constants';
import JobCard from '../components/JobCard';
import { Search, MapPin, Filter } from 'lucide-react';

const Jobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');

  const filteredJobs = MOCK_JOBS.filter(job => 
    (job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))) &&
    job.location.toLowerCase().includes(locationTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Stellenmarkt</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Finden Sie offene Positionen bei Bestattern, Friedhofsverwaltungen und Krematorien in Ihrer Region.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Beruf, Begriff oder Firma" 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded focus:outline-none focus:border-primary-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-3 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Ort oder PLZ" 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded focus:outline-none focus:border-primary-500"
              value={locationTerm}
              onChange={(e) => setLocationTerm(e.target.value)}
            />
          </div>
          <button className="bg-primary-700 text-white px-6 py-2 rounded font-semibold hover:bg-primary-800 transition-colors flex items-center justify-center gap-2">
            <Filter size={18} /> Filtern
          </button>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job} onApply={() => alert('Bewerbung startet...')} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-slate-500">
              <p className="text-xl">Keine passenden Stellenanzeigen gefunden.</p>
              <p>Versuchen Sie es mit weniger spezifischen Suchbegriffen.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;