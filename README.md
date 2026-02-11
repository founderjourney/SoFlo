# SoFlo Lenders — Landing Page

Modern React landing page for SoFlo Lenders, a commercial lending company based in South Florida.

## Stack

- React 19 + Vite 7
- Tailwind CSS v4

## Getting Started

```bash
npm install
npm run dev      # localhost:5173
npm run build    # Production build → dist/
```

## Performance

Lighthouse scores (post-optimization):

| Metric | Mobile | Desktop |
|--------|--------|---------|
| Performance | 90+ | 99 |
| Accessibility | 93 | 93 |
| Best Practices | 96 | 100 |
| SEO | 91 | 91 |

### Optimizations Applied

- **WebP images** with `<picture>` fallback — 76% image payload reduction (1.5 MB → 364 KB)
- **Lazy loading** (`loading="lazy"`) on all below-fold images
- **`fetchPriority="high"`** on hero LCP image with `<link rel="preload">`
- **Favicon** optimized from 277 KB → 2.5 KB (32x32)
- **Font trimming** — removed unused Roboto weight 500
- **Reduced mobile animations** — 4/8 hero particles hidden on `< md` screens
- **`prefers-reduced-motion`** media query respects user accessibility preferences
- **`requestAnimationFrame`** replaces `setInterval` in milestone counters
- **Explicit `width`/`height`** on all `<img>` tags to prevent CLS

### Regenerating WebP Images

If original images change, regenerate WebP versions with ImageMagick:

```bash
cd public/images
# Blog images (resize to 800px wide)
convert post-one.jpg -resize 800x -quality 80 post-one.webp
# PNG images (keep original size)
convert 049-MqMGf9ZbdXg-removebg-preview.png -quality 80 049-MqMGf9ZbdXg-removebg-preview.webp
# Favicon
convert logo-only-clear-full.png -resize 32x32 favicon-32.png
```

## Architecture

- **10 components**: Navbar, Hero, About, SmartFinancing, Milestones, Services, Blog, Contact, Partners, Footer
- **Custom hook**: `useReveal` — IntersectionObserver-based scroll reveal
- **Design**: Glassmorphism, orbital ring animations, animated counters, gradient borders
- **Brand colors**: Cyan `#0adce4` · Gold `#f9ae00` · Orange `#F3810A` · Dark `#0a0a0f`
- **Fonts**: Roboto Slab (headings) + Roboto (body) via Google Fonts
