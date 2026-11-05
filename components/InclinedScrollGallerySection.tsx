'use client';

import React, { useEffect, useRef } from 'react';
import BlurRevealText from './BlurRevealText';

export interface GalleryPhotoItem {
  src: string;
  title: string;
  subtitle: string;
}

export const GALLERY_PHOTOS: GalleryPhotoItem[] = [
  {
    src: '/photos/royal-archway-night.jpg',
    title: 'Royal Archway Evening Lights',
    subtitle: 'Where the bride takes her first steps toward the mandap',
  },
  {
    src: '/photos/pastel-floral-mandap.jpg',
    title: 'Sunlit Floral Mandap Canopy',
    subtitle: 'Sacred vows beneath soft blooms and brass bells',
  },
  {
    src: '/photos/facade-fireworks.jpg',
    title: 'Sparkler & Cold-Pyro Entry',
    subtitle: 'A sky full of warmth as two families celebrate together',
  },
  {
    src: '/photos/chandelier-reception.jpg',
    title: 'Chandelier Reception Stage',
    subtitle: 'Laughter, blessings, and evening portraits inside our hall',
  },
  {
    src: '/photos/bridal-reflection.jpg',
    title: 'Quiet Bridal Suite Moments',
    subtitle: 'Peaceful spaces for the bride and her family to get ready',
  },
  {
    src: '/photos/floral-stage-setup.jpg',
    title: 'Handcrafted Floral Backdrops',
    subtitle: 'Every flower arranged to match your family celebration',
  },
  {
    src: '/photos/banquet-hall-walkthrough.jpg',
    title: 'Spacious Indoor Banquet Hall',
    subtitle: 'Warm lighting and comfortable seating for every guest',
  },
  {
    src: '/photos/resort-courtyard-day.jpg',
    title: 'The Green Heritage Courtyard',
    subtitle: 'Open green lawns on Gobarsahi–Sakri Road, Muzaffarpur',
  },
];

const TOP_RIBBON_TEXT =
  'SACRED VOWS  •  ROYAL BRIDAL ENTRIES  •  OPEN-AIR MANDAP LAWNS  •  CHANDELIER RECEPTIONS  •  JOYFUL HALDI MORNINGS  •  WARM FAMILY STAYS  •  ';

const BOTTOM_RIBBON_TEXT =
  'THE GREEN HERITAGE RESORT AND BANQUET  •  BAKARPUR, MUZAFFARPUR  •  WHERE TWO FAMILIES BECOME ONE  •  CELEBRATE EVERY PRECIOUS MOMENT  •  ';

export default function InclinedScrollGallerySection({
  onOpenGallery,
}: {
  onOpenGallery: () => void;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const ribbonTopRef = useRef<HTMLDivElement>(null);
  const ribbonBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;
    let baseOffset = 0;
    let scrollTarget = window.scrollY || 0;
    let smoothScroll = scrollTarget;
    let lastTime = performance.now();
    let isVisible = false;

    const onScroll = () => {
      scrollTarget =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { rootMargin: '250px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      if (isVisible) {
        smoothScroll += (scrollTarget - smoothScroll) * 0.1;
        baseOffset += 26 * dt;

        const totalShift1 = (baseOffset + smoothScroll * 0.25) % 1480;
        const totalShift2 = (baseOffset * 0.9 + smoothScroll * 0.25) % 1480;
        const ribbonShift1 = (baseOffset * 1.3 + smoothScroll * 0.3) % 1200;
        const ribbonShift2 = (baseOffset * 1.3 + smoothScroll * 0.3) % 1200;

        if (row1Ref.current) {
          row1Ref.current.style.transform = `translate3d(${-totalShift1.toFixed(
            1
          )}px, 0, 0)`;
        }
        if (row2Ref.current) {
          row2Ref.current.style.transform = `translate3d(${(
            -1480 + totalShift2
          ).toFixed(1)}px, 0, 0)`;
        }
        if (ribbonTopRef.current) {
          ribbonTopRef.current.style.transform = `translate3d(${-ribbonShift1.toFixed(
            1
          )}px, 0, 0)`;
        }
        if (ribbonBottomRef.current) {
          ribbonBottomRef.current.style.transform = `translate3d(${(
            -1200 + ribbonShift2
          ).toFixed(1)}px, 0, 0)`;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const row1Photos = [...GALLERY_PHOTOS, ...GALLERY_PHOTOS, ...GALLERY_PHOTOS];
  const row2Photos = [
    ...GALLERY_PHOTOS.slice().reverse(),
    ...GALLERY_PHOTOS.slice().reverse(),
    ...GALLERY_PHOTOS.slice().reverse(),
  ];

  return (
    <section
      ref={sectionRef}
      id="inclined-gallery-section"
      className="relative w-screen left-1/2 -translate-x-1/2 py-14 sm:py-20 overflow-hidden select-none"
    >
      {/* Section Header */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="font-cursive text-3xl sm:text-4xl text-[#D4AF37]">
            Glimpses of Love, Laughter &amp; Togetherness
          </p>
          <BlurRevealText
            as="h2"
            className="font-serif text-3xl sm:text-5xl font-bold text-[#1E261A] tracking-tight"
          >
            Moments That Stay in Your Heart Forever
          </BlurRevealText>
        </div>
        <button
          type="button"
          onClick={onOpenGallery}
          className="self-start md:self-auto px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold clay-btn-olive cursor-pointer"
        >
          Explore Full Photo &amp; Reel Gallery →
        </button>
      </div>

      {/* Inclined Container: Top Ribbon + Two Inclined Moving Photo Rows + Bottom Ribbon */}
      <div className="relative -rotate-[2.2deg] scale-[1.03] space-y-5 py-3">
        {/* TOP MOVING TEXT RIBBON */}
        <div className="w-full overflow-hidden clay-dark-bar py-2.5 border-y border-[#A8BBA3]/45">
          <div
            ref={ribbonTopRef}
            className="flex whitespace-nowrap will-change-transform text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#FCF9EA]"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="mx-2">
                {TOP_RIBBON_TEXT}
              </span>
            ))}
          </div>
        </div>

        {/* ROW 1: Moving Right -> Left along with scroll */}
        <div className="w-full overflow-hidden">
          <div
            ref={row1Ref}
            className="flex items-stretch gap-5 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {row1Photos.map((photo, idx) => (
              <div
                key={`r1-${idx}`}
                className="group relative w-[280px] sm:w-[350px] aspect-[16/10] clay-card p-0 overflow-hidden shrink-0 transition-transform duration-500 hover:scale-[1.04]"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-4 bottom-3 pointer-events-none">
                  <h4 className="font-serif text-[#FCF9EA] text-sm sm:text-base font-semibold truncate">
                    {photo.title}
                  </h4>
                  <p className="text-white/85 text-[11px] truncate">
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moving Left -> Right along with scroll */}
        <div className="w-full overflow-hidden">
          <div
            ref={row2Ref}
            className="flex items-stretch gap-5 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {row2Photos.map((photo, idx) => (
              <div
                key={`r2-${idx}`}
                className="group relative w-[280px] sm:w-[350px] aspect-[16/10] clay-card p-0 overflow-hidden shrink-0 transition-transform duration-500 hover:scale-[1.04]"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-4 bottom-3 pointer-events-none">
                  <h4 className="font-serif text-[#FCF9EA] text-sm sm:text-base font-semibold truncate">
                    {photo.title}
                  </h4>
                  <p className="text-white/85 text-[11px] truncate">
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM MOVING TEXT RIBBON */}
        <div className="w-full overflow-hidden bg-[#97A87A] py-2.5 border-y border-[#FCF9EA]/60 shadow-md">
          <div
            ref={ribbonBottomRef}
            className="flex whitespace-nowrap will-change-transform text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#1E261A]"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="mx-2">
                {BOTTOM_RIBBON_TEXT}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
