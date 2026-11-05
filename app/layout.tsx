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

export const metadata: Metadata = {
  metadataBase: new URL('https://thegreenheritageresort.in'),
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
    canonical: 'https://thegreenheritageresort.in',
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
    url: 'https://thegreenheritageresort.in',
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
              /* Solid Warm Ivory Claymorphic Surface (Dropdowns & Floating Mobile Bar) */
              .clay-white-header {
                background: linear-gradient(145deg, #FFFFFF 0%, #FCF9EA 100%);
                backdrop-filter: none !important;
                -webkit-backdrop-filter: none !important;
                border: 1px solid #FFFFFF;
                box-shadow:
                  0 12px 28px rgba(30, 38, 26, 0.14),
                  0 4px 10px rgba(30, 38, 26, 0.06),
                  inset 3px 4px 7px #FFFFFF,
                  inset -3px -4px 8px rgba(168, 187, 163, 0.35);
              }
              /* High-Performance Opaque Claymorphism for Content Surfaces */
              .clay-surface {
                background: linear-gradient(145deg, #FFFFFF 0%, #FCF9EA 58%, #EBF0E8 100%);
                border: 1px solid #FFFFFF;
                box-shadow:
                  8px 12px 24px rgba(151, 168, 122, 0.18),
                  -5px -5px 14px rgba(255, 255, 255, 0.92),
                  inset 2px 3px 5px #FFFFFF,
                  inset -2px -3px 6px rgba(168, 187, 163, 0.32);
              }
              /* Deep Heritage Sage Claymorphism for Ribbons & Footer (#97A87A / #A8BBA3 / #1E261A family) */
              .clay-dark-bar {
                background: linear-gradient(145deg, #242E1F, #313E2A);
                border: 1px solid rgba(168, 187, 163, 0.45);
                box-shadow:
                  0 12px 28px rgba(30, 38, 26, 0.25),
                  inset 2px 2px 5px rgba(168, 187, 163, 0.20),
                  inset -2px -3px 7px rgba(15, 20, 13, 0.55);
              }
              .clay-dark-footer {
                background: linear-gradient(160deg, #1E261A 0%, #2B3725 55%, #161D13 100%);
                border-top: 1px solid rgba(168, 187, 163, 0.40);
                box-shadow:
                  inset 0 4px 14px rgba(168, 187, 163, 0.14),
                  0 -12px 32px rgba(30, 38, 26, 0.18);
              }
              .clay-dark-pill {
                background: rgba(168, 187, 163, 0.14);
                color: #FCF9EA;
                border: 1px solid rgba(168, 187, 163, 0.32);
                box-shadow:
                  4px 6px 14px rgba(14, 19, 12, 0.35),
                  inset 1px 2px 3px rgba(252, 249, 234, 0.16),
                  inset -1px -2px 4px rgba(14, 19, 12, 0.45);
              }
              .clay-dark-pill:hover {
                background: linear-gradient(145deg, #FFA239, #E8891E);
                border-color: #FFD199;
                color: #1E261A;
                transform: translateY(-1px);
              }
              .clay-card {
                background: linear-gradient(155deg, #FFFFFF 0%, #FCF9EA 68%, #F1F5EE 100%);
                border-radius: 26px;
                border: 1px solid #FFFFFF;
                box-shadow:
                  10px 14px 28px rgba(151, 168, 122, 0.18),
                  -5px -5px 16px rgba(255, 255, 255, 0.94),
                  inset 2px 3px 6px #FFFFFF,
                  inset -2px -3px 7px rgba(168, 187, 163, 0.28);
              }
              /* Palette Primary Claymorphic Buttons & Active Pills (#FFA239 & #97A87A & #A8BBA3) */
              .clay-pill-active {
                background: linear-gradient(145deg, #FFB35C, #FFA239);
                color: #1E261A;
                border: 1px solid rgba(255, 235, 205, 0.85);
                box-shadow:
                  4px 6px 14px rgba(255, 162, 57, 0.32),
                  inset 2px 3px 5px rgba(255, 243, 224, 0.75),
                  inset -2px -3px 5px rgba(196, 108, 12, 0.38);
              }
              .clay-btn-coral {
                background: linear-gradient(145deg, #FFB35C, #FFA239);
                color: #1E261A;
                border: 1px solid rgba(255, 235, 205, 0.85);
                box-shadow:
                  6px 10px 20px rgba(255, 162, 57, 0.32),
                  -2px -2px 8px rgba(255, 255, 255, 0.65),
                  inset 2px 3px 6px rgba(255, 243, 224, 0.78),
                  inset -2px -3px 6px rgba(196, 108, 12, 0.40);
                transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.22s ease;
              }
              .clay-btn-coral:hover {
                background: linear-gradient(145deg, #FFBE73, #F59324);
                color: #1E261A;
                transform: translateY(-2px) scale(1.01);
                box-shadow:
                  8px 14px 24px rgba(255, 162, 57, 0.42),
                  inset 2px 3px 6px rgba(255, 246, 230, 0.85),
                  inset -2px -3px 6px rgba(196, 108, 12, 0.45);
              }
              .clay-btn-olive {
                background: linear-gradient(145deg, #A8BBA3, #97A87A);
                color: #1E261A;
                border: 1px solid rgba(252, 249, 234, 0.75);
                box-shadow:
                  6px 10px 20px rgba(151, 168, 122, 0.30),
                  -2px -2px 8px rgba(255, 255, 255, 0.65),
                  inset 2px 3px 6px rgba(252, 249, 234, 0.65),
                  inset -2px -3px 6px rgba(98, 114, 72, 0.42);
                transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
              }
              .clay-btn-olive:hover {
                background: linear-gradient(145deg, #B5C7B0, #889A6B);
                color: #1E261A;
                transform: translateY(-2px);
              }
              /* Claymorphic 3D Scroll-Up Button (#FFA239 Sphere, No Extra Halo Light) */
              .clay-scroll-up-btn {
                background: linear-gradient(145deg, #FFB35C, #FFA239);
                color: #1E261A;
                border: 1px solid rgba(255, 238, 212, 0.85);
                box-shadow:
                  6px 10px 20px rgba(30, 38, 26, 0.24),
                  inset 3px 4px 7px rgba(255, 245, 228, 0.78),
                  inset -3px -4px 8px rgba(196, 108, 12, 0.45);
                transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
              }
              .clay-scroll-up-btn:hover {
                transform: translateY(-2px) scale(1.04);
              }
              .clay-btn-soft {
                background: linear-gradient(145deg, #FFFFFF, #E5ECE2);
                color: #2E3B27;
                border: 1px solid #FFFFFF;
                box-shadow:
                  5px 7px 16px rgba(151, 168, 122, 0.20),
                  -3px -3px 10px #FFFFFF,
                  inset 2px 2px 4px #FFFFFF,
                  inset -2px -2px 5px rgba(168, 187, 163, 0.38);
                transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
              }
              .clay-btn-soft:hover {
                background: linear-gradient(145deg, #FFB35C, #FFA239);
                color: #1E261A;
                transform: translateY(-1px);
              }
              .clay-input {
                background: #FFFFFF;
                border-radius: 18px;
                border: 1px solid rgba(151, 168, 122, 0.48);
                box-shadow:
                  inset 3px 4px 8px rgba(151, 168, 122, 0.12),
                  inset -3px -3px 7px #FFFFFF,
                  0 2px 6px rgba(151, 168, 122, 0.06);
                transition: border-color 0.2s ease, box-shadow 0.2s ease;
              }
              .clay-input:focus {
                outline: none;
                border-color: #FFA239;
              }
              .font-cursive {
                font-family: var(--font-cursive), cursive;
                color: #D4AF37 !important;
              }
              .font-serif {
                font-family: var(--font-serif), Georgia, serif;
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
        className="bg-[#FCF9EA] text-[#1E261A] antialiased selection:bg-[#FFA239]/30 selection:text-[#1E261A] overflow-x-clip [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {children}
      </body>
    </html>
  );
}
