"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const navItems = ["Home", "Features", "About", "Contact"];
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (item) => {
    setActive(item);
    const section = document.getElementById(item.toLowerCase());
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false); // close mobile menu
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 relative">
              <Image
                src="/logo.png"
                alt="Monavi"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-full"
              />
            </div>
            <span className="text-2xl font-bold text-slate-800 tracking-wide">
              MONAVI
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative text-slate-700 font-medium transition-colors duration-300 hover:text-teal-600 ${
                  active === item ? "text-teal-600" : ""
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item);
                }}
              >
                {item}
                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-teal-600 transition-all duration-300 ${
                    active === item ? "w-full" : "w-0"
                  }`}
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-slate-800" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg"
        >
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item}
                className={`text-left text-slate-700 font-medium py-2 hover:text-teal-600 transition-colors duration-300 ${
                  active === item ? "text-teal-600" : ""
                }`}
                onClick={() => handleLinkClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
