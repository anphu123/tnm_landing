import { Product, products as fallbackProducts } from "./products-data";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSTzKiB_CtbkYa2Vm-ZIH4ZyMId1bdbCT89YvMD73uvNAwoqiytZIOpnf5NjUvwJNTlq0TZ6i-ZSIY2/pub?gid=0&single=true&output=csv";

// ── Column indices (0-based) ────────────────────────────────────────────────
// 0  id
// 1  category (Smartphone / ...)
// 2  brand    (iPhone / Samsung / XiaoMi / Oppo / ...)
// 3  empty
// 4  model code
// 5  product type
// 6  full name
// 7  RAM
// 8  storage
// 9  SKU
// 10 market/retail reference price
// 11 used market – excellent
// 12 used market – good
// 13 used market – fair
// 14 depreciation gap
// 15 our buyback price – Xuất sắc
// 16 our buyback price – Tốt
// 17 our buyback price – Khá
// 18-20 damaged / dead
// 21-25 partner channel A prices
// 26-30 partner channel B prices

const PHONE_BRANDS = ["iphone", "samsung", "xiaomi", "oppo", "realme", "vivo", "honor"];

function brandColor(brand: string): { bg: string; text: string } {
  switch (brand.toLowerCase()) {
    case "iphone": return { bg: "#1d1d1f", text: "#f5f5f7" };
    case "samsung": return { bg: "#1428a0", text: "#fff" };
    case "xiaomi": return { bg: "#ff6900", text: "#fff" };
    case "oppo": return { bg: "#1d4e89", text: "#fff" };
    case "realme": return { bg: "#fed700", text: "#000" };
    case "vivo": return { bg: "#415fff", text: "#fff" };
    case "honor": return { bg: "#c00d0d", text: "#fff" };
    default: return { bg: "#334155", text: "#fff" };
  }
}

function imageFor(brand: string, name: string): string {
  // Use Apple CDN for iPhone models
  if (brand === "iphone") {
    if (name.includes("16 Pro Max")) return "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium?wid=940&hei=1112&fmt=p-jpg&qlt=80";
    if (name.includes("16 Pro")) return "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=940&hei=1112&fmt=p-jpg&qlt=80";
    if (name.includes("16 Plus")) return "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-ultramarine?wid=940&hei=1112&fmt=p-jpg&qlt=80";
    if (name.includes("16e")) return "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16e-finish-select-202502-6-1inch-white?wid=940&hei=1112&fmt=p-jpg&qlt=80";
    if (name.includes("16")) return "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=940&hei=1112&fmt=p-jpg&qlt=80";
    if (name.includes("15 Pro Max")) return "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=940&hei=1112&fmt=p-jpg&qlt=80";
    if (name.includes("15 Pro")) return "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=940&hei=1112&fmt=p-jpg&qlt=80";
    if (name.includes("15 Plus")) return "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-pink?wid=940&hei=1112&fmt=p-jpg&qlt=80";
    if (name.includes("15")) return "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=940&hei=1112&fmt=p-jpg&qlt=80";
    if (name.includes("14 Pro Max")) return "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=940&hei=1112&fmt=p-jpg&qlt=80";
    if (name.includes("14 Pro")) return "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=940&hei=1112&fmt=p-jpg&qlt=80";
    if (name.includes("14")) return "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=940&hei=1112&fmt=p-jpg&qlt=80";
    if (name.includes("13 Pro")) return "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-finish-select-202309-6-7inch-naturaltitanium?wid=940&hei=1112&fmt=p-jpg&qlt=80";
    if (name.includes("13")) return "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=940&hei=1112&fmt=p-jpg&qlt=80";
    if (name.includes("12")) return "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000";
  }

  // Branded placeholders for other makes
  const { bg, text } = brandColor(brand);
  const label = encodeURIComponent(name.replace(/^(Samsung Galaxy|Xiaomi|OPPO|Realme|Vivo|Honor)/i, "").trim().split(" ").slice(0, 3).join(" "));
  return `https://placehold.co/400x480/${bg.replace("#", "")}/${text.replace("#", "")}?text=${label}`;
}

function normalizeBrand(raw: string): string {
  const b = raw.trim().toLowerCase();
  if (b === "xiaomi") return "Xiaomi";
  return raw.trim();
}

function badgeForIndex(indexInBrand: number): { badge: string | null; badgeColor: string } {
  if (indexInBrand === 0) return { badge: "Bán chạy nhất", badgeColor: "bg-yellow-400 text-yellow-900" };
  if (indexInBrand === 1) return { badge: "Phổ biến", badgeColor: "bg-green-100 text-green-700" };
  if (indexInBrand % 7 === 2) return { badge: "Mới về", badgeColor: "bg-blue-100 text-blue-700" };
  if (indexInBrand % 7 === 4) return { badge: "Giá trị tốt", badgeColor: "bg-green-100 text-green-700" };
  return { badge: null, badgeColor: "" };
}

// Simple CSV split (handles quoted fields)
function splitCSVRow(line: string): string[] {
  const cells: string[] = [];
  let inQ = false, cell = "";
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') { inQ = !inQ; continue; }
    if (c === "," && !inQ) { cells.push(cell.trim()); cell = ""; }
    else cell += c;
  }
  cells.push(cell.trim());
  return cells;
}

function parsePrice(s: string): number {
  const n = parseInt(s.replace(/[^0-9]/g, ""), 10);
  return isNaN(n) ? 0 : n;
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch(SHEET_CSV_URL, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const lines = (await res.text()).split(/\r?\n/).filter(Boolean);

    // Count per brand to assign badges
    const brandCount: Record<string, number> = {};
    const products: Product[] = [];

    for (const line of lines) {
      const c = splitCSVRow(line);

      const category = c[1]?.trim();
      const rawBrand = c[2]?.trim() ?? "";
      const brand = rawBrand.toLowerCase();

      // Only include Smartphone rows from known phone brands
      if (category !== "Smartphone") continue;
      if (!PHONE_BRANDS.includes(brand)) continue;

      const name = c[6]?.trim();
      if (!name) continue;

      // Buyback price (Xuất sắc = col 15), fallback to col 10
      const buybackPrice = parsePrice(c[15]) || parsePrice(c[10]);
      if (!buybackPrice) continue;

      const marketPrice = parsePrice(c[10]); // retail/market reference

      const id = parseInt(c[0]) || products.length + 1;
      const storage = c[8]?.trim() || "";

      brandCount[brand] = (brandCount[brand] || 0);
      const { badge, badgeColor } = badgeForIndex(brandCount[brand]++);

      products.push({
        id,
        name,
        storage,
        grade: "Xuất sắc",
        color: "",
        price: buybackPrice,
        originalPrice: marketPrice,
        image: imageFor(brand, name.toLowerCase()),
        badge,
        badgeColor,
      });
    }

    if (products.length === 0) throw new Error("No products parsed");
    return products;
  } catch (err) {
    console.warn("[sheets] Falling back to static data:", err);
    return fallbackProducts;
  }
}
