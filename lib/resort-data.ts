export interface InstagramReelItem {
  code: string;
  url: string;
  videoSrc: string;
  mobileVideoSrc?: string;
  poster: string;
  orientation: 'portrait' | 'landscape';
  rotateToLandscape: boolean;
  title: string;
  subtitle: string;
  objectPosition?: string;
}

export interface FacilityVerificationItem {
  id: string;
  name: string;
  category: 'directory_claim' | 'policy_gap';
  sourceNote: string;
  status: 'unverified_claim' | 'owner_confirmed' | 'hidden_until_verified';
  publicNote: string;
}

export interface DirectoryChannel {
  id: string;
  platform: string;
  handleOrLabel: string;
  url: string;
  category: 'Maps & Navigation' | 'Social Channel' | 'Review & Directory';
  verificationNote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Two Rotated Landscape Hero Background Videos playing seamlessly on loop in exact order:
// 1. DVwj-NrE08f (rotated to landscape)
// 2. DYDC4t6T_gq (rotated to landscape)
export const HERO_BACKGROUND_REELS: InstagramReelItem[] = [
  {
    code: 'DVwj-NrE08f',
    url: 'https://www.instagram.com/reel/DVwj-NrE08f/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DVwj-NrE08f-landscape.mp4',
    mobileVideoSrc: '/reels/DYDC4t6T_gq.mp4',
    poster: '/reels/DVwj-NrE08f-landscape.jpg',
    orientation: 'landscape',
    rotateToLandscape: true,
    title: 'Grand Nighttime Stage & Red Carpet Walkway',
    subtitle: 'Illuminated wedding stage & floral walkway at The Green Heritage',
    objectPosition: '50% 50%',
  },
  {
    code: 'DYDC4t6T_gq',
    url: 'https://www.instagram.com/reel/DYDC4t6T_gq/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DYDC4t6T_gq-landscape.mp4',
    mobileVideoSrc: '/reels/DOsHLCYE86A.mp4',
    poster: '/reels/DYDC4t6T_gq-landscape.jpg',
    orientation: 'landscape',
    rotateToLandscape: true,
    title: 'Bride & Groom Under Floral Lattice Arches',
    subtitle: 'Romantic couple celebration at The Green Heritage',
    objectPosition: '50% 50%',
  },
];

// Signature Portrait Video Box for the dedicated section right after Hero on the Landing Page
export const SIGNATURE_PORTRAIT_REEL: InstagramReelItem = {
  code: 'DRuInL5kZdn',
    url: 'https://www.instagram.com/reel/DRuInL5kZdn/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DG6zl2pTgbj.mp4',
  poster: '/reels/DRuInL5kZdn.jpg',
  orientation: 'portrait',
  rotateToLandscape: false,
  title: 'Golden Canopy Couple Walk',
  subtitle: 'Bride & groom beneath fairy-light arches at The Green Heritage',
  objectPosition: '50% 22%',
};

// Rotated Landscape Footer Background Video (DWrOzj5gYgT) playing muted on seamless loop
export const FOOTER_BACKGROUND_REEL: InstagramReelItem = {
  code: 'DWrOzj5gYgT',
    url: 'https://www.instagram.com/reel/DWrOzj5gYgT/?utm_source=ig_web_copy_link',
  videoSrc: '/reels/DWrOzj5gYgT-landscape.mp4',
  mobileVideoSrc: '/reels/DG6zl2pTgbj.mp4',
  poster: '/reels/DWrOzj5gYgT-landscape.jpg',
  orientation: 'landscape',
  rotateToLandscape: true,
  title: 'The Green Heritage Evening Celebration',
  subtitle: 'Illuminated resort lawn & celebration ambiance',
  objectPosition: '50% 50%',
};

export const PORTRAIT_REELS: InstagramReelItem[] = [
  {
    code: 'DOuvU_Jk52G',
    url: 'https://www.instagram.com/reel/DOuvU_Jk52G/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DOsHLCYE86A.mp4',
    poster: '/reels/DOuvU_Jk52G.jpg',
    orientation: 'portrait',
    rotateToLandscape: false,
    title: 'Sparkler Entry & Lotus Stage',
    subtitle: 'Bridal walkway & floral reception stage',
    objectPosition: '50% 20%',
  },
  {
    code: 'DRuInL5kZdn',
    url: 'https://www.instagram.com/reel/DRuInL5kZdn/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DG6zl2pTgbj.mp4',
    poster: '/reels/DYDC4t6T_gq.jpg',
    orientation: 'portrait',
    rotateToLandscape: false,
    title: 'Golden Canopy Couple Walk',
    subtitle: 'Bride & groom beneath fairy-light arches',
    objectPosition: '50% 22%',
  },
  {
    code: 'DSX6M96E0xo',
    url: 'https://www.instagram.com/reel/DSX6M96E0xo/?utm_source=ig_web_copy_link',
  videoSrc: '/reels/DYDC4t6T_gq.mp4',
    poster: '/reels/DSX6M96E0xo.jpg',
    orientation: 'portrait',
    rotateToLandscape: false,
    title: 'Evening Lawn Illumination',
    subtitle: 'Outdoor decorative lighting & guest entry',
    objectPosition: '50% 25%',
  },
  {
    code: 'DPX65sMEzBG',
    url: 'https://www.instagram.com/reel/DPX65sMEzBG/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DOsHLCYE86A.mp4',
    poster: '/reels/DPX65sMEzBG.jpg',
    orientation: 'portrait',
    rotateToLandscape: false,
    title: 'Floral Reception Stage',
    subtitle: 'Decorated hall ready for wedding guests',
    objectPosition: '50% 25%',
  },
  {
    code: 'DNUaVcRzvai',
    url: 'https://www.instagram.com/reel/DNUaVcRzvai/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DG6zl2pTgbj.mp4',
    poster: '/reels/DNUaVcRzvai.jpg',
    orientation: 'portrait',
    rotateToLandscape: false,
    title: 'Nighttime Courtyard & Facade',
    subtitle: 'Illuminated resort architecture at night',
    objectPosition: '50% 25%',
  },
  {
    code: 'DS8DEbWE0dy',
    url: 'https://www.instagram.com/reel/DS8DEbWE0dy/?utm_source=ig_web_copy_link',
  videoSrc: '/reels/DYDC4t6T_gq.mp4',
    poster: '/reels/DS8DEbWE0dy.jpg',
    orientation: 'portrait',
    rotateToLandscape: false,
    title: 'Grand Stage Celebration',
    subtitle: 'Evening event staging & lighting',
    objectPosition: '50% 25%',
  },
  {
    code: 'DEUz9DUTxFS',
    url: 'https://www.instagram.com/reel/DEUz9DUTxFS/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DOsHLCYE86A.mp4',
    poster: '/reels/DEUz9DUTxFS.jpg',
    orientation: 'portrait',
    rotateToLandscape: false,
    title: 'Evening Gala Stage Showcase',
    subtitle: 'Outdoor stage production & sound',
    objectPosition: '50% 25%',
  },
  {
    code: 'DdRCjAozIMf',
    url: 'https://www.instagram.com/reel/DdRCjAozIMf/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DG6zl2pTgbj.mp4',
    poster: '/reels/DdRCjAozIMf.jpg',
    orientation: 'portrait',
    rotateToLandscape: false,
    title: 'Haldi & Poolside Floral Arch',
    subtitle: 'Daytime floral arches by the resort lawn',
    objectPosition: '50% 25%',
  },
  {
    code: 'DRJmExnkdEu',
    url: 'https://www.instagram.com/reel/DRJmExnkdEu/?utm_source=ig_web_copy_link',
  videoSrc: '/reels/DYDC4t6T_gq.mp4',
    poster: '/reels/DRJmExnkdEu.jpg',
    orientation: 'portrait',
    rotateToLandscape: false,
    title: 'Rishu & Bride Ceremony',
    subtitle: 'Wedding rituals & family celebration',
    objectPosition: '50% 22%',
  },
  {
    code: 'DOsHLCYE86A',
    url: 'https://www.instagram.com/reel/DOsHLCYE86A/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DOsHLCYE86A.mp4',
    poster: '/reels/DOsHLCYE86A.jpg',
    orientation: 'portrait',
    rotateToLandscape: false,
    title: 'Mandap & Floral Styling',
    subtitle: 'Custom floral backdrop & stage decor',
    objectPosition: '50% 25%',
  },
  {
    code: 'DG6zl2pTgbj',
    url: 'https://www.instagram.com/reel/DG6zl2pTgbj/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DG6zl2pTgbj.mp4',
    poster: '/reels/DG6zl2pTgbj.jpg',
    orientation: 'portrait',
    rotateToLandscape: false,
    title: 'Wedding Procession Entry',
    subtitle: 'Family gathering across the lawn',
    objectPosition: '50% 25%',
  },
];

// 9 Landscape Reels (first 4 appear on Landing Page; all 9 on Gallery/Weddings pages)
export const LANDSCAPE_REELS: InstagramReelItem[] = [
  {
    code: 'DSG3HcWEcov',
    url: 'https://www.instagram.com/reel/DSG3HcWEcov/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DVwj-NrE08f-landscape.mp4',
    poster: '/reels/DSG3HcWEcov-landscape.jpg',
    orientation: 'landscape',
    rotateToLandscape: true,
    title: 'Royal Balcony Bridal Entry',
    subtitle: 'Bride framed under heritage arches with fireworks',
    objectPosition: '50% 35%',
  },
  {
    code: 'DSh4yfBk46u',
    url: 'https://www.instagram.com/reel/DSh4yfBk46u/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DYDC4t6T_gq-landscape.mp4',
    poster: '/reels/DSh4yfBk46u-landscape.jpg',
    orientation: 'landscape',
    rotateToLandscape: true,
    title: 'Grand Facade Sparkler Entry',
    subtitle: 'Nighttime architectural illumination & fireworks',
    objectPosition: '50% 35%',
  },
  {
    code: 'DYB-3YUSOa6',
    url: 'https://www.instagram.com/reel/DYB-3YUSOa6/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DWrOzj5gYgT-landscape.mp4',
    poster: '/reels/DYB-3YUSOa6-landscape.jpg',
    orientation: 'landscape',
    rotateToLandscape: true,
    title: 'Sacred Bridal Reflection',
    subtitle: 'Bridal portrait before the wedding ceremony',
    objectPosition: '50% 30%',
  },
  {
    code: 'DYKE6VGzG3Y',
    url: 'https://www.instagram.com/reel/DYKE6VGzG3Y/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DVwj-NrE08f-landscape.mp4',
    poster: '/reels/DYKE6VGzG3Y-landscape.jpg',
    orientation: 'landscape',
    rotateToLandscape: true,
    title: 'Pastel Floral Mandap Canopy',
    subtitle: 'Open-air daytime mandap with brass bells',
    objectPosition: '50% 35%',
  },
  {
    code: 'DX7LL3hz0nI',
    url: 'https://www.instagram.com/reel/DX7LL3hz0nI/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DYDC4t6T_gq-landscape.mp4',
    poster: '/reels/DX7LL3hz0nI-landscape.jpg',
    orientation: 'landscape',
    rotateToLandscape: true,
    title: 'Reception Chandelier Portrait',
    subtitle: 'Evening couple portrait under chandeliers',
    objectPosition: '50% 30%',
  },
  {
    code: 'DSh4iGwk2HB',
    url: 'https://www.instagram.com/reel/DSh4iGwk2HB/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DVwj-NrE08f-landscape.mp4',
    poster: '/reels/DSh4iGwk2HB.jpg',
    orientation: 'landscape',
    rotateToLandscape: false,
    title: 'Radhika & Deepak Function',
    subtitle: 'Daytime lawn setup & family celebration',
    objectPosition: '50% 35%',
  },
  {
    code: 'DdqK4M6HVBm',
    url: 'https://www.instagram.com/reel/DdqK4M6HVBm/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DYDC4t6T_gq-landscape.mp4',
    poster: '/reels/DdqK4M6HVBm.jpg',
    orientation: 'landscape',
    rotateToLandscape: false,
    title: 'Green Heritage Venue Showcase',
    subtitle: 'Bakarpur, Gobarsahi–Sakri Road, Muzaffarpur',
    objectPosition: '50% 50%',
  },
  {
    code: 'DdGFEFrEfv_',
    url: 'https://www.instagram.com/reel/DdGFEFrEfv_/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DWrOzj5gYgT-landscape.mp4',
    poster: '/reels/DdGFEFrEfv_.jpg',
    orientation: 'landscape',
    rotateToLandscape: false,
    title: 'Banquet Hall & Lawn Walkthrough',
    subtitle: 'Indoor hall & outdoor reception space',
    objectPosition: '50% 35%',
  },
  {
    code: 'DVwj-NrE08f',
    url: 'https://www.instagram.com/reel/DVwj-NrE08f/?utm_source=ig_web_copy_link',
    videoSrc: '/reels/DG6zl2pTgbj.mp4',
    poster: '/reels/DVwj-NrE08f-landscape.jpg',
    orientation: 'landscape',
    rotateToLandscape: true,
    title: 'Grand Nighttime Stage & Red Carpet Walkway',
    subtitle: 'Illuminated wedding stage & floral walkway at The Green Heritage',
    objectPosition: '50% 50%',
  },
  {
    code: 'DYDC4t6T_gq',
    url: 'https://www.instagram.com/reel/DYDC4t6T_gq/?utm_source=ig_web_copy_link',
  videoSrc: '/reels/DWrOzj5gYgT-landscape.mp4',
    poster: '/reels/DYDC4t6T_gq-landscape.jpg',
    orientation: 'landscape',
    rotateToLandscape: true,
    title: 'Wedding Stage & Floral Decor',
    subtitle: 'Custom floral arches & reception stage',
    objectPosition: '50% 50%',
  },
];

export const RESORT_FAQS: FAQItem[] = [
  {
    question: 'Where is The Green Heritage Resort and Banquet?',
    answer:
      'The resort is listed in the Bakarpur, Gobarsahi–Sakri Road area of Muzaffarpur, Bihar 844127. Use the map section or Google Maps link for directions and confirm the address before travelling.',
  },
  {
    question: 'Can I enquire about a wedding or event?',
    answer:
      'Yes. Click Enquire Now to share your event type, preferred date, and approximate guest count. The resort can confirm the available venue options, capacity, catering, and decoration terms.',
  },
  {
    question: 'How can I enquire about a room?',
    answer:
      'Use the Enquire Now button or Call/WhatsApp icons to ask about current room options, tariffs, check-in and check-out times, and availability.',
  },
  {
    question: 'How can I check current prices?',
    answer:
      'Ask the resort directly for the current room tariff or event package. Confirm what is included before making a booking.',
  },
  {
    question: 'Is an online enquiry a confirmed booking?',
    answer:
      'No. An enquiry is treated as a request only. A booking is confirmed after the resort communicates availability and confirms its booking process and terms.',
  },
];

export const INITIAL_FACILITY_ITEMS: FacilityVerificationItem[] = [
  {
    id: 'wedding-banquet',
    name: 'Weddings, Receptions & Family Functions',
    category: 'directory_claim',
    sourceNote: 'Indoor banquet hall & outdoor celebration lawn',
    status: 'owner_confirmed',
    publicNote:
      'Contact the team with your event date and guest count to confirm indoor hall and outdoor lawn arrangements.',
  },
  {
    id: 'swimming-pool',
    name: 'Poolside & Haldi Courtyard',
    category: 'directory_claim',
    sourceNote: 'Outdoor poolside area for daytime events & guests',
    status: 'unverified_claim',
    publicNote:
      'Confirm current operational hours, seasonal availability, and poolside event rules directly with the resort.',
  },
  {
    id: 'parking',
    name: 'On-Site Guest Parking',
    category: 'directory_claim',
    sourceNote: 'Vehicle parking space for visiting guests',
    status: 'unverified_claim',
    publicNote:
      'Ask the team about vehicle parking capacity and arrangements for wedding and event guests.',
  },
  {
    id: 'wifi',
    name: 'Guest Wi-Fi Access',
    category: 'directory_claim',
    sourceNote: 'Confirm coverage across rooms and halls',
    status: 'unverified_claim',
    publicNote:
      'Confirm current Wi-Fi availability across rooms and event areas before your visit.',
  },
  {
    id: 'front-desk',
    name: 'Front Desk & Guest Assistance',
    category: 'directory_claim',
    sourceNote: 'On-site coordination for stays and events',
    status: 'unverified_claim',
    publicNote:
      'Confirm reception hours and check-in timings directly before arrival.',
  },
  {
    id: 'catering-decor',
    name: 'Catering & Stage Decoration',
    category: 'policy_gap',
    sourceNote: 'Tailored per celebration requirements',
    status: 'hidden_until_verified',
    publicNote:
      'Discuss menu options, in-house catering, decoration preferences, and vendor terms directly with the team.',
  },
];

export const SUPPLIED_CHANNELS: DirectoryChannel[] = [
  {
    id: 'google-maps',
    platform: 'Google Maps',
    handleOrLabel: 'Bakarpur, Gobarsahi–Sakri Road, Muzaffarpur',
    url: 'https://www.google.com/maps/place/The+Green+Heritage+Resort+and+Banquet/@26.0638548,85.347923,713m/data=!3m2!1e3!4b1!4m9!3m8!1s0x39ed1724a0dfa55b:0x5737c356be2eaddb!5m2!4m1!1i2!8m2!3d26.06385!4d85.3504979!16s%2Fg%2F11kq2x_1j4?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMi4wIKXMDSoASAFQAw%3D%3D',
    category: 'Maps & Navigation',
    verificationNote: 'Open turn-by-turn directions to the venue.',
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    handleOrLabel: '@thegreenheritagemuz',
    url: 'https://www.instagram.com/thegreenheritagemuz/?hl=en',
    category: 'Social Channel',
    verificationNote: 'Official Instagram profile with wedding reels.',
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    handleOrLabel: 'facebook.com/thegreenheritagemuz',
    url: 'https://www.facebook.com/thegreenheritagemuz/',
    category: 'Social Channel',
    verificationNote: 'Official Facebook page for updates.',
  },
  {
    id: 'tripadvisor',
    platform: 'Tripadvisor',
    handleOrLabel: 'Bakarpur, Muzaffarpur District Listing',
    url: 'https://www.tripadvisor.in/Hotel_Review-g26727268-d26724910-Reviews-The_Green_Heritage_Resort_and_Banquet-Bakarpur_Muzaffarpur_District_Bihar.html',
    category: 'Review & Directory',
    verificationNote: 'View visitor feedback on Tripadvisor.',
  },
];
