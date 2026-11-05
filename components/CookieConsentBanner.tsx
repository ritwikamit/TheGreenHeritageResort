'use client';

import React, { useEffect, useState } from 'react';
import { ActivePageView } from './CurvedHeroFrame';
import { CookieShieldIcon } from './CustomHeritageIcons';

const COOKIE_STORAGE_KEY = 'green_heritage_cookie_consent_v1';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
}

export default function CookieConsentBanner({
  onOpenPolicy,
}: {
  onOpenPolicy: (page: ActivePageView) => void;
}) {
  const [visible, setVisible] = useState(false);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!saved) {
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(prefs));
      document.cookie = `gh_cookie_consent=${
        prefs.analytics ? 'full' : 'essential'
      }; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-16 sm:bottom-5 left-3 sm:left-6 z-50 max-w-md w-[calc(100vw-1.5rem)] clay-card p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-2xl clay-btn-soft flex items-center justify-center shrink-0">
          <CookieShieldIcon className="w-5 h-5 text-[#97A87A]" />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-serif font-bold text-[#1E261A] text-sm sm:text-base">
            Cookie &amp; Privacy Preferences
          </h4>
          <p className="mt-1 text-xs text-[#46563D] leading-relaxed">
            We use essential cookies to remember your preferences and optional media
            cookies for smooth video playback. Read our{' '}
            <button
              type="button"
              onClick={() => onOpenPolicy('cookies')}
              className="underline font-semibold text-[#5E7147] hover:text-[#1E261A] cursor-pointer"
            >
              Cookies Policy
            </button>
            .
          </p>

          {customizeOpen && (
            <div className="mt-3 space-y-2 pt-2 border-t border-[#A8BBA3]/45 text-xs">
              <label className="flex items-center justify-between text-[#1E261A] font-medium">
                <span>Essential Site Cookies</span>
                <input type="checkbox" checked disabled className="accent-[#FFA239]" />
              </label>
              <label className="flex items-center justify-between text-[#1E261A] cursor-pointer">
                <span>Performance &amp; Reel Playback</span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="accent-[#FFA239]"
                />
              </label>
              <label className="flex items-center justify-between text-[#1E261A] cursor-pointer">
                <span>Social Embed Preferences</span>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="accent-[#FFA239]"
                />
              </label>
            </div>
          )}

          <div className="mt-3.5 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() =>
                savePreferences({
                  essential: true,
                  analytics: true,
                  marketing: true,
                  updatedAt: new Date().toISOString(),
                })
              }
              className="px-4 py-1.5 rounded-full text-xs font-semibold clay-btn-coral cursor-pointer"
            >
              Accept All
            </button>

            {customizeOpen ? (
              <button
                type="button"
                onClick={() =>
                  savePreferences({
                    essential: true,
                    analytics,
                    marketing,
                    updatedAt: new Date().toISOString(),
                  })
                }
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold clay-btn-olive cursor-pointer"
              >
                Save Choices
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCustomizeOpen(true)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold clay-btn-soft cursor-pointer"
              >
                Customize
              </button>
            )}

            <button
              type="button"
              onClick={() =>
                savePreferences({
                  essential: true,
                  analytics: false,
                  marketing: false,
                  updatedAt: new Date().toISOString(),
                })
              }
              className="px-3 py-1.5 rounded-full text-xs font-medium text-[#46563D] hover:text-[#1E261A] cursor-pointer"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
