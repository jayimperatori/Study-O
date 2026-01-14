import React from "react";
import { Button } from "./ui/button";

const logoSrc = new URL("../assets/ef059911c1bd4739323d5a70da5ff1640e6224e2.png", import.meta.url).href;

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
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
            aria-label="Go to Home"
          >
            <div className="h-10 w-10 rounded-sm">
              <img
                src={logoSrc}
                alt="The Study-O logo"
                className="h-full w-full object-contain p-[2px]"
              />
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
                onClick={() => {
                  onNavigate(item.id);
                  if (item.id === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
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
