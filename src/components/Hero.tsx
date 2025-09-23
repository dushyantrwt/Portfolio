'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import { personalInfo, socialLinks } from '@/data/portfolio';

/**
 * Modern Hero Section Component
 * 
 * Features:
 * - Deep navy gradient background with geometric patterns
 * - Bold typography with light blue highlights
 * - Inspirational quote
 * - EXPLORE MY TERRITORY CTA with wolf icon
 * - Social media icons in bottom left
 * - Circular profile photo with golden border
 * - Scroll down indicator with arrow
 */

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Wolf icon for CTA button
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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

  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <section 
      id="hero" 
      className="h-screen flex items-center justify-center relative overflow-hidden bg-primary-dark pt-20 pb-12"
    >
      {/* Geometric Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave patterns */}
        <svg className="absolute bottom-0 left-0 w-full h-64 text-blue-900/20" viewBox="0 0 1200 200">
          <path d="M0,100 C300,150 600,50 900,100 C1050,125 1150,75 1200,100 L1200,200 L0,200 Z" fill="currentColor"/>
        </svg>
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-20 right-20 w-16 h-16 border-2 border-accent-gold/30 rotate-45"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute top-40 left-16 w-8 h-8 bg-light-blue/20 rounded-full"
          animate={floatingAnimation}
          transition={{ delay: 0.5, duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-40 right-32 w-12 h-12 border border-light-blue/40 rounded-full"
          animate={floatingAnimation}
          transition={{ delay: 1, duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Abstract dot pattern */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-accent-gold/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-32 w-1.5 h-1.5 bg-light-blue/25 rounded-full animate-pulse"></div>
      </div>

      <div className="container-custom relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center h-full max-h-[calc(100vh-8rem)] py-4">
          {/* Left Content */}
          <motion.div 
            className="text-left max-w-xl lg:max-w-2xl flex flex-col justify-center order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main heading */}
            <motion.h1 
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-2 lg:mb-4 leading-tight"
              variants={itemVariants}
            >
              Hello, I&apos;m{' '}
              <span className="text-accent-gold">
                {personalInfo.name.split(' ')[0]}
              </span>
            </motion.h1>

            {/* Professional title */}
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-secondary mb-3 lg:mb-4 font-semibold"
              variants={itemVariants}
            >
              {personalInfo.title}
            </motion.h2>

            {/* Inspirational Quote */}
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-text-muted mb-4 lg:mb-6 italic border-l-4 border-accent-gold pl-3 lg:pl-4"
              variants={itemVariants}
            >
              &ldquo;Every line of code is a step towards turning imagination into reality. I believe in creating digital solutions that not only work flawlessly but also inspire and empower users.&rdquo;
            </motion.p>

            {/* EXPLORE MY TERRITORY CTA */}
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={scrollToAbout}
                className="btn-primary-large group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                suppressHydrationWarning={true}
              >
                <WolfIcon />
                <span>EXPLORE MY TERRITORY</span>
                <ArrowDownIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end items-center order-1 lg:order-2 mb-4 lg:mb-0"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Golden border ring */}
              <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-accent-gold animate-pulse bg-gradient-to-br from-accent-gold to-orange-500 p-1">
                <div className="w-full h-full bg-slate-900 rounded-full"></div>
              </div>
              
              {/* Profile image */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 sm:border-4 border-accent-gold shadow-2xl">
                <Image
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} - Profile Picture`}
                  width={288}
                  height={288}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media Icons - Left Side */}
        <motion.div 
          className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 flex-col space-y-3 z-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-text-primary/10 backdrop-blur-sm rounded-full hover:bg-accent-gold/20 transition-all duration-normal text-text-secondary hover:text-accent-gold border border-text-primary/20 hover:border-accent-gold/50"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              aria-label={`Visit my ${social.name} profile`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <span className="text-base">
                  {social.icon === 'github' && '🔗'}
                  {social.icon === 'linkedin' && '💼'}
                  {social.icon === 'twitter' && '🐦'}
                  {social.icon === 'mail' && '📧'}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
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
  );
};

export default Hero;