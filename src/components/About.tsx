'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalInfo, education, skills } from '@/data/portfolio';

/**
 * About Section Component
 * 
 * Features:
 * - Personal bio and information
 * - Education timeline
 * - Skills visualization with progress bars
 * - Responsive layout with image
 * 
 * Customization:
 * - Update personalInfo, education, skills in /src/data/portfolio.ts
 * - Replace profile image in /public/images/
 * - Modify skill categories and levels
 * - Adjust animations and styling
 */

const About: React.FC = () => {
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

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryTitles = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & Technologies',
    other: 'Other'
  };

  return (
    <section id="about" className="section-padding bg-secondary-dark">
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full"></div>
          </motion.div>

          {/* Bio Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-text-primary">
                Get to know me!
              </h3>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>{personalInfo.bio}</p>
                <p>
                  I&apos;m always excited to take on new challenges and collaborate with 
                  talented teams to create innovative solutions. When I&apos;m not coding, 
                  you can find me exploring new technologies, contributing to open-source 
                  projects, or mentoring aspiring developers.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-text-primary">Email:</span>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-accent-gold hover:text-accent-gold/80 hover:underline transition-colors duration-normal"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                {personalInfo.phone && (
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-text-primary">Phone:</span>
                    <span className="text-text-secondary">{personalInfo.phone}</span>
                  </div>
                )}
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-text-primary">Location:</span>
                  <span className="text-text-secondary">{personalInfo.location}</span>
                </div>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - About Photo`}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent-gold rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-light-blue rounded-full opacity-80"></div>
              </div>
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Education
            </h3>
            <div className="max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  {/* Timeline line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-accent-gold"></div>
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-4 h-4 bg-accent-gold rounded-full border-4 border-secondary-dark"></div>
                  
                  <div className="bg-primary-dark p-6 rounded-lg shadow-md border border-text-primary/10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-text-primary">
                        {edu.degree}
                      </h4>
                      <span className="text-accent-gold font-medium">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <p className="text-text-secondary mb-2">
                      {edu.school} • {edu.location}
                    </p>
                    {edu.description && (
                      <p className="text-text-muted mb-2">
                        {edu.description}
                      </p>
                    )}
                    {edu.gpa && (
                      <p className="text-sm text-text-muted">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Skills & Technologies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="bg-primary-dark p-6 rounded-lg shadow-md border border-text-primary/10"
                >
                  <h4 className="text-lg font-semibold text-text-primary mb-4 text-center">
                    {categoryTitles[category as keyof typeof categoryTitles]}
                  </h4>
                  <div className="space-y-4">
                    {categorySkills.map((skill, index) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-text-secondary">
                            {skill.name}
                          </span>
                          <span className="text-sm text-text-muted">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-text-primary/20 rounded-full h-2">
                          <motion.div
                            className="bg-accent-gold h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;