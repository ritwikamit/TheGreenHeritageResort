'use client';

import React, { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const startTime = performance.now();
    const MIN_DURATION_MS = 2200; // At least 2+ seconds as requested

    const dotInterval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 360);

    let finishTimer: ReturnType<typeof setTimeout>;
    const completeLoading = () => {
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(0, MIN_DURATION_MS - elapsed);
      finishTimer = setTimeout(() => {
        setIsLoaded(true);
        setTimeout(() => setShouldRender(false), 550);
      }, remaining);
    };

    const checkMediaAndLoad = () => {
      const images = Array.from(document.images);
      const pendingImages = images.filter((img) => !img.complete);
      if (pendingImages.length === 0) {
        completeLoading();
      } else {
        let resolved = 0;
        const onImgDone = () => {
          resolved += 1;
          if (resolved >= pendingImages.length) {
            completeLoading();
          }
        };
        pendingImages.forEach((img) => {
          img.addEventListener('load', onImgDone, { once: true });
          img.addEventListener('error', onImgDone, { once: true });
        });
      }
    };

    if (document.readyState === 'complete') {
      checkMediaAndLoad();
    } else {
      window.addEventListener('load', checkMediaAndLoad, { once: true });
    }

    const safetyFallback = setTimeout(completeLoading, 2800);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(finishTimer);
      clearTimeout(safetyFallback);
      window.removeEventListener('load', checkMediaAndLoad);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={!isLoaded}
      className={`fixed inset-0 w-screen h-[100dvh] z-[100] flex flex-col items-center justify-center bg-[#FCF9EA] bg-gradient-to-br from-[#FCF9EA] via-[#A8BBA3] to-[#97A87A] transition-opacity duration-500 ease-out ${
        isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <img
        src="/Logo.png"
        alt="The Green Heritage Resort and Banquet"
        className="w-64 sm:w-80 md:w-96 h-auto object-contain drop-shadow-[0_12px_28px_rgba(30,38,26,0.22)]"
      />

      <p className="mt-6 font-serif text-2xl sm:text-3xl font-bold text-[#1E261A] tracking-wide inline-flex items-baseline">
        <span>Loading</span>
        <span className="inline-block w-8 text-left text-[#FFA239] drop-shadow-[0_2px_6px_rgba(30,38,26,0.25)]">
          {'.'.repeat(dotCount)}
        </span>
      </p>
    </div>
  );
}
