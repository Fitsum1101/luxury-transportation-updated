"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../animated-section";
import { Sparkles } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  iconImage?: string;
}

interface FeaturesGridProps {
  features: Feature[];
}

export function FeaturesSection({ features }: FeaturesGridProps) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
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
          <h2 className="premium-subheading mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover what sets Trust Luxury Transportation apart
          </p>
        </motion.div>

        {/* Features Grid */}
        <StaggerContainer staggerDelay={0.15}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {features.map((feature, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="glass-card p-8 h-full flex flex-col group cursor-pointer"
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/40 transition-colors duration-300">
                    <Sparkles className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  {/* Bottom Accent */}
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mt-6"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
