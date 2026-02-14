"use client";

import { motion } from "framer-motion";

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
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 pb-6  inline-block"
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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(203, 178, 106, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg"
              style={{ backgroundColor: "#CBB26A", color: "#110D09" }}
            >
              BOOK ONLINE
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 border-2"
              style={{
                borderColor: "#CBB26A",
                color: "#CBB26A",
                backgroundColor: "transparent",
              }}
            >
              +1 (703) 868-1811
            </motion.button>
          </motion.div>
          {/* Trust Indicators
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t flex flex-col sm:flex-row gap-8 justify-around items-center"
            style={{ borderColor: "rgba(203, 178, 106, 0.3)" }}
          >
            <div className="text-center">
              <p
                className="text-3xl font-serif font-bold"
                style={{ color: "#CBB26A" }}
              >
                157 k
              </p>
              <p className="text-sm mt-2" style={{ color: "#D6D6D6" }}>
                Satisfied clients
              </p>
            </div>
            <div className="text-center">
              <p
                className="text-3xl font-serif font-bold"
                style={{ color: "#CBB26A" }}
              >
                10 +
              </p>
              <p className="text-sm mt-2" style={{ color: "#D6D6D6" }}>
                Years of experience
              </p>
            </div>
            <div className="text-center">
              <p
                className="text-3xl font-serif font-bold"
                style={{ color: "#CBB26A" }}
              >
                98%
              </p>
              <p className="text-sm mt-2" style={{ color: "#D6D6D6" }}>
                Satisfaction Rate
              </p>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
