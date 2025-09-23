'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { projects } from '@/data/portfolio';

/**
 * Projects Section Component
 * 
 * Features:
 * - Grid layout of project cards
 * - Filter by project status (All, Featured, Completed, In Progress)
 * - Project details with technologies and links
 * - Hover effects and animations
 * - Responsive design
 * 
 * Customization:
 * - Update projects in /src/data/portfolio.ts
 * - Replace project images in /public/images/projects/
 * - Modify filter categories as needed
 * - Adjust card styling and animations
 */

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured' | 'completed' | 'in-progress'>('all');

  // Filter projects based on selected filter
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    if (filter === 'completed') return project.status === 'completed';
    if (filter === 'in-progress') return project.status === 'in-progress';
    return true;
  });

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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const filterButtons = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'completed', label: 'Completed' },
    { key: 'in-progress', label: 'In Progress' }
  ] as const;

  return (
    <section id="projects" className="section-padding bg-primary-dark">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience. 
              Each project represents a unique challenge and learning opportunity.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filterButtons.map((button) => (
              <button
                key={button.key}
                onClick={() => setFilter(button.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-normal ${
                  filter === button.key
                    ? 'bg-accent-gold text-primary-dark shadow-lg'
                    : 'bg-secondary-dark text-text-secondary hover:bg-accent-gold/20 hover:text-accent-gold border border-text-primary/20'
                }`}
                suppressHydrationWarning={true}
              >
                {button.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="bg-secondary-dark rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-normal group border border-text-primary/10"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  
                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      project.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400'
                        : project.status === 'in-progress'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-blue-500/20 text-light-blue'
                    }`}>
                      {project.status === 'in-progress' ? 'In Progress' : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 text-xs font-semibold bg-accent-gold/20 text-accent-gold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="View live project"
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5 text-primary-dark" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="View source code"
                      >
                        <CodeBracketIcon className="w-5 h-5 text-primary-dark" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-light-blue/20 text-light-blue rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs font-medium bg-text-primary/20 text-text-muted rounded-md">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-center"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 border border-accent-gold/50 text-accent-gold hover:bg-accent-gold/10 text-sm font-medium rounded-lg transition-colors duration-normal text-center"
                      >
                        Code
                      </a>
                    )}
                  </div>

                  {/* Project Timeline */}
                  <div className="mt-4 text-xs text-text-muted">
                    {project.startDate} {project.endDate && `- ${project.endDate}`}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <motion.div 
              variants={itemVariants}
              className="text-center py-12"
            >
              <p className="text-text-muted text-lg">
                No projects found for the selected filter.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;