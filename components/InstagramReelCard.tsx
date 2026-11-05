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
  const [isPlaying, setIsPlaying] = useState(true);

  const tryPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = isMuted;
    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Fallback to muted if unmuted was rejected
          v.muted = true;
          setIsMuted(true);
          v.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        });
    }
  };

  useEffect(() => {
    const node = containerRef.current;
    const v = videoRef.current;
    if (!node || !v) return;

    v.muted = isMuted;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          inViewRef.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            tryPlay();
          } else {
            if (!v.paused) {
              v.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { rootMargin: '120px 0px', threshold: 0.15 }
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
        tryPlay();
      }
    }
  };

  const handleCardClick = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      tryPlay();
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const isLandscape = reel.orientation === 'landscape';

  return (
    <div
      ref={containerRef}
      onClick={handleCardClick}
      onMouseEnter={tryPlay}
      className={`group relative overflow-hidden rounded-[26px] border-2 border-[#9FED72]/30 bg-[#0A1C0D] shadow-[8px_8px_20px_rgba(197,160,114,0.35),-6px_-6px_16px_rgba(255,255,255,0.9)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:border-[#E00000] cursor-pointer ${
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
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 [backface-visibility:hidden]"
        style={{ objectPosition: reel.objectPosition || '50% 30%' }}
      />

      {/* Subtle bottom contrast scrim strictly for small video details & mute button */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {/* Play/Pause state indicator on smartphone tap */}
      {!isPlaying && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[2px]">
          <div className="w-14 h-14 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white backdrop-blur-md shadow-lg">
            <svg className="w-7 h-7 ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Minimal footer: ONLY small details on left + Mute/Unmute button on right */}
      <div className="absolute inset-x-4 bottom-3.5 z-20 flex items-end justify-between gap-2.5">
        <div className="min-w-0 pointer-events-none">
          <h4 className="font-serif text-[#FFECCB] text-sm sm:text-base font-semibold leading-snug truncate drop-shadow-sm">
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
          className="shrink-0 w-9 h-9 rounded-full clay-btn-coral flex items-center justify-center transition-transform hover:scale-105 cursor-pointer z-30"
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
