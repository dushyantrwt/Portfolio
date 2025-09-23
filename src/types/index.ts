// Types for portfolio data
export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone?: string;
  location: string;
  bio: string;
  profileImage: string;
  resumeUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Icon component name or path
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  gpa?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
  type: 'full-time' | 'part-time' | 'internship' | 'contract' | 'freelance';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  icon?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'award' | 'certification' | 'milestone' | 'recognition';
  issuer?: string;
  icon?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface ResumeData {
  summary: string;
  skills: {
    technical: string[];
    soft: string[];
    tools: string[];
  };
  languages: {
    name: string;
    proficiency: 'native' | 'fluent' | 'intermediate' | 'basic';
  }[];
  certifications: Certification[];
}

// Theme context type
export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}