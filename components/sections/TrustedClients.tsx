"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const clients = [
  { name: "Client 1", logo: "/client-logo-1.jpg" },
  { name: "Client 2", logo: "/client-logo-2.jpg" },
  { name: "Client 3", logo: "/client-logo-3.jpg" },
  { name: "Client 4", logo: "/client-logo-4.jpg" },
  { name: "Client 5", logo: "/client-logo-5.jpg" },
  { name: "Client 6", logo: "/client-logo-6.jpg" },
];

export function TrustedClients() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isHovering) {
        scrollPosition += scrollSpeed;
        scrollContainer.scrollLeft = scrollPosition;

        // Reset to start when reaching the end
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollPosition = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovering]);

  return (
    <section className="py-24 lg:py-32 overflow-hidden bg-black/20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-white">
            Our Trusted Clients
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-6"
            style={{ backgroundColor: "#CBB26A" }}
          ></div>
        </motion.div>

        {/* Logo Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex gap-12 overflow-x-auto scrollbar-hide py-4"
            style={{
              scrollBehavior: "smooth",
              WebkitScrollbar: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Duplicate clients for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-40 h-32 flex items-center justify-center rounded-lg transition-all duration-300 group border border-white/10 hover:border-[#CBB26A] bg-card/30 hover:bg-card/50"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain px-6 transition-all duration-300 filter grayscale hover:grayscale-0"
                  style={{
                    filter: "grayscale(100%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLImageElement).style.filter =
                      `grayscale(0%) drop-shadow(0 0 8px rgba(203, 178, 106, 0.3))`;
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLImageElement).style.filter =
                      "grayscale(100%)";
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Gradient Fade Left */}
          <div
            className="absolute left-0 top-0 bottom-0 w-12 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(17, 13, 9, 0.8), transparent)",
            }}
          ></div>

          {/* Gradient Fade Right */}
          <div
            className="absolute right-0 top-0 bottom-0 w-12 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, rgba(17, 13, 9, 0.8), transparent)",
            }}
          ></div>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
