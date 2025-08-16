"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Zap,
  Shield,
  BarChart3,
  Smartphone,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Smart Health Monitoring",
    description:
      "Advanced AI-powered health tracking and monitoring for better patient outcomes.",
    color: "bg-teal-500",
  },
  {
    icon: Zap,
    title: "Seamless Integration",
    description:
      "Connect patients, doctors, and healthcare providers in one unified platform.",
    color: "bg-teal-500",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Enterprise-grade security ensuring your health data remains private and protected.",
    color: "bg-teal-500",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Powerful insights and analytics to help healthcare providers make informed decisions.",
    color: "bg-teal-500",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Designed for mobile devices with intuitive user experience across all platforms.",
    color: "bg-teal-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock support to ensure uninterrupted healthcare services.",
    color: "bg-teal-500",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Discover the innovative features that make Monavi the future of
            healthcare technology
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, 0, 0, 0] }}
                transition={{ duration: 0.1 }}
                className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
