"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function SafetyConvenience() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#110D09",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start relative">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            {/* Section Title */}
            <h2
              className="font-serif text-5xl sm:text-6xl font-bold mb-6 leading-tight"
              style={{ color: "#F5F5F3" }}
            >
              We Care Of Your Safety And Convenience
            </h2>

            {/* Gold Divider */}
            <div
              className="w-20 h-1 mb-10"
              style={{ backgroundColor: "#CBB26A" }}
            ></div>

            {/* Feature Block */}
            <div className="mb-12">
              <h3
                className="font-serif text-2xl sm:text-3xl font-bold mb-4"
                style={{ color: "#CBB26A" }}
              >
                Premium Drivers
              </h3>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "#D6D6D6" }}
              >
                All of our chauffeurs are professionally trained. That means we
                guarantee that your professional chauffeur is of the highest
                quality for both safety and hospitality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-5">
              {/* Book Online Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(203, 178, 106, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-md font-semibold text-lg transition-all duration-300 shadow-lg"
                style={{ backgroundColor: "#CBB26A", color: "#110D09" }}
              >
                BOOK ONLINE
              </motion.button>

              {/* Phone Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+17038681811"
                className="px-10 py-4 rounded-md font-semibold text-lg transition-all duration-300 flex items-center gap-2"
                style={{
                  border: "2px solid #CBB26A",
                  color: "#CBB26A",
                  backgroundColor: "transparent",
                }}
              >
                <Phone size={22} />
                +1 (703) 868-1811
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Two Stacked Images */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Image 1: Chauffeur Opening Door - Safety & Professionalism */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src="/chauffeur.jpg"
                alt="Professional chauffeur opening luxury vehicle door"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* Image 2: Vehicle Interior - Comfort & Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src="/Gemini_Generated_Image_11v6mm11v6mm11v6.png"
                alt="Luxury vehicle interior with premium amenities"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
