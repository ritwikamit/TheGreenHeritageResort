'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(12);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Progressive smooth loading increments
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 92) {
          return prev;
        }
        const step = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + step, 92);
      });
    }, 120);

    const finish = () => {
      setProgress(100);
      setTimeout(() => {
        setIsLoaded(true);
        setTimeout(() => setShouldRender(false), 450);
      }, 350);
    };

    if (document.readyState === 'complete') {
      setTimeout(finish, 850);
    } else {
      const handleLoad = () => {
        setTimeout(finish, 500);
      };
      window.addEventListener('load', handleLoad, { once: true });
    }

    // Safety fallback: ensure loading dismisses within 1.6s
    const fallbackTimer = setTimeout(finish, 1600);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimer);
    };
  }, []);

  if (!shouldRender) return null;

  const getStatusText = (val: number) => {
    if (val < 40) return 'Preparing resort spaces & lawns...';
    if (val < 75) return 'Loading real wedding films & stage decor...';
    if (val < 98) return 'Setting the celebration stage...';
    return 'Welcome to The Green Heritage Resort';
  };

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={!isLoaded}
      className={`fixed inset-0 w-screen h-[100dvh] z-[150] flex flex-col items-center justify-center p-6 bg-[#0E150D] text-[#FCF9EA] transition-opacity duration-500 ease-out select-none ${
        isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,84,63,0.3)_0%,rgba(14,21,13,0.95)_100%)] pointer-events-none" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full space-y-6">
        {/* Brand Crest */}
        <div className="relative w-36 sm:w-44 h-28 sm:h-32">
          <Image
            src="/Logo.png"
            alt="The Green Heritage Resort and Banquet"
            fill
            priority
            className="object-contain drop-shadow-[0_8px_24px_rgba(218,175,75,0.25)] animate-pulse"
            sizes="180px"
          />
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
            The Green Heritage
          </h2>
          <p className="font-cursive text-xl sm:text-2xl text-[#E5C378]">
            Resort &amp; Banquet
          </p>
          <p className="text-[11px] sm:text-xs text-[#97A87A] font-medium tracking-wide">
            Bakarpur, Gobarsahi–Sakri Road, Muzaffarpur, Bihar
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full max-w-[260px] space-y-2">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden border border-[#D4AF37]/30">
            <div
              className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] rounded-full transition-all duration-300 ease-out shadow-[0_0_12px_rgba(212,175,55,0.7)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#A8BBA3] font-medium px-0.5">
            <span className="truncate max-w-[200px]">{getStatusText(progress)}</span>
            <span className="text-[#D4AF37] font-semibold tabular-nums">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
