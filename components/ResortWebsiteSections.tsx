'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  FOOTER_BACKGROUND_REEL,
  INITIAL_FACILITY_ITEMS,
  LANDSCAPE_REELS,
  PORTRAIT_REELS,
  RESORT_FAQS,
  SIGNATURE_PORTRAIT_REEL,
  SUPPLIED_CHANNELS,
} from '@/lib/resort-data';
import { ActivePageView } from './CurvedHeroFrame';
import InstagramReelCard from './InstagramReelCard';
import BlurRevealText from './BlurRevealText';
import InclinedScrollGallerySection, {
  GALLERY_PHOTOS,
} from './InclinedScrollGallerySection';
import {
  BanquetArchIcon,
  FacebookBrandIcon,
  GoogleMapsBrandIcon,
  InstagramBrandIcon,
  MapPinCustomIcon,
  ParkingCarIcon,
  PhoneCallCustomIcon,
  MailCustomIcon,
  PoolWavesIcon,
  TripadvisorBrandIcon,
  WeddingRingsIcon,
  WhatsAppCustomIcon,
  WifiSignalIcon,
  ShareCustomIcon,
  LinkCustomIcon,
  GiftCustomIcon,
  HeartCustomIcon,
  HeritageBloomIcon,
  VerifiedCheckCustomIcon,
} from './CustomHeritageIcons';

interface ResortWebsiteSectionsProps {
  activePage: ActivePageView;
  onNavigate: (page: ActivePageView) => void;
  isEnquiryModalOpen: boolean;
  enquiryDefaultType: string;
  onOpenEnquiry: (defaultCategory?: string) => void;
  onCloseEnquiry: () => void;
  onOpenShare?: () => void;
}

const SECTION_ROTATING_WORDS = [
  'Dream Weddings',
  'Warm Receptions',
  'Haldi & Mehndi',
  'Family Milestones',
  'Peaceful Stays',
];

export interface CelebrationPackageItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  enquiryCategory: string;
}

const CELEBRATION_PACKAGES: CelebrationPackageItem[] = [
  {
    id: 'grand-wedding-reception',
    tag: 'Most Popular for Families',
    title: 'Complete Wedding & Reception Package',
    subtitle: 'Outdoor Celebration Lawn + Indoor Chandelier Banquet Hall',
    description:
      'Designed for families who want a seamless full-venue celebration—from the royal archway baraat welcome and open-air varmala to indoor rituals and dinner hospitality.',
    highlights: [
      'Illuminated Royal Archway & Open-Air Celebration Lawn access',
      'Crystal Chandelier Banquet Hall for rituals, stage & dining',
      'Dedicated bridal & family preparation rooms during the event',
      'Custom floral stage & mandap decor options tailored to your dates',
    ],
    enquiryCategory: 'Complete Wedding & Reception Package',
  },
  {
    id: 'pre-wedding-rituals',
    tag: 'Daytime & Evening Rituals',
    title: 'Haldi, Mehndi & Sangeet Package',
    subtitle: 'Sunlit Courtyard Mornings & Musical Indoor Evenings',
    description:
      'Celebrate vibrant Haldi mornings under the open sky and dance the night away with family at an indoor Sangeet or Ring Ceremony inside our chandelier hall.',
    highlights: [
      'Sunlit courtyard & poolside lawn area for Haldi & Mehndi setups',
      'Indoor air-conditioned banquet stage for Sangeet & Ring Ceremony',
      'Flexible daytime or evening slot customization with our venue desk',
      'Coordinated seating and sound-friendly indoor layout for families',
    ],
    enquiryCategory: 'Haldi, Mehndi & Sangeet Package',
  },
  {
    id: 'family-stay-hospitality',
    tag: 'Multi-Day Wedding Comfort',
    title: 'Wedding Family & Guest Stay Package',
    subtitle: 'On-Site Rooms & Courtyard Hospitality for Close Relatives',
    description:
      'Keep parents, elders, and out-of-town relatives comfortable right at the venue so your entire family can rest peacefully between wedding ceremonies.',
    highlights: [
      'On-site guest rooms reserved together for wedding family members',
      'Easy walkthrough access to the banquet hall and celebration lawn',
      'On-site parking space and front-desk assistance for arriving guests',
      'Custom check-in coordination aligned with your wedding schedule',
    ],
    enquiryCategory: 'Wedding Family & Guest Stay Package',
  },
  {
    id: 'milestone-celebrations',
    tag: 'Intimate Gatherings',
    title: 'Engagement, Anniversary & Family Milestone Package',
    subtitle: 'Tailored Indoor Banquet or Evening Lawn Gatherings',
    description:
      'Perfect for ring ceremonies, milestone wedding anniversaries, birthday celebrations, and warm family get-togethers in Muzaffarpur.',
    highlights: [
      'Choice of indoor Chandelier Banquet Hall or open-air lawn space',
      'Custom stage backdrop arrangement for cake-cutting & blessings',
      'Convenient Bakarpur, Gobarsahi–Sakri Road access for local guests',
      'Personalized package quotation based on your guest list & date',
    ],
    enquiryCategory: 'Engagement / Anniversary Package',
  },
];

export default function ResortWebsiteSections({
  activePage,
  onNavigate,
  isEnquiryModalOpen,
  enquiryDefaultType,
  onOpenEnquiry,
  onCloseEnquiry,
  onOpenShare,
}: ResortWebsiteSectionsProps) {
  const [reelFilter, setReelFilter] = useState<'all' | 'landscape' | 'portrait'>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [wordIndex, setWordIndex] = useState(0);

  // Enquiry Modal Form State
  const [guestName, setGuestName] = useState('');
  const [eventType, setEventType] = useState(enquiryDefaultType || 'Wedding / Reception');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [venuePreference, setVenuePreference] = useState('Banquet Hall + Outdoor Lawn');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % SECTION_ROTATING_WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (enquiryDefaultType) {
      setEventType(enquiryDefaultType);
    }
  }, [enquiryDefaultType]);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      'Hello *The Green Heritage Resort and Banquet*,',
      'I would like to check dates and availability for our family celebration:',
      '',
      `• *Name:* ${guestName.trim() || 'Guest'}`,
      `• *Occasion / Package:* ${eventType}`,
      `• *Preferred Date:* ${eventDate || 'Flexible / To be discussed'}`,
      `• *Estimated Guests:* ${guestCount.trim() || 'To be confirmed'}`,
      `• *Preferred Space:* ${venuePreference}`,
      notes.trim() ? `• *Notes:* ${notes.trim()}` : '',
    ].filter(Boolean);

    const encoded = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `https://wa.me/919234052600?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onCloseEnquiry();
  };

  // Lock body scroll when enquiry modal is open so nothing bleeds or scrolls
  useEffect(() => {
    if (isEnquiryModalOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isEnquiryModalOpen]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const footerVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = footerVideoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
    const timer = setInterval(() => {
      const fv = footerVideoRef.current;
      if (fv && fv.paused) {
        fv.muted = true;
        fv.play().catch(() => {});
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Landing page strictly gets 4 Landscape Reels + 4 Portrait Reels in the Reels section
  const homeLandscapeReels = LANDSCAPE_REELS.slice(0, 4);
  const homePortraitReels = PORTRAIT_REELS.filter(
    (r) => r.code !== SIGNATURE_PORTRAIT_REEL.code
  ).slice(0, 4);

  // Dedicated pages get the remaining reels + full collection
  const extraLandscapeReels = LANDSCAPE_REELS.slice(4);
  const extraPortraitReels = PORTRAIT_REELS.slice(4);

  return (
    <div className="relative z-10 w-full">
      {/* =========================================================
          HOME LANDING VIEW
         ========================================================= */}
      {activePage === 'home' && (
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 space-y-20 sm:space-y-28 pt-14 pb-20">
          {/* 1. SIGNATURE PORTRAIT VIDEO SECTION RIGHT AFTER HERO (VIDEO ON LEFT, EMOTIONAL STORYTELLING ON RIGHT) */}
          <section id="signature-story-section" className="scroll-mt-24">
            <div className="clay-card p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Signature Portrait Video Box (DRuInL5kZdn) */}
                <div className="lg:col-span-5 flex justify-center lg:justify-start">
                  <div className="w-full max-w-[350px] sm:max-w-[370px]">
                    <InstagramReelCard reel={SIGNATURE_PORTRAIT_REEL} />
                  </div>
                </div>

                {/* Right Column: Emotional, Simple, Human-Written Storytelling */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <p className="font-cursive text-3xl sm:text-4xl md:text-5xl text-[#D4AF37] leading-none">
                      A Walk Your Family Will Remember Forever
                    </p>
                    <BlurRevealText
                      as="h2"
                      className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#0F3B1A] tracking-tight leading-[1.12]"
                    >
                      When Two Hands Meet Under a Sky of Warm Lights
                    </BlurRevealText>
                  </div>

                  <div className="space-y-4 text-sm sm:text-base md:text-lg text-[#2C4631] leading-relaxed">
                    <p>
                      There is a quiet, magical moment at every wedding—just before the
                      music swells—when the bride and groom walk side by side beneath a
                      canopy of golden lights, and everyone they love is watching with
                      full hearts.
                    </p>
                    <p>
                      Parents stand with proud, tearful smiles. Elders raise their hands
                      in blessing. Cousins and childhood friends cheer from every side of
                      the walkway. At{' '}
                      <strong className="text-[#0F3B1A]">
                        The Green Heritage Resort and Banquet
                      </strong>
                      , we take care of every light, flower, and seat so your family can
                      simply hold each other close and live in the joy of the moment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div className="clay-surface rounded-2xl p-4 flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl clay-btn-soft flex items-center justify-center shrink-0 mt-0.5">
                        <HeartCustomIcon className="w-4 h-4 text-[#0F3B1A]" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-base text-[#0F3B1A]">
                          Made for Family Warmth
                        </h3>
                        <p className="text-xs text-[#2C4631] mt-0.5 leading-relaxed">
                          Spacious walkways, comfortable elders&apos; seating, and
                          peaceful rooms right on the grounds.
                        </p>
                      </div>
                    </div>

                    <div className="clay-surface rounded-2xl p-4 flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl clay-btn-soft flex items-center justify-center shrink-0 mt-0.5">
                        <HeritageBloomIcon className="w-4 h-4 text-[#0F3B1A]" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-base text-[#0F3B1A]">
                          Every Ritual Honoured
                        </h3>
                        <p className="text-xs text-[#2C4631] mt-0.5 leading-relaxed">
                          From sunlit Haldi mornings to grand evening receptions beneath
                          fairy lights and chandeliers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3.5 pt-2">
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry('Wedding / Reception')}
                      className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold clay-btn-coral inline-flex items-center gap-2 cursor-pointer"
                    >
                      <WeddingRingsIcon className="w-4 h-4" />
                      <span>Plan Your Celebration With Us</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('packages')}
                      className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold clay-btn-olive inline-flex items-center gap-2 cursor-pointer"
                    >
                      <GiftCustomIcon className="w-4 h-4" />
                      <span>Explore Wedding Packages</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. EMOTIONAL CELEBRATION SPACES SECTION */}
          <section id="celebrations-section" className="scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <p className="font-cursive text-3xl sm:text-4xl text-[#D4AF37]">
                  Every Corner Welcomes Your Family Like Home
                </p>
                <BlurRevealText
                  as="h2"
                  className="font-serif text-3xl sm:text-5xl font-bold text-[#0F3B1A] tracking-tight"
                >
                  <span>Spaces Made for </span>
                  <span className="inline-block min-w-[10.5ch] text-left align-bottom">
                    <span
                      key={wordIndex}
                      className="inline-block text-[#E00000] animate-word-swap"
                    >
                      {SECTION_ROTATING_WORDS[wordIndex]}
                    </span>
                  </span>
                </BlurRevealText>
                <p className="mt-2.5 text-sm sm:text-base text-[#2C4631] max-w-2xl leading-relaxed">
                  A wedding is more than an event—it is the day parents see their
                  dreams come true, friends dance till midnight, and relatives gather
                  from near and far. Our spaces give every ritual the warmth it
                  deserves.
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => onNavigate('weddings')}
                  className="px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold clay-btn-soft cursor-pointer"
                >
                  Explore Weddings Page
                </button>
                <button
                  type="button"
                  onClick={() => onOpenEnquiry('Wedding / Reception')}
                  className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold clay-btn-coral cursor-pointer"
                >
                  Enquire Now
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="clay-card p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
                <div>
                  <div className="w-12 h-12 rounded-2xl clay-btn-soft flex items-center justify-center mb-4">
                    <BanquetArchIcon className="w-6 h-6 text-[#165A20]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F3B1A]">
                    The Royal Archway &amp; Open Green Lawn
                  </h3>
                  <p className="mt-2.5 text-sm text-[#2C4631] leading-relaxed">
                    Imagine the bride walking beneath glowing palace arches while cold
                    sparklers light up the night sky. Our wide green lawn gives your
                    baraat, varmala stage, and dinner guests plenty of open air to
                    celebrate comfortably.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#C5A072]/30 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#165A20]">
                    Open-Air Celebration Lawn
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry('Outdoor Lawn Wedding')}
                    className="text-xs font-semibold text-[#E00000] hover:underline cursor-pointer"
                  >
                    Ask About Dates →
                  </button>
                </div>
              </div>

              <div className="clay-card p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
                <div>
                  <div className="w-12 h-12 rounded-2xl clay-btn-soft flex items-center justify-center mb-4">
                    <WeddingRingsIcon className="w-6 h-6 text-[#165A20]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F3B1A]">
                    The Chandelier Banquet Hall
                  </h3>
                  <p className="mt-2.5 text-sm text-[#2C4631] leading-relaxed">
                    Step inside a warm, brightly lit banquet hall where crystal
                    chandeliers shine over your floral stage. Perfect for ring
                    ceremonies, sangeet dances, wedding receptions, and family
                    blessings in any weather.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#C5A072]/30 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#165A20]">
                    Indoor Banquet Hall
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry('Banquet Hall Event')}
                    className="text-xs font-semibold text-[#E00000] hover:underline cursor-pointer"
                  >
                    Ask About Dates →
                  </button>
                </div>
              </div>

              <div className="clay-card p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
                <div>
                  <div className="w-12 h-12 rounded-2xl clay-btn-soft flex items-center justify-center mb-4">
                    <PoolWavesIcon className="w-6 h-6 text-[#165A20]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F3B1A]">
                    Sunlit Haldi Courtyard &amp; Family Stays
                  </h3>
                  <p className="mt-2.5 text-sm text-[#2C4631] leading-relaxed">
                    Fill your mornings with marigold petals, music, and haldi laughter
                    in our sunlit courtyard, while close family members rest peacefully
                    in our guest rooms right at the venue.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#C5A072]/30 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#165A20]">
                    Haldi &amp; Guest Rooms
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry('Room Stay / Haldi Function')}
                    className="text-xs font-semibold text-[#E00000] hover:underline cursor-pointer"
                  >
                    Ask About Dates →
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* MOMENTS THAT STAY IN YOUR HEART FOREVER (INCLINED MOVING PHOTO GALLERY) */}
          <InclinedScrollGallerySection
            onOpenGallery={() => onNavigate('gallery')}
          />

          {/* 2. FEATURED WEDDING REELS SECTION (STRICTLY 4 LANDSCAPE + 4 PORTRAIT ON LANDING PAGE) */}
          <section id="cinema-reels-section" className="scroll-mt-24 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="font-cursive text-3xl sm:text-4xl text-[#D4AF37]">
                  Real Families, Real Smiles, Real Celebrations
                </p>
                <BlurRevealText
                  as="h2"
                  className="font-serif text-3xl sm:text-5xl font-bold text-[#0F3B1A] tracking-tight"
                >
                  Watch Weddings Filmed at Our Resort
                </BlurRevealText>
                <p className="mt-2 text-sm sm:text-base text-[#2C4631] max-w-2xl">
                  Every video below is a real celebration hosted at The Green Heritage
                  in Muzaffarpur. Hover over any film to enlarge it or tap the speaker
                  icon to hear the celebration.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('gallery')}
                className="self-start md:self-auto px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold clay-btn-olive cursor-pointer"
              >
                Watch All Wedding Reels →
              </button>
            </div>

            {/* 4 Landscape Reels */}
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F3B1A] mb-5">
                Widescreen Wedding Films
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {homeLandscapeReels.map((reel) => (
                  <InstagramReelCard key={reel.code} reel={reel} />
                ))}
              </div>
            </div>

            {/* 4 Portrait Reels */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F3B1A]">
                  Bridal Entries &amp; Stage Decor Reels
                </h3>
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="text-xs sm:text-sm font-semibold text-[#E00000] hover:underline cursor-pointer"
                >
                  See All Reels →
                </button>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {homePortraitReels.map((reel) => (
                  <InstagramReelCard key={reel.code} reel={reel} />
                ))}
              </div>
            </div>
          </section>

          {/* 3. CUSTOMIZABLE WEDDING & STAY PACKAGES SECTION ON LANDING PAGE */}
          <section id="packages-section" className="scroll-mt-24 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="font-cursive text-3xl sm:text-4xl text-[#D4AF37]">
                  Tailored Around Your Family &amp; Traditions
                </p>
                <BlurRevealText
                  as="h2"
                  className="font-serif text-3xl sm:text-5xl font-bold text-[#0F3B1A] tracking-tight"
                >
                  Celebration &amp; Stay Packages
                </BlurRevealText>
                <p className="mt-2 text-sm sm:text-base text-[#2C4631] max-w-2xl leading-relaxed">
                  Every wedding has its own rituals, guest list, and schedule. Choose a
                  package style below and share your preferred dates so our team can
                  prepare a custom quotation for your family.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('packages')}
                className="self-start md:self-auto px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold clay-btn-olive cursor-pointer"
              >
                View All Package Details →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CELEBRATION_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="clay-card p-6 sm:p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.015]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold clay-surface text-[#165A20]">
                        <HeritageBloomIcon className="w-3.5 h-3.5 text-[#FFA97B]" />
                        {pkg.tag}
                      </span>
                      <div className="w-10 h-10 rounded-2xl clay-btn-soft flex items-center justify-center shrink-0">
                        <GiftCustomIcon className="w-5 h-5 text-[#165A20]" />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3B1A]">
                      {pkg.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#E00000] mt-1">
                      {pkg.subtitle}
                    </p>
                    <p className="mt-3 text-sm text-[#2C4631] leading-relaxed">
                      {pkg.description}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-[#C5A072]/30 pt-4">
                      {pkg.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F3B1A]"
                        >
                          <VerifiedCheckCustomIcon className="w-4 h-4 text-[#0F3B1A] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#C5A072]/30 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-[#2C4631]">
                      Custom quote based on date &amp; guests
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry(pkg.enquiryCategory)}
                      className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold clay-btn-coral cursor-pointer"
                    >
                      Enquire for This Package →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. DEDICATED INTERACTIVE MAP & LOCATION SECTION ON LANDING PAGE (NO CALL OR WHATSAPP ICONS) */}
          <section id="map-location-section" className="scroll-mt-24">
            <div className="clay-card p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <div>
                    <p className="font-cursive text-3xl sm:text-4xl text-[#D4AF37]">
                      Come Walk Through the Grounds With Us
                    </p>
                    <BlurRevealText
                      as="h2"
                      className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F3B1A] tracking-tight leading-tight"
                    >
                      A Peaceful Haven, Easy to Reach for Every Guest
                    </BlurRevealText>
                  </div>

                  <p className="text-sm sm:text-base text-[#2C4631] leading-relaxed">
                    Situated along Gobarsahi–Sakri Road in Bakarpur, The Green Heritage
                    Resort welcomes wedding parties with wide private approach roads,
                    serene landscaped lawns, and secure parking for 200+ vehicles.
                  </p>

                  {/* 3 Transit & Landmark Pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    <div className="clay-surface rounded-2xl p-3 text-center">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#165A20] block">
                        Gobarsahi Chowk
                      </span>
                      <span className="font-serif font-bold text-sm text-[#0F3B1A] block mt-0.5">
                        ~8–10 Mins
                      </span>
                      <span className="text-[10px] text-[#2C4631] block">Direct highway road</span>
                    </div>

                    <div className="clay-surface rounded-2xl p-3 text-center">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#165A20] block">
                        MFP Railway Stn
                      </span>
                      <span className="font-serif font-bold text-sm text-[#0F3B1A] block mt-0.5">
                        ~20 Mins
                      </span>
                      <span className="text-[10px] text-[#2C4631] block">Muzaffarpur Jct</span>
                    </div>

                    <div className="clay-surface rounded-2xl p-3 text-center">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#165A20] block">
                        Guest Parking
                      </span>
                      <span className="font-serif font-bold text-sm text-[#0F3B1A] block mt-0.5">
                        200+ Cars
                      </span>
                      <span className="text-[10px] text-[#2C4631] block">Secure on-site lot</span>
                    </div>
                  </div>

                  {/* Address Badge with GPS Coordinates */}
                  <div className="clay-surface rounded-2xl p-4 flex items-start gap-3.5 text-xs sm:text-sm text-[#0F3B1A] border border-[#0F3B1A]/10">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F3B1A] to-[#185226] text-[#FFECCB] flex items-center justify-center shrink-0 shadow-sm">
                      <MapPinCustomIcon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <span className="font-serif font-bold text-sm sm:text-base text-[#0F3B1A] block">
                        The Green Heritage Resort and Banquet
                      </span>
                      <span className="text-[#2C4631] block mt-0.5 leading-snug">
                        Bakarpur, Gobarsahi–Sakri Road, Muzaffarpur, Bihar 844127
                      </span>
                      <span className="text-[11px] font-mono text-[#165A20] block mt-1">
                        GPS Coordinates: 26.06385° N, 85.35050° E
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons (Zero White Glow) */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="https://www.google.com/maps/place/The+Green+Heritage+Resort+and+Banquet/@26.0638548,85.347923,713m/data=!3m2!1e3!4b1!4m9!3m8!1s0x39ed1724a0dfa55b:0x5737c356be2eaddb!5m2!4m1!1i2!8m2!3d26.06385!4d85.3504979!16s%2Fg%2F11kq2x_1j4?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#9FED72] to-[#7CDA4A] text-[#05260A] shadow-[0_4px_14px_rgba(140,230,91,0.38)] hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
                    >
                      <GoogleMapsBrandIcon className="w-4 h-4" />
                      <span>Get Directions on Maps</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => onOpenEnquiry('Site Visit / Venue Tour')}
                      className="px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#0F3B1A] to-[#185226] text-[#FFECCB] border border-[#D4AF37]/45 shadow-[0_4px_14px_rgba(15,59,26,0.35)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                    >
                      Plan a Family Walkthrough
                    </button>
                  </div>
                </div>

                {/* Luxury Interactive Google Map Embed in Physical Bezel Chassis */}
                <div className="lg:col-span-7">
                  <div className="relative p-2.5 sm:p-3.5 bg-[#FFECCB] rounded-[32px] border border-white/80 shadow-[10px_10px_24px_rgba(197,160,114,0.42),-6px_-6px_18px_rgba(255,255,255,0.92)]">
                    <div className="relative h-[340px] sm:h-[440px] rounded-[22px] overflow-hidden shadow-[inset_3px_3px_8px_rgba(0,0,0,0.45),inset_-2px_-2px_6px_rgba(255,255,255,0.25)] border border-[#0F3B1A]/20 bg-[#07190A]">
                      {/* Floating Live Map Pin Indicator */}
                      <div className="absolute top-3.5 left-3.5 z-10 bg-[#071E0B]/92 backdrop-blur-md text-[#FFECCB] px-3.5 py-1.5 rounded-full border border-[#D4AF37]/45 shadow-lg flex items-center gap-2 select-none pointer-events-none">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9FED72] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#9FED72]"></span>
                        </span>
                        <span className="text-[11px] font-semibold tracking-wide">
                          The Green Heritage Resort • Live Map Pin
                        </span>
                      </div>

                      {/* Google Maps iFrame */}
                      <iframe
                        title="The Green Heritage Resort and Banquet Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.665780512613!2d85.347923!3d26.0638548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed1724a0dfa55b%3A0x5737c356be2eaddb!2sThe%20Green%20Heritage%20Resort%20and%20Banquet!5e0!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin"
                        className="w-full h-full border-0 [filter:contrast(1.04)_brightness(0.98)]"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. FREQUENTLY ASKED QUESTIONS SECTION */}
          <section id="faq-section" className="scroll-mt-24">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-9">
                <p className="font-cursive text-3xl sm:text-4xl text-[#D4AF37]">
                  Simple Answers for Your Peace of Mind
                </p>
                <BlurRevealText
                  as="h2"
                  className="font-serif text-3xl sm:text-5xl font-bold text-[#0F3B1A] tracking-tight"
                >
                  Common Questions from Families
                </BlurRevealText>
              </div>

              <div className="space-y-3.5">
                {RESORT_FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={faq.question} className="clay-card overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <span className="font-serif font-bold text-base sm:text-xl text-[#0F3B1A]">
                          {faq.question}
                        </span>
                        <span
                          className={`w-8 h-8 rounded-full clay-btn-soft flex items-center justify-center text-sm font-bold transition-transform duration-300 ${
                            isOpen ? 'rotate-45 text-[#E00000]' : 'text-[#165A20]'
                          }`}
                        >
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 text-sm sm:text-base text-[#2C4631] leading-relaxed border-t border-[#C5A072]/30 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================
          DEDICATED PAGE: WEDDINGS & EVENTS
         ========================================================= */}
      {activePage === 'weddings' && (
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 py-10 space-y-14">
          <div className="clay-card p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p className="font-cursive text-3xl sm:text-4xl text-[#D4AF37]">
                Heartfelt Celebrations in Muzaffarpur
              </p>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F3B1A] tracking-tight">
                Weddings, Receptions &amp; Family Moments
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#2C4631] max-w-2xl leading-relaxed">
                From grand bridal entries beneath our lit arches to open-air floral
                mandaps and chandelier receptions, see how families celebrate their
                most cherished days at The Green Heritage Resort and Banquet.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenEnquiry('Wedding / Reception')}
                className="px-6 py-3 rounded-full text-sm font-semibold clay-btn-coral cursor-pointer"
              >
                Enquire for Wedding Dates
              </button>
              <button
                type="button"
                onClick={() => onNavigate('packages')}
                className="px-5 py-3 rounded-full text-sm font-semibold clay-btn-olive cursor-pointer"
              >
                View Packages
              </button>
            </div>
          </div>

          {/* Remaining Landscape Reels on Weddings Page */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3B1A]">
              More Widescreen Wedding Films
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extraLandscapeReels.map((reel) => (
                <InstagramReelCard key={reel.code} reel={reel} />
              ))}
            </div>
          </div>

          {/* Remaining Portrait Reels on Weddings Page */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3B1A]">
              Bridal Entries, Haldi &amp; Stage Decor Reels
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {extraPortraitReels.map((reel) => (
                <InstagramReelCard key={reel.code} reel={reel} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          DEDICATED PAGE: CELEBRATION & STAY PACKAGES
         ========================================================= */}
      {activePage === 'packages' && (
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 py-10 space-y-12">
          <div className="clay-card p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p className="font-cursive text-3xl sm:text-4xl text-[#D4AF37]">
                Thoughtfully Crafted for Every Ritual
              </p>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F3B1A] tracking-tight">
                Wedding, Event &amp; Stay Packages
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#2C4631] max-w-2xl leading-relaxed">
                Whether you are planning a multi-day wedding with guest room stays or
                an evening reception beneath our chandeliers, our team customizes every
                package around your family&apos;s guest count, dates, and preferences.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenEnquiry('Complete Wedding & Reception Package')}
              className="px-6 py-3.5 rounded-full text-sm font-semibold clay-btn-coral cursor-pointer shrink-0"
            >
              Request Custom Package Quote
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CELEBRATION_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="clay-card p-6 sm:p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.015]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold clay-surface text-[#165A20]">
                      <HeritageBloomIcon className="w-3.5 h-3.5 text-[#FFA97B]" />
                      {pkg.tag}
                    </span>
                    <div className="w-10 h-10 rounded-2xl clay-btn-soft flex items-center justify-center shrink-0">
                      <GiftCustomIcon className="w-5 h-5 text-[#165A20]" />
                    </div>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3B1A]">
                    {pkg.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-[#E00000] mt-1">
                    {pkg.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-[#2C4631] leading-relaxed">
                    {pkg.description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-[#C5A072]/30 pt-4">
                    {pkg.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F3B1A]"
                      >
                        <VerifiedCheckCustomIcon className="w-4 h-4 text-[#0F3B1A] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C5A072]/30 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-[#2C4631]">
                    Tailored to your event date &amp; guest count
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(pkg.enquiryCategory)}
                    className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold clay-btn-coral cursor-pointer"
                  >
                    Enquire for This Package →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================
          DEDICATED PAGE: FULL GALLERY & REELS (NO NUMBERS IN BUTTONS)
         ========================================================= */}
      {activePage === 'gallery' && (
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 py-10 space-y-12">
          <div className="clay-card p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-cursive text-3xl sm:text-4xl text-[#D4AF37]">
                Complete Reel &amp; Photo Collection
              </p>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F3B1A] tracking-tight">
                Wedding Reels &amp; Property Gallery
              </h1>
              <p className="mt-2 text-sm text-[#2C4631] max-w-xl">
                Every clip plays automatically as you scroll and enlarges on hover.
                Tap the speaker button on any video to listen to the celebration audio.
              </p>
            </div>

            <div className="flex items-center gap-2 clay-surface p-1.5 rounded-full">
              {(['all', 'landscape', 'portrait'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setReelFilter(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-all cursor-pointer ${
                    reelFilter === tab
                      ? 'clay-pill-active'
                      : 'text-[#2C4631] hover:text-[#0F3B1A]'
                  }`}
                >
                  {tab === 'all'
                    ? 'All Reels'
                    : tab === 'landscape'
                    ? 'Landscape Reels'
                    : 'Portrait Reels'}
                </button>
              ))}
            </div>
          </div>

          {(reelFilter === 'all' || reelFilter === 'landscape') && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0F3B1A]">
                Landscape Wedding &amp; Venue Reels
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {LANDSCAPE_REELS.map((reel) => (
                  <InstagramReelCard key={reel.code} reel={reel} />
                ))}
              </div>
            </div>
          )}

          {(reelFilter === 'all' || reelFilter === 'portrait') && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#0F3B1A]">
                Portrait Bridal &amp; Celebration Reels
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {PORTRAIT_REELS.map((reel) => (
                  <InstagramReelCard key={reel.code} reel={reel} />
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#0F3B1A]">
              Property &amp; Celebration Photographs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {GALLERY_PHOTOS.map((photo) => (
                <div
                  key={photo.src}
                  className="group relative aspect-[4/3] clay-card p-0 overflow-hidden transition-transform duration-500 hover:scale-[1.04]"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-x-4 bottom-3">
                    <h4 className="font-serif text-[#FFECCB] text-xs sm:text-sm font-semibold truncate">
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
        </div>
      )}

      {/* =========================================================
          DEDICATED PAGE: SPACES, STAY & FACILITIES
         ========================================================= */}
      {activePage === 'facilities' && (
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 py-10 space-y-12">
          <div className="clay-card p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-cursive text-3xl sm:text-4xl text-[#D4AF37]">
                Comfort for Every Guest in Your Family
              </p>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F3B1A] tracking-tight">
                Spaces, Guest Stays &amp; Amenities
              </h1>
              <p className="mt-2 text-sm text-[#2C4631] max-w-2xl leading-relaxed">
                Because every wedding and family gathering is unique, please confirm
                current room counts, package inclusions, and seasonal facilities
                directly with our team when you enquire.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenEnquiry('Room Stay / Facility Inquiry')}
              className="px-6 py-3 rounded-full text-sm font-semibold clay-btn-coral cursor-pointer shrink-0"
            >
              Enquire Now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INITIAL_FACILITY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="clay-card p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl clay-btn-soft flex items-center justify-center mb-4">
                    {item.id === 'swimming-pool' ? (
                      <PoolWavesIcon className="w-5 h-5 text-[#165A20]" />
                    ) : item.id === 'parking' ? (
                      <ParkingCarIcon className="w-5 h-5 text-[#165A20]" />
                    ) : item.id === 'wifi' ? (
                      <WifiSignalIcon className="w-5 h-5 text-[#165A20]" />
                    ) : (
                      <BanquetArchIcon className="w-5 h-5 text-[#165A20]" />
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0F3B1A]">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#165A20]">
                    {item.sourceNote}
                  </p>
                  <p className="mt-3 text-sm text-[#2C4631] leading-relaxed">
                    {item.publicNote}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#C5A072]/30 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(item.name)}
                    className="text-xs font-semibold text-[#E00000] hover:underline cursor-pointer"
                  >
                    Ask About {item.name} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================
          DEDICATED PAGE: LOCATION & CONTACT (NO CALL OR WHATSAPP ICONS ON MAP)
         ========================================================= */}
      {activePage === 'contact' && (
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 py-10 space-y-12">
          <div className="clay-card p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <p className="font-cursive text-3xl sm:text-4xl text-[#D4AF37]">
                  We Would Love to Welcome You
                </p>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F3B1A] tracking-tight">
                  Location &amp; Direct Connect
                </h1>
                <p className="text-sm text-[#2C4631] leading-relaxed">
                  Visit The Green Heritage Resort and Banquet at Bakarpur,
                  Gobarsahi–Sakri Road, Muzaffarpur, Bihar 844127, or open Google
                  Maps and our enquiry form below to plan your family visit.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://www.google.com/maps/place/The+Green+Heritage+Resort+and+Banquet/@26.0638548,85.347923,713m/data=!3m2!1e3!4b1!4m9!3m8!1s0x39ed1724a0dfa55b:0x5737c356be2eaddb!5m2!4m1!1i2!8m2!3d26.06385!4d85.3504979!16s%2Fg%2F11kq2x_1j4?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full text-sm font-semibold clay-btn-olive inline-flex items-center gap-2"
                  >
                    <GoogleMapsBrandIcon className="w-4 h-4" />
                    <span>Get Directions on Maps</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry('Wedding / Reception')}
                    className="px-6 py-3 rounded-full text-sm font-semibold clay-btn-coral cursor-pointer"
                  >
                    Open Enquiry Form
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {SUPPLIED_CHANNELS.map((ch) => (
                    <a
                      key={ch.id}
                      href={ch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="clay-surface p-3.5 rounded-2xl hover:scale-[1.02] transition-transform block"
                    >
                      <span className="font-serif font-bold text-sm text-[#0F3B1A] block">
                        {ch.platform}
                      </span>
                      <span className="text-xs text-[#165A20] block truncate mt-0.5">
                        {ch.handleOrLabel}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative p-2.5 sm:p-3.5 bg-[#FFECCB] rounded-[32px] border border-white/80 shadow-[10px_10px_24px_rgba(197,160,114,0.42),-6px_-6px_18px_rgba(255,255,255,0.92)]">
                  <div className="relative h-[380px] sm:h-[440px] rounded-[22px] overflow-hidden shadow-[inset_3px_3px_8px_rgba(0,0,0,0.45),inset_-2px_-2px_6px_rgba(255,255,255,0.25)] border border-[#0F3B1A]/20 bg-[#07190A]">
                    <div className="absolute top-3.5 left-3.5 z-10 bg-[#071E0B]/92 backdrop-blur-md text-[#FFECCB] px-3.5 py-1.5 rounded-full border border-[#D4AF37]/45 shadow-lg flex items-center gap-2 select-none pointer-events-none">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9FED72] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#9FED72]"></span>
                      </span>
                      <span className="text-[11px] font-semibold tracking-wide">
                        The Green Heritage Resort • Live Map Pin
                      </span>
                    </div>
                    <iframe
                      title="The Green Heritage Resort and Banquet Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.665780512613!2d85.347923!3d26.0638548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed1724a0dfa55b%3A0x5737c356be2eaddb!2sThe%20Green%20Heritage%20Resort%20and%20Banquet!5e0!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin"
                      className="w-full h-full border-0 [filter:contrast(1.04)_brightness(0.98)]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          DEDICATED FOOTER-ONLY LEGAL PAGES (TERMS / PRIVACY / COOKIES)
         ========================================================= */}
      {(activePage === 'terms' ||
        activePage === 'privacy' ||
        activePage === 'cookies') && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="clay-card p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between gap-4 border-b border-[#C5A072]/30 pb-5">
              <div>
                <p className="font-cursive text-3xl text-[#D4AF37]">
                  The Green Heritage Resort and Banquet
                </p>
                <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#0F3B1A]">
                  {activePage === 'terms'
                    ? 'Terms & Conditions'
                    : activePage === 'privacy'
                    ? 'Privacy Policy'
                    : 'Cookies Policy'}
                </h1>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="px-4 py-2 rounded-full text-xs font-semibold clay-btn-soft cursor-pointer"
              >
                ← Back to Home
              </button>
            </div>

            {activePage === 'terms' && (
              <div className="space-y-4 text-sm text-[#2C4631] leading-relaxed">
                <p>
                  Welcome to the website of{' '}
                  <strong>The Green Heritage Resort and Banquet</strong> (Bakarpur,
                  Gobarsahi–Sakri Road, Muzaffarpur, Bihar 844127). By using this
                  website, you agree to these simple terms:
                </p>
                <h3 className="font-serif font-bold text-lg text-[#0F3B1A]">
                  1. Enquiries Are Requests Only
                </h3>
                <p>
                  Sending an enquiry through our form or WhatsApp is an availability
                  request, not a confirmed booking. A date is reserved only after our
                  team confirms availability in writing and completes the booking
                  agreement with your family.
                </p>
                <h3 className="font-serif font-bold text-lg text-[#0F3B1A]">
                  2. Packages, Rooms &amp; Event Rules
                </h3>
                <p>
                  Room tariffs, wedding packages, catering menus, decoration rules,
                  outside vendor permissions, and cancellation terms depend on your
                  event date and guest count. Please confirm all inclusions directly
                  with the resort before making a payment.
                </p>
              </div>
            )}

            {activePage === 'privacy' && (
              <div className="space-y-4 text-sm text-[#2C4631] leading-relaxed">
                <p>
                  <strong>The Green Heritage Resort and Banquet</strong> respects your
                  family&apos;s privacy.
                </p>
                <h3 className="font-serif font-bold text-lg text-[#0F3B1A]">
                  1. Details You Share
                </h3>
                <p>
                  When you fill out the Enquire Now form, your name, event date, and
                  guest count are formatted so you can send them directly to our
                  official WhatsApp desk.
                </p>
                <h3 className="font-serif font-bold text-lg text-[#0F3B1A]">
                  2. How We Use Your Information
                </h3>
                <p>
                  We use your details only to check venue dates, answer your
                  questions, and help plan your visit. We never sell your contact
                  information.
                </p>
              </div>
            )}

            {activePage === 'cookies' && (
              <div className="space-y-4 text-sm text-[#2C4631] leading-relaxed">
                <p>
                  This Cookies Policy explains how{' '}
                  <strong>The Green Heritage Resort and Banquet</strong> uses browser
                  storage and cookies on this website.
                </p>
                <h3 className="font-serif font-bold text-lg text-[#0F3B1A]">
                  1. Essential Preferences
                </h3>
                <p>
                  Essential storage remembers your cookie consent choice so the banner
                  does not appear again on every visit.
                </p>
                <h3 className="font-serif font-bold text-lg text-[#0F3B1A]">
                  2. Maps &amp; Video Playback
                </h3>
                <p>
                  Interactive Google Maps embeds and video players may use standard
                  functional cookies to load smoothly on your device.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================
          ENQUIRE NOW CLAYMORPHIC FORM PREVIEW MODAL
          (Navbar is hidden while this modal is open; redirects to WhatsApp)
         ========================================================= */}
      {isEnquiryModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-modal-title"
          className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={onCloseEnquiry}
        >
          <div
            className="relative w-full max-w-lg clay-card p-6 sm:p-8 max-h-[92dvh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="font-cursive text-3xl text-[#D4AF37] leading-none">
                  Let Us Help Plan Your Celebration
                </p>
                <h3
                  id="enquiry-modal-title"
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3B1A] mt-1"
                >
                  Wedding, Package &amp; Stay Enquiry
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseEnquiry}
                aria-label="Close enquiry modal"
                className="w-9 h-9 rounded-full clay-btn-soft flex items-center justify-center text-sm font-bold text-[#0F3B1A] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleEnquirySubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2C4631] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 text-sm clay-input"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#2C4631] mb-1.5">
                    Celebration / Package Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-4 py-3 text-sm clay-input"
                  >
                    <option value="Wedding / Reception">Wedding / Reception</option>
                    <option value="Complete Wedding & Reception Package">
                      Complete Wedding &amp; Reception Package
                    </option>
                    <option value="Haldi, Mehndi & Sangeet Package">
                      Haldi, Mehndi &amp; Sangeet Package
                    </option>
                    <option value="Wedding Family & Guest Stay Package">
                      Wedding Family &amp; Guest Stay Package
                    </option>
                    <option value="Engagement / Anniversary Package">
                      Engagement / Anniversary Package
                    </option>
                    <option value="Room Stay Enquiry">Room Stay Enquiry</option>
                    <option value="Site Visit / Venue Tour">
                      Site Visit / Venue Tour
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2C4631] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-3 text-sm clay-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#2C4631] mb-1.5">
                    Approximate Guests
                  </label>
                  <input
                    type="text"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    placeholder="e.g. 300 - 500 guests"
                    className="w-full px-4 py-3 text-sm clay-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2C4631] mb-1.5">
                    Preferred Space
                  </label>
                  <select
                    value={venuePreference}
                    onChange={(e) => setVenuePreference(e.target.value)}
                    className="w-full px-4 py-3 text-sm clay-input"
                  >
                    <option value="Banquet Hall + Outdoor Lawn">
                      Banquet Hall + Outdoor Lawn
                    </option>
                    <option value="Outdoor Celebration Lawn">
                      Outdoor Celebration Lawn
                    </option>
                    <option value="Indoor Banquet Hall">Indoor Banquet Hall</option>
                    <option value="Guest Rooms / Family Stay">
                      Guest Rooms / Family Stay
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2C4631] mb-1.5">
                  Anything Else You Would Like Us to Know? (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share catering, floral stage decor, or room stay questions..."
                  className="w-full px-4 py-2.5 text-sm clay-input resize-none"
                />
              </div>

              <div className="clay-surface rounded-2xl p-3 text-xs text-[#2C4631] flex items-center justify-between gap-3">
                <span>
                  Sending opens WhatsApp with your details ready to send to our team.
                </span>
                <a
                  href="tel:+919234052600"
                  aria-label="Call Resort directly"
                  title="Call Resort"
                  className="w-9 h-9 rounded-full clay-btn-soft flex items-center justify-center shrink-0"
                >
                  <PhoneCallCustomIcon className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-1 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onCloseEnquiry}
                  className="px-4 py-2.5 rounded-full text-xs font-semibold clay-btn-soft cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold clay-btn-coral inline-flex items-center gap-2 cursor-pointer"
                >
                  <WhatsAppCustomIcon className="w-4 h-4" />
                  <span>Send Enquiry on WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================
          DARK CLAYMORPHIC VIDEO FOOTER
          - Rotated Landscape Video (DWrOzj5gYgT) playing muted & seamlessly on loop, deep dark yet clearly visible
          - Big Logo directly on dark surface (NO rectangular box)
          - Official Redirecting Icons: Instagram, Facebook, Google Maps, Tripadvisor, Call, WhatsApp
          - Cleanly aligned columns and bottom credits with ACCustomLabs logo
         ========================================================= */}
      <footer className="relative overflow-hidden text-[#FFECCB] mt-16 pb-20 sm:pb-10 border-t border-[#C5A072]/30 bg-[#0A1C0D]">
        {/* Rotated Landscape Footer Background Video (DWrOzj5gYgT) Muted & Looping Seamlessly */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#071609]">
          <video
            ref={footerVideoRef}
            src={
              isMobile && FOOTER_BACKGROUND_REEL.mobileVideoSrc
                ? FOOTER_BACKGROUND_REEL.mobileVideoSrc
                : FOOTER_BACKGROUND_REEL.videoSrc
            }
            poster={FOOTER_BACKGROUND_REEL.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play().catch(() => {});
            }}
            className="w-full h-full object-cover object-center [backface-visibility:hidden]"
          />
          {/* Deep Dark Overlay: Rich and dark for crisp typography, keeping wedding lights & video motion clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1C0D]/92 via-[#0D2411]/84 to-[#061208]/96" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#9FED72]/20 items-start">
            {/* Brand Column: Big Logo Directly on Dark Surface (NO Rectangular Box) */}
            <div className="md:col-span-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
              <img
                src="/Logo.png"
                alt="The Green Heritage Resort and Banquet"
                className="w-40 sm:w-48 h-auto object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.65)] shrink-0"
              />
              <div className="space-y-1.5">
                <p className="font-cursive text-3xl sm:text-4xl text-[#D4AF37] leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                  Where Families Celebrate Together
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFECCB] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                  The Green Heritage Resort and Banquet
                </h3>
                <p className="text-xs sm:text-sm text-[#FFECCB]/90 max-w-md leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] pt-1">
                  Bakarpur, Gobarsahi–Sakri Road, Muzaffarpur, Bihar 844127. Reach out
                  to our team to plan your wedding, reception, or family stay.
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 text-xs sm:text-sm text-[#FFECCB]/90">
                  <MailCustomIcon className="w-4 h-4 text-[#FFA97B] shrink-0" />
                  <a
                    href="mailto:ajay888277@gmail.com"
                    className="hover:text-[#FFA97B] underline underline-offset-4 decoration-[#FFA97B]/50 transition-colors"
                  >
                    ajay888277@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Explore Links (Includes Packages, No Numbers in Labels) */}
            <div className="md:col-span-3 text-center sm:text-left space-y-3">
              <h4 className="font-serif font-bold text-lg text-[#FFECCB] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Explore Venue
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#FFECCB]/90">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('home')}
                    className="hover:text-[#FFA97B] transition-colors cursor-pointer"
                  >
                    Home Showcase
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('weddings')}
                    className="hover:text-[#FFA97B] transition-colors cursor-pointer"
                  >
                    Weddings &amp; Receptions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('packages')}
                    className="hover:text-[#FFA97B] transition-colors cursor-pointer"
                  >
                    Celebration &amp; Stay Packages
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('gallery')}
                    className="hover:text-[#FFA97B] transition-colors cursor-pointer"
                  >
                    Full Reel &amp; Photo Gallery
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('facilities')}
                    className="hover:text-[#FFA97B] transition-colors cursor-pointer"
                  >
                    Spaces, Stays &amp; Amenities
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="hover:text-[#FFA97B] transition-colors cursor-pointer"
                  >
                    Location &amp; Map
                  </button>
                </li>
              </ul>
            </div>

            {/* Direct Connect & Official Redirecting Site Icons (Instagram, Facebook, Google Maps, Tripadvisor, Call, WhatsApp) */}
            <div className="md:col-span-3 flex flex-col items-center sm:items-start space-y-4">
              <h4 className="font-serif font-bold text-lg text-[#FFECCB] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Connect &amp; Follow
              </h4>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <a
                  href="https://www.instagram.com/thegreenheritagemuz/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Official Instagram"
                  className="w-10 h-10 rounded-full clay-dark-pill flex items-center justify-center transition-all"
                >
                  <InstagramBrandIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.facebook.com/thegreenheritagemuz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Official Facebook"
                  className="w-10 h-10 rounded-full clay-dark-pill flex items-center justify-center transition-all"
                >
                  <FacebookBrandIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.google.com/maps/place/The+Green+Heritage+Resort+and+Banquet/@26.0638548,85.347923,713m/data=!3m2!1e3!4b1!4m9!3m8!1s0x39ed1724a0dfa55b:0x5737c356be2eaddb!5m2!4m1!1i2!8m2!3d26.06385!4d85.3504979!16s%2Fg%2F11kq2x_1j4?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps"
                  title="Google Maps Location"
                  className="w-10 h-10 rounded-full clay-dark-pill flex items-center justify-center transition-all"
                >
                  <GoogleMapsBrandIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.tripadvisor.in/Hotel_Review-g26727268-d26724910-Reviews-The_Green_Heritage_Resort_and_Banquet-Bakarpur_Muzaffarpur_District_Bihar.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tripadvisor"
                  title="Tripadvisor Reviews"
                  className="w-10 h-10 rounded-full clay-dark-pill flex items-center justify-center transition-all"
                >
                  <TripadvisorBrandIcon className="w-4 h-4" />
                </a>

                <a
                  href="tel:+919234052600"
                  aria-label="Call Resort"
                  title="Call Resort"
                  className="w-10 h-10 rounded-full clay-dark-pill flex items-center justify-center transition-all"
                >
                  <PhoneCallCustomIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/919234052600?text=Hello%20The%20Green%20Heritage%20Resort%20and%20Banquet%2C%20I%20would%20like%20to%20enquire%20about%20dates."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Resort"
                  title="WhatsApp Resort"
                  className="w-10 h-10 rounded-full clay-dark-pill flex items-center justify-center transition-all"
                >
                  <WhatsAppCustomIcon className="w-4 h-4" />
                </a>

                <a
                  href="mailto:ajay888277@gmail.com"
                  aria-label="Email Resort (ajay888277@gmail.com)"
                  title="Email: ajay888277@gmail.com"
                  className="w-10 h-10 rounded-full clay-dark-pill flex items-center justify-center transition-all text-[#FFECCB] hover:text-[#FFA97B]"
                >
                  <MailCustomIcon className="w-4 h-4" />
                </a>

                {onOpenShare && (
                  <button
                    type="button"
                    onClick={onOpenShare}
                    aria-label="Share Resort & View Link Preview"
                    title="Share & Link Preview"
                    className="w-10 h-10 rounded-full clay-dark-pill flex items-center justify-center transition-all text-[#FFECCB] hover:text-[#97A87A] cursor-pointer"
                  >
                    <ShareCustomIcon className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry('Wedding / Reception')}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold clay-btn-coral cursor-pointer"
                >
                  Enquire for Dates
                </button>

                {onOpenShare && (
                  <button
                    type="button"
                    onClick={onOpenShare}
                    className="px-4 py-2 rounded-full clay-white-header text-[#0F3B1A] text-xs font-semibold flex items-center gap-1.5 hover:text-[#3B543F] cursor-pointer transition-all"
                  >
                    <ShareCustomIcon className="w-3.5 h-3.5" />
                    <span>Link Preview</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* LAST FOOTER BAR: Centered All Rights Reserved, Baseline-Aligned ACCustomLabs Logo, and Terms/Privacy/Cookies Links */}
          <div className="pt-8 flex flex-col items-center justify-center text-center gap-3.5 text-xs sm:text-sm text-[#FFECCB]/90">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-[#FFECCB]/95">
              <button
                type="button"
                onClick={() => onNavigate('terms')}
                className="hover:text-[#FFA97B] underline underline-offset-4 cursor-pointer transition-colors"
              >
                Terms &amp; Conditions
              </button>
              <span aria-hidden="true" className="text-[#A8BBA3]">
                ·
              </span>
              <button
                type="button"
                onClick={() => onNavigate('privacy')}
                className="hover:text-[#FFA97B] underline underline-offset-4 cursor-pointer transition-colors"
              >
                Privacy Policy
              </button>
              <span aria-hidden="true" className="text-[#A8BBA3]">
                ·
              </span>
              <button
                type="button"
                onClick={() => onNavigate('cookies')}
                className="hover:text-[#FFA97B] underline underline-offset-4 cursor-pointer transition-colors"
              >
                Cookies Policy
              </button>
            </div>

            <p className="text-center drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
              © {new Date().getFullYear()} The Green Heritage Resort and Banquet. All
              rights reserved.
            </p>

            <div className="inline-flex items-center justify-center gap-2 leading-none drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
              <span className="inline-block">Designed and developed by</span>
              <img
                src="/ac-custom-labs.png"
                alt="ACCustomLabs"
                className="h-[1.45em] w-auto object-contain inline-block align-middle -translate-y-[1px]"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
