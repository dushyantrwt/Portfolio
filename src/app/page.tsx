'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Home Page Component
 * 
 * Features:
 * - Consistent dark theme with proper layout management
 * - Fixed navigation with z-index hierarchy
 * - Proper section spacing to prevent overlaps
 * - Responsive design system
 * - Smooth scrolling navigation
 */

export default function HomePage() {
  return (
    <main className="relative bg-primary-dark min-h-screen">
      {/* Skip to content for accessibility */}
      <a 
        href="#hero"
        className="skip-to-content"
        tabIndex={0}
      >
        Skip to main content
      </a>

      {/* Navigation - Fixed header with proper z-index */}
      <Navigation />

      {/* Main content with proper offset for fixed navigation */}
      <div className="main-content">
        {/* Hero Section - Landing/Introduction */}
        <section id="hero" className="section relative overflow-hidden">
          <Hero />
        </section>

        {/* About Section - Personal info, education, skills */}
        <section id="about" className="section relative overflow-hidden bg-secondary-dark/50">
          <div className="container-custom">
            <About />
          </div>
        </section>

        {/* Resume Section - Professional background and skills */}
        <section id="resume" className="section relative overflow-hidden">
          <Resume />
        </section>

        {/* Achievements Section - Awards and recognitions */}
        <section id="achievements" className="section relative overflow-hidden">
          <Achievements />
        </section>

        {/* Projects Section - Portfolio showcase */}
        <section id="projects" className="section relative overflow-hidden bg-secondary-dark/30">
          <div className="container-custom">
            <Projects />
          </div>
        </section>

        {/* Experience Section - Work history */}
        <section id="experience" className="section relative overflow-hidden">
          <div className="container-custom">
            <Experience />
          </div>
        </section>

        {/* Contact Section - Get in touch */}
        <section id="contact" className="section relative overflow-hidden bg-secondary-dark/30">
          <div className="container-custom">
            <Contact />
          </div>
        </section>

        {/* Footer - Links and copyright */}
        <footer className="relative z-content">
          <Footer />
        </footer>
      </div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 z-background pointer-events-none">
        {/* Subtle geometric patterns */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-accent-gold/10 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-2 border-light-blue/10 rotate-45"></div>
        <div className="absolute top-1/2 right-1/6 w-48 h-48 bg-accent-gold/5 rounded-full blur-3xl"></div>
      </div>
    </main>
  );
}