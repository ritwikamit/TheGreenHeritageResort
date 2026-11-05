'use client';

import React from 'react';
import { ActivePageView } from './CurvedHeroFrame';

interface MobileBottomQuickBarProps {
  activePage: ActivePageView;
  onNavigate: (page: ActivePageView) => void;
  onOpenEnquiry: (defaultCategory?: string) => void;
  navVisible?: boolean;
}

export default function MobileBottomQuickBar({
  activePage,
  onNavigate,
  navVisible = true,
}: MobileBottomQuickBarProps) {
  const items: {
    id: ActivePageView;
    label: string;
  }[] = [
    { id: 'home', label: 'Home' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'packages', label: 'Packages' },
    { id: 'gallery', label: 'Reels' },
    { id: 'facilities', label: 'Spaces' },
    { id: 'contact', label: 'Map' },
  ];

  return (
    <nav
      aria-label="Smartphone Quick Navigation"
      className={`fixed bottom-3 left-1/2 -translate-x-1/2 z-50 sm:hidden w-[calc(100%-1.25rem)] max-w-sm clay-white-header rounded-full p-1.5 flex items-center justify-between gap-0.5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        navVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
    >
      {items.map((item) => {
        const isActive = activePage === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            className={`flex-1 py-1.5 px-1.5 rounded-full text-[10px] tracking-tight transition-all cursor-pointer whitespace-nowrap text-center ${
              isActive
                ? 'clay-pill-active font-semibold'
                : 'text-[#1E261A]/85 font-medium hover:text-[#97A87A]'
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
