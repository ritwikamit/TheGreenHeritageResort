import type { Metadata } from 'next';
import {
  Plus_Jakarta_Sans,
  Cormorant_Garamond,
  Parisienne,
} from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const parisienne = Parisienne({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cursive',
  display: 'swap',
});

const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://thegreenheritageresort.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title:
    'The Green Heritage Resort and Banquet | Weddings, Lawn & Stays in Muzaffarpur',
  description:
    'Celebrate weddings, receptions, family functions, and serene stays at The Green Heritage Resort and Banquet in Bakarpur, Gobarsahi–Sakri Road, Muzaffarpur, Bihar 844127.',
  keywords: [
    'The Green Heritage Resort and Banquet',
    'Wedding resort in Muzaffarpur',
    'Banquet hall in Muzaffarpur Bihar',
    'Marriage lawn Bakarpur Gobarsahi Sakri Road',
    'Best wedding venue Muzaffarpur',
    'Resort and hotel in Muzaffarpur',
  ],
  alternates: {
    canonical: siteBaseUrl,
  },
  icons: {
    icon: '/Logo.png',
    apple: '/Logo.png',
  },
  openGraph: {
    title:
      'The Green Heritage Resort and Banquet — Weddings & Celebrations in Muzaffarpur',
    description:
      'Where families come together for sacred vows, joyful receptions, and peaceful stays in Bakarpur, Muzaffarpur, Bihar.',
    url: siteBaseUrl,
    type: 'website',
    siteName: 'The Green Heritage Resort and Banquet',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'The Green Heritage Resort and Banquet — Weddings, Lawn & Stays in Muzaffarpur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'The Green Heritage Resort and Banquet | Weddings & Banquet in Muzaffarpur',
    description:
      'Explore real wedding reels, celebration lawns, banquet halls, and directions to The Green Heritage Resort and Banquet in Muzaffarpur, Bihar.',
    images: ['/og-image.jpg'],
  },
  other: {
    'geo.region': 'IN-BR',
    'geo.placename': 'Muzaffarpur, Bihar',
    'geo.position': '26.06385;85.3504979',
    ICBM: '26.06385, 85.3504979',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EventVenue', 'LodgingBusiness', 'LocalBusiness'],
      '@id': 'https://thegreenheritageresort.in/#venue',
      name: 'The Green Heritage Resort and Banquet',
      alternateName: 'The Green Heritage Resort & Banquet',
      description:
        'Wedding resort, indoor chandelier banquet hall, outdoor celebration lawn, and family stay property in Bakarpur, Gobarsahi–Sakri Road, Muzaffarpur, Bihar 844127.',
      url: 'https://thegreenheritageresort.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bakarpur, Gobarsahi–Sakri Road',
        addressLocality: 'Muzaffarpur',
        addressRegion: 'Bihar',
        postalCode: '844127',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 26.06385,
        longitude: 85.3504979,
      },
      hasMap:
        'https://www.google.com/maps/place/The+Green+Heritage+Resort+and+Banquet/@26.06385,85.3504979,17z/',
      sameAs: [
        'https://www.instagram.com/thegreenheritagemuz/?hl=en',
        'https://www.facebook.com/thegreenheritagemuz/',
        'https://www.tripadvisor.in/Hotel_Review-g26727268-d26724910-Reviews-The_Green_Heritage+Resort_and_Banquet-Bakarpur_Muzaffarpur_District_Bihar.html',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://thegreenheritageresort.in/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where is The Green Heritage Resort and Banquet located?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Green Heritage Resort and Banquet is located in the Bakarpur, Gobarsahi–Sakri Road area of Muzaffarpur, Bihar 844127 (GPS coordinates 26.06385, 85.3504979).',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I enquire about wedding dates or banquet availability?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Click Enquire Now on the website to select your celebration type, preferred date, and guest count, and send your request directly to the venue desk via WhatsApp or phone call.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is an online enquiry a confirmed booking?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. An online enquiry is treated as an availability request only. Bookings are confirmed after the resort verifies your date and confirms its official booking terms.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${cormorant.variable} ${parisienne.variable} overflow-x-clip [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
    >
      <head>
        {/* Dynamic & Absolute Open Graph / Social Link Preview Meta Tags */}
        <meta property="og:image" content={`${siteBaseUrl}/og-image.jpg`} />
        <meta property="og:image:secure_url" content={`${siteBaseUrl}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="The Green Heritage Resort and Banquet — Weddings, Lawn & Stays in Muzaffarpur" />
        <meta name="twitter:image" content={`${siteBaseUrl}/og-image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />

        <style
          dangerouslySetInnerHTML={{
            __html: `
              html {
                font-family: var(--font-sans), system-ui, sans-serif;
              }
              html, body, * {
                scrollbar-width: none !important;
                -ms-overflow-style: none !important;
              }
              html::-webkit-scrollbar, body::-webkit-scrollbar, *::-webkit-scrollbar {
                display: none !important;
                width: 0 !important;
                height: 0 !important;
              }
              /* =========================================================
                 HERITAGE NEUMORPHIC DESIGN SYSTEM (SOFT UI)
                 Palette:
                   • Base Canvas: #FFECCB (Warm Cream Ivory)
                   • Accent 1: #E00000 (Vibrant Crimson Red)
                   • Accent 2: #FFA97B (Warm Peach / Coral)
                   • Accent 3: #9FED72 (Lush Foliage Green)
                   • Logo Green: #0F3B1A (Deep Royal Forest Green)
                   • Logo Gold: #D4AF37 (Royal Heritage Gold)
                 ========================================================= */

              /* Neumorphic Extruded Card (Convex Elevation on #FFECCB surface) */
              .clay-card, .clay-card-deep, .neu-card {
                background: #FFECCB;
                border-radius: 26px;
                border: 1px solid rgba(255, 255, 255, 0.75);
                box-shadow:
                  9px 9px 20px rgba(197, 160, 114, 0.40),
                  -8px -8px 18px rgba(255, 255, 255, 0.95);
                transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.28s ease;
              }
              .clay-card:hover, .neu-card:hover {
                box-shadow:
                  12px 12px 26px rgba(197, 160, 114, 0.48),
                  -9px -9px 22px rgba(255, 255, 255, 0.98);
              }

              /* Neumorphic Header & Floating Bar (Refined: Zero Harsh White Glow) */
              .clay-white-header, .neu-header {
                background: rgba(255, 236, 203, 0.92);
                backdrop-filter: blur(14px) !important;
                -webkit-backdrop-filter: blur(14px) !important;
                border: 1px solid rgba(197, 160, 114, 0.35);
                box-shadow:
                  0 8px 22px rgba(197, 160, 114, 0.32),
                  0 2px 6px rgba(0, 0, 0, 0.05);
              }

              /* Neumorphic Debossed / Inset Well (Surfaces, Containers, Wells) */
              .clay-surface, .neu-surface {
                background: #F8E5C3;
                border-radius: 20px;
                border: 1px solid rgba(255, 255, 255, 0.60);
                box-shadow:
                  inset 4px 4px 9px rgba(197, 160, 114, 0.45),
                  inset -4px -4px 9px rgba(255, 255, 255, 0.92);
              }

              /* Primary Neumorphic Button: Vibrant Crimson Red (#E00000) - No White Glow */
              .clay-btn-coral, .neu-btn-crimson {
                background: linear-gradient(145deg, #FF1A1A, #C80000);
                color: #FFFFFF !important;
                border: 1px solid rgba(255, 200, 200, 0.30);
                box-shadow:
                  0 6px 16px rgba(224, 0, 0, 0.36),
                  0 2px 4px rgba(0, 0, 0, 0.12);
                transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.22s ease;
              }
              .clay-btn-coral:hover, .neu-btn-crimson:hover {
                background: linear-gradient(145deg, #FF3333, #B80000);
                color: #FFFFFF !important;
                transform: translateY(-2px);
                box-shadow:
                  0 8px 22px rgba(224, 0, 0, 0.46),
                  0 3px 6px rgba(0, 0, 0, 0.18);
              }
              .clay-btn-coral:active, .neu-btn-crimson:active {
                transform: translateY(1px);
                box-shadow:
                  inset 3px 3px 7px rgba(120, 0, 0, 0.60),
                  inset -2px -2px 5px rgba(255, 120, 120, 0.30);
              }

              /* Secondary Neumorphic Button: Lush Foliage Green (#9FED72) - No White Glow */
              .clay-btn-olive, .neu-btn-foliage {
                background: linear-gradient(145deg, #B2F588, #8CE65B);
                color: #05260A !important;
                border: 1px solid rgba(255, 255, 255, 0.40);
                box-shadow:
                  0 6px 16px rgba(140, 230, 91, 0.38),
                  0 2px 4px rgba(0, 0, 0, 0.10);
                transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.22s ease;
              }
              .clay-btn-olive:hover, .neu-btn-foliage:hover {
                background: linear-gradient(145deg, #BFF89A, #7CDA4A);
                color: #021C06 !important;
                transform: translateY(-2px);
                box-shadow:
                  0 8px 20px rgba(140, 230, 91, 0.48),
                  0 3px 6px rgba(0, 0, 0, 0.16);
              }
              .clay-btn-olive:active, .neu-btn-foliage:active {
                transform: translateY(1px);
                box-shadow:
                  inset 3px 3px 7px rgba(50, 130, 20, 0.50),
                  inset -2px -2px 5px rgba(255, 255, 255, 0.40);
              }

              /* Soft Cream Neumorphic Button (Secondary / Cancel / Outline) - No White Glow */
              .clay-btn-soft, .neu-btn-soft {
                background: #FFECCB;
                color: #0F3B1A !important;
                border: 1px solid rgba(197, 160, 114, 0.45);
                box-shadow:
                  0 4px 12px rgba(197, 160, 114, 0.35),
                  0 2px 4px rgba(0, 0, 0, 0.08);
                transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.22s ease;
              }
              .clay-btn-soft:hover, .neu-btn-soft:hover {
                background: linear-gradient(145deg, #FFF5E3, #F6DFC1);
                color: #0F3B1A !important;
                transform: translateY(-1px);
                box-shadow:
                  0 6px 16px rgba(197, 160, 114, 0.45),
                  0 3px 6px rgba(0, 0, 0, 0.12);
              }
              .clay-btn-soft:active, .neu-btn-soft:active {
                transform: translateY(1px);
                box-shadow:
                  inset 3px 3px 7px rgba(197, 160, 114, 0.45),
                  inset -2px -2px 5px rgba(255, 255, 255, 0.60);
              }

              /* Neumorphic Active Debossed Pill */
              .clay-pill-active, .neu-pill-active {
                background: #F7E3BD;
                color: #0F3B1A !important;
                font-weight: 700;
                border: 1px solid rgba(15, 59, 26, 0.28);
                box-shadow:
                  inset 3px 3px 6px rgba(197, 160, 114, 0.45),
                  inset -2px -2px 5px rgba(255, 255, 255, 0.65);
              }

              /* Dedicated Hero CTA Buttons: Built for dark video backgrounds (Zero White Glow) */
              .hero-btn-primary {
                background: linear-gradient(145deg, #FF1A1A, #C80000);
                color: #FFFFFF !important;
                border: 1px solid rgba(255, 200, 200, 0.25);
                box-shadow:
                  0 10px 24px rgba(0, 0, 0, 0.60),
                  0 3px 8px rgba(200, 0, 0, 0.40);
                transition: transform 0.22s ease, box-shadow 0.22s ease;
              }
              .hero-btn-primary:hover {
                background: linear-gradient(145deg, #FF3333, #B80000);
                transform: translateY(-2px);
                box-shadow:
                  0 14px 28px rgba(0, 0, 0, 0.70),
                  0 4px 12px rgba(200, 0, 0, 0.50);
              }
              .hero-btn-primary:active {
                transform: translateY(1px);
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.50);
              }

              .hero-btn-secondary {
                background: linear-gradient(145deg, #B2F588, #7CDA4A);
                color: #05260A !important;
                border: 1px solid rgba(255, 255, 255, 0.30);
                box-shadow:
                  0 10px 24px rgba(0, 0, 0, 0.60),
                  0 3px 8px rgba(124, 218, 74, 0.35);
                transition: transform 0.22s ease, box-shadow 0.22s ease;
              }
              .hero-btn-secondary:hover {
                background: linear-gradient(145deg, #BFF89A, #6ECF3B);
                transform: translateY(-2px);
                box-shadow:
                  0 14px 28px rgba(0, 0, 0, 0.70),
                  0 4px 12px rgba(124, 218, 74, 0.45);
              }
              .hero-btn-secondary:active {
                transform: translateY(1px);
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.50);
              }

              /* Smartphone Bottom Quick Bar (Zero White Glow) */
              .neu-bottom-nav {
                background: rgba(255, 236, 203, 0.96);
                backdrop-filter: blur(16px) !important;
                -webkit-backdrop-filter: blur(16px) !important;
                border: 1px solid rgba(197, 160, 114, 0.40);
                box-shadow:
                  0 12px 30px rgba(15, 59, 26, 0.20),
                  0 3px 10px rgba(0, 0, 0, 0.10);
              }
              .neu-bottom-enquire {
                background: linear-gradient(145deg, #0F3B1A, #185226);
                color: #FFECCB !important;
                border: 1px solid rgba(212, 175, 55, 0.45);
                box-shadow: 0 4px 12px rgba(15, 59, 26, 0.35);
                transition: transform 0.2s ease, box-shadow 0.2s ease;
              }
              .neu-bottom-enquire:hover {
                background: linear-gradient(145deg, #134B21, #1E6630);
                color: #FFFFFF !important;
              }
              .neu-bottom-enquire:active {
                transform: translateY(1px);
                box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.6);
              }

              /* Neumorphic Header Specific Non-Red Styling - No White Glow */
              .neu-header-pill-active {
                background: #F4DEC0;
                color: #0F3B1A !important;
                font-weight: 700;
                border: 1px solid rgba(15, 59, 26, 0.28);
                box-shadow:
                  inset 3px 3px 6px rgba(197, 160, 114, 0.50),
                  inset -2px -2px 5px rgba(255, 255, 255, 0.65);
              }
              .neu-btn-header-call {
                background: linear-gradient(145deg, #FFB48E, #F29562);
                color: #0A2B09 !important;
                border: 1px solid rgba(255, 255, 255, 0.50);
                box-shadow:
                  0 4px 12px rgba(242, 149, 98, 0.38),
                  0 2px 4px rgba(0, 0, 0, 0.10);
                transition: transform 0.22s ease, box-shadow 0.22s ease;
              }
              .neu-btn-header-call:hover {
                transform: translateY(-2px);
                box-shadow:
                  0 6px 16px rgba(242, 149, 98, 0.48),
                  0 3px 6px rgba(0, 0, 0, 0.14);
              }
              .neu-btn-header-call:active {
                transform: translateY(1px);
                box-shadow:
                  inset 2px 2px 5px rgba(180, 90, 40, 0.45),
                  inset -1px -1px 3px rgba(255, 255, 255, 0.5);
              }
              .neu-btn-header-enquire {
                background: linear-gradient(145deg, #0F3B1A, #185226);
                color: #FFECCB !important;
                border: 1px solid rgba(212, 175, 55, 0.45);
                box-shadow:
                  0 5px 15px rgba(15, 59, 26, 0.35),
                  0 2px 4px rgba(0, 0, 0, 0.12);
                transition: transform 0.22s ease, box-shadow 0.22s ease;
              }
              .neu-btn-header-enquire:hover {
                background: linear-gradient(145deg, #134B21, #1E6630);
                color: #FFFFFF !important;
                transform: translateY(-2px);
                box-shadow:
                  0 7px 18px rgba(15, 59, 26, 0.45),
                  0 3px 6px rgba(0, 0, 0, 0.16);
              }
              .neu-btn-header-enquire:active {
                transform: translateY(1px);
                box-shadow:
                  inset 3px 3px 6px rgba(5, 25, 10, 0.65),
                  inset -1px -1px 3px rgba(255, 255, 255, 0.20);
              }

              /* Neumorphic Peach Accent Pill / Badge (#FFA97B) */
              .neu-badge-peach {
                background: linear-gradient(145deg, #FFBA94, #F29562);
                color: #0A2B09;
                border: 1px solid rgba(255, 255, 255, 0.60);
                box-shadow:
                  0 4px 10px rgba(242, 149, 98, 0.35),
                  0 2px 4px rgba(0, 0, 0, 0.08);
              }

              /* Neumorphic Inset Input Well */
              .clay-input, .neu-input {
                background: #F8E5C3;
                color: #0F3B1A;
                border-radius: 18px;
                border: 1px solid rgba(217, 185, 138, 0.45);
                box-shadow:
                  inset 3px 3px 7px rgba(197, 160, 114, 0.42),
                  inset -2px -2px 6px rgba(255, 255, 255, 0.70);
                transition: border-color 0.2s ease, box-shadow 0.2s ease;
              }
              .clay-input:focus, .neu-input:focus {
                outline: none;
                border-color: #0F3B1A;
                box-shadow:
                  inset 3px 3px 7px rgba(197, 160, 114, 0.42),
                  inset -2px -2px 6px rgba(255, 255, 255, 0.70),
                  0 0 0 3px rgba(15, 59, 26, 0.18);
              }

              /* Neumorphic Scroll-Up Button - Zero White Glow */
              .clay-scroll-up-btn, .neu-scroll-btn {
                background: linear-gradient(145deg, #0F3B1A, #185226);
                color: #FFECCB !important;
                border: 1px solid rgba(212, 175, 55, 0.40);
                box-shadow:
                  0 8px 22px rgba(15, 59, 26, 0.45),
                  0 2px 6px rgba(0, 0, 0, 0.25);
                transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.22s ease;
              }
              .clay-scroll-up-btn:hover, .neu-scroll-btn:hover {
                background: linear-gradient(145deg, #134B21, #1E6630);
                transform: translateY(-2px) scale(1.05);
                box-shadow:
                  0 12px 28px rgba(15, 59, 26, 0.55),
                  0 4px 10px rgba(0, 0, 0, 0.30);
              }

              /* Dark Neumorphic Elements: Deep Forest Green (#07190A / #0D2611 family) */
              .clay-dark-bar, .neu-dark-bar {
                background: linear-gradient(145deg, #0D2611, #061608);
                border-top: 1px solid rgba(159, 237, 114, 0.25);
                border-bottom: 1px solid rgba(159, 237, 114, 0.25);
                box-shadow:
                  0 10px 24px rgba(0, 0, 0, 0.65),
                  inset 0 2px 4px rgba(159, 237, 114, 0.15),
                  inset 0 -2px 6px rgba(0, 0, 0, 0.70);
              }
              .clay-dark-footer, .neu-dark-footer {
                background: linear-gradient(160deg, #091C0C 0%, #0D2611 50%, #051407 100%);
                border-top: 1px solid rgba(159, 237, 114, 0.25);
                box-shadow:
                  inset 0 4px 16px rgba(159, 237, 114, 0.12),
                  0 -12px 32px rgba(0, 0, 0, 0.55);
              }
              .clay-dark-pill, .neu-dark-pill {
                background: rgba(13, 38, 17, 0.85);
                color: #FFECCB !important;
                border: 1px solid rgba(159, 237, 114, 0.25);
                box-shadow:
                  5px 5px 14px rgba(0, 0, 0, 0.55),
                  -3px -3px 8px rgba(159, 237, 114, 0.12);
                transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
              }
              .clay-dark-pill:hover, .neu-dark-pill:hover {
                background: linear-gradient(145deg, #E00000, #B80000);
                border-color: rgba(255, 170, 170, 0.60);
                color: #FFFFFF !important;
                transform: translateY(-2px);
                box-shadow:
                  6px 6px 18px rgba(224, 0, 0, 0.45),
                  -3px -3px 10px rgba(255, 255, 255, 0.25);
              }

              .font-cursive {
                font-family: var(--font-cursive), cursive;
                color: #D4AF37 !important;
              }
              .font-serif {
                font-family: var(--font-serif), Georgia, serif;
              }
              @keyframes slideInLeft {
                from {
                  transform: translate3d(-100%, 0, 0);
                }
                to {
                  transform: translate3d(0, 0, 0);
                }
              }
              .animate-slideInLeft {
                animation: slideInLeft 0.28s cubic-bezier(0.22, 1, 0.36, 1) forwards;
              }
              @keyframes smoothWordSwap {
                0% {
                  opacity: 0;
                  transform: translate3d(0, 14px, 0) scale(0.97);
                }
                12% {
                  opacity: 1;
                  transform: translate3d(0, 0, 0) scale(1);
                }
                88% {
                  opacity: 1;
                  transform: translate3d(0, 0, 0) scale(1);
                }
                100% {
                  opacity: 0;
                  transform: translate3d(0, -12px, 0) scale(0.97);
                }
              }
              .animate-word-swap {
                animation: smoothWordSwap 3s cubic-bezier(0.22, 1, 0.36, 1) infinite;
                will-change: transform, opacity;
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#FFECCB] text-[#0F3B1A] antialiased selection:bg-[#E00000]/25 selection:text-[#0F3B1A] overflow-x-clip [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {children}
      </body>
    </html>
  );
}
