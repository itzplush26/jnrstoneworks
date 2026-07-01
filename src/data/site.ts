export const NAV_ITEMS = [
  { label: "Home", route: "/", anchor: "home" },
  { label: "Colors", route: "/colors", anchor: "colors" },
  { label: "Services", route: "/services", anchor: "services" },
  { label: "Gallery", route: "/gallery", anchor: "gallery" },
  { label: "About Us", route: "/about-us", anchor: "about-us" },
  { label: "Contact", route: "/contact", anchor: "contact" },
] as const;

export const HOME_SWATCHES = [
  {
    name: "Polar Silk",
    tone: "white",
    description: "Bright and refined with a softly luminous grain.",
    gradient: "linear-gradient(145deg, #f9f7f0 0%, #dcd5c7 100%)",
  },
  {
    name: "Oat Linen",
    tone: "beige",
    description: "Warm, architectural beige with a satin finish.",
    gradient: "linear-gradient(145deg, #e8dcc8 0%, #b99c71 100%)",
  },
  {
    name: "Stone Mist",
    tone: "grey",
    description: "A cool neutral with understated depth.",
    gradient: "linear-gradient(145deg, #c1bdb6 0%, #7e7973 100%)",
  },
  {
    name: "Graphite Veil",
    tone: "black",
    description: "Sophisticated charcoal with a velvet-like tone.",
    gradient: "linear-gradient(145deg, #63605a 0%, #1d1c1a 100%)",
  },
  {
    name: "Night Slate",
    tone: "black",
    description: "Deep and dramatic for striking modern interiors.",
    gradient: "linear-gradient(145deg, #3a3836 0%, #090909 100%)",
  },
] as const;

export const COLOR_TONES = [
  { label: "All Tones", value: "all" },
  { label: "White", value: "white" },
  { label: "Beige", value: "beige" },
  { label: "Grey", value: "grey" },
  { label: "Black", value: "black" },
] as const;

export const COLOR_SWATCHES = [
  ...HOME_SWATCHES,
  {
    name: "Ivory Pearl",
    tone: "white",
    description: "Soft ivory with a polished glow and subtle warmth.",
    gradient: "linear-gradient(145deg, #f7f1e4 0%, #e5d4b4 100%)",
  },
  {
    name: "Sand Dune",
    tone: "beige",
    description: "A sunlit neutral suited to natural wood palettes.",
    gradient: "linear-gradient(145deg, #ddd0bc 0%, #b08d5c 100%)",
  },
  {
    name: "Pebble Grain",
    tone: "grey",
    description: "Balanced grey with a lightly mineral feel.",
    gradient: "linear-gradient(145deg, #bcb8b1 0%, #6d675f 100%)",
  },
  {
    name: "Basalt Drift",
    tone: "black",
    description: "A sleek near-black with deep visual weight.",
    gradient: "linear-gradient(145deg, #47423d 0%, #141414 100%)",
  },
] as const;

export const FEATURE_ITEMS = [
  {
    title: "Elegant Aesthetic",
    description: "Luxury-forward surfaces that feel tailored to interior architecture.",
  },
  {
    title: "Durable & Long Lasting",
    description: "Built to perform through daily use with dependable resilience.",
  },
  {
    title: "Non-Porous & Hygienic",
    description: "Smooth, easy-to-maintain surfaces for kitchens and workspaces.",
  },
  {
    title: "Thermoformable Seamless",
    description: "Flexible fabrication possibilities with minimal visual interruptions.",
  },
  {
    title: "Sustainable & Safe",
    description: "A considered material choice for contemporary homes and businesses.",
  },
] as const;

export const SERVICE_ITEMS = [
  {
    title: "Fabrication",
    description: "Precision cutting. Flawless finishing. Built with passion and expertise.",
    bullets: ["Custom templating", "Edge finishing", "Seam preparation"],
  },
  {
    title: "Installation",
    description: "Professional installation. Seamless fit. Attention to every detail. Built to last.",
    bullets: ["On-site fitting", "Clean alignment", "Final inspection"],
  },
  {
    title: "Custom Design",
    description: "Collaborative detailing for kitchens, baths, islands, counters, and reception desks.",
    bullets: ["Material guidance", "Profile selection", "Project coordination"],
  },
  {
    title: "Repairs & Maintenance",
    description: "Care support that helps surfaces keep their polished look and performance.",
    bullets: ["Minor repairs", "Surface refresh", "Care advice"],
  },
] as const;

export const WHY_CHOOSE_ITEMS = [
  "Quality materials",
  "Expert craftsmanship",
  "On-time delivery",
  "Exceptional results",
] as const;

export const ABOUT_STATS = [
  {
    value: "LX Hausys",
    label: "Official distributor and project partner",
  },
  {
    value: "HIMACS",
    label: "Solid surface solutions for interiors that need elegance and performance",
  },
  {
    value: "Quezon City",
    label: "Based in Metro Manila with nationwide project support",
  },
] as const;

export const GALLERY_FILTERS = [
  { label: "All Projects", value: "all" },
  { label: "Kitchen Countertops", value: "kitchen" },
  { label: "Bathroom Vanities", value: "bath" },
  { label: "Commercial Spaces", value: "commercial" },
] as const;

export const GALLERY_ITEMS = [
  {
    title: "Waterfall Kitchen Island",
    category: "kitchen",
    categoryLabel: "Kitchen Countertops",
    description: "A sculptural island concept with a calm, reflective surface.",
    gradient: "linear-gradient(145deg, #f5f0e7 0%, #b8a289 100%)",
    tall: true,
  },
  {
    title: "Integrated Vanity Counter",
    category: "bath",
    categoryLabel: "Bathroom Vanities",
    description: "Clean lines and seamless edges for compact luxury bathrooms.",
    gradient: "linear-gradient(145deg, #cbc4bc 0%, #6f675d 100%)",
    tall: false,
  },
  {
    title: "Reception Desk Cladding",
    category: "commercial",
    categoryLabel: "Commercial Spaces",
    description: "A refined front-of-house statement for design-led environments.",
    gradient: "linear-gradient(145deg, #4f4a44 0%, #171614 100%)",
    tall: false,
  },
  {
    title: "Minimalist Pantry Counter",
    category: "kitchen",
    categoryLabel: "Kitchen Countertops",
    description: "Neutral tones paired with durable everyday usability.",
    gradient: "linear-gradient(145deg, #eee7d9 0%, #c5a56a 100%)",
    tall: false,
  },
  {
    title: "Hotel Powder Room Vanity",
    category: "bath",
    categoryLabel: "Bathroom Vanities",
    description: "A polished surface detail that reads calm and high-end.",
    gradient: "linear-gradient(145deg, #d7d1c8 0%, #918779 100%)",
    tall: true,
  },
  {
    title: "Corporate Pantry Counter",
    category: "commercial",
    categoryLabel: "Commercial Spaces",
    description: "A hard-wearing finish tailored for busy workplace use.",
    gradient: "linear-gradient(145deg, #2d2b28 0%, #090909 100%)",
    tall: false,
  },
] as const;