# Website Template

Minimal Astro starter with config-based theming and reusable components.

## Configuration

Edit `src/config.ts` to customize your site.

### siteTitle
Website title shown in the browser tab.

### siteDescription
Meta description for SEO.

### accentColor
Primary accent color as a hex value (e.g. `#3B82F6`).

### themeMode
- `"light"` - Light theme
- `"dark"` - Dark theme
- `"dynamic"` - Follows system preference

### maxWidth
Maximum content width.
- `"xl"` - 1280px
- `"l"` - 1024px
- `"m"` - 768px
- `"s"` - 640px

### fontFamily
CSS font-family value (e.g. `"Georgia, serif"`).

### navbarAligned
- `"center"` - Navigation links centered
- `"right"` - Logo left, navigation right

### navbarLogo
Path to logo image or text. Only visible when `navbarAligned` is `"right"`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
