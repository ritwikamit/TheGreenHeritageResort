'use client';

import React, {useEffect, useRef, useState} from 'react';

interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

/**
 * Bidirectional Text Blur Reveal Animation:
 * Triggers smooth blur-to-clear reveal when scrolling both down AND up into the viewport.
 */
export default function BlurReveal({
  children,
  className = '',
  delayMs = 0,
}: BlurRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [direction, setDirection] = useState<'down' | 'up'>('down');
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setDirection(currentY >= lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            // Reset when element leaves viewport (top or bottom) so scrolling up OR down re-triggers reveal
            setInView(false);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const offsetClass = inView
    ? 'opacity-100 blur-none translate-y-0'
    : direction === 'down'
    ? 'opacity-0 blur-[7px] translate-y-5'
    : 'opacity-0 blur-[7px] -translate-y-5';

  return (
    <div
      ref={ref}
      style={{transitionDelay: `${delayMs}ms`}}
      className={`transition-all duration-700 ease-out will-change-[transform,opacity,filter] ${offsetClass} ${className}`}
    >
      {children}
    </div>
  );
}
