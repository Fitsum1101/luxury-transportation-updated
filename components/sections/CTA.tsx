"use client";

import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export function CTA() {
  return (
    <section
      className="relative py-32 sm:py-40 lg:py-48 overflow-hidden "
      style={{ backgroundColor: "#110D09" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/3 -left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: "rgba(203, 178, 106, 0.1)" }}
        ></div>
        <div
          className="absolute -bottom-1/3 -right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: "rgba(203, 178, 106, 0.1)" }}
        ></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main CTA */}
          <h2
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 pb-6 inline-block"
            style={{ color: "#F5F5F3" }}
          >
            Free Consultation?
          </h2>

          <p
            className="text-lg mb-12 leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#D6D6D6" }}
          >
            Book Your Luxury Car Service Now.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center sm:justify-center gap-5"
            >
              <Link
                href={"/"}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
              >
                BOOK ONLINE
              </Link>

              {/* Secondary CTA */}

              <Link
                href={"tel:+17038681811"}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold uppercase tracking-wide hover:bg-primary/10 transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                +1 (703) 868-1811
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
