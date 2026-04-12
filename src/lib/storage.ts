import { STORAGE_KEY, getDefaultConfig } from "./config";
import type { PortfolioConfig } from "./types";

export function loadConfig(): PortfolioConfig {
  if (typeof window === "undefined") return getDefaultConfig();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultConfig();
    const parsed = JSON.parse(raw);
    return { ...getDefaultConfig(), ...parsed };
  } catch {
    return getDefaultConfig();
  }
}

export function saveConfig(config: PortfolioConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
    // localStorage unavailable (SSR, private mode, etc.)
  }
}
