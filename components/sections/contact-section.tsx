'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { AnimatedSection } from '../animated-section'

interface ContactSectionProps {
  title: string
  phone: string
  email: string
  address: string
}

export function ContactSection({
  title,
  phone,
  email,
  address,
}: ContactSectionProps) {
  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: phone,
      link: `tel:${phone}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: email,
      link: `mailto:${email}`,
    },
    {
      icon: MapPin,
      label: 'Address',
      value: address,
      link: '#',
    },
  ]

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="premium-subheading mb-4">{title}</h2>
          <p className="text-muted-foreground">
            Get in touch for bookings and inquiries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="space-y-6">
            {contactItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <motion.a
                    href={item.link}
                    className="glass-card p-8 flex items-start gap-6 group hover:border-primary/50 transition-all duration-300"
                    whileHover={{ x: 8 }}
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/40 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                        {item.label}
                      </p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                </AnimatedSection>
              )
            })}
          </div>

          {/* Map Placeholder with Background */}
          <AnimatedSection direction="left">
            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden group"
              whileHover={{ y: -8 }}
            >
              <Image
                src="/hero-bg.jpg"
                alt="Service Coverage Area"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mb-4"
                  >
                    <MapPin className="w-12 h-12 text-primary mx-auto" />
                  </motion.div>
                  <p className="text-foreground font-semibold">
                    Washington DC Metro Area<br />Maryland & Virginia
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-6">
            Ready to book your ride?
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/book-now"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              Book Online Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
