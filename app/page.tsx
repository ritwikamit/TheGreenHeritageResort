'use client';

import React, { useEffect, useState } from 'react';
import CurvedHeroFrame, { ActivePageView } from '@/components/CurvedHeroFrame';
import ResortWebsiteSections from '@/components/ResortWebsiteSections';
import LoadingScreen from '@/components/LoadingScreen';
import MobileBottomQuickBar from '@/components/MobileBottomQuickBar';
import ScrollTrailUpButton from '@/components/ScrollTrailUpButton';
import CookieConsentBanner from '@/components/CookieConsentBanner';

export default function HomePage() {
  const [activePage, setActivePage] = useState<ActivePageView>('home');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryDefaultType, setEnquiryDefaultType] = useState('Wedding / Reception');
  const [navVisible, setNavVisible] = useState(true);

  // Keep Header constant when screen is in Hero; outside Hero: Scroll UP -> hide, Scroll DOWN -> show
  useEffect(() => {
    const getScrollY = () =>
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const isInsideHero = (y: number) => {
      const heroThreshold = Math.max(480, (window.innerHeight || 760) * 0.86);
      return activePage === 'home' ? y < heroThreshold : y < 80;
    };

    let lastAnchorY = getScrollY();
    let touchAnchorY = 0;

    const onScroll = () => {
      const currentY = getScrollY();
      if (isInsideHero(currentY)) {
        setNavVisible(true);
        lastAnchorY = currentY;
        return;
      }

      const dy = currentY - lastAnchorY;
      if (dy >= 2) {
        // Scrolling down -> show header & navbar
        setNavVisible(true);
        lastAnchorY = currentY;
      } else if (dy <= -2) {
        // Scrolling up -> hide header & navbar
        setNavVisible(false);
        lastAnchorY = currentY;
      }
    };

    const onWheel = (e: WheelEvent) => {
      const currentY = getScrollY();
      if (isInsideHero(currentY)) {
        setNavVisible(true);
        return;
      }
      if (e.deltaY >= 1) {
        setNavVisible(true);
      } else if (e.deltaY <= -1) {
        setNavVisible(false);
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchAnchorY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      const currentY = getScrollY();
      if (isInsideHero(currentY)) {
        setNavVisible(true);
        return;
      }
      if (e.touches.length > 0) {
        const currentTouchY = e.touches[0].clientY;
        const delta = touchAnchorY - currentTouchY;
        if (delta >= 4) {
          // Moving down the page -> show header & navbar
          setNavVisible(true);
          touchAnchorY = currentTouchY;
        } else if (delta <= -4) {
          // Moving up the page -> hide header & navbar
          setNavVisible(false);
          touchAnchorY = currentTouchY;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true, capture: true });
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('scroll', onScroll, { capture: true });
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [activePage]);

  const handleNavigate = (page: ActivePageView) => {
    setActivePage(page);
    setNavVisible(true);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenEnquiry = (defaultCategory = 'Wedding / Reception') => {
    setEnquiryDefaultType(defaultCategory);
    setIsEnquiryModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FCF9EA] text-[#1E261A] relative overflow-x-clip">
      <LoadingScreen />

      <CurvedHeroFrame
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
        isEnquiryModalOpen={isEnquiryModalOpen}
        navVisible={navVisible}
      />

      <ResortWebsiteSections
        activePage={activePage}
        onNavigate={handleNavigate}
        isEnquiryModalOpen={isEnquiryModalOpen}
        enquiryDefaultType={enquiryDefaultType}
        onOpenEnquiry={handleOpenEnquiry}
        onCloseEnquiry={() => setIsEnquiryModalOpen(false)}
      />

      <MobileBottomQuickBar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
        navVisible={navVisible && !isEnquiryModalOpen}
      />

      <ScrollTrailUpButton />

      <CookieConsentBanner onOpenPolicy={handleNavigate} />
    </main>
  );
}
