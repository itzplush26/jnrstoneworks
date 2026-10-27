import fs from "node:fs";
import path from "node:path";

export type GalleryProject = {
  folderName: string;
  slug: string;
  title: string;
  location: string;
  images: string[];
};

const GALLERY_ROOT = path.join(process.cwd(), "public", "assets", "gallery", "projects");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const PROJECT_LABELS: Record<string, { title: string; location: string }> = {
  "ACCENTURE CP3 - ARANETA CUBAO": { title: "Accenture CP3", location: "Araneta Cubao" },
  "ACCRALAW - BGC": { title: "Accralaw", location: "BGC" },
  "BDO - THE PODIUM ORTIGAS": { title: "BDO", location: "The Podium Ortigas" },
  "BDO LIFE - MAKATI": { title: "BDO Life", location: "Makati" },
  "BDO TOWER - CEBU": { title: "BDO Tower", location: "Cebu" },
  "BELLINI TOWER - VENICE BGC": { title: "Bellini Tower", location: "Venice BGC" },
  "CIGNA PH-3 - BRIDGETOWN": { title: "Cigna PH-3", location: "Bridgetown" },
  "DIGITAL POINT - BGC TAGUIG": { title: "Digital Point", location: "BGC Taguig" },
  "EQUITY - ECO-TOWER BGC": { title: "Equity", location: "Eco-Tower BGC" },
  "JEWELRY DISPLAY - SALCEDO MAKATI": { title: "Jewelry Display", location: "Salcedo Makati" },
  "LSEG - CITI PLAZA BGC TAGUIG": { title: "LSEG", location: "Citi Plaza BGC Taguig" },
  "TOBY'S COFFEE - FESTIVAL MALL": { title: "Toby's Coffee", location: "Festival Mall" },
  "TOBY'S COFFEE - SM MOA": { title: "Toby's Coffee", location: "SM MOA" },
  "VISA - 4 ECOM PASAY": { title: "Visa", location: "4 Ecom Pasay" },
  "YOLE - ERMITA": { title: "Yole", location: "Ermita" },
};

const ACRONYMS = new Set(["BDO", "BGC", "LSEG", "SM", "MOA", "CP3", "PH-3", "HIMACS"]);

function normalizeFolderKey(folderName: string) {
  return folderName.trim().replaceAll("_", "'").replace(/\s+/g, " ").toUpperCase();
}

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replaceAll("_", " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatWord(word: string): string {
  const upper = word.toUpperCase();

  if (ACRONYMS.has(upper)) {
    return upper;
  }

  if (word.includes("-")) {
    return word.split("-").map(formatWord).join("-");
  }

  if (/^\d/.test(word)) {
    return word.toUpperCase() === word ? word : `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
  }

  return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
}

function formatLabel(value: string) {
  return value
    .trim()
    .replaceAll("_", "'")
    .split(/\s+/)
    .filter(Boolean)
    .map(formatWord)
    .join(" ");
}

function parseProjectName(folderName: string) {
  const key = normalizeFolderKey(folderName);
  const mapped = PROJECT_LABELS[key];

  if (mapped) {
    return mapped;
  }

  const cleaned = folderName.trim().replaceAll("_", "'");
  const [rawTitle, ...rest] = cleaned.split(/\s+-\s+/);

  return {
    title: formatLabel(rawTitle),
    location: rest.length > 0 ? formatLabel(rest.join(" - ")) : "",
  };
}

function toPublicImagePath(folderName: string, fileName: string) {
  return encodeURI(`/assets/gallery/projects/${folderName}/${fileName}`);
}

export function getGalleryProjects(): GalleryProject[] {
  if (!fs.existsSync(GALLERY_ROOT)) {
    return [];
  }

  return fs
    .readdirSync(GALLERY_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const folderName = entry.name;
      const folderPath = path.join(GALLERY_ROOT, folderName);
      const { title, location } = parseProjectName(folderName);

      const images = fs
        .readdirSync(folderPath, { withFileTypes: true })
        .filter((file) => file.isFile())
        .map((file) => file.name)
        .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((name) => toPublicImagePath(folderName, name));

      return {
        folderName,
        slug: toSlug(`${title}-${location || folderName}`),
        title,
        location,
        images,
      };
    })
    .filter((project) => project.images.length > 0)
    .sort((a, b) => a.title.localeCompare(b.title) || a.location.localeCompare(b.location));
}
