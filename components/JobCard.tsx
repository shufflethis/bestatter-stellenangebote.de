import React from 'react';
import { JobListing } from '../types';
import { MapPin, Clock, Briefcase } from 'lucide-react';

interface JobCardProps {
  job: JobListing;
  onApply: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onApply }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 group">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-serif font-bold text-slate-800 group-hover:text-primary-700 transition-colors">
            {job.title}
          </h3>
          <p className="text-primary-600 font-medium">{job.employer}</p>
        </div>
        <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded font-semibold whitespace-nowrap">
          {job.date}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-4 my-4 text-sm text-slate-500">
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          {job.location}
        </div>
        <div className="flex items-center gap-1">
          <Clock size={16} />
          {job.type}
        </div>
        <div className="flex items-center gap-1">
          <Briefcase size={16} />
          ID: {job.id}
        </div>
      </div>
      
      <p className="text-slate-600 mb-4 line-clamp-2">
        {job.description}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex gap-2">
          {job.tags.map(tag => (
            <span key={tag} className="text-xs bg-primary-50 text-primary-800 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <button 
          onClick={onApply}
          className="bg-primary-700 hover:bg-primary-800 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;