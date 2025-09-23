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
    // Placeholder icons - replace with actual icons in production
    const icons: Record<string, string> = {
      github: '🔗',
      linkedin: '💼',
      twitter: '🐦',
      mail: '📧'
    };
    return icons[iconName] || '🔗';
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
                      <span className="text-sm">{getSocialIcon(social.icon)}</span>
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