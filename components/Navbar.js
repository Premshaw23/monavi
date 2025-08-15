"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Header() {
  const navItems = ["Home", "Features", "About", "Contact"];
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      } bg-white/80`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10">
              <Image src="/logo.png" alt="Monavi" width={50} height={50} />
            </div>
            <span className="text-2xl font-bold text-slate-800 tracking-wide">
              MONAVI
            </span>
          </motion.div>

          {/* Navigation */}
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
                  setActive(item);
                  const section = document.getElementById(item.toLowerCase());
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item}
                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-teal-600 transition-all duration-300 ${
                    active === item ? "w-full" : "w-0"
                  }`}
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu placeholder */}
          <div className="md:hidden">
            {/* You can add a hamburger menu here later */}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
