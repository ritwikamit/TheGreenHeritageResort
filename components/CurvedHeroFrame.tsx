'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Compass, Gift } from 'lucide-react';
import { HERO_BACKGROUND_REELS } from '@/lib/resort-data';
import {
  BanquetArchIcon,
  GalleryReelIcon,
  HomePalaceIcon,
  MapPinCustomIcon,
  PhoneCallCustomIcon,
  WeddingRingsIcon,
} from './CustomHeritageIcons';

export type ActivePageView =
  | 'home'
  | 'weddings'
  | 'packages'
  | 'gallery'
  | 'facilities'
  | 'contact'
  | 'terms'
  | 'privacy'
  | 'cookies';

interface CurvedHeroFrameProps {
  activePage: ActivePageView;
  onNavigate: (page: ActivePageView) => void;
  onOpenEnquiry: (defaultCategory?: string) => void;
  isEnquiryModalOpen?: boolean;
  navVisible?: boolean;
}

const ROTATING_HIGHLIGHTS = [
  'Sacred Wedding Vows',
  'Grand Evening Receptions',
  'Joyful Haldi Mornings',
  'Warm Family Gatherings',
  'Peaceful Guest Stays',
];

const HERO_RIBBON_TEXT =
  'THE GREEN HERITAGE RESORT AND BANQUET  •  ROYAL ARCHWAY BRIDAL ENTRIES  •  OPEN-AIR CELEBRATION LAWNS  •  CRYSTAL CHANDELIER BANQUET HALL  •  BAKARPUR, MUZAFFARPUR  •  ';

export default function CurvedHeroFrame({
  activePage,
  onNavigate,
  onOpenEnquiry,
  isEnquiryModalOpen = false,
  navVisible = true,
}: CurvedHeroFrameProps) {
  const bgVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const switchingRef = useRef(false);
  const heroRibbonContainerRef = useRef<HTMLDivElement>(null);
  const heroRibbonRef = useRef<HTMLDivElement>(null);

  const [bgIndex, setBgIndex] = useState(0);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [highlightIdx, setHighlightIdx] = useState(0);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(e.target as Node)
      ) {
        setMoreMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Rotate highlighted emotional phrase every 3 seconds smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightIdx((prev) => (prev + 1) % ROTATING_HIGHLIGHTS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Seamless Sequential Hero Background Playback:
  // 1. DVwj-NrE08f (rotated landscape) -> 2. DYDC4t6T_gq (rotated landscape) -> loop forever
  useEffect(() => {
    switchingRef.current = false;
    bgVideoRefs.current.forEach((v, idx) => {
      if (!v) return;
      v.muted = true;
      if (idx === bgIndex) {
        if (v.currentTime > (v.duration || 999) - 0.5) {
          v.currentTime = 0;
        }
        v.play().catch(() => {});
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });

    const watchdog = setInterval(() => {
      const activeVideo = bgVideoRefs.current[bgIndex];
      if (activeVideo && activeVideo.paused) {
        activeVideo.muted = true;
        activeVideo.play().catch(() => {});
      }
    }, 900);

    return () => clearInterval(watchdog);
  }, [bgIndex]);

  const advanceToNextHeroVideo = () => {
    if (switchingRef.current) return;
    switchingRef.current = true;
    const nextIdx = (bgIndex + 1) % HERO_BACKGROUND_REELS.length;
    const nextVideo = bgVideoRefs.current[nextIdx];
    if (nextVideo) {
      nextVideo.muted = true;
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => {});
    }
    setBgIndex(nextIdx);
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;
    if (v.duration > 1 && v.currentTime >= v.duration - 0.35) {
      advanceToNextHeroVideo();
    }
  };

  // GPU-Friendly Moving Post-Hero Ribbon (pauses RAF when scrolled out of view)
  useEffect(() => {
    if (activePage !== 'home') return;

    let lastFrameTime = performance.now();
    let ribbonBaseOffset = 0;
    let pageScrollTarget = window.scrollY || 0;
    let pageScrollSmooth = pageScrollTarget;
    let isVisible = true;
    let rafId = 0;

    const onWindowScroll = () => {
      pageScrollTarget =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
    };
    window.addEventListener('scroll', onWindowScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { rootMargin: '200px 0px' }
    );

    if (heroRibbonContainerRef.current) {
      observer.observe(heroRibbonContainerRef.current);
    }

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastFrameTime) / 1000);
      lastFrameTime = now;

      if (isVisible && heroRibbonRef.current) {
        pageScrollSmooth += (pageScrollTarget - pageScrollSmooth) * 0.12;
        ribbonBaseOffset += 38 * dt;
        const totalRibbonShift =
          (ribbonBaseOffset + pageScrollSmooth * 0.32) % 1350;
        heroRibbonRef.current.style.transform = `translate3d(${-totalRibbonShift.toFixed(
          1
        )}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener('scroll', onWindowScroll);
    };
  }, [activePage]);

  const primaryNav: {
    id: ActivePageView;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: 'home',
      label: 'Home',
      icon: <HomePalaceIcon className="w-4 h-4 shrink-0" />,
    },
    {
      id: 'weddings',
      label: 'Weddings & Events',
      icon: <WeddingRingsIcon className="w-4 h-4 shrink-0" />,
    },
    {
      id: 'packages',
      label: 'Packages',
      icon: <Gift className="w-4 h-4 shrink-0" />,
    },
    {
      id: 'gallery',
      label: 'Gallery & Reels',
      icon: <GalleryReelIcon className="w-4 h-4 shrink-0" />,
    },
    {
      id: 'facilities',
      label: 'Spaces & Stay',
      icon: <BanquetArchIcon className="w-4 h-4 shrink-0" />,
    },
  ];

  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const updateHeroOverlap = () => {
      const y =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      const heroThreshold = Math.max(440, (window.innerHeight || 760) * 0.82);
      setIsOverHero(activePage === 'home' && y < heroThreshold);
    };
    updateHeroOverlap();
    window.addEventListener('scroll', updateHeroOverlap, { passive: true });
    window.addEventListener('resize', updateHeroOverlap, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateHeroOverlap);
      window.removeEventListener('resize', updateHeroOverlap);
    };
  }, [activePage]);

  const hideHeader = isEnquiryModalOpen || !navVisible;
  const onDarkHero = activePage === 'home' && isOverHero;

  return (
    <div id="hero-top" className="relative w-full">
      {/* TRANSLUCENT HEADER WITH LITTLE BLUR, ATTACHED AT TOP, SEPARATED BY JUST A LINE */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md border-b transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          onDarkHero
            ? 'bg-black/15 border-[#FCF9EA]/25'
            : 'bg-[#FCF9EA]/70 border-[#97A87A]/35'
        } ${
          hideHeader
            ? 'opacity-0 -translate-y-full pointer-events-none'
            : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Brand Logo */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none shrink-0"
          >
            <img
              src="/Logo.png"
              alt="The Green Heritage Resort and Banquet"
              className="h-10 sm:h-11 lg:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="leading-tight hidden lg:block">
              <span
                className={`block font-serif font-bold text-sm lg:text-base tracking-tight whitespace-nowrap transition-colors ${
                  onDarkHero
                    ? 'text-[#FCF9EA] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]'
                    : 'text-[#1E261A]'
                }`}
              >
                The Green Heritage
              </span>
              <span className="block font-cursive text-[#D4AF37] text-base lg:text-lg -mt-1 whitespace-nowrap drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                Resort &amp; Banquet
              </span>
            </div>
          </button>

          {/* Center: Aligned Navigation Bar Attached Directly to Header (Tablets & PCs) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden sm:flex items-center justify-center gap-0.5 md:gap-1 lg:gap-1.5"
          >
            {primaryNav.map((item) => {
              const active = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onNavigate(item.id);
                    setMoreMenuOpen(false);
                  }}
                  className={`px-2.5 md:px-3 lg:px-4 py-1.5 rounded-full text-[11px] md:text-xs lg:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'clay-pill-active font-semibold'
                      : onDarkHero
                      ? 'text-[#FCF9EA] hover:text-white hover:bg-white/15 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]'
                      : 'text-[#1E261A] hover:text-[#1E261A] hover:bg-[#A8BBA3]/35'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div ref={moreMenuRef} className="relative flex items-center">
              <button
                type="button"
                aria-expanded={moreMenuOpen}
                aria-haspopup="menu"
                onClick={() => setMoreMenuOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1 px-2.5 md:px-3 lg:px-4 py-1.5 rounded-full text-[11px] md:text-xs lg:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activePage === 'contact' || moreMenuOpen
                    ? 'clay-pill-active font-semibold'
                    : onDarkHero
                    ? 'text-[#FCF9EA] hover:text-white hover:bg-white/15 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]'
                    : 'text-[#1E261A] hover:text-[#1E261A] hover:bg-[#A8BBA3]/35'
                }`}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {moreMenuOpen && (
                <div className="absolute right-0 top-full mt-2.5 w-52 clay-white-header rounded-3xl p-2 z-50">
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('packages');
                      setMoreMenuOpen(false);
                    }}
                    className="w-full text-left px-3.5 py-2.5 rounded-2xl text-xs font-medium text-[#1E261A] hover:bg-[#A8BBA3]/30 transition-colors cursor-pointer"
                  >
                    Celebration Packages
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('contact');
                      setMoreMenuOpen(false);
                    }}
                    className="w-full text-left px-3.5 py-2.5 rounded-2xl text-xs font-medium text-[#1E261A] hover:bg-[#A8BBA3]/30 transition-colors cursor-pointer"
                  >
                    Location &amp; Directions
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMoreMenuOpen(false);
                      onOpenEnquiry('Wedding / Reception');
                    }}
                    className="w-full text-left px-3.5 py-2.5 rounded-2xl text-xs font-semibold text-[#1E261A] bg-[#FFA239]/25 hover:bg-[#FFA239]/45 transition-colors cursor-pointer mt-1"
                  >
                    Wedding Date Enquiry
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Right: Claymorphic Call & Enquire Now Buttons */}
          <div className="flex items-center gap-2 lg:gap-2.5 shrink-0">
            <a
              href="tel:+919234052600"
              aria-label="Call The Green Heritage Resort and Banquet"
              title="Call Resort"
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-full clay-btn-coral flex items-center justify-center"
            >
              <PhoneCallCustomIcon className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => onOpenEnquiry('Wedding / Reception')}
              className="px-3.5 sm:px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-semibold clay-btn-coral cursor-pointer whitespace-nowrap"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </header>

      {/* Spacer for non-home pages aligned to header height */}
      {activePage !== 'home' && <div className="h-16 sm:h-20" />}

      {/* FULL-SCREEN HERO SECTION ALIGNED TO HEADER + POST-HERO MOVING TEXT RIBBON */}
      {activePage === 'home' && (
        <>
          <section className="relative w-full h-[100dvh] min-h-[620px] flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8 select-none bg-black">
            {/* FULL-SCREEN SEAMLESS LOOPING HERO VIDEO (1. DVwj-NrE08f landscape -> 2. DYDC4t6T_gq landscape) + SUBTLE NON-BLUR SIDE EDGE FADES */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-black">
              {HERO_BACKGROUND_REELS.map((bgReel, idx) => (
                <video
                  key={bgReel.code}
                  ref={(el) => {
                    bgVideoRefs.current[idx] = el;
                  }}
                  src={bgReel.videoSrc}
                  poster={bgReel.poster}
                  muted
                  playsInline
                  autoPlay={idx === bgIndex}
                  preload="auto"
                  onTimeUpdate={idx === bgIndex ? handleTimeUpdate : undefined}
                  onEnded={idx === bgIndex ? advanceToNextHeroVideo : undefined}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out [backface-visibility:hidden] ${
                    idx === bgIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ objectPosition: bgReel.objectPosition || '50% 50%' }}
                />
              ))}

              {/* Subtle Non-Blur Black Fade on Left Side Edge */}
              <div className="absolute inset-y-0 left-0 w-4 sm:w-6 lg:w-8 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

              {/* Subtle Non-Blur Black Fade on Right Side Edge */}
              <div className="absolute inset-y-0 right-0 w-4 sm:w-6 lg:w-8 bg-gradient-to-l from-black/45 via-black/10 to-transparent" />

              {/* Balanced Darkening Scrim: Makes Background Video Slightly Dark for Crisp Text Contrast While Keeping Video Clearly Visible */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />
            </div>

            {/* Hero Contents: Clean Centered Typography Without Border Frame */}
            <div className="relative z-20 max-w-4xl w-[calc(100%-2rem)] mx-auto px-4 text-center flex flex-col items-center">
              <p className="font-cursive text-3xl sm:text-5xl md:text-6xl text-[#D4AF37] leading-none drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
                Where Two Families Come Together in Joy
              </p>

              {/* Static line + fixed-height changing line so no surrounding text ever shifts */}
              <h1 className="mt-2 font-serif font-bold text-[#FCF9EA] text-3xl sm:text-5xl lg:text-[58px] leading-[1.12] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
                <span className="block">
                  A Beautiful Home in Muzaffarpur for
                </span>
                <span className="block h-[1.22em] overflow-hidden mt-1">
                  <span
                    key={highlightIdx}
                    className="inline-block animate-word-swap text-[#FFA239] drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]"
                  >
                    {ROTATING_HIGHLIGHTS[highlightIdx]}
                  </span>
                </span>
              </h1>

              <p className="mt-3 text-sm sm:text-base md:text-lg text-[#FCF9EA] max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
                From the moment the bride walks under our lit arches to the laughter of
                elders on the green lawn, we help your family celebrate every moment with
                warmth and peace of mind.
              </p>

              {/* Palette Claymorphic Hero CTA Buttons */}
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry('Wedding / Reception')}
                  className="px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold clay-btn-coral inline-flex items-center gap-2.5 cursor-pointer"
                >
                  <WeddingRingsIcon className="w-4 h-4" />
                  <span>Enquire for Your Dates</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const pkgEl = document.getElementById('packages-section');
                    if (pkgEl) {
                      pkgEl.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      onNavigate('packages');
                    }
                  }}
                  className="px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold clay-btn-olive inline-flex items-center gap-2.5 cursor-pointer"
                >
                  <Gift className="w-4 h-4" />
                  <span>Explore Packages</span>
                </button>
              </div>
            </div>
          </section>

          {/* MOVING TEXT RIBBON RIGHT AFTER HERO ENDS */}
          <div
            ref={heroRibbonContainerRef}
            aria-label="Venue highlights ribbon"
            className="relative z-20 w-full overflow-hidden clay-dark-bar py-3 border-y border-[#A8BBA3]/45 select-none"
          >
            <div
              ref={heroRibbonRef}
              className="flex whitespace-nowrap will-change-transform text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#FCF9EA]"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="mx-2">
                  {HERO_RIBBON_TEXT}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
