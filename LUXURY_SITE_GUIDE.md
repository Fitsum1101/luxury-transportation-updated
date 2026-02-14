# Trust Luxury Transportation - Website Guide

## 🎯 Overview

This is a cinematic, ultra-modern luxury transportation website built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**. The design follows premium automotive and executive brand standards with:

- **Dark/Light/System Theme Support** - Smooth theme transitions
- **Glass-morphism Effects** - Semi-transparent luxury surfaces
- **Gold Accents** - Metallic primary color (#C8A050)
- **Cinematic Animations** - Staggered reveals, scroll effects, hover interactions
- **Responsive Design** - Mobile-first approach with elegant spacing

## 🏗️ Project Structure

```
/app
  ├── page.tsx                    # Homepage (all sections)
  ├── layout.tsx                  # Root layout with theme setup
  ├── globals.css                 # Design tokens & theme system
  ├── book-now/page.tsx          # Booking page
  ├── about-us/page.tsx          # About Us page
  ├── services/page.tsx          # Services page
  └── contact/page.tsx           # Contact page

/components
  ├── navbar.tsx                  # Floating luxury header
  ├── footer.tsx                  # Premium footer
  ├── preloader.tsx               # Cinematic intro
  ├── theme-provider.tsx          # Theme switching logic
  ├── animated-section.tsx        # Reusable animation wrappers
  └── sections/
      ├── hero-section.tsx        # Full-height hero with CTAs
      ├── intro-section.tsx       # Brand statement + stats
      ├── features-section.tsx    # Glass luxury cards
      ├── services-section.tsx    # Service offerings grid
      ├── fleet-section.tsx       # Vehicle showcase
      └── contact-section.tsx     # Contact info & map

/lib
  └── data.json                   # All website content (JSON-driven)
```

## 🎨 Design System

### Theme Variables (in globals.css)

**Light Mode**: Warm whites, soft grays, gold accents
**Dark Mode**: Matte blacks, charcoal layers, gold highlights

Key CSS variables:
- `--primary` - Gold accent (45 91% 50%)
- `--background` - Base surface
- `--card` - Elevated surfaces
- `--glass` - Semi-transparent overlay
- `--glass-border` - Gold-tinted borders

### Color Palette

```
Primary:     Gold #C8A050 (used for accents, text, glow effects)
Dark Base:   #0A0806 (matte black)
Light Base:  #F8F8F6 (warm white)
Neutral:     Grayscale (20%, 50%, 70%, 85%, 92%)
```

### Typography

- **Heading Font**: Playfair Display (serif) - elegant, premium
- **Body Font**: Inter (sans-serif) - clean, modern

## 🎬 Animation System

### Framer Motion Implementation

1. **Preloader** - Gold spinner with pulse effect (2.5s duration)
2. **Navbar** - Floating glass with scroll shrink animation
3. **Hero** - Staggered text reveal + parallax background
4. **Sections** - Scroll-triggered fade + slide reveals
5. **Cards** - Hover elevation with smooth scale/glow
6. **Buttons** - Interactive scale on hover/tap

### AnimatedSection Components

```tsx
<AnimatedSection direction="up" delay={0}>
  <div>Content fades in and slides up</div>
</AnimatedSection>

<StaggerContainer staggerDelay={0.1}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerContainer>
```

## 📱 Responsive Breakpoints

- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (3-4 columns)

All animations scale appropriately for mobile while maintaining premium feel.

## 🌐 Content Management

All page content lives in `/lib/data.json` - update values there to reflect real information:

```json
{
  "pages": {
    "home": {
      "hero": { "headline": "...", "subheadline": "..." },
      "intro": { "text": "...", "cta": {} },
      "features": [],
      "services": [],
      "fleet": [],
      "contact": {}
    }
  }
}
```

## 🎯 Key Features

### 1. **Preloader** (2.5s)
- Centered gold loader with glow
- Smooth fade transition to hero
- Sets luxury tone immediately

### 2. **Floating Navbar**
- Glass-morphism effect
- Theme toggle (Dark/Light/System)
- Mobile hamburger menu
- Shrinks on scroll

### 3. **Hero Section**
- Full viewport height
- Gradient overlay + animated background
- Staggered headline reveal
- Primary + Secondary CTAs with hover glow

### 4. **Intro Section**
- Split layout (text + stats)
- Stat cards with hover elevation
- Gold divider line animation

### 5. **Features Grid** (4 cards)
- Glass-card surfaces
- Icon + title + description
- Hover lift + glow effect
- Bottom accent line

### 6. **Services Grid** (8 services)
- Service name + description + CTA
- Responsive columns (2-4)
- Card hover animations

### 7. **Fleet Showcase** (6 vehicles)
- Image-forward cards with gradient overlay
- Vehicle info on hover
- Zoom effect on hover

### 8. **Contact Section**
- Contact cards (phone, email, address)
- Map placeholder
- CTA to booking page

### 9. **Footer**
- Multi-column layout
- Quick links, contact info, social media
- Premium structure

## 🔧 Customization

### Change Primary Color

Edit `/app/globals.css`:
```css
--primary: 45 91% 50%;  /* HSL format */
```

### Adjust Animation Speed

Edit component transition durations (in seconds):
```tsx
transition={{ duration: 0.6, delay: 0.1 }}
```

### Toggle Theme Modes

The theme provider supports:
- `'light'` - Always light mode
- `'dark'` - Always dark mode
- `'system'` - Respects OS preference (default)

Toggle via navbar or programmatically:
```tsx
const { theme, setTheme } = useTheme()
setTheme('dark')
```

## 📦 Dependencies

- **Next.js 16** - Latest React framework
- **Framer Motion 11** - Animations
- **Tailwind CSS 4** - Utility styling
- **shadcn/ui** - Component library
- **next-themes** - Theme management
- **lucide-react** - Icons

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run dev server**:
   ```bash
   pnpm dev
   ```

3. **Build for production**:
   ```bash
   pnpm build
   pnpm start
   ```

## 💡 Tips for Luxury Feel

- ✅ Generous whitespace everywhere
- ✅ Smooth, subtle animations (never jarring)
- ✅ High contrast text on backgrounds
- ✅ Premium fonts and spacing
- ✅ Glass-morphism for layered depth
- ✅ Gold accents for sophistication
- ✅ Motion guides attention, doesn't distract

## 📄 Additional Pages

All pages include:
- Navbar (with theme toggle)
- Hero banner
- Relevant sections
- Footer

Scaffold pages can be customized by adding unique content to `data.json` and creating page-specific components.

---

**Theme System**: Full dark/light support with smooth transitions  
**Animation**: Framer Motion for cinematic UX  
**Responsive**: Mobile-first, elegant on all devices  
**JSON-Driven**: All content managed in data.json
