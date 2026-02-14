"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Book Now", href: "/book-now" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Fleet", href: "/fleet" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Floating Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "top-4" : "top-0"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <div
          className={`${
            scrolled ? "mx-6 md:mx-12 rounded-xl" : "mx-0"
          } glass-card px-6 md:px-12 py-4 transition-all duration-300`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo.png"
                alt="Trust Luxury Transportation"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm uppercase tracking-wide hover:text-primary transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors duration-200"
                  aria-label="Toggle theme"
                  type="button"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-primary" />
                  ) : (
                    <Moon className="w-5 h-5 text-primary" />
                  )}
                </motion.button>
              )}

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{ height: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-4 pt-6 border-t border-border mt-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm uppercase tracking-wide hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Spacer */}
      <div className="h-24" />
    </>
  );
}
