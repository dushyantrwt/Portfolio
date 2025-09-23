'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrophyIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  StarIcon,
  ChartBarIcon,
  CalendarDaysIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';
import { achievements } from '@/data/portfolio';
import type { Achievement } from '@/types';

/**
 * Achievements Section Component
 * 
 * Features:
 * - Awards and recognitions showcase
 * - Achievement metrics and statistics  
 * - Certifications with verification
 * - Notable milestones timeline
 * - Interactive cards with hover effects
 * - Dark theme with golden accents
 * - Responsive grid layout
 */

const Achievements: React.FC = () => {
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

  const getAchievementIcon = (type: Achievement['type'], iconName?: string) => {
    if (iconName) {
      switch (iconName) {
        case 'trophy':
          return <TrophyIcon className="w-8 h-8 text-accent-gold" />;
        case 'kubernetes':
          return <CpuChipIcon className="w-8 h-8 text-light-blue" />;
        case 'performance':
          return <ChartBarIcon className="w-8 h-8 text-green-400" />;
        case 'github':
          return <CodeBracketIcon className="w-8 h-8 text-purple-400" />;
        case 'code':
          return <CodeBracketIcon className="w-8 h-8 text-accent-gold" />;
        case 'security':
          return <ShieldCheckIcon className="w-8 h-8 text-red-400" />;
        default:
          break;
      }
    }

    switch (type) {
      case 'award':
        return <TrophyIcon className="w-8 h-8 text-accent-gold" />;
      case 'certification':
        return <AcademicCapIcon className="w-8 h-8 text-light-blue" />;
      case 'milestone':
        return <RocketLaunchIcon className="w-8 h-8 text-green-400" />;
      case 'recognition':
        return <StarIcon className="w-8 h-8 text-purple-400" />;
      default:
        return <StarIcon className="w-8 h-8 text-accent-gold" />;
    }
  };

  const getAchievementTypeColor = (type: Achievement['type']) => {
    switch (type) {
      case 'award':
        return {
          bg: 'bg-accent-gold/10',
          border: 'border-accent-gold/30',
          text: 'text-accent-gold'
        };
      case 'certification':
        return {
          bg: 'bg-light-blue/10',
          border: 'border-light-blue/30',
          text: 'text-light-blue'
        };
      case 'milestone':
        return {
          bg: 'bg-green-500/10',
          border: 'border-green-500/30',
          text: 'text-green-400'
        };
      case 'recognition':
        return {
          bg: 'bg-purple-500/10',
          border: 'border-purple-500/30',
          text: 'text-purple-400'
        };
      default:
        return {
          bg: 'bg-text-primary/10',
          border: 'border-text-primary/30',
          text: 'text-text-primary'
        };
    }
  };

  const formatDate = (dateString: string) => {
    if (dateString.includes('ongoing')) {
      return 'Ongoing';
    }
    const [year, month] = dateString.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  // Separate achievements by type for better organization
  const awardAchievements = achievements.filter(a => a.type === 'award');
  const certificationAchievements = achievements.filter(a => a.type === 'certification');
  const milestoneAchievements = achievements.filter(a => a.type === 'milestone');
  const recognitionAchievements = achievements.filter(a => a.type === 'recognition');

  return (
    <section id="achievements" className="section-padding bg-primary-dark">
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
              Achievements
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A showcase of awards, certifications, milestones, and recognitions earned throughout my professional journey.
            </p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div 
                variants={cardVariants}
                className="bg-secondary-dark p-6 rounded-xl text-center border border-text-primary/10"
              >
                <TrophyIcon className="w-8 h-8 text-accent-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-text-primary mb-1">{awardAchievements.length}</div>
                <div className="text-text-muted text-sm">Awards</div>
              </motion.div>
              
              <motion.div 
                variants={cardVariants}
                className="bg-secondary-dark p-6 rounded-xl text-center border border-text-primary/10"
              >
                <AcademicCapIcon className="w-8 h-8 text-light-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-text-primary mb-1">{certificationAchievements.length}</div>
                <div className="text-text-muted text-sm">Certifications</div>
              </motion.div>
              
              <motion.div 
                variants={cardVariants}
                className="bg-secondary-dark p-6 rounded-xl text-center border border-text-primary/10"
              >
                <RocketLaunchIcon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-text-primary mb-1">{milestoneAchievements.length}</div>
                <div className="text-text-muted text-sm">Milestones</div>
              </motion.div>
              
              <motion.div 
                variants={cardVariants}
                className="bg-secondary-dark p-6 rounded-xl text-center border border-text-primary/10"
              >
                <StarIcon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-text-primary mb-1">{recognitionAchievements.length}</div>
                <div className="text-text-muted text-sm">Recognitions</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const typeColors = getAchievementTypeColor(achievement.type);
              
              return (
                <motion.div
                  key={achievement.id}
                  variants={cardVariants}
                  className="bg-secondary-dark rounded-xl p-6 border border-text-primary/10 hover:border-accent-gold/30 transition-all duration-normal group"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Achievement Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${typeColors.bg} ${typeColors.border} border`}>
                      {getAchievementIcon(achievement.type, achievement.icon)}
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${typeColors.bg} ${typeColors.text} border ${typeColors.border}`}>
                        <CalendarDaysIcon className="w-3 h-3 mr-1" />
                        {formatDate(achievement.date)}
                      </div>
                    </div>
                  </div>

                  {/* Achievement Content */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-gold transition-colors duration-normal">
                      {achievement.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-3">
                      {achievement.description}
                    </p>
                    
                    {achievement.issuer && (
                      <p className="text-text-muted text-xs">
                        Issued by: <span className={typeColors.text}>{achievement.issuer}</span>
                      </p>
                    )}
                  </div>

                  {/* Achievement Metrics */}
                  {achievement.metrics && achievement.metrics.length > 0 && (
                    <div className="border-t border-text-primary/10 pt-4">
                      <div className="grid grid-cols-1 gap-2">
                        {achievement.metrics.map((metric, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-text-muted text-xs">{metric.label}:</span>
                            <span className="text-accent-gold font-semibold text-sm">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievement Type Badge */}
                  <div className="mt-4 pt-4 border-t border-text-primary/10">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full ${typeColors.bg} ${typeColors.text} border ${typeColors.border}`}>
                        {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                      </span>
                      
                      {achievement.type === 'certification' && (
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 text-text-muted group-hover:text-accent-gold transition-colors duration-normal" />
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

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
              Let&apos;s Build Something Amazing Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;