'use client';

import React, { useEffect, useRef, useState } from 'react';
import { InstagramReelItem } from '@/lib/resort-data';
import { VolumeMuteCustomIcon, VolumeUnmuteCustomIcon } from './CustomHeritageIcons';

interface InstagramReelCardProps {
  reel: InstagramReelItem;
  className?: string;
}

export default function InstagramReelCard({
  reel,
  className = '',
}: InstagramReelCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inViewRef = useRef(false);
  const [isMuted, setIsMuted] = useState(true);

  const tryPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = isMuted;
    if (v.paused) {
      v.play().catch(() => {});
    }
  };

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          inViewRef.current = entry.isIntersecting;
          const v = videoRef.current;
          if (!v) return;
          if (entry.isIntersecting) {
            v.muted = isMuted;
            if (v.paused) {
              v.play().catch(() => {});
            }
          } else {
            if (!v.paused) {
              v.pause();
            }
          }
        });
      },
      { rootMargin: '180px 0px', threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isMuted]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const isLandscape = reel.orientation === 'landscape';

  return (
    <div
      ref={containerRef}
      onMouseEnter={tryPlay}
      className={`group relative overflow-hidden rounded-[26px] border-2 border-[#A8BBA3]/85 bg-[#1E261A] shadow-[0_12px_26px_rgba(30,38,26,0.18)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04] hover:border-[#FFA239] hover:z-20 ${
        isLandscape ? 'aspect-video w-full' : 'aspect-[9/16] w-full'
      } ${className}`}
    >
      <video
        ref={videoRef}
        src={reel.videoSrc}
        poster={reel.poster}
        muted={isMuted}
        loop
        playsInline
        autoPlay
        preload="auto"
        onLoadedData={() => {
          if (inViewRef.current) tryPlay();
        }}
        onCanPlay={() => {
          if (inViewRef.current) tryPlay();
        }}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 [backface-visibility:hidden]"
        style={{ objectPosition: reel.objectPosition || '50% 30%' }}
      />

      {/* Subtle bottom contrast scrim strictly for small video details & mute button */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

      {/* Minimal footer: ONLY small details on left + Mute/Unmute button on right */}
      <div className="absolute inset-x-4 bottom-3.5 z-20 flex items-end justify-between gap-2.5">
        <div className="min-w-0 pointer-events-none">
          <h4 className="font-serif text-[#FCF9EA] text-sm sm:text-base font-semibold leading-snug truncate drop-shadow-sm">
            {reel.title}
          </h4>
          <p className="text-white/85 text-[11px] sm:text-xs truncate">
            {reel.subtitle}
          </p>
        </div>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          title={isMuted ? 'Unmute audio' : 'Mute audio'}
          className="shrink-0 w-9 h-9 rounded-full clay-btn-coral flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
        >
          {isMuted ? (
            <VolumeMuteCustomIcon className="w-4 h-4" />
          ) : (
            <VolumeUnmuteCustomIcon className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
