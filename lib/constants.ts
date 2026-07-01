// Central content source for the Travbyond homepage.
// Image URLs point to Unsplash (royalty-free). Swap for licensed/original
// photography before shipping to production.

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const HERO_SLIDES = [
  {
    id: "skyline",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400&auto=format&fit=crop",
    eyebrow: "United Arab Emirates",
    heading: "Where the Desert\nMeets the Skyline",
    subheading:
      "Bespoke journeys through Dubai's most extraordinary addresses, curated by a team obsessed with the details.",
    primaryCta: "Explore Packages",
    secondaryCta: "Plan My Trip",
  },
  {
    id: "yacht",
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2400&auto=format&fit=crop",
    eyebrow: "Arabian Gulf",
    heading: "Private Waters,\nPrivate Moments",
    subheading:
      "Charter a yacht at golden hour and watch Dubai Marina drift by from the water.",
    primaryCta: "View Yacht Escapes",
    secondaryCta: "Speak to a Concierge",
  },
  {
    id: "desert",
    image:
      "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=2400&auto=format&fit=crop",
    eyebrow: "Arabian Desert",
    heading: "Silence, Dunes\nand Starlight",
    subheading:
      "A private desert safari beneath a sky untouched by city light — dinner included.",
    primaryCta: "Discover Safaris",
    secondaryCta: "Enquire Now",
  },
  {
    id: "palm",
    image:
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2400&auto=format&fit=crop",
    eyebrow: "Palm Jumeirah",
    heading: "An Island Built\nfor the Few",
    subheading:
      "Overwater villas, private beaches and a level of service reserved for those who ask for more.",
    primaryCta: "See Resorts",
    secondaryCta: "Enquire Now",
  },
];

export const STATS = [
  { value: 14, suffix: "+", label: "Years Crafting UAE Journeys" },
  { value: 6200, suffix: "+", label: "Guests Hosted" },
  { value: 48, suffix: "", label: "Signature Experiences" },
  { value: 98, suffix: "%", label: "Guests Who Return" },
];

export const PACKAGES = [
  {
    id: "dubai-royale",
    title: "Dubai Royale",
    duration: "5 Nights / 6 Days",
    price: "From AED 12,400",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop",
    tags: ["Burj Khalifa", "Private Yacht", "Fine Dining"],
  },
  {
    id: "desert-mirage",
    title: "Desert Mirage",
    duration: "3 Nights / 4 Days",
    price: "From AED 7,800",
    image:
      "https://images.unsplash.com/photo-1544986581-efac024faf62?q=80&w=1600&auto=format&fit=crop",
    tags: ["Desert Safari", "Bedouin Camp", "Falconry"],
  },
  {
    id: "abu-dhabi-heritage",
    title: "Abu Dhabi Heritage",
    duration: "4 Nights / 5 Days",
    price: "From AED 9,900",
    image:
      "https://images.unsplash.com/photo-1580835239131-5f0d8c9fb562?q=80&w=1600&auto=format&fit=crop",
    tags: ["Sheikh Zayed Mosque", "Louvre", "Corniche"],
  },
];

export const DESTINATIONS = [
  {
    id: "dubai",
    name: "Dubai",
    tagline: "The city that never stops reaching upward",
    image:
      "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "abu-dhabi",
    name: "Abu Dhabi",
    tagline: "Heritage, art and quiet grandeur",
    image:
      "https://images.unsplash.com/photo-1554311874-2eb61f4a4d78?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "sharjah",
    name: "Sharjah",
    tagline: "The cultural soul of the Emirates",
    image:
      "https://images.unsplash.com/photo-1580835239131-5f0d8c9fb562?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "ras-al-khaimah",
    name: "Ras Al Khaimah",
    tagline: "Mountains, coastline and open sky",
    image:
      "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1600&auto=format&fit=crop",
  },
];

export const WHY_CHOOSE = [
  {
    id: "concierge",
    title: "Dedicated Concierge",
    description:
      "A single point of contact from first enquiry to final farewell, available around the clock.",
  },
  {
    id: "access",
    title: "Privileged Access",
    description:
      "Reservations, upgrades and experiences unavailable through any public booking channel.",
  },
  {
    id: "craft",
    title: "Hand-Crafted Itineraries",
    description:
      "No templates. Every journey is designed around how you actually want to travel.",
  },
  {
    id: "trust",
    title: "Licensed & Trusted",
    description:
      "A fully licensed DMC with over a decade of on-ground UAE partnerships.",
  },
];

export const SERVICES = [
  {
    id: "transfers",
    title: "Airport Transfers",
    description: "Chauffeured arrivals in a fleet built for comfort and discretion.",
  },
  {
    id: "hotels",
    title: "Luxury Hotels",
    description: "Curated stays at the Emirates' most celebrated addresses.",
  },
  {
    id: "tours",
    title: "City Tours",
    description: "Private, guided routes through Dubai and Abu Dhabi's landmarks.",
  },
  {
    id: "safari",
    title: "Desert Safari",
    description: "Dune drives, falconry and dinner beneath the stars.",
  },
  {
    id: "corporate",
    title: "Corporate Travel",
    description: "Seamless logistics for executive visits and incentive groups.",
  },
  {
    id: "groups",
    title: "Group Tours",
    description: "Multi-day itineraries designed for families and travel parties.",
  },
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544986581-efac024faf62?q=80&w=1200&auto=format&fit=crop",
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Amelia Hart",
    origin: "London, UK",
    quote:
      "Every detail was considered before we even thought to ask. It felt less like a holiday and more like being hosted.",
  },
  {
    id: "t2",
    name: "Rahul Menon",
    origin: "Singapore",
    quote:
      "Our desert evening was the highlight of the year — the kind of thing you can't book through an app.",
  },
  {
    id: "t3",
    name: "Sofia Marchetti",
    origin: "Milan, Italy",
    quote:
      "Travbyond understood exactly the pace we wanted. Quietly excellent from start to finish.",
  },
];

export const CONTACT_INFO = {
  email: "concierge@travbyond.com",
  phone: "+971 4 555 0192",
  whatsapp: "+971 50 555 0192",
  address: "Level 24, Emirates Towers, Sheikh Zayed Road, Dubai, UAE",
};

export const FOOTER_SERVICES = [
  "Airport Transfers",
  "Luxury Hotels",
  "City Tours",
  "Desert Safari",
  "Corporate Travel",
  "Group Tours",
];

export const FOOTER_DESTINATIONS = ["Dubai", "Abu Dhabi", "Sharjah", "Ras Al Khaimah"];
