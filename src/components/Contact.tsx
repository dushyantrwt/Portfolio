'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { personalInfo, socialLinks } from '@/data/portfolio';
import type { ContactForm } from '@/types';

/**
 * Contact Section Component
 * 
 * Features:
 * - Contact form with validation
 * - Contact information display
 * - Social media links
 * - Form submission handling (ready for backend integration)
 * - Responsive design
 * 
 * Customization:
 * - Update personalInfo and socialLinks in /src/data/portfolio.ts
 * - Integrate with email service (EmailJS, Formspree, etc.)
 * - Modify form validation rules
 * - Customize styling and animations
 * 
 * TODO: Integrate with actual email service
 */

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Integrate with your preferred email service
      // Example services: EmailJS, Formspree, Netlify Forms, or custom API
      
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return formData.name.trim() && 
           formData.email.trim() && 
           formData.subject.trim() && 
           formData.message.trim() &&
           /\S+@\S+\.\S+/.test(formData.email);
  };

  const getSocialIcon = (iconName: string) => {
    // Placeholder icons - replace with actual icons
    const icons: Record<string, string> = {
      github: '🔗',
      linkedin: '💼',
      twitter: '🐦',
      mail: '📧'
    };
    return icons[iconName] || '🔗';
  };

  return (
    <section id="contact" className="section-padding bg-primary-dark">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. 
              Let&apos;s connect and discuss how we can work together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-text-primary mb-6">
                  Let&apos;s Talk
                </h3>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I&apos;d love to hear from you. Feel free to reach out through any of the methods below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-text-primary font-medium hover:text-accent-gold transition-colors duration-normal"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>

                {personalInfo.phone && (
                  <motion.div
                    className="flex items-center space-x-4 p-4 bg-secondary-dark rounded-lg shadow-md border border-text-primary/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-light-blue/20 rounded-lg flex items-center justify-center">
                      <PhoneIcon className="w-6 h-6 text-light-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Phone</p>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="text-text-primary font-medium hover:text-light-blue transition-colors duration-normal"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </motion.div>
                )}

                <motion.div
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Location</p>
                    <p className="text-text-primary font-medium">
                      {personalInfo.location}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary-dark rounded-lg shadow-md flex items-center justify-center text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 hover:shadow-lg transition-all duration-normal border border-text-primary/10"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      aria-label={`Visit my ${social.name} profile`}
                    >
                      <span className="text-lg">{getSocialIcon(social.icon)}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-secondary-dark p-8 rounded-2xl shadow-lg border border-text-primary/10">
                <h3 className="text-2xl font-semibold text-text-primary mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder="Your name"
                        suppressHydrationWarning={true}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder="your.email@example.com"
                        suppressHydrationWarning={true}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="What's this about?"
                      suppressHydrationWarning={true}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="input-field resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  {/* Submit Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30"
                    >
                      ✅ Message sent successfully! I&apos;ll get back to you soon.
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/20 text-red-400 rounded-lg border border-red-500/30"
                    >
                      ❌ Failed to send message. Please try again or contact me directly.
                    </motion.div>
                  )}
                  
                  <motion.button
                    type="submit"
                    disabled={!isFormValid() || isSubmitting}
                    className="w-full btn-primary disabled:bg-text-primary/20 disabled:cursor-not-allowed disabled:text-text-muted flex items-center justify-center space-x-2"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <span>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                    <PaperAirplaneIcon className={`w-5 h-5 ${isSubmitting ? 'animate-bounce' : ''}`} />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;