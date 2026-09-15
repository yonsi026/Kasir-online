import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { PageId } from '../types';

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  currentPage,
  onNavigate,
}) => {
  return (
    <div className="bg-[#081A33] border-b border-[#111827] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back button */}
        <div className="flex items-center gap-3 text-xs font-mono text-gray-400 mb-6">
          <button
            onClick={() => onNavigate('beranda')}
            className="flex items-center gap-1 hover:text-[#FF7A00] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </button>
          <span>/</span>
          <span className="text-[#FF7A00] font-bold uppercase tracking-wider">{currentPage}</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>{badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl pt-1">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
};
