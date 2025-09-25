'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import { useSafeTheme } from '@/hooks/useSafeTheme';
import { personalInfo, socialLinks } from '@/data/portfolio';

/**
 * Footer Component
 * 
 * Features:
 * - Copyright information
 * - Theme toggle button (dark/light mode)
 * - Back to top button
 * - Social media links
 * - Responsive design
 * 
 * Customization:
 * - Update personalInfo in /src/data/portfolio.ts
 * - Modify social links and icons
 * - Customize styling and animations
 * - Add additional footer sections if needed
 */

const Footer: React.FC = () => {
  const { theme, toggleTheme } = useSafeTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'mail':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        );
      default:
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          </svg>
        );
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-text-primary border-t border-text-primary/10">
      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                {personalInfo.name}
              </h3>
              <p className="text-text-muted mb-4 leading-relaxed">
                {personalInfo.title} passionate about creating exceptional digital experiences. 
                Let&apos;s build something amazing together.
              </p>
              <div className="flex items-center space-x-2 text-text-muted">
                <span>📍</span>
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-accent-gold transition-colors duration-normal"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(link.href.slice(1))?.scrollIntoView({ 
                          behavior: 'smooth' 
                        });
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Connect */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex flex-col space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-text-secondary hover:text-accent-gold transition-colors duration-normal"
                >
                  {personalInfo.email}
                </a>
                {personalInfo.phone && (
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-text-secondary hover:text-accent-gold transition-colors duration-normal"
                  >
                    {personalInfo.phone}
                  </a>
                )}
                
                {/* Social Links */}
                <div className="flex space-x-3 mt-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-secondary-dark hover:bg-accent-gold/20 rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-gold transition-all duration-normal border border-text-primary/10"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      aria-label={`Visit my ${social.name} profile`}
                    >
                      {getSocialIcon(social.icon)}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-text-primary/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Copyright */}
            <motion.p
              className="text-text-muted text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © {currentYear} {personalInfo.name}. All rights reserved.
              <span className="hidden sm:inline"> Built with Next.js and Tailwind CSS.</span>
            </motion.p>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 bg-secondary-dark hover:bg-accent-gold/20 rounded-lg transition-colors duration-normal group border border-text-primary/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                suppressHydrationWarning={true}
              >
                {theme === 'light' ? (
                  <MoonIcon className="w-5 h-5 text-text-secondary group-hover:text-accent-gold transition-colors duration-normal" />
                ) : (
                  <SunIcon className="w-5 h-5 text-text-secondary group-hover:text-accent-gold transition-colors duration-normal" />
                )}
              </motion.button>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="btn-primary p-2"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to top"
                suppressHydrationWarning={true}
              >
                <ArrowUpIcon className="w-5 h-5 text-primary-dark" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-gold rounded-full mix-blend-multiply filter blur-xl opacity-5"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-light-blue rounded-full mix-blend-multiply filter blur-xl opacity-5"></div>
      </div>
    </footer>
  );
};

export default Footer;