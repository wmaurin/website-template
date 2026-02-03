// CONFIGURATION
export const siteTitle = "Website Template";
export const siteDescription = "Website Description";
export const accentColor = "#3B82F6";
export const themeMode: ThemeMode = "dark";
export const maxWidth: MaxWidth = "xl";
export const fontFamily = "Georgia, serif";

/**
 * Configuration Options
 *
 * siteTitle       - Website title (shown in browser tab)
 * siteDescription - Meta description for SEO
 * accentColor     - Primary accent color (any hex value)
 * themeMode       - "light" | "dark" | "dynamic" (system preference)
 * maxWidth        - "xl" (1280px) | "l" (1024px) | "m" (768px) | "s" (640px)
 * fontFamily      - CSS font-family value (e.g. "Georgia, serif", "system-ui, sans-serif")
 */


// TYPES & MAPPINGS
export type ThemeMode = "light" | "dark" | "dynamic";
export type MaxWidth = "xl" | "l" | "m" | "s";

export const maxWidthValues: Record<MaxWidth, string> = {
  xl: "1280px",
  l: "1024px",
  m: "768px",
  s: "640px",
};

// EXPORT
export const config = {
  siteTitle,
  siteDescription,
  accentColor,
  themeMode,
  maxWidth,
  maxWidthValues,
  fontFamily,
} as const;

export default config;
