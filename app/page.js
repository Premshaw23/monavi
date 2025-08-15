"use client";
import { HeroSection } from "@/components/Hero";
import { FeaturesSection } from "@/components/Feature";
import { Footer } from "@/components/Footer";
import ScrollToTop from "@/components/scroll-to-top";
import { AboutSection } from "@/components/about-section";
import ContactForm from "@/components/contact-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection/>
        <ContactForm/>
      </main>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}
