"use client";

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

  // Update active link on scroll
  useEffect(() => {
    const handleScrollActive = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const top = section.getBoundingClientRect().top - 80; // adjust header height
          const bottom = top + section.offsetHeight;
          if (top <= 0 && bottom > 0) {
            setActive(item);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollActive);
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  const handleLinkClick = (id) => {
    setActive(id);

    const section = document.getElementById(id.toLowerCase());
    if (section) {
      const headerOffset = 64; // height of fixed header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/logo.png"
              alt="Monavi"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-2xl font-bold text-slate-800 tracking-wide">
              MONAVI
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative text-slate-700 font-medium transition-colors duration-300 hover:text-teal-600 ${
                  active === item ? "text-teal-600" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item);
                }}
              >
                {item}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-teal-600 transition-all duration-300 ${
                    active === item ? "w-full" : "w-0"
                  }`}
                />
              </a>
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
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
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
        </div>
      )}
    </header>
  );
}
