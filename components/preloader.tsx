'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="relative flex flex-col items-center gap-8">
        {/* Gold Loader Animation */}
        <div className="relative w-16 h-16">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 border-2 border-transparent border-t-primary border-r-primary rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-2 border border-primary/30 rounded-full"
          />
        </div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative w-48 h-16"
        >
          <Image
            src="/logo.png"
            alt="Trust Luxury Transportation"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
