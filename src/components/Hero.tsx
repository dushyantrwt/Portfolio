'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import { personalInfo, socialLinks } from '@/data/portfolio';

// Wolf icon component moved outside for performance
const WolfIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="text-white"
  >
    <path d="M12 2L14 8L20 8L15 12L17 18L12 15L7 18L9 12L4 8L10 8L12 2Z" fill="currentColor"/>
    <circle cx="8" cy="10" r="1" fill="currentColor"/>
    <circle cx="16" cy="10" r="1" fill="currentColor"/>
    <path d="M8 14L12 12L16 14"/>
  </svg>
);

/**
 * Modern Hero Section Component
 * 
 * Features:
 * - Deep navy gradient background with geometric patterns
 * - Bold typography with light blue highlights and glow effects
 * - Rotating typing animation for multiple titles
 * - Inspirational quote
 * - EXPLORE MY TERRITORY CTA with wolf icon
 * - Social media icons with float animations
 * - Circular profile photo with golden border
 * - Scroll down indicator positioned in hero section
 */

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Rotating titles functionality
  const titles = [
    "Full Stack Developer",
    "React.js Developer", 
    "Next.js Specialist",
    "UI/UX Designer",
    "JavaScript Expert",
    "Frontend Developer",
    "Web Developer",
    "Software Engineer"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds
    
    return () => clearInterval(interval);
  }, [titles.length]);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.5 }
    }
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 1.5 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 2 }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <>
      {/* Custom CSS styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .typing-container {
            height: 1.8em;
            display: flex;
            align-items: center;
            position: relative;
          }
          
          .typing-text {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            border-right: 2px solid #ffa500;
            animation: typing 1.5s ease-out, blink-cursor 1s infinite;
          }
          
          .rotating-titles {
            animation: fadeInOut 3s ease-in-out infinite;
          }
          
          .glow-text {
            text-shadow: 0 0 20px rgba(255, 165, 0, 0.6), 0 0 40px rgba(255, 165, 0, 0.4);
            animation: glow-pulse 2s ease-in-out infinite alternate;
          }
          
          .float-social {
            animation: float-gentle 3s ease-in-out infinite;
          }
          
          @keyframes typing {
            0% { width: 0; }
            100% { width: 100%; }
          }
          
          @keyframes blink-cursor {
            0%, 50% { border-color: #ffa500; }
            51%, 100% { border-color: transparent; }
          }
          
          @keyframes fadeInOut {
            0%, 20% { opacity: 1; transform: translateY(0); }
            25%, 75% { opacity: 0; transform: translateY(-10px); }
            80%, 100% { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes glow-pulse {
            0% { text-shadow: 0 0 20px rgba(255, 165, 0, 0.6), 0 0 40px rgba(255, 165, 0, 0.4); }
            100% { text-shadow: 0 0 30px rgba(255, 165, 0, 0.8), 0 0 60px rgba(255, 165, 0, 0.6); }
          }
          
          @keyframes float-gentle {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
        `
      }} />
      
      <section 
        id="hero" 
        className="h-screen flex items-center justify-center relative overflow-hidden bg-primary-dark -mt-20 mb-0"
      >
      {/* Geometric Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave patterns */}
        <svg className="absolute bottom-0 left-0 w-full h-32 text-blue-900/20" viewBox="0 0 1200 200">
          <path d="M0,100 C300,150 600,50 900,100 C1050,125 1150,75 1200,100 L1200,200 L0,200 Z" fill="currentColor"/>
        </svg>
        
        {/* Floating geometric shapes with enhanced animations */}
        <motion.div 
          className="absolute top-12 right-12 w-10 h-10 border-2 border-accent-gold/30 rotate-45"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute top-24 left-8 w-5 h-5 bg-light-blue/20 rounded-full"
          animate={floatingAnimation}
          transition={{ delay: 0.5, duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-24 right-16 w-6 h-6 border border-light-blue/40 rounded-full"
          animate={floatingAnimation}
          transition={{ delay: 1, duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Abstract dot pattern */}
        <div className="absolute top-6 left-6 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-12 w-1 h-1 bg-accent-gold/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-12 left-20 w-1.5 h-1.5 bg-light-blue/25 rounded-full animate-pulse"></div>
      </div>

      <div className="container-custom relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center min-h-[65vh] -mt-8">
          {/* Left Content */}
          <motion.div 
            className="text-left max-w-xl lg:max-w-2xl flex flex-col justify-center order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main heading with glow effect */}
            <motion.h1 
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-2 lg:mb-3 leading-tight"
              variants={titleVariants}
            >
              Hello, I&apos;m{' '}
              <span className="text-accent-gold glow-text">
                {personalInfo.name.split(' ')[0]}
              </span>
            </motion.h1>

            {/* Professional title with rotating titles */}
            <motion.div 
              className="typing-container text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary mb-2 lg:mb-3 font-semibold"
              variants={itemVariants}
            >
              <div className="typing-text rotating-titles" key={currentTitleIndex}>
                {titles[currentTitleIndex]}
              </div>
            </motion.div>

            {/* Inspirational Quote with slide-up animation */}
            <motion.p 
              className="text-xs sm:text-sm md:text-base text-text-muted mb-3 lg:mb-4 italic border-l-4 border-accent-gold pl-2 lg:pl-3"
              variants={quoteVariants}
            >
              &ldquo;Every line of code is a step towards turning imagination into reality. I believe in creating digital solutions that not only work flawlessly but also inspire and empower users.&rdquo;
            </motion.p>

            {/* EXPLORE MY TERRITORY CTA with scale-in animation */}
            <motion.div variants={buttonVariants}>
              <motion.button
                onClick={scrollToAbout}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-gold to-orange-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                suppressHydrationWarning={true}
              >
                <WolfIcon />
                <span>EXPLORE MY TERRITORY</span>
                <ArrowDownIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image with Animated Background (Centered with text) */}
          <motion.div 
            className="flex justify-center lg:justify-end items-center order-1 lg:order-2 mb-1 lg:mb-0"
            variants={itemVariants}
            style={{ transform: 'translateY(20px)' }}
          >
            <div className="relative flex items-center justify-center">
              {/* Animated background shapes behind profile image */}
              <motion.div
                className="absolute z-0 w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-accent-gold/30 via-light-blue/20 to-primary-dark/60 blur-2xl animate-gradient-shift"
                style={{ filter: 'blur(32px)' }}
                animate={{ scale: [1, 1.08, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute z-0 w-[220px] h-[220px] rounded-full bg-light-blue/20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float"
                animate={{ scale: [1, 1.1, 1], rotate: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
              {/* Golden border ring */}
              <div className="absolute inset-0 z-10 rounded-full border-4 md:border-8 border-accent-gold animate-glow bg-gradient-to-br from-accent-gold to-orange-500 p-2 md:p-4">
                <div className="w-full h-full bg-slate-900 rounded-full"></div>
              </div>
              {/* Profile image (restored original larger size) */}
              <div className="relative z-20 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-4 md:border-8 border-accent-gold shadow-2xl">
                <Image
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} - Profile Picture`}
                  width={360}
                  height={360}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media Icons - Horizontal Layout with Float Animation */}
        <motion.div 
          className="flex justify-center lg:justify-start items-center gap-4 -mt-8 lg:-mt-12 relative z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-text-primary/10 backdrop-blur-sm rounded-full hover:bg-accent-gold/20 transition-all duration-normal text-text-secondary hover:text-accent-gold border border-text-primary/20 hover:border-accent-gold/50 float-social"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7 + index * 0.1 }}
              aria-label={`Visit my ${social.name} profile`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                <span className="text-sm sm:text-base">
                  {social.icon === 'github' && '🔗'}
                  {social.icon === 'linkedin' && '💼'}
                  {social.icon === 'twitter' && '🐦'}
                  {social.icon === 'mail' && '📧'}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Down Indicator - Sticky in hero section */}
        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <span className="text-text-muted text-xs mb-1 font-medium tracking-wider">SCROLL DOWN</span>
          <motion.button
            onClick={scrollToAbout}
            className="p-1 text-accent-gold hover:text-accent-gold/80 transition-colors duration-normal"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Scroll to next section"
            suppressHydrationWarning={true}
          >
            <ChevronDownIcon className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Hero;