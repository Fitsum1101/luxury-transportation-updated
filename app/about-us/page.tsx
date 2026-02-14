'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animated-section'
import data from '@/lib/data.json'
import { Check } from 'lucide-react'

export default function AboutUsPage() {
  const { aboutUs } = data.pages

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-24 pb-12 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="premium-heading mb-4">{aboutUs.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Excellence, trust, and luxury transportation since 2014
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <AnimatedSection direction="right">
            <div className="space-y-6">
              <h2 className="premium-subheading">{aboutUs.title}</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {aboutUs.text}
              </p>
            </div>
          </AnimatedSection>

          {/* Image with Stats Overlay */}
          <AnimatedSection direction="left">
            <div className="relative h-96 rounded-2xl overflow-hidden group">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="About Trust Luxury Transportation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              
              {/* Stats Overlay */}
              <div className="absolute inset-0 flex items-end p-8">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <motion.div
                    className="glass-card p-6 text-center"
                    whileHover={{ y: -8 }}
                  >
                    <div className="text-3xl font-serif font-bold text-primary mb-1">
                      {aboutUs.stats.yearsOfExperience}
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      Years of Service
                    </p>
                  </motion.div>

                  <motion.div
                    className="glass-card p-6 text-center"
                    whileHover={{ y: -8 }}
                  >
                    <div className="text-3xl font-serif font-bold text-primary mb-1">
                      {aboutUs.stats.satisfiedClients}
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      Satisfied Clients
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="premium-subheading mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              The principles guiding every service we provide
            </p>
          </motion.div>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-2 gap-6">
              {aboutUs.values.map((value, idx) => (
                <StaggerItem key={idx}>
                  <motion.div
                    className="glass-card p-6 flex items-start gap-4"
                    whileHover={{ x: 8 }}
                  >
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground leading-relaxed">{value}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </main>
  )
}
