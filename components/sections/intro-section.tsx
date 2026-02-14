"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "../animated-section";
import { PhoneIcon } from "lucide-react";

interface IntroSectionProps {
  text: string;
  cta: {
    text: string;
    link: string;
  };
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function IntroSection({ text, cta }: IntroSectionProps) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <AnimatedSection direction="right">
          <div className="space-y-6">
            <h2 className="premium-subheading text-foreground">
              Only The Finest Luxury Transport
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
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            >
              {/* Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={"/"}
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
                >
                  BOOK ONLINE
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={"tel:+17038681811"}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold uppercase tracking-wide hover:bg-primary/10 transition-all duration-300"
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  +1 (703) 868-1811
                </Link>
              </motion.div>
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
  );
}
