/**
 * Website Meta Information
 */
export const siteTitle = "Website Template";
export const siteDescription = "Website Description";

/**
 * Accent Color
 * - "#3B82F6" - Blue (modern, trustworthy)
 * - "#8B5CF6" - Purple (creative, luxury)
 * - "#EC4899" - Pink (playful, bold)
 * - "#EF4444" - Red (energetic, urgent)
 * - "#F97316" - Orange (warm, friendly)
 * - "#EAB308" - Yellow (optimistic, attention-grabbing)
 * - "#22C55E" - Green (natural, growth)
 * - "#14B8A6" - Teal (calm, sophisticated)
 * - "#06B6D4" - Cyan (fresh, modern)
 * - "#6366F1" - Indigo (professional, deep)
 */
export const accentColor = "#3B82F6";

/**
 * Theme Mode
 * - "light"   - Always use light theme
 * - "dark"    - Always use dark theme
 * - "dynamic" - Follow system preference (prefers-color-scheme)
 */
export type ThemeMode = "light" | "dark" | "dynamic";
export const themeMode: ThemeMode = "dark";

/**
 * Font Family
 *
 * Modern:
 * - "system-ui, sans-serif" - System default (clean, native feel)
 * - "'Segoe UI', sans-serif" - Microsoft modern
 * - "Roboto, sans-serif" - Google's modern typeface
 *
 * Elegant:
 * - "Georgia, serif" - Classic, readable serif
 * - "'Palatino Linotype', serif" - Elegant book-style
 * - "'Times New Roman', serif" - Traditional, formal
 *
 * Tech/Monospace:
 * - "'SF Mono', monospace" - Apple's coding font
 * - "'Consolas', monospace" - Microsoft coding font
 * - "'Courier New', monospace" - Classic monospace
 *
 * Sans-serif (general):
 * - "Arial, sans-serif" - Universal, clean
 * - "Verdana, sans-serif" - Wide, readable
 * - "'Trebuchet MS', sans-serif" - Friendly, humanist
 */
export const fontFamily = "Georgia, serif";

/**
 * Configuration object for easy importing
 */
export const config = {
  siteTitle,
  siteDescription,
  accentColor,
  themeMode,
  fontFamily,
} as const;

export default config;
