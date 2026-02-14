'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactSection } from '@/components/sections/contact-section'
import { motion } from 'framer-motion'
import data from '@/lib/data.json'

export default function ContactPage() {
  const { contact } = data.pages

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
          <h1 className="premium-heading mb-4">{contact.title}</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with our luxury transportation specialists
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <ContactSection
        title={contact.title}
        phone={contact.phone}
        email={contact.email}
        address={contact.address}
      />

      <Footer />
    </main>
  )
}
