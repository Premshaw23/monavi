"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-teal-400/30 rounded-full blur-3xl top-[-100px] left-[-200px]"
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl bottom-[-150px] right-[-150px]"
          animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Logo / illustration */}
          <motion.div
            className="flex justify-center lg:justify-start relative"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-80 h-80 rounded-full bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl flex items-center justify-center relative"
              whileHover={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Image
                src="/monavi_logo_trans.png"
                width={220}
                height={220}
                alt="Monavi"
                className="drop-shadow-xl"
              />
              {/* Floating accents */}
              <motion.span
                className="absolute w-3 h-3 bg-teal-500 rounded-full top-6 right-8 shadow-lg"
                animate={{ y: [-8, 8, -8], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.span
                className="absolute w-4 h-4 bg-blue-500 rounded-full bottom-8 left-6 shadow-lg"
                animate={{ y: [8, -8, 8], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="space-y-8 relative z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">
                About MONAVI
              </span>
              <motion.div
                className="h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-3"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </h2>

            <motion.div
              className="space-y-6 text-lg text-slate-600 leading-relaxed bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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

            <Button
              className="bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleJoinClick}
            >
              Join Our Journey
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-800">
                Join Monavi
              </h3>
              <p className="text-slate-600 mb-6">
                Choose how you’d like to get involved:
              </p>
              <div className="flex flex-col gap-4">
                <Button
                  className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white px-6 py-3 rounded-full font-semibold shadow"
                  onClick={handleOptionClick}
                >
                  Employee / Intern
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-full font-semibold shadow"
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
