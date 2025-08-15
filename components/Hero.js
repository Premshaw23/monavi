"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Rocket, Heart } from "lucide-react";

export function HeroSection() {
  const floatingIcons = [
    { icon: Rocket, top: "10%", left: "5%", rotate: -15 },
    { icon: Heart, top: "30%", left: "80%", rotate: 10 },
    { icon: Rocket, top: "70%", left: "50%", rotate: -5 },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20 lg:py-32"
    >
      {/* Background particles / gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-teal-300 via-teal-200 to-teal-400 rounded-full opacity-20 top-[-50px] left-[-50px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-teal-500 via-teal-300 to-teal-400 rounded-full opacity-10 bottom-[-100px] right-[-100px]"
        />
      </div>

      <div
        className="relative max-w-[90rem] md:mx-auto px-4 sm:px-8 lg:px-16 
    flex flex-col lg:flex-row items-center gap-6 sm:gap-8"
      >
        {/* Right Column */}
        <div className="flex-1 lg:basis-[45%] min-w-0 relative flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              delay: 0.4,
              duration: 1.2,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            whileHover={{
              scale: 1.05,
              rotate: [0, -1, 1, 0],
              transition: { duration: 0.6 },
            }}
            className="relative w-full max-w-md sm:max-w-lg lg:max-w-lg"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/Banner.png"
                alt="Monavi"
                width={750}
                height={750}
                style={{ objectFit: "cover" }}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>

            {/* Floating Icons */}
            {floatingIcons.map((icon, idx) => {
              const IconComponent = icon.icon;
              return (
                <motion.div
                  key={idx}
                  className="absolute w-8 h-8 text-teal-400"
                  style={{ top: icon.top, left: icon.left }}
                  animate={{ y: [0, -5, 0], rotate: [0, icon.rotate, 0] }}
                  transition={{
                    duration: 3 + idx,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <IconComponent className="w-8 h-8" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Left Column */}
        <div className="flex-1 lg:basis-[55%] min-w-0 flex flex-col gap-6 order-2 lg:order-1">
          {/* App Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative inline-flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md overflow-hidden max-w-max"
          >
            {/* Shine Effect */}
            <span className="absolute top-0 left-[-50%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-[shine_1.5s_infinite]"></span>

            <Rocket className="w-4 h-4 relative z-10" />
            <span className="relative z-10">App Coming Soon</span>
          </motion.div>

          {/* Two-line Heading with Glow */}
          <div className="relative space-y-4 mb-5">
            {/* Glow Layer */}
            <span className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-teal-200 to-teal-400 opacity-30 rounded-2xl blur-3xl z-0"></span>

            {/* First line */}
            <motion.h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#1a365d] leading-snug uppercase z-10">
              REVOLUTIONIZING
            </motion.h1>
            <motion.h1
              className="relative text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-snug 
  bg-gradient-to-r from-teal-800 to-teal-400 text-transparent bg-clip-text z-10"
            >
              Healthcare Technology
            </motion.h1>
          </div>

          {/* Glassmorphism Description Card with Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative max-w-full sm:max-w-2xl"
          >
            {/* Glow Layer */}
            <span className="absolute -inset-2 bg-gradient-to-r from-teal-400 via-teal-200 to-teal-400 opacity-20 rounded-2xl blur-3xl z-0"></span>

            {/* Glass Card */}
            <div className="relative bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg border border-white/10 z-10">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Monavi is building the future of healthcare with innovative
                technology solutions that connect patients, doctors, and
                healthcare providers seamlessly.
              </p>
            </div>
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 mt-5 sm:mt-7">
            {/* Primary Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer inline-flex items-center justify-center px-6 sm:px-10 py-3 rounded-xl font-semibold text-white overflow-hidden group"
            >
              {/* Rotating Gradient */}
              <span className="absolute -inset-1 bg-gradient-to-r from-teal-900 via-teal-600 to-teal-400 rounded-xl blur-xl opacity-50 animate-spin-slow"></span>

              {/* Inner Background */}
              <span className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 rounded-xl transition-all duration-500 group-hover:from-teal-600 group-hover:to-teal-400"></span>

              {/* Shine Effect */}
              <span className="absolute top-0 left-[-50%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-[shine_1s_infinite]"></span>

              {/* Button Text */}
              <span className="relative z-10">Join Waitlist</span>
            </motion.button>

            {/* Outline Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const section = document.getElementById("features");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative inline-flex cursor-pointer items-center justify-center px-6 sm:px-10 py-3 rounded-xl font-semibold text-teal-600 border-2 border-transparent overflow-hidden group"
            >
              {/* Gradient Border */}
              <span className="absolute -inset-1 bg-gradient-to-r from-teal-900 via-teal-600 to-teal-400 rounded-xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></span>

              {/* Inner Background */}
              <span className="absolute inset-0 bg-white/10 rounded-xl transition-all duration-500"></span>

              {/* Shine Effect */}
              <span className="absolute top-0 left-[-50%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-[shine_1s_infinite]"></span>

              {/* Text */}
              <span className="relative z-10">Learn More</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
