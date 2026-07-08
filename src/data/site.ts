export const NAV_ITEMS = [
  { label: "Home", route: "/", anchor: "home" },
  { label: "Colors", route: "/colors", anchor: "colors" },
  { label: "Services", route: "/services", anchor: "services" },
  { label: "Gallery", route: "/gallery", anchor: "gallery" },
  { label: "About Us", route: "/about-us", anchor: "about-us" },
  { label: "Contact", route: "/contact", anchor: "contact" },
] as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? "https://jnrstoneworks.com";

export const HOME_SWATCHES = [
  {
    name: "Diamond White",
    tone: "white",
    description: "Clean solid white with a soft luminous finish.",
    image: "/assets/colors/diamond-white-s034.png",
  },
  {
    name: "Arctic Granite",
    tone: "beige",
    description: "Light granite pattern for bright modern interiors.",
    image: "/assets/colors/arctic-granite-g034.png",
  },
  {
    name: "Aurora Canyon",
    tone: "beige",
    description: "Warm marble-inspired veining with natural depth.",
    image: "/assets/colors/aurora-canyon-m705.png",
  },
  {
    name: "Sanremo",
    tone: "beige",
    description: "Soft neutral marble look for understated luxury.",
    image: "/assets/colors/sanremo-m605.png",
  },
  {
    name: "Aurora Umber",
    tone: "beige",
    description: "Richer earth-toned marble effect with bold character.",
    image: "/assets/colors/aurora-umber-m614.png",
  },
] as const;

export const COLOR_TONES = [
  { label: "All Tones", value: "all" },
  { label: "White", value: "white" },
  { label: "Beige", value: "beige" },
  { label: "Grey", value: "grey" },
  { label: "Patterned", value: "patterned" },
] as const;

export const COLOR_SWATCHES = [
  {
    name: "Diamond White",
    code: "S034",
    tone: "white",
    series: "Solid",
    thickness: ["12 mm"],
    thicknessLabel: "12 mm",
    deltaE5: true,
    image: "/assets/colors/diamond-white-s034.png",
  },
  {
    name: "Urban Concrete",
    code: "G554",
    tone: "grey",
    series: "Granite",
    thickness: ["20 mm", "12 mm", "6 mm"],
    thicknessLabel: "20/12/6 mm",
    deltaE5: false,
    image: "/assets/colors/urban-concrete-g554.png",
  },
  {
    name: "Concrete Grey",
    code: "S103",
    tone: "grey",
    series: "Solid",
    thickness: ["12 mm"],
    thicknessLabel: "12 mm",
    deltaE5: false,
    image: "/assets/colors/concrete-grey-s103.png",
  },
  {
    name: "Crystal Beige",
    code: "G101",
    tone: "beige",
    series: "Granite",
    thickness: ["12 mm", "6 mm"],
    thicknessLabel: "12/6 mm",
    deltaE5: false,
    image: "/assets/colors/crystal-beige-g101.png",
  },
  {
    name: "Grey Sand",
    code: "G002",
    tone: "grey",
    series: "Granite",
    thickness: ["12 mm"],
    thicknessLabel: "12 mm",
    deltaE5: true,
    image: "/assets/colors/grey-sand-g002.png",
  },
  {
    name: "Arctic Granite",
    code: "G034",
    tone: "patterned",
    series: "Granite",
    thickness: ["20 mm", "12 mm", "6 mm"],
    thicknessLabel: "20/12/6 mm",
    deltaE5: true,
    image: "/assets/colors/arctic-granite-g034.png",
  },
  {
    name: "White Quartz",
    code: "G004",
    tone: "white",
    series: "Granite",
    thickness: ["20 mm", "12 mm", "9 mm", "6 mm"],
    thicknessLabel: "20/12/9/6 mm",
    deltaE5: true,
    image: "/assets/colors/white-quartz-g004.png",
  },
  {
    name: "Venus",
    code: "T011",
    tone: "patterned",
    series: "Terrazzo",
    thickness: ["12 mm"],
    thicknessLabel: "12 mm",
    deltaE5: false,
    image: "/assets/colors/venus-t011.png",
  },
  {
    name: "Nebula",
    code: "T010",
    tone: "patterned",
    series: "Terrazzo",
    thickness: ["12 mm"],
    thicknessLabel: "12 mm",
    deltaE5: false,
    image: "/assets/colors/nebula-t010.png",
  },
  {
    name: "Aurora Grey",
    code: "M608",
    tone: "grey",
    series: "Marmo",
    thickness: ["12 mm"],
    thicknessLabel: "12 mm",
    deltaE5: false,
    image: "/assets/colors/aurora-grey-m608.png",
  },
  {
    name: "Aurora Torano",
    code: "M601",
    tone: "white",
    series: "Marmo",
    thickness: ["12 mm"],
    thicknessLabel: "12 mm",
    deltaE5: false,
    image: "/assets/colors/aurora-torano-m601.png",
  },
  {
    name: "Pavia",
    code: "M603",
    tone: "beige",
    series: "Marmo",
    thickness: ["12 mm"],
    thicknessLabel: "12 mm",
    deltaE5: false,
    image: "/assets/colors/pavia-m603.png",
  },
  {
    name: "Sanremo",
    code: "M605",
    tone: "beige",
    series: "Marmo",
    thickness: ["12 mm"],
    thicknessLabel: "12 mm",
    deltaE5: false,
    image: "/assets/colors/sanremo-m605.png",
  },
  {
    name: "Aurora Bisque",
    code: "M612",
    tone: "beige",
    series: "Marmo",
    thickness: ["12 mm"],
    thicknessLabel: "12 mm",
    deltaE5: false,
    image: "/assets/colors/aurora-bisque-m612.png",
  },
  {
    name: "Aurora Umber",
    code: "M614",
    tone: "beige",
    series: "Marmo",
    thickness: ["12 mm"],
    thicknessLabel: "12 mm",
    deltaE5: false,
    image: "/assets/colors/aurora-umber-m614.png",
  },
  {
    name: "Aurora Ecru",
    code: "M701",
    tone: "beige",
    series: "Marmo",
    thickness: ["12 mm"],
    thicknessLabel: "12 mm",
    deltaE5: false,
    image: "/assets/colors/aurora-ecru-m701.png",
  },
  {
    name: "Aurora Canyon",
    code: "M705",
    tone: "beige",
    series: "Marmo",
    thickness: ["12 mm"],
    thicknessLabel: "12 mm",
    deltaE5: false,
    image: "/assets/colors/aurora-canyon-m705.png",
  },
] as const;

export const COLOR_SERIES = [
  { label: "All Series", value: "all" },
  { label: "Solid", value: "Solid" },
  { label: "Granite", value: "Granite" },
  { label: "Terrazzo", value: "Terrazzo" },
  { label: "Marmo", value: "Marmo" },
] as const;

export const COLOR_THICKNESSES = [
  { label: "All Thickness", value: "all" },
  { label: "6 mm", value: "6 mm" },
  { label: "9 mm", value: "9 mm" },
  { label: "12 mm", value: "12 mm" },
  { label: "20 mm", value: "20 mm" },
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