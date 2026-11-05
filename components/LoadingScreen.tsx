'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const MINIMUM_DISPLAY_MS = 2000; // Hold loading page for at least 2 seconds

    const finish = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, MINIMUM_DISPLAY_MS - elapsed);

      setTimeout(() => {
        setIsLoaded(true);
        setTimeout(() => setShouldRender(false), 550);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }

    // Safety fallback timer to guarantee smooth dismissal
    const fallbackTimer = setTimeout(finish, 2600);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener('load', finish);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={!isLoaded}
      className={`fixed inset-0 w-screen h-[100dvh] z-[200] flex flex-col items-center justify-center p-6 bg-[#FFECCB] text-[#0F3B1A] transition-opacity duration-600 ease-out select-none ${
        isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Center content: Big Logo + Animated Loading ... text */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full space-y-6">
        {/* Big Resort Logo */}
        <div className="relative w-56 sm:w-72 md:w-80 h-44 sm:h-56 md:h-64 transition-transform duration-700 ease-out">
          <Image
            src="/Logo.png"
            alt="The Green Heritage Resort and Banquet"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, 360px"
          />
        </div>

        {/* Animated "Loading ..." text where the dots ... are animated */}
        <div className="flex items-baseline justify-center font-serif text-lg sm:text-2xl tracking-[0.28em] text-[#0F3B1A] select-none">
          <span className="font-semibold uppercase tracking-[0.28em]">
            Loading
          </span>
          <span className="inline-flex items-baseline ml-1.5 space-x-1.5 text-[#FFA97B] font-bold text-2xl sm:text-3xl">
            <span className="inline-block animate-[bounce_1.3s_infinite_100ms]">.</span>
            <span className="inline-block animate-[bounce_1.3s_infinite_300ms]">.</span>
            <span className="inline-block animate-[bounce_1.3s_infinite_500ms]">.</span>
          </span>
        </div>
      </div>
    </div>
  );
}
