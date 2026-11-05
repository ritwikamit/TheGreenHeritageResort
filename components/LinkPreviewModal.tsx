'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ShareCustomIcon,
  LinkCustomIcon,
  WhatsAppCustomIcon,
  CloseCustomIcon,
  VerifiedCheckCustomIcon,
} from './CustomHeritageIcons';

interface LinkPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PREVIEW_PHOTOS = [
  {
    id: 'official',
    label: 'Official Banner',
    src: '/og-image.jpg',
    tag: 'Official Link Preview (1200×630)',
  },
  {
    id: 'stage',
    label: 'Night Stage & Walkway',
    src: '/reels/DVwj-NrE08f-landscape.jpg',
    tag: 'Illuminated Grand Stage & Red Carpet',
  },
  {
    id: 'couple',
    label: 'Floral Lattice Wedding',
    src: '/reels/DYDC4t6T_gq-landscape.jpg',
    tag: 'Couple Celebration Under Lattice Arches',
  },
  {
    id: 'aerial',
    label: 'Resort Aerial View',
    src: '/reels/DSG3HcWEcov-landscape.jpg',
    tag: 'Aerial Lawn & Venue Overview',
  },
];

export default function LinkPreviewModal({ isOpen, onClose }: LinkPreviewModalProps) {
  const [selectedPhoto, setSelectedPhoto] = useState(PREVIEW_PHOTOS[0]);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const siteUrl = 'https://thegreenheritageresort.in';
  const shareTitle = 'The Green Heritage Resort and Banquet — Weddings & Celebrations in Muzaffarpur';
  const shareText = `Explore The Green Heritage Resort & Banquet in Bakarpur, Muzaffarpur — weddings, celebration lawns, chandelier halls & serene family stays: ${siteUrl}`;

  const handleCopyLink = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(siteUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      }
    } catch {
      // fallback
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: 'The Green Heritage Resort & Banquet — Muzaffarpur',
          url: siteUrl,
        });
      } catch {
        // user cancelled or share unsupported
      }
    } else {
      handleCopyLink();
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Website Link Preview and Share"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto clay-card-deep rounded-3xl p-4 sm:p-6 text-[#0F3B1A] shadow-2xl border border-white/60 select-none animate-scale-in"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Link Preview Modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-full clay-white-header flex items-center justify-center text-[#0F3B1A] hover:scale-105 active:scale-95 transition-all cursor-pointer z-10"
        >
          <CloseCustomIcon className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-full bg-[#0F3B1A]/10 text-[#0F3B1A] flex items-center justify-center">
            <ShareCustomIcon className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#0F3B1A]">
            Social Link Preview
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3B1A] leading-tight mb-1">
          Website Link Preview
        </h3>
        <p className="text-xs sm:text-sm text-[#2C4631] mb-4">
          See how the website card appears when you share the link on WhatsApp, Facebook, iMessage, or Twitter.
        </p>

        {/* Photo Selector Pills */}
        <div className="mb-4">
          <div className="text-[11px] font-semibold text-[#0F3B1A] mb-1.5 flex items-center gap-1">
            <span>Website Photo Showcase:</span>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {PREVIEW_PHOTOS.map((photo) => {
              const isSelected = selectedPhoto.id === photo.id;
              return (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setSelectedPhoto(photo)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'clay-pill-active font-semibold shadow-sm text-[#E00000]'
                      : 'clay-white-header text-[#0F3B1A] hover:text-[#E00000]'
                  }`}
                >
                  {isSelected && <VerifiedCheckCustomIcon className="w-3.5 h-3.5 text-emerald-500" />}
                  <span>{photo.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Social Link Preview Card Simulation (WhatsApp / OpenGraph Card) */}
        <div className="bg-[#0A1C0D] rounded-2xl overflow-hidden border border-[#9FED72]/30 shadow-xl mb-4 group transition-all">
          {/* Card Image Banner */}
          <div className="relative aspect-[1.91/1] w-full bg-black overflow-hidden">
            <Image
              src={selectedPhoto.src}
              alt="The Green Heritage Resort Link Preview"
              fill
              className="object-cover group-hover:scale-102 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 600px"
              priority
            />
            {/* Tag Overlay */}
            <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-medium text-white/90 border border-white/10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9FED72] animate-pulse" />
              <span>{selectedPhoto.tag}</span>
            </div>
            {/* Domain Pill Bottom Right */}
            <div className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-semibold tracking-wider uppercase text-[#D4AF37] border border-[#D4AF37]/35">
              thegreenheritageresort.in
            </div>
          </div>

          {/* Card Body */}
          <div className="p-3.5 sm:p-4 bg-[#0F2A14] border-t border-white/10">
            <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#9FED72] mb-1">
              THEGREENHERITAGERESORT.IN • OFFICIAL VENUE
            </div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-white leading-snug line-clamp-1 mb-1">
              The Green Heritage Resort and Banquet — Weddings & Celebrations in Muzaffarpur
            </h4>
            <p className="text-xs text-[#CBD5E1] line-clamp-2 leading-relaxed">
              Where families come together for sacred vows, joyful receptions, and peaceful stays in Bakarpur, Muzaffarpur, Bihar. Real wedding reels, banquet halls &amp; celebration lawns.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          {/* WhatsApp Share Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer"
          >
            <WhatsAppCustomIcon className="w-4 h-4 text-white" />
            <span>Share via WhatsApp</span>
          </a>

          {/* Copy Link Button */}
          <button
            type="button"
            onClick={handleCopyLink}
            className={`flex-1 py-3 px-4 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98 ${
              copied
                ? 'bg-emerald-600 text-white shadow-md'
                : 'clay-btn-coral text-white'
            }`}
          >
            <LinkCustomIcon className="w-4 h-4" />
            <span>{copied ? '✓ Link Copied!' : 'Copy Website Link'}</span>
          </button>

          {/* Native Mobile Share Button */}
          <button
            type="button"
            onClick={handleNativeShare}
            aria-label="More sharing options"
            className="px-4 py-3 rounded-full clay-white-header text-[#0F3B1A] hover:text-[#E00000] font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <ShareCustomIcon className="w-4 h-4" />
            <span className="sm:inline">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}

