'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedSection } from '../animated-section'

interface IntroSectionProps {
  text: string
  cta: {
    text: string
    link: string
  }
}

export function IntroSection({ text, cta }: IntroSectionProps) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <AnimatedSection direction="right">
          <div className="space-y-6">
            <h2 className="premium-subheading text-foreground">
              Excellence in Every Journey
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {text}
            </p>

            {/* Divider */}
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-primary to-primary/0"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={cta.link}
                className="inline-flex items-center gap-3 text-primary font-semibold uppercase tracking-wide hover:gap-4 transition-all duration-300 group"
              >
                {cta.text}
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Visual Element with Image Background */}
        <AnimatedSection direction="left">
          <div className="relative h-96 rounded-2xl overflow-hidden group">
            <Image
              src="/chauffeur.jpg"
              alt="Luxury Transportation Service"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

            {/* Stats Overlay */}
            <div className="absolute inset-0 flex items-end p-8">
              <div className="grid grid-cols-2 gap-6 w-full">
                <motion.div
                  className="glass-card p-6 text-center"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-serif font-bold text-primary mb-1">
                    10+
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Years of Service
                  </p>
                </motion.div>

                <motion.div
                  className="glass-card p-6 text-center"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-serif font-bold text-primary mb-1">
                    10K+
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Happy Clients
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
