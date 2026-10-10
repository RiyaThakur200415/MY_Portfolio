import React from 'react';
import { ProjectCategory } from '../types';
import { Search, X, SlidersHorizontal } from 'lucide-react';

interface ProjectFiltersProps {
  currentCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
  filteredCount: number;
}

const CATEGORIES: ProjectCategory[] = ['All', 'AI / ML', 'Full Stack', 'Frontend', 'Interactive'];

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  currentCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalCount,
  filteredCount,
}) => {
  return (
    <div className="space-y-4 mb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Category Segmented Buttons */}
        <div className="inline-flex p-1.5 rounded-2xl bg-[#0c1222]/90 border border-blue-900/40 shadow-lg shadow-black/40 overflow-x-auto max-w-full">
          {CATEGORIES.map((cat) => {
            const isActive = currentCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/20 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects by tech, agent, keyword..."
            className="w-full pl-9 pr-9 py-2.5 bg-[#0c1222]/90 border border-blue-900/40 hover:border-blue-700/60 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>

      {/* Result Count Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
        <span>
          Showing {filteredCount} of {totalCount} systems
        </span>
        {searchQuery && (
          <span className="text-blue-400 font-sans">
            Filtered by keyword: <span className="font-semibold text-white">"{searchQuery}"</span>
          </span>
        )}
      </div>
    </div>
  );
};
