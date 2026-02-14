"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { StaggerContainer, StaggerItem } from "../animated-section";
import { ArrowRight } from "lucide-react";

interface Service {
  name: string;
  description: string;
  cta: {
    text: string;
    link: string;
  };
}

interface ServicesSectionProps {
  title: string;
  servicesList: Service[];
}

export function ServicesSection({ title, servicesList }: ServicesSectionProps) {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute -top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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
          <h2 className="premium-subheading mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Trust Luxury Transportation, we deliver a refined and reliable
            travel experience through a wide range of professional black car and
            chauffeur services. Serving Washington D.C., Northern Virginia, and
            Maryland, we offer transportation solutions designed for comfort,
            punctuality, and class.
          </p>
        </motion.div>

        {/* Services Grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="glass-card p-8 flex flex-col h-full group hover:border-primary/50 transition-all duration-300"
                  whileHover={{ y: -8 }}
                >
                  {/* Service Name */}
                  <h3 className="font-serif font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* CTA Link */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={service.cta.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all duration-300 group"
                    >
                      {service.cta.text}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
