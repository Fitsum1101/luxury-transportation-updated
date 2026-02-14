'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-secondary/30 backdrop-blur-sm">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <div className="relative w-40 h-14">
                  <Image
                    src="/logo.png"
                    alt="Trust Luxury Transportation"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium transportation services since 2014
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif font-semibold mb-4 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { text: 'Home', href: '/' },
                { text: 'About Us', href: '/about-us' },
                { text: 'Services', href: '/services' },
                { text: 'Book Now', href: '/book-now' },
              ].map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif font-semibold mb-4 text-primary">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+17038681811"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-primary" />
                +1 (703) 868-1811
              </a>
              <a
                href="mailto:contact@trustluxurytransportation.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-primary" />
                contact@trust.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>7918 Jones Branch Dr, McLean, VA 22102</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif font-semibold mb-4 text-primary">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <motion.button
                    key={social.label}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8"
        />

        {/* Copyright */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Trust Luxury Transportation. All Rights Reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
