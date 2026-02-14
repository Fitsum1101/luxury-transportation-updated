# Quick Reference Guide

## 🎨 Update Colors

**File**: `/app/globals.css`

```css
:root {
  /* Change primary gold to your brand color */
  --primary: 45 91% 50%;  /* HSL: Hue Saturation Lightness */
}

.dark {
  --primary: 45 91% 55%;  /* Slightly lighter for dark mode */
}
```

## 📝 Update Content

**File**: `/lib/data.json`

All website text lives here. Update these sections:
- `pages.home.hero` - Homepage hero section
- `pages.home.intro` - Introduction text
- `pages.home.features` - Feature descriptions
- `pages.services.servicesList` - Service offerings
- `pages.contact` - Phone, email, address
- `pages.fleet` - Vehicle information

Example:
```json
{
  "pages": {
    "home": {
      "hero": {
        "headline": "Your New Headline Here",
        "subheadline": "Your new subheadline"
      }
    }
  }
}
```

## 🎬 Adjust Animation Speed

**File**: Individual component files in `/components/sections/`

Change `duration` value (in seconds):

```tsx
transition={{ duration: 0.6 }} // Slower
transition={{ duration: 0.3 }} // Faster
```

Common locations:
- `hero-section.tsx` - Hero text reveal
- `animated-section.tsx` - Section scroll reveals
- `navbar.tsx` - Navbar interactions

## 🌓 Theme Colors

### Dark Mode (Premium automotive)
- Background: Very dark gray (#0A0806)
- Cards: Charcoal with slight brown tint
- Text: Bright white (#F4F4F2)
- Accent: Gold highlights

### Light Mode (Luxury editorial)
- Background: Warm white (#F8F8F6)
- Cards: Clean white (#FFFFFF)
- Text: Dark charcoal (#262625)
- Accent: Gold highlights

## 🔤 Change Fonts

**File**: `/app/layout.tsx`

```tsx
import { Playfair_Display, Inter } from 'next/font/google'

// Change serif font
const plafare = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

// Change sans-serif font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})
```

## 📱 Responsive Breakpoints

Tailwind breakpoints used:
- `sm:` - 640px (small mobile)
- `md:` - 768px (tablet)
- `lg:` - 1024px (desktop)
- `xl:` - 1280px (large desktop)

Example:
```tsx
<div className="text-base md:text-lg lg:text-xl">
  Text size increases on larger screens
</div>
```

## 🎯 Add a New Section

1. Create component in `/components/sections/new-section.tsx`:
```tsx
'use client'

import { motion } from 'framer-motion'

export function NewSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Content here */}
      </div>
    </section>
  )
}
```

2. Import in `/app/page.tsx`:
```tsx
import { NewSection } from '@/components/sections/new-section'
```

3. Add to page:
```tsx
<NewSection />
```

## 📦 Common Tailwind Classes

### Spacing
```
p-6        → padding 24px
py-24      → padding vertical 96px
gap-8      → gap between flex items
mx-auto    → margin horizontal auto (center)
```

### Sizing
```
w-full     → width 100%
h-96       → height 384px
max-w-6xl  → max-width 1152px
```

### Text
```
text-lg           → font-size 1.125rem
font-serif        → Use serif font
font-bold         → font-weight bold
uppercase         → text-transform uppercase
tracking-wide     → letter-spacing wider
text-balance      → Optimized line breaks
```

### Colors
```
text-primary      → Gold text
bg-primary        → Gold background
text-muted-foreground  → Muted gray text
border-border     → Use border color
```

### Effects
```
rounded-xl    → border-radius 12px
blur-3xl      → blur effect
shadow-lg     → Large shadow
glass-card    → Custom glass effect
```

## 🎬 Common Animations

### Fade In
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
```

### Slide + Fade
```tsx
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

### Hover Scale
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Rotate
```tsx
animate={{ rotate: 360 }}
transition={{ duration: 2, repeat: Infinity }}
```

## 🔗 Common Links

### Component Library
- shadcn/ui: https://ui.shadcn.com
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://framer.com/motion

### Icons (from lucide-react)
```tsx
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react'

<Menu className="w-5 h-5" />
```

## 🌐 Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically on push
4. Add environment variables (if needed)

```bash
npm run build  # Test build locally
npm start      # Start production server
```

## 🐛 Troubleshooting

### Theme not persisting
- Check if `localStorage` is enabled
- Verify `next-themes` is installed
- Check `ThemeProvider` in layout

### Animations not smooth
- Reduce `duration` if too slow
- Check if GPU acceleration is enabled
- Verify Framer Motion is imported correctly

### Images not loading
- Update image URLs in data.json
- Ensure URLs are publicly accessible
- Use absolute URLs, not relative paths

### Styles not applying
- Check class names spelling
- Verify Tailwind CSS is processing file
- Check z-index conflicts

## 📊 File Sizes Reference

- Hero section height: 100vh (full viewport)
- Container max-width: 6xl (1152px)
- Default padding: px-6 md:px-12 (24px mobile, 48px desktop)
- Gap between sections: py-24 md:py-32 (96px mobile, 128px desktop)
- Border radius: xl (12px), rounded-2xl (16px)

## 🎯 Best Practices

✅ **Do**:
- Use semantic HTML elements
- Test on mobile and desktop
- Keep animations under 1 second
- Use design tokens for colors
- Update data.json for content changes

❌ **Don't**:
- Add inline styles
- Use hardcoded hex colors
- Create overly complex animations
- Forget alt text on images
- Mix margin and gap on same element

## 🚀 Performance Tips

1. **Lazy load images** - Use Next.js Image component
2. **Optimize animations** - Use `will-change` sparingly
3. **Reduce motion** - Respect `prefers-reduced-motion`
4. **Minimize JavaScript** - Use CSS animations where possible
5. **Code split** - Next.js handles this automatically

---

**Last Updated**: February 2026  
**Version**: 1.0  
**Status**: Production Ready
