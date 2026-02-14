# Developer Guide - Trust Luxury Transportation Website

This guide covers how to extend, customize, and maintain the luxury transportation website.

## 🏗️ Architecture Overview

```
User Browser
    ↓
Next.js App Router
    ↓
Components (React)
    ├── Page Components (/app)
    ├── UI Components (/components)
    └── Section Components (/components/sections)
    ↓
Styling
    ├── Tailwind CSS (utility classes)
    ├── CSS Variables (design tokens)
    └── Framer Motion (animations)
    ↓
Data Layer
    └── /lib/data.json (all content)
```

## 📦 Adding New Sections

### Step 1: Create Component

```tsx
// /components/sections/testimonials-section.tsx
'use client'

import { motion } from 'framer-motion'
import { StaggerContainer, StaggerItem } from '../animated-section'

interface Testimonial {
  quote: string
  author: string
  role: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="premium-subheading mb-4">What Our Clients Say</h2>
        </motion.div>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="glass-card p-8 flex flex-col h-full"
                  whileHover={{ y: -8 }}
                >
                  <p className="text-foreground mb-6 flex-grow italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-primary">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
```

### Step 2: Add Data to JSON

```json
// /lib/data.json
{
  "pages": {
    "home": {
      "testimonials": [
        {
          "quote": "Best transportation experience I've had.",
          "author": "John Smith",
          "role": "CEO, Tech Company"
        }
      ]
    }
  }
}
```

### Step 3: Import in Page

```tsx
// /app/page.tsx
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import data from '@/lib/data.json'

export default function Home() {
  const { testimonials } = data.pages.home

  return (
    <main>
      {/* ... other sections ... */}
      <TestimonialsSection testimonials={testimonials} />
    </main>
  )
}
```

## 🎨 Creating Custom Cards

### Reusable Card Pattern

```tsx
interface CardProps {
  title: string
  description: string
  image?: string
  badge?: string
  onClick?: () => void
}

export function CustomCard({
  title,
  description,
  image,
  badge,
  onClick,
}: CardProps) {
  return (
    <motion.div
      className="glass-card rounded-xl overflow-hidden cursor-pointer group"
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
    >
      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Badge */}
          {badge && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
              {badge}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}
```

## 🎬 Animation Patterns

### Scroll Reveal
```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true, margin: '-100px' }}
>
  Content appears on scroll
</motion.div>
```

### Staggered List
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }}
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Hover Elevation
```tsx
<motion.button
  whileHover={{ y: -4, scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.3 }}
>
  Hover me
</motion.button>
```

## 🎨 Custom CSS Utilities

### Add to globals.css

```css
@layer components {
  .luxury-button {
    @apply px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/50;
  }

  .premium-card {
    @apply glass-card p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300;
  }

  .section-heading {
    @apply premium-heading text-center mb-12;
  }
}
```

### Usage
```tsx
<button className="luxury-button">Click Me</button>
<div className="premium-card">Content</div>
<h2 className="section-heading">Section Title</h2>
```

## 🌐 Adding Pages

### Create New Page Structure

```tsx
// /app/testimonials/page.tsx
'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-24 pb-12 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-heading"
        >
          Client Testimonials
        </motion.h1>
      </section>

      {/* Main Content */}
      {/* Your sections here */}

      <Footer />
    </main>
  )
}
```

## 🔧 Form Integration

### Contact Form Example

```tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Send to your backend
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setFormData({ name: '', email: '', message: '' })
      // Show success message
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass-card p-8 max-w-2xl mx-auto space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div>
        <label className="block text-sm font-semibold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors"
          required
        />
      </div>

      <motion.button
        type="submit"
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  )
}
```

## 🔗 API Routes

### Create Backend Endpoint

```tsx
// /app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email or save to database
    // Example: Send to email service
    // await sendEmail({ to: 'contact@trust.com', name, email, message })

    return NextResponse.json(
      { success: true, message: 'Message sent' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
```

## 🧪 Testing

### Component Testing Pattern

```tsx
// /components/__tests__/hero-section.test.tsx
import { render, screen } from '@testing-library/react'
import { HeroSection } from '../sections/hero-section'

describe('HeroSection', () => {
  const props = {
    headline: 'Test Headline',
    subheadline: 'Test Subheadline',
    primaryCta: { text: 'Book', link: '/book-now' },
    secondaryCta: { text: 'Call', link: 'tel:+1234567890' },
  }

  it('renders headline', () => {
    render(<HeroSection {...props} />)
    expect(screen.getByText('Test Headline')).toBeInTheDocument()
  })

  it('renders primary CTA', () => {
    render(<HeroSection {...props} />)
    expect(screen.getByText('Book')).toBeInTheDocument()
  })
})
```

## 🚀 Performance Optimization

### Image Optimization

```tsx
import Image from 'next/image'

export function OptimizedFleetImage() {
  return (
    <Image
      src="/images/luxury-sedan.jpg"
      alt="Luxury Sedan"
      width={800}
      height={600}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      priority={false}
      loading="lazy"
    />
  )
}
```

### Code Splitting

```tsx
import dynamic from 'next/dynamic'

const TestimonialsSection = dynamic(
  () => import('@/components/sections/testimonials-section'),
  { loading: () => <div>Loading...</div> }
)

export default function Page() {
  return <TestimonialsSection />
}
```

## 🔍 Debugging

### Development Console Logging

```tsx
export function DebugComponent() {
  useEffect(() => {
    console.log('[DEBUG] Component mounted')
    console.log('[DEBUG] Props:', { prop1: 'value' })

    return () => {
      console.log('[DEBUG] Component unmounted')
    }
  }, [])

  return <div>Content</div>
}
```

### React DevTools
```bash
# Install React DevTools Chrome extension
# Use $r to inspect component state in console
```

## 📚 Resources

### Documentation Links
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://framer.com/motion)
- [React Hooks](https://react.dev/reference/react/hooks)

### Learning Resources
- Next.js Tutorials: https://nextjs.org/learn
- Tailwind UI Examples: https://tailwindui.com
- Animation Inspiration: https://www.awwwards.com

## 🐛 Common Issues

### Issue: Animations not triggering
**Solution**: Check `viewport={{ once: true }}` is set correctly

### Issue: Theme not persisting
**Solution**: Verify localStorage is enabled and theme-provider is in layout

### Issue: Images not loading
**Solution**: Check image URLs are absolute paths, not relative

### Issue: Styles conflicting
**Solution**: Check CSS specificity, use `!` prefix rarely

## 💡 Best Practices

✅ **Do**:
- Use design tokens for colors
- Keep components under 200 lines
- Use TypeScript interfaces
- Add component documentation
- Test animations on mobile
- Optimize images before upload

❌ **Don't**:
- Hardcode colors (use CSS variables)
- Create massive component files
- Use any types in TypeScript
- Add unnecessary animations
- Forget mobile testing
- Upload oversized images

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run start
```

### Vercel Deployment
```bash
# Connect GitHub repository
# Vercel auto-deploys on push
# Environment variables auto-configured
```

### Environment Variables
```bash
# .env.local (local development)
# .env.production (Vercel dashboard)

NEXT_PUBLIC_API_URL=https://api.trust.com
```

---

**Version**: 1.0  
**Last Updated**: February 2026  
**Maintainer**: v0
