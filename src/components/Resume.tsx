'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentArrowDownIcon, 
  AcademicCapIcon,
  BriefcaseIcon,
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  CheckBadgeIcon 
} from '@heroicons/react/24/outline';
import { personalInfo, resumeData, experiences, education } from '@/data/portfolio';

/**
 * Resume Section Component
 * 
 * Features:
 * - Professional summary
 * - Downloadable PDF resume
 * - Skills breakdown (technical, soft skills, tools)
 * - Work experience timeline
 * - Education details
 * - Certifications with verification links
 * - Languages proficiency
 * - Dark theme with golden accents
 */

const Resume: React.FC = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'native':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'fluent':
        return 'bg-light-blue/20 text-light-blue border-light-blue/30';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'basic':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-text-primary/20 text-text-muted border-text-primary/30';
    }
  };

  return (
    <section id="resume" className="section-padding bg-secondary-dark">
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
              Resume
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
              Download my complete resume or explore my professional background, skills, and qualifications below.
            </p>
            
            {/* Download Resume Button */}
            {personalInfo.resumeUrl && (
              <motion.a
                href={personalInfo.resumeUrl}
                download
                className="btn-primary inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <DocumentArrowDownIcon className="w-5 h-5" />
                <span>Download Resume PDF</span>
              </motion.a>
            )}
          </motion.div>

          {/* Professional Summary */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-primary-dark p-8 rounded-2xl shadow-lg border border-text-primary/10">
              <h3 className="text-2xl font-semibold text-text-primary mb-4 flex items-center space-x-2">
                <BriefcaseIcon className="w-6 h-6 text-accent-gold" />
                <span>Professional Summary</span>
              </h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                {resumeData.summary}
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Technical Skills */}
              <motion.div variants={cardVariants} className="bg-primary-dark p-6 rounded-xl border border-text-primary/10">
                <div className="flex items-center space-x-2 mb-4">
                  <CpuChipIcon className="w-6 h-6 text-accent-gold" />
                  <h4 className="text-lg font-semibold text-text-primary">Technical Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.technical.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent-gold/20 text-accent-gold rounded-full text-sm border border-accent-gold/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div variants={cardVariants} className="bg-primary-dark p-6 rounded-xl border border-text-primary/10">
                <div className="flex items-center space-x-2 mb-4">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-light-blue" />
                  <h4 className="text-lg font-semibold text-text-primary">Soft Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.soft.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-light-blue/20 text-light-blue rounded-full text-sm border border-light-blue/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Technologies */}
              <motion.div variants={cardVariants} className="bg-primary-dark p-6 rounded-xl border border-text-primary/10">
                <div className="flex items-center space-x-2 mb-4">
                  <WrenchScrewdriverIcon className="w-6 h-6 text-purple-400" />
                  <h4 className="text-lg font-semibold text-text-primary">Tools & Platforms</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience & Education Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Work Experience */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center space-x-2">
                <BriefcaseIcon className="w-6 h-6 text-accent-gold" />
                <span>Work Experience</span>
              </h3>
              <div className="space-y-6">
                {experiences.slice(0, 3).map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-primary-dark p-6 rounded-xl border border-text-primary/10 hover:border-accent-gold/30 transition-colors duration-normal"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-text-primary">{exp.title}</h4>
                        <p className="text-accent-gold font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-text-muted bg-text-primary/10 px-2 py-1 rounded">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm mb-3">{exp.location}</p>
                    <ul className="space-y-1">
                      {exp.description.slice(0, 2).map((desc, idx) => (
                        <li key={idx} className="text-text-secondary text-sm flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-accent-gold rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center space-x-2">
                <AcademicCapIcon className="w-6 h-6 text-light-blue" />
                <span>Education</span>
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-primary-dark p-6 rounded-xl border border-text-primary/10 hover:border-light-blue/30 transition-colors duration-normal"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-text-primary">{edu.degree}</h4>
                        <p className="text-light-blue font-medium">{edu.school}</p>
                      </div>
                      <span className="text-sm text-text-muted bg-text-primary/10 px-2 py-1 rounded">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm mb-2">{edu.location}</p>
                    {edu.gpa && (
                      <p className="text-text-muted text-sm">GPA: {edu.gpa}</p>
                    )}
                    {edu.description && (
                      <p className="text-text-secondary text-sm mt-2">{edu.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications & Languages */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center space-x-2">
                <CheckBadgeIcon className="w-6 h-6 text-green-400" />
                <span>Certifications</span>
              </h3>
              <div className="space-y-4">
                {resumeData.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-primary-dark p-4 rounded-xl border border-text-primary/10 hover:border-green-400/30 transition-colors duration-normal"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-text-primary">{cert.name}</h4>
                      <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded">
                        {cert.issueDate}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm mb-2">{cert.issuer}</p>
                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-gold text-sm hover:text-accent-gold/80 transition-colors duration-normal"
                      >
                        Verify Certificate →
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center space-x-2">
                <GlobeAltIcon className="w-6 h-6 text-purple-400" />
                <span>Languages</span>
              </h3>
              <div className="space-y-4">
                {resumeData.languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-primary-dark p-4 rounded-xl border border-text-primary/10"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-text-primary">{lang.name}</h4>
                      <span className={`text-xs px-3 py-1 rounded-full border ${getProficiencyColor(lang.proficiency)}`}>
                        {lang.proficiency.charAt(0).toUpperCase() + lang.proficiency.slice(1)}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;