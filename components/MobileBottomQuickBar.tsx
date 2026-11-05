'use client';

import React from 'react';
import { ActivePageView } from './CurvedHeroFrame';
import {
  HomePalaceIcon,
  WeddingRingsIcon,
  GalleryReelIcon,
} from './CustomHeritageIcons';

interface MobileBottomQuickBarProps {
  activePage: ActivePageView;
  onNavigate: (page: ActivePageView) => void;
  onOpenEnquiry: (defaultCategory?: string) => void;
  navVisible?: boolean;
}

export default function MobileBottomQuickBar({
  activePage,
  onNavigate,
  onOpenEnquiry,
  navVisible = true,
}: MobileBottomQuickBarProps) {
  return (
    <nav
      aria-label="Smartphone Quick Navigation"
      className={`fixed bottom-3.5 left-1/2 -translate-x-1/2 z-50 sm:hidden w-[calc(100%-1.5rem)] max-w-[360px] neu-bottom-nav rounded-full p-1.5 flex items-center justify-between gap-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        navVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-24 pointer-events-none'
      }`}
    >
      {/* 1. Home */}
      <button
        type="button"
        onClick={() => onNavigate('home')}
        className={`flex-1 py-1.5 px-2 rounded-full text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
          activePage === 'home'
            ? 'neu-header-pill-active font-bold'
            : 'text-[#0F3B1A]/85 hover:text-[#0F3B1A] font-medium'
        }`}
      >
        <HomePalaceIcon className="w-3.5 h-3.5" />
        <span className="text-[10px] leading-tight">Home</span>
      </button>

      {/* 2. Weddings */}
      <button
        type="button"
        onClick={() => onNavigate('weddings')}
        className={`flex-1 py-1.5 px-2 rounded-full text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
          activePage === 'weddings'
            ? 'neu-header-pill-active font-bold'
            : 'text-[#0F3B1A]/85 hover:text-[#0F3B1A] font-medium'
        }`}
      >
        <WeddingRingsIcon className="w-3.5 h-3.5" />
        <span className="text-[10px] leading-tight">Weddings</span>
      </button>

      {/* 3. Reels */}
      <button
        type="button"
        onClick={() => onNavigate('gallery')}
        className={`flex-1 py-1.5 px-2 rounded-full text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
          activePage === 'gallery'
            ? 'neu-header-pill-active font-bold'
            : 'text-[#0F3B1A]/85 hover:text-[#0F3B1A] font-medium'
        }`}
      >
        <GalleryReelIcon className="w-3.5 h-3.5" />
        <span className="text-[10px] leading-tight">Reels</span>
      </button>

      {/* 4. Enquire Now CTA (Zero White Glow) */}
      <button
        type="button"
        onClick={() => onOpenEnquiry('Wedding / Reception')}
        className="flex-[1.25] py-2 px-3 rounded-full text-center transition-all cursor-pointer neu-bottom-enquire flex items-center justify-center gap-1 font-semibold text-xs whitespace-nowrap"
      >
        <span>Enquire</span>
        <span aria-hidden="true">→</span>
      </button>
    </nav>
  );
}
