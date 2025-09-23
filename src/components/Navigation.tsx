'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon, 
  HomeIcon,
  DocumentTextIcon,
  TrophyIcon,
  FolderIcon,
  BookOpenIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { useSafeTheme } from '@/hooks/useSafeTheme';

/**
 * Modern Dark Navigation Component
 * 
 * Features:
 * - Dark rounded background with golden accents
 * - Wolf logo branding
 * - Updated menu items: Home, Resume, Achievements, Projects, Blogs, Contact
 * - AINOR CTA button
 * - Responsive design
 * - Smooth animations
 */

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useSafeTheme();

  const navItems = useMemo(() => [
    { name: 'Home', href: '#hero', icon: HomeIcon },
    { name: 'Resume', href: '#resume', icon: DocumentTextIcon },
    { name: 'Achievements', href: '#achievements', icon: TrophyIcon },
    { name: 'Projects', href: '#projects', icon: FolderIcon },
    { name: 'Blogs', href: '#blogs', icon: BookOpenIcon },
    { name: 'Contact', href: '#contact', icon: EnvelopeIcon },
  ], []);

  // Wolf icon component - geometric wolf design
  const WolfIcon = () => (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-amber-500"
    >
      <path d="M12 2L14 8L20 8L15 12L17 18L12 15L7 18L9 12L4 8L10 8L12 2Z" fill="currentColor"/>
      <circle cx="8" cy="10" r="1" fill="currentColor"/>
      <circle cx="16" cy="10" r="1" fill="currentColor"/>
      <path d="M8 14L12 12L16 14"/>
    </svg>
  );

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleActiveSection);
    return () => window.removeEventListener('scroll', handleActiveSection);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-4 left-4 right-4 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <nav className={`
        bg-secondary-dark/95 backdrop-blur-md shadow-2xl border border-accent-gold/20
        transition-all duration-normal
        ${isScrolled ? 'bg-secondary-dark/98 shadow-xl border-accent-gold/30' : ''}
      `}
      style={{ borderRadius: '50px' }}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo with Wolf Icon */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              suppressHydrationWarning={true}
            >
              <WolfIcon />
              <span className="text-xl lg:text-2xl font-bold text-text-primary group-hover:text-accent-gold transition-colors duration-normal">
                Dushyant&apos;s Portfolio
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className={`
                      px-4 py-2 rounded-lg text-sm lg:text-base font-medium 
                      transition-colors duration-normal relative
                      ${activeSection === item.href.slice(1)
                        ? 'text-accent-gold bg-accent-gold/10'
                        : 'text-text-secondary hover:text-accent-gold hover:bg-text-primary/5'
                      }
                    `}
                    suppressHydrationWarning={true}
                  >
                    <span>{item.name}</span>
                    {activeSection === item.href.slice(1) && (
                      <div className="absolute -bottom-1 left-2 right-2 h-0.5 bg-accent-gold rounded-full" />
                    )}
                  </button>
                );
              })}

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-text-secondary hover:text-accent-gold transition-colors duration-normal"
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle mobile menu"
                suppressHydrationWarning={true}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden border-t border-accent-gold/20 mt-4"
                style={{ borderRadius: '0 0 50px 50px' }}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-4 py-6 space-y-2">
                  {navItems.map((item, index) => {
                    return (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href.slice(1))}
                        className={`
                          w-full text-left py-3 px-4 rounded-lg
                          text-base font-medium transition-colors duration-normal
                          ${activeSection === item.href.slice(1)
                            ? 'text-accent-gold bg-accent-gold/10'
                            : 'text-text-secondary hover:text-accent-gold hover:bg-text-primary/5'
                          }
                        `}
                        suppressHydrationWarning={true}
                      >
                        <span>{item.name}</span>
                      </button>
                    );
                  })}

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;