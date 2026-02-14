'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'

export default function BookNowPage() {
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
          <h1 className="premium-heading mb-4">Book Your Ride</h1>
          <p className="text-lg text-muted-foreground">
            Simple, secure, and convenient booking experience
          </p>
        </motion.div>
      </section>

      {/* Booking Form Placeholder */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center"
        >
          <h2 className="font-serif font-semibold text-2xl mb-4">
            Premium Booking Experience
          </h2>
          <p className="text-muted-foreground mb-8">
            Our booking interface features step-by-step journey planning,
            vehicle selection, and secure payment processing.
          </p>
          <div className="inline-block px-8 py-3 bg-primary/10 rounded-lg text-primary font-semibold">
            Interactive Form Coming Soon
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
