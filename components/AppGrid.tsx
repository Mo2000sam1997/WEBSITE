"use client";

import { useState, useRef, useEffect } from 'react';
import { useMarketplaceTemplates, type MarketplaceTemplate } from '@/hooks/useMarketplaceTemplates';
import { useDebounce } from '@/hooks/useDebounce';
import { Search, Users, ChevronDown, Check, ArrowUpDown } from 'lucide-react';
import MarketplaceCard from './MarketplaceCard';

const CATEGORIES = [
  { name: 'All Apps', image: '/images/LaboboxLogoZonderNaam.png', color: '#edf3fc', glow: 'rgba(237, 243, 252, 0.25)' },
  { name: 'Data', image: '/images/blueblock.png', color: '#74d1e9', glow: 'rgba(116, 209, 233, 0.25)' },
  { name: 'Agent', image: '/images/greenblock.png', color: '#60ceb4', glow: 'rgba(96, 206, 180, 0.25)' },
  { name: 'Content', image: '/images/pinkblock.png', color: '#efaad3', glow: 'rgba(239, 170, 211, 0.25)' },
  { name: 'Model', image: '/images/purpleblock.png', color: '#a279fe', glow: 'rgba(162, 121, 254, 0.25)' },
];

const INDUSTRIES = [
  'Photography & e-commerce',
  'Hair & Beauty',
];

type SortOption = 'name' | 'amountsBought-asc' | 'amountsBought-desc' | 'releaseDate-asc' | 'releaseDate-desc';

const SORT_OPTIONS: Array<{ value: SortOption; label: string }> = [
  { value: 'name', label: 'Name (A-Z)' },
  { value: 'amountsBought-desc', label: 'Most Popular' },
  { value: 'amountsBought-asc', label: 'Least Popular' },
  { value: 'releaseDate-desc', label: 'Newest First' },
  { value: 'releaseDate-asc', label: 'Oldest First' },
];

export default function AppGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Apps');
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>('name');
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const categoryRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const industryDropdownRef = useRef<HTMLDivElement>(null);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  // Convert industries array to string for the hook (comma-separated or "All Industries")
  const industryFilter = selectedIndustries.length === 0 || selectedIndustries.length === INDUSTRIES.length
    ? 'All Industries'
    : selectedIndustries.join(',');

  const {
    data,
    isLoading,
    isError,
    error
  } = useMarketplaceTemplates(debouncedSearchTerm, selectedCategory, industryFilter, currentPage, true);

  let templates = data?.templates || [];

  // Client-side sorting
  templates = [...templates].sort((a, b) => {
    switch (sortOption) {
      case 'name':
        return (a.name || '').localeCompare(b.name || '');
      
      case 'amountsBought-desc':
        const boughtA = a.amountsBought || 0;
        const boughtB = b.amountsBought || 0;
        return boughtB - boughtA;
      
      case 'amountsBought-asc':
        const boughtAAsc = a.amountsBought || 0;
        const boughtBAsc = b.amountsBought || 0;
        return boughtAAsc - boughtBAsc;
      
      case 'releaseDate-desc':
        // Handle Firestore Timestamp object or string/Date
        const dateADesc = a.releaseDate 
          ? (a.releaseDate.toDate ? a.releaseDate.toDate().getTime() : new Date(a.releaseDate).getTime())
          : 0;
        const dateBDesc = b.releaseDate 
          ? (b.releaseDate.toDate ? b.releaseDate.toDate().getTime() : new Date(b.releaseDate).getTime())
          : 0;
        return dateBDesc - dateADesc;
      
      case 'releaseDate-asc':
        // Handle Firestore Timestamp object or string/Date
        const dateAAsc = a.releaseDate 
          ? (a.releaseDate.toDate ? a.releaseDate.toDate().getTime() : new Date(a.releaseDate).getTime())
          : 0;
        const dateBAsc = b.releaseDate 
          ? (b.releaseDate.toDate ? b.releaseDate.toDate().getTime() : new Date(b.releaseDate).getTime())
          : 0;
        return dateAAsc - dateBAsc;
      
      default:
        return 0;
    }
  });

  // Show all templates without pagination
  const paginatedTemplates = templates;


  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleIndustryToggle = (industry: string) => {
    setSelectedIndustries(prev => {
      if (prev.includes(industry)) {
        // Remove industry
        return prev.filter(i => i !== industry);
      } else {
        // Add industry
        return [...prev, industry];
      }
    });
    setCurrentPage(1);
  };

  const handleSelectAllIndustries = () => {
    if (selectedIndustries.length === INDUSTRIES.length) {
      // Deselect all
      setSelectedIndustries([]);
    } else {
      // Select all
      setSelectedIndustries([...INDUSTRIES]);
    }
    setCurrentPage(1);
  };

  const handleSortChange = (sort: SortOption) => {
    setSortOption(sort);
    setCurrentPage(1);
    setIsSortDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (industryDropdownRef.current && !industryDropdownRef.current.contains(event.target as Node)) {
        setIsIndustryDropdownOpen(false);
      }
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setIsSortDropdownOpen(false);
      }
    };

    if (isIndustryDropdownOpen || isSortDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isIndustryDropdownOpen, isSortDropdownOpen]);

  useEffect(() => {
    const updateUnderlinePosition = () => {
      const selectedButton = categoryRefs.current[selectedCategory];
      if (selectedButton) {
        const container = selectedButton.parentElement;
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const buttonRect = selectedButton.getBoundingClientRect();
          const fixedWidth = 40;
          const centerOffset = (buttonRect.width - fixedWidth) / 2;
          setUnderlineStyle({
            left: (buttonRect.left - containerRect.left) + centerOffset,
            width: fixedWidth
          });
        }
      }
    };
    
    // Probeer meerdere keren om zeker te zijn dat de refs beschikbaar zijn
    const timer1 = setTimeout(updateUnderlinePosition, 0);
    const timer2 = setTimeout(updateUnderlinePosition, 50);
    const timer3 = setTimeout(updateUnderlinePosition, 150);
    
    window.addEventListener('resize', updateUnderlinePosition);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('resize', updateUnderlinePosition);
    };
  }, [selectedCategory]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
            All Apps
          </h2>
          <div className="h-px w-12 bg-gradient-to-r from-accent-primary to-accent-secondary" />
        </div>

        {/* Search Bar and Industry Filter */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full pl-10 pr-4 py-2 bg-bg-secondary rounded-lg text-text-primary placeholder-text-secondary focus:outline-none transition-all text-sm"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>
          
          {/* Multi-select Industry Dropdown */}
          <div ref={industryDropdownRef} className="relative flex-shrink-0">
            <button
              onClick={() => setIsIndustryDropdownOpen(!isIndustryDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-bg-secondary rounded-lg text-text-primary text-sm border-[1.5px] border-white/10 hover:border-accent-primary/50 transition-all focus:outline-none focus:ring-0 min-w-[200px] justify-between"
            >
              <span className="text-xs">
                {selectedIndustries.length === 0
                  ? 'All Industries'
                  : selectedIndustries.length === 1
                  ? selectedIndustries[0]
                  : `${selectedIndustries.length} selected`}
              </span>
              <ChevronDown 
                size={16} 
                className={`text-text-secondary transition-transform duration-200 ${
                  isIndustryDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Panel */}
            {isIndustryDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-bg-secondary rounded-lg shadow-lg z-50 overflow-hidden transition-all duration-200 opacity-100 transform translate-y-0">
                <div className="p-2">
                  {/* Select All Option */}
                  <button
                    onClick={handleSelectAllIndustries}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-bg-tertiary transition-colors text-left"
                  >
                    <div className={`w-4 h-4 rounded border border-white/10 flex items-center justify-center transition-all ${
                      selectedIndustries.length === INDUSTRIES.length
                        ? 'bg-accent-primary border-accent-primary'
                        : 'bg-bg-secondary'
                    }`}>
                      {selectedIndustries.length === INDUSTRIES.length && (
                        <Check size={12} className="text-white" />
                      )}
                    </div>
                    <span className="text-xs font-medium text-text-primary">All Industries</span>
                  </button>

                  <div className="h-[1px] bg-white/10 my-1" />

                  {/* Individual Industries */}
                  {INDUSTRIES.map((industry) => {
                    const isSelected = selectedIndustries.includes(industry);
                    return (
                      <button
                        key={industry}
                        onClick={() => handleIndustryToggle(industry)}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-bg-tertiary transition-colors text-left"
                      >
                        <div className={`w-4 h-4 rounded border border-white/10 flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-accent-primary border-accent-primary'
                            : 'bg-bg-secondary'
                        }`}>
                          {isSelected && (
                            <Check size={12} className="text-white" />
                          )}
                        </div>
                        <span className="text-xs text-text-primary">{industry}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="relative flex items-center gap-1 overflow-x-auto no-scrollbar mb-4">
          {underlineStyle.width > 0 && (
            <div
              className="absolute bottom-0 h-[2px] transition-all duration-300 ease-out rounded-full z-20"
              style={{
                left: `${underlineStyle.left}px`,
                width: `${underlineStyle.width}px`,
                ...(selectedCategory === 'All Apps' 
                  ? {
                      background: 'linear-gradient(to right, #74d1e9, #60ceb4, #efaad3, #a279fe)',
                      boxShadow: '0 -4px 10px rgba(116, 209, 233, 0.5), 0 -4px 10px rgba(96, 206, 180, 0.5), 0 -4px 10px rgba(239, 170, 211, 0.5), 0 -4px 10px rgba(162, 121, 254, 0.5)'
                    }
                  : {
                      backgroundColor: CATEGORIES.find(c => c.name === selectedCategory)?.color || '#edf3fc',
                      boxShadow: `0 -4px 10px ${CATEGORIES.find(c => c.name === selectedCategory)?.color || '#edf3fc'}`
                    }
                )
              }}
            />
          )}
          
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                ref={(el) => { categoryRefs.current[cat.name] = el; }}
                onClick={() => handleCategoryChange(cat.name)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap relative z-10 bg-transparent border-none outline-none ${
                  isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                }`}
              >
                <img src={cat.image} alt="" className="w-4 h-4 object-contain relative z-20" />
                <span className="relative z-20 text-text-primary">
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

        <div className="h-[1px] w-full bg-white/10 mb-4" />

        {/* Sort Options */}
        <div className="flex items-center justify-end mb-4">
          <div className="flex items-center gap-2">
            <ArrowUpDown size={16} className="text-text-secondary" />
            <span className="text-xs text-text-secondary font-medium">Sort by:</span>
            <div ref={sortDropdownRef} className="relative flex-shrink-0">
              <button
                onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-bg-secondary rounded-lg text-text-primary text-sm border-[1.5px] border-white/10 hover:border-accent-primary/50 transition-all focus:outline-none focus:ring-0 min-w-[200px] justify-between"
              >
                <span className="text-xs">
                  {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || 'Name (A-Z)'}
                </span>
                <ChevronDown 
                  size={16} 
                  className={`text-text-secondary transition-transform duration-200 ${
                    isSortDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

            {/* Sort Dropdown Panel - Single Select Style */}
            {isSortDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-bg-secondary rounded-lg shadow-lg z-50 overflow-hidden transition-all duration-200 opacity-100 transform translate-y-0">
                <div className="p-2">
                  {SORT_OPTIONS.map((option) => {
                    const isSelected = sortOption === option.value;
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleSortChange(option.value)}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded transition-colors text-left ${
                          isSelected
                            ? 'bg-bg-tertiary'
                            : 'hover:bg-bg-tertiary'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border border-white/10 flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-accent-primary border-accent-primary'
                            : 'bg-bg-secondary'
                        }`}>
                          {isSelected && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                        <span className={`text-xs ${
                          isSelected
                            ? 'text-accent-primary font-semibold'
                            : 'text-text-primary'
                        }`}>
                          {option.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="text-text-secondary text-sm text-center py-12">Loading apps...</div>
        ) : isError ? (
          <div className="text-red-400 text-sm text-center py-12">
            Error loading apps: {error?.message}
          </div>
        ) : templates.length === 0 ? (
          <div className="text-text-secondary text-sm text-center py-12">No apps found.</div>
        ) : (
          <>
            {/* De aangepaste Grid container */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mb-8">
              {paginatedTemplates.map((template) => (
                <MarketplaceCard key={template.id} template={template} />
              ))}
            </div>

          </>
        )}
      </div>
    </section>
  );
}
