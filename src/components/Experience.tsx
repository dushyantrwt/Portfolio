'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { experiences } from '@/data/portfolio';

/**
 * Experience Section Component
 * 
 * Features:
 * - Timeline layout showing professional experience
 * - Job details with descriptions and technologies
 * - Responsive design with mobile-friendly timeline
 * - Animated entrance effects
 * 
 * Customization:
 * - Update experiences in /src/data/portfolio.ts
 * - Modify timeline styling and colors
 * - Adjust animations and transitions
 * - Add company logos if desired
 */

const Experience: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const getExperienceTypeColor = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'bg-green-500/20 text-green-400';
      case 'part-time':
        return 'bg-light-blue/20 text-light-blue';
      case 'internship':
        return 'bg-purple-500/20 text-purple-400';
      case 'contract':
        return 'bg-orange-500/20 text-orange-400';
      case 'freelance':
        return 'bg-pink-500/20 text-pink-400';
      default:
        return 'bg-text-primary/20 text-text-muted';
    }
  };

  const formatExperienceType = (type: string) => {
    return type.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <section id="experience" className="section-padding bg-secondary-dark">
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
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              My professional journey and the roles that have shaped my expertise in software development.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-4 md:left-8 top-12 bottom-0 w-0.5 bg-accent-gold"></div>
                )}

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-accent-gold rounded-full border-4 border-secondary-dark shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-dark rounded-full"></div>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-grow bg-primary-dark rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-normal border border-text-primary/10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-lg text-accent-gold font-medium mb-2">
                          {experience.company}
                        </p>
                      </div>
                      
                      {/* Type Badge */}
                      <div className="flex-shrink-0">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getExperienceTypeColor(experience.type)}`}>
                          {formatExperienceType(experience.type)}
                        </span>
                      </div>
                    </div>

                    {/* Date and Location */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-text-secondary">
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span className="text-sm">
                          {experience.startDate} - {experience.endDate}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPinIcon className="w-4 h-4" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {experience.description.map((item, descIndex) => (
                          <li 
                            key={descIndex}
                            className="text-gray-700 dark:text-gray-300 flex items-start"
                          >
                            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    {experience.technologies.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs font-medium bg-light-blue/20 text-light-blue rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let&apos;s Work Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;