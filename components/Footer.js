"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ];

  return (
    <footer className="bg-[#1a365d] text-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold">MONAVI</span>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Revolutionizing healthcare technology with innovative solutions
              that connect patients, doctors, and healthcare providers
              seamlessly.
            </p>

            {/* Social Media Links */}
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Social Media Links
            </h3>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/monavimed",
                },
                { icon: Twitter, href: "https://x.com/MonaviMed" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/monavimed",
                },
                {
                  icon: Facebook,
                  href: "https://www.linkedin.com/company/monavimed",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("/") ? (
                    // Redirect to pages
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    // Scroll to section
                    <motion.button
                      onClick={() => {
                        const section = document.getElementById(
                          link.href.replace("#", "")
                        );
                        if (section)
                          section.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-left"
                      whileHover={{ x: 3 }}
                    >
                      {link.name}
                    </motion.button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Contact Us
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                <span className="text-gray-300">monavimed@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                <span className="text-gray-300">+91 7597733862</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 mt-1" />
                <span className="text-gray-300">
                  Anant Apartment Kamala Nagar
                  <br />
                  Bhopal, Madhya Pradesh 462003, India
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 mt-6 pt-4 flex flex-col sm:flex-row justify-center items-center text-sm sm:text-base"
        >
          <p className="text-gray-400 mb-3 sm:mb-0">
            {/* © {new Date().getFullYear()} MONAVI. All rights reserved. */}
          </p>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.div>
            <span>for better healthcare.</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
