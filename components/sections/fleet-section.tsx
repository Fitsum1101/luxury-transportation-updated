"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StaggerContainer, StaggerItem } from "../animated-section";

interface FleetVehicle {
  type: string;
  capacity: string;
  luggage: string;
  imageUrl: string;
}

interface FleetSectionProps {
  fleet: FleetVehicle[];
}

export function FleetSection({ fleet }: FleetSectionProps) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="premium-subheading mb-4">Our Fleet</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Newest luxury vehicles, meticulously maintained and immaculately
            clean
          </p>
        </motion.div>

        {/* Fleet Grid */}
        <StaggerContainer staggerDelay={0.12}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleet.map((vehicle, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="group cursor-pointer overflow-hidden rounded-2xl"
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-muted">
                    <Image
                      src={vehicle.imageUrl}
                      alt={vehicle.type}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent" />

                    {/* Vehicle Info Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-serif font-bold text-xl mb-3 text-primary">
                        {vehicle.type}
                      </h3>

                      <div className="space-y-2 text-sm text-foreground">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Capacity:
                          </span>
                          <span className="font-semibold">
                            {vehicle.capacity}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Luggage:
                          </span>
                          <span className="font-semibold">
                            {vehicle.luggage}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Accent */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
