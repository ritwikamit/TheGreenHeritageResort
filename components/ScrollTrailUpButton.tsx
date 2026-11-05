'use client';

import React, { useEffect, useState } from 'react';
import { ScrollUpTrailIcon } from './CustomHeritageIcons';

export interface SectionIndicatorItem {
  id: string;
}

const DEFAULT_SECTIONS: SectionIndicatorItem[] = [
  { id: 'hero-top' },
  { id: 'celebrations-section' },
  { id: 'cinema-reels-section' },
  { id: 'map-location-section' },
];

export default function ScrollTrailUpButton({
  sections = DEFAULT_SECTIONS,
}: {
  sections?: SectionIndicatorItem[];
}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>(
    sections[0]?.id || 'hero-top'
  );

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      ticking = false;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress =
        docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setScrollProgress(progress);
      setVisible(scrollTop > 140);

      const viewportCenter = scrollTop + window.innerHeight * 0.4;
      let currentId = sections[0]?.id || 'hero-top';
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          if (viewportCenter >= top) {
            currentId = sec.id;
          }
        }
      }
      setActiveSectionId(currentId);
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateScroll);
      }
    };

    updateScroll();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [sections]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'hero-top') {
      scrollToTop();
    }
  };

  return (
    <>
      {/* Middle-Right Thin Section Indicator Lines (5 lines matching the 5 sections, no text) */}
      <nav
        aria-label="Section indicators"
        className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-end gap-2.5"
      >
        {sections.map((sec, idx) => {
          const isActive = activeSectionId === sec.id;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => scrollToSection(sec.id)}
              aria-label={`Jump to section ${idx + 1}`}
              className="py-1.5 pl-3 cursor-pointer focus:outline-none group"
            >
              <span
                className={`block rounded-full transition-all duration-300 ease-out ${
                  isActive
                    ? 'w-7 h-[2.5px] bg-[#0F3B1A]'
                    : 'w-3.5 h-[1.5px] bg-[#0F3B1A]/40 group-hover:w-5 group-hover:bg-[#0F3B1A]'
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* Bottom-Right Claymorphic Scroll-Up Button */}
      <div
        className={`fixed right-4 bottom-18 sm:right-6 sm:bottom-6 z-40 transition-all duration-300 ${
          visible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title="Back to top"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full clay-scroll-up-btn active:scale-95 cursor-pointer"
        >
          <ScrollUpTrailIcon
            progress={scrollProgress}
            className="w-10 h-10"
          />
        </button>
      </div>
    </>
  );
}
