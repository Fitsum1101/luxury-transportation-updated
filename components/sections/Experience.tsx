"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle, Sparkles, PhoneIcon } from "lucide-react";

const experiences = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "We operate around the clock to ensure you're never left waiting.",
    phone: "+1 (703) 868-1811",
    label: "Call Us",
  },
  {
    icon: CheckCircle,
    title: "On-Time, Every Time",
    description:
      "Punctuality is our promise. We value your time and ensure timely pickups and drop-offs.",
  },
  {
    icon: Sparkles,
    title: "Luxury Fleet",
    description:
      "Choose from our stylish selection of premium vehicles for a truly first-class experience.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export function Experience() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Experience Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {experiences.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="group">
                {/* Card */}
                <div className="relative h-full rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300 border hover:border-[#CBB26A] border-[#CBB26A]/50 bg-card/30 hover:bg-card/50">
                  {/* Icon Container */}
                  <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300">
                      <IconComponent
                        size={32}
                        style={{ color: "#CBB26A" }}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold mb-4 text-center">
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-12 h-0.5 mx-auto mb-6"></div>

                  {/* Description */}
                  <p className="text-center text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Phone Number (for first card only) */}
                  {item.phone && (
                    <div
                      className="pt-6 border-t"
                      style={{ borderColor: "rgba(203, 178, 106, 0.2)" }}
                    >
                      <p className="text-xs font-medium tracking-widest uppercase mb-2">
                        {item.label}
                      </p>
                      <p
                        className="text-xl font-bold font-serif"
                        style={{ color: "#CBB26A" }}
                      >
                        <PhoneIcon className="inline mr-2" size={16} />
                        {item.phone}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
