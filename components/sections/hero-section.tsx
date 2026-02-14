'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

interface HeroSectionProps {
  headline: string
  subheadline: string
  primaryCta: {
    text: string
    link: string
  }
  secondaryCta: {
    text: string
    link: string
  }
}

export function HeroSection({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with sophisticated gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Luxury Chauffeur Service"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient mesh background - increased opacity for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-secondary/30" />

        {/* Grid pattern for luxury feel */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(200, 160, 80, .1) 25%, rgba(200, 160, 80, .1) 26%, transparent 27%, transparent 74%, rgba(200, 160, 80, .1) 75%, rgba(200, 160, 80, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(200, 160, 80, .1) 25%, rgba(200, 160, 80, .1) 26%, transparent 27%, transparent 74%, rgba(200, 160, 80, .1) 75%, rgba(200, 160, 80, .1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center py-24 md:py-32">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.h1 variants={itemVariants} className="premium-heading">
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            {/* Primary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={primaryCta.link}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
              >
                {primaryCta.text}
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={secondaryCta.link}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold uppercase tracking-wide hover:bg-primary/10 transition-all duration-300"
              >
                {secondaryCta.text}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  )
}
