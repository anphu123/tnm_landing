import { iPhoneModels } from "./data";

export function modelToSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "");
}

export function slugToModel(slug: string) {
  return iPhoneModels.find((m) => modelToSlug(m.name) === slug) ?? null;
}

// Storage options per model family
export function getStorageOptions(modelSlug: string): string[] {
  if (modelSlug.includes("16-pro") || modelSlug.includes("15-pro")) {
    return ["256gb", "512gb", "1tb"];
  }
  if (modelSlug.includes("14-pro") || modelSlug.includes("13-pro")) {
    return ["128gb", "256gb", "512gb", "1tb"];
  }
  if (modelSlug.includes("se")) {
    return ["64gb", "128gb", "256gb"];
  }
  if (modelSlug.includes("11") || modelSlug.includes("12")) {
    return ["64gb", "128gb", "256gb"];
  }
  return ["128gb", "256gb", "512gb"];
}

export function storageLabel(slug: string) {
  return slug.replace("gb", " GB").replace("tb", " TB").toUpperCase();
}

// Base prices per model (VND)
const BASE_PRICES: Record<string, number> = {
  "iphone-16-pro-max": 24000000,
  "iphone-16-pro": 21000000,
  "iphone-16-plus": 18000000,
  "iphone-16": 17000000,
  "iphone-15-pro-max": 20000000,
  "iphone-15-pro": 17000000,
  "iphone-15-plus": 14000000,
  "iphone-15": 13000000,
  "iphone-14-pro-max": 16000000,
  "iphone-14-pro": 14000000,
  "iphone-14-plus": 11000000,
  "iphone-14": 10000000,
  "iphone-13-pro-max": 13000000,
  "iphone-13-pro": 11000000,
  "iphone-13": 9000000,
  "iphone-12": 6000000,
  "iphone-11": 4500000,
  "iphone-se-2022": 4000000,
};

const STORAGE_MULTIPLIER: Record<string, number> = {
  "64gb": 0.85,
  "128gb": 1.0,
  "256gb": 1.18,
  "512gb": 1.35,
  "1tb": 1.55,
};

const BATTERY_MULTIPLIER: Record<string, number> = {
  "above90": 1.0,
  "80-90": 0.92,
  "70-80": 0.80,
  "below70": 0.65,
};

const FUNCTIONALITY_DEDUCTIONS: Record<string, number> = {
  "screen_cracked": -2000000,
  "screen_dead_pixels": -1500000,
  "faceid_broken": -1500000,
  "touchid_broken": -1200000,
  "camera_broken": -1800000,
  "speaker_broken": -800000,
  "charging_broken": -1000000,
  "water_damage": -3000000,
};

export function calculatePrice(
  modelSlug: string,
  storage: string,
  battery: string,
  issues: string[]
) {
  const base = BASE_PRICES[modelSlug] ?? 8000000;
  const storageMult = STORAGE_MULTIPLIER[storage] ?? 1;
  const batteryMult = BATTERY_MULTIPLIER[battery] ?? 1;
  const deductions = issues.reduce((sum, i) => sum + (FUNCTIONALITY_DEDUCTIONS[i] ?? 0), 0);
  const price = Math.max(500000, Math.round((base * storageMult * batteryMult + deductions) / 100000) * 100000);
  return price;
}

export function formatPrice(price: number) {
  return price.toLocaleString("vi-VN") + "₫";
}

// Shared progress steps
export const SELL_STEPS = [
  { label: "Chọn model", path: "/sell/iphone/model" },
  { label: "Bộ nhớ", path: "" },
  { label: "Pin", path: "" },
  { label: "Chức năng", path: "" },
  { label: "Báo giá", path: "" },
];
