/**
 * Configuration Options
 *
 * siteTitle       - Website title (shown in browser tab)
 * siteDescription - Meta description for SEO
 * siteIcon        - Favicon path (shown in browser tab bar)
 * accentColor     - Primary accent color (any hex value)
 * themeMode       - "light" | "dark" | "dynamic" (system preference)
 * maxWidth        - "xl" (1280px) | "l" (1024px) | "m" (768px) | "s" (640px)
 * fontFamily      - CSS font-family value
 * navbarAligned   - "center" | "right" (nav link alignment)
 * navbarLogo      - Logo path or text (only shown when navbarAligned is "right")
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Accent Colors
 * ─────────────────────────────────────────────────────────────────────────────
 * Blue        #3B82F6    Indigo      #6366F1    Violet      #8B5CF6
 * Purple      #A855F7    Pink        #EC4899    Rose        #F43F5E
 * Red         #EF4444    Orange      #F97316    Amber       #F59E0B
 * Yellow      #EAB308    Lime        #84CC16    Green       #22C55E
 * Emerald     #10B981    Teal        #14B8A6    Cyan        #06B6D4
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Font Styles
 * ─────────────────────────────────────────────────────────────────────────────
 * Modern      "Inter, system-ui, sans-serif"
 *             "SF Pro Display, -apple-system, sans-serif"
 *
 * Elegant     "Georgia, Cambria, serif"
 *             "Playfair Display, Georgia, serif"
 *             "Libre Baskerville, Garamond, serif"
 *
 * Tech        "JetBrains Mono, Fira Code, monospace"
 *             "IBM Plex Mono, Consolas, monospace"
 *             "Source Code Pro, Monaco, monospace"
 *
 * Minimal     "system-ui, sans-serif"
 *             "Helvetica Neue, Arial, sans-serif"
 */

// CONFIGURATION
export const siteTitle = "Website Template";
export const siteDescription = "Minimal Astro starter with config-based theming and reusable components";
export const siteIcon = "/favicon.svg";
export const accentColor = "#3B82F6";
export const themeMode: ThemeMode = "dark";
export const maxWidth: MaxWidth = "l";
export const fontFamily = "Inter, system-ui, sans-serif";
export const navbarAligned: NavbarAligned = "right";
export const navbarLogo: string | undefined = "/logo.svg";

// TYPES & MAPPINGS
export type ThemeMode = "light" | "dark" | "dynamic";
export type MaxWidth = "xl" | "l" | "m" | "s";
export type NavbarAligned = "center" | "right";

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
  siteIcon,
  accentColor,
  themeMode,
  maxWidth,
  maxWidthValues,
  fontFamily,
  navbarAligned,
  navbarLogo,
} as const;

export default config;
