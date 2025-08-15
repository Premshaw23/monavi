"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-20 mt-10">
      <div className="max-w-[90rem] mx-auto py-10 px-6 sm:px-12 lg:px-16 flex items-center gap-12">
        {/* Left Column - 55% */}
        <div className="flex-1" style={{ flexBasis: "55%" }}>
          {/* App Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-teal-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md mb-6"
          >
            <Rocket className="w-4 h-4" />
            <span>App Coming Soon</span>
          </motion.div>

          {/* Headings */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight"
            >
              Revolutionizing
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-teal-800 to-teal-400 text-transparent bg-clip-text"
            >
              Healthcare Technology
            </motion.h1>
          </div>

          {/* Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gray-200/20 backdrop-blur-md p-4 rounded-xl shadow-md mt-8 max-w-[40rem]"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              Monavi is building the future of healthcare with innovative
              technology solutions that connect patients, doctors, and
              healthcare providers seamlessly.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join Waitlist
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 text-slate-700 hover:border-teal-600 hover:text-teal-600 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 bg-transparent"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - 45% */}
        <div
          className="flex-1 flex justify-center"
          style={{ flexBasis: "45%" }}
        >
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
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/Banner.png"
                alt="Monavi"
                width={700}
                height={700}
                style={{ objectFit: "cover" }}
                className="rounded-xl shadow-xl shadow-gray-600"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
