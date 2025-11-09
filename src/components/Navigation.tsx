import React from "react";
import { Dog } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'newsletters', label: 'Newsletters' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white border-b border-orange-200 sticky top-0 z-50 shadow-sm" aria-label="Main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
            aria-label="Go to Home"
          >
            <div className="flex items-end gap-1">
              <Dog className="w-8 h-8 text-orange-600 group-hover:text-orange-700 transition-colors" />
              <Dog className="w-10 h-10 text-orange-500 group-hover:text-orange-600 transition-colors -ml-3" />
              <Dog className="w-8 h-8 text-orange-600 group-hover:text-orange-700 transition-colors -ml-3" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-orange-900 tracking-wide text-xl">The Study-O</span>
              <span className="text-orange-600 text-xs">Learning Made Personal</span>
            </div>
          </button>
          
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? 'default' : 'ghost'}
                onClick={() => onNavigate(item.id)}
                className={currentPage === item.id ? 'bg-orange-500 hover:bg-orange-600' : 'hover:bg-orange-50'}
                aria-current={currentPage === item.id ? 'page' : undefined}
                aria-label={`${item.label} page`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
