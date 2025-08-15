"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AboutSection() {
  const [showModal, setShowModal] = useState(false);

  const handleJoinClick = () => setShowModal(true);

  const handleOptionClick = () => {
    setShowModal(false);
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background particles */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
      >
        <div className="absolute w-64 h-64 bg-teal-300 rounded-full opacity-20 top-10 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-teal-400 rounded-full opacity-10 bottom-20 right-20 animate-pulse"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Logo / Illustration */}
          <motion.div
            className="flex justify-center lg:justify-start relative"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full bg-white/20 backdrop-blur-md border-4 border-teal-600 flex items-center justify-center shadow-2xl relative overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center relative z-10">
                  <motion.div
                    className="relative mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/logo.png"
                      width={200}
                      height={200}
                      alt="Monavi"
                    />
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-800 tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                  >
                    MONAVI
                  </motion.h3>
                </div>

                {/* Glow / particles */}
                <motion.div
                  className="absolute -top-4 -right-4 w-3 h-3 bg-teal-400 rounded-full"
                  animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-2 h-2 bg-teal-500 rounded-full"
                  animate={{ y: [10, -10, 10], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute top-1/2 -left-8 w-4 h-4 bg-teal-300 rounded-full"
                  animate={{ x: [-5, 5, -5], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8 relative z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 text-transparent bg-clip-text leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              About Monavi
            </motion.h2>

            <motion.div
              className="space-y-6 text-lg text-slate-600 leading-relaxed bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p>
                We are a passionate team of healthcare professionals and
                technology experts dedicated to revolutionizing the healthcare
                industry through innovative digital solutions.
              </p>

              <p>
                Our mission is to bridge the gap between patients and healthcare
                providers, making quality healthcare accessible, efficient, and
                personalized for everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <Button
                className="bg-gradient-to-r cursor-pointer from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleJoinClick}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Our Journey
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800">
              Join Monavi
            </h3>
            <p className="text-slate-600 mb-6">
              Choose how you’d like to get involved:
            </p>
            <div className="flex flex-col gap-4">
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold shadow"
                onClick={handleOptionClick}
              >
                Employee / Intern
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow"
                onClick={handleOptionClick}
              >
                Investor
              </Button>
            </div>
            <button
              className="mt-6 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
