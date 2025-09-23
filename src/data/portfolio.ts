import { PersonalInfo, SocialLink, Skill, Education, Experience, Project, ResumeData, Achievement, Certification } from '@/types';

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Dushyant Rawat",
  title: "Full Stack Developer",
  subtitle: "Crafting digital experiences with modern technologies",
  email: "dushyantrawat150@gmail.com",
  phone: "+91 9027736934",
  location: "India",
  bio: "Passionate full-stack developer with expertise in building scalable web applications. I love turning ideas into reality through clean, efficient code and thoughtful user experience design. Specializing in React, Next.js, and modern web technologies.",
  profileImage: "/images/dushyant-profile.jpg", // Update with actual image
  resumeUrl: "/dushyant-rawat-resume.pdf" // Update with actual resume
};

// Social Media Links
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/dushyantrwt",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dushyant-rawat-a28695306",
    icon: "linkedin"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/roar_dushyant?igsh=MXZlcHA5M2ZuMjc1Mg==",
    icon: "twitter"
  },
  {
    name: "Email",
    url: "mailto:dushyantrawat150@gmail.com",
    icon: "mail"
  }
];

// Skills Data
export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend", icon: "react" },
  { name: "Next.js", level: 90, category: "frontend", icon: "nextjs" },
  { name: "TypeScript", level: 85, category: "frontend", icon: "typescript" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: "tailwind" },
  { name: "JavaScript", level: 95, category: "frontend", icon: "javascript" },
  { name: "HTML/CSS", level: 95, category: "frontend", icon: "html" },

  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: "nodejs" },
  { name: "Python", level: 80, category: "backend", icon: "python" },
  { name: "Express.js", level: 85, category: "backend", icon: "express" },
  { name: "PostgreSQL", level: 75, category: "backend", icon: "postgresql" },
  { name: "MongoDB", level: 80, category: "backend", icon: "mongodb" },
  { name: "Redis", level: 70, category: "backend", icon: "redis" },

  // Tools
  { name: "Git", level: 90, category: "tools", icon: "git" },
  { name: "Docker", level: 75, category: "tools", icon: "docker" },
  { name: "AWS", level: 70, category: "tools", icon: "aws" },
  { name: "Vercel", level: 85, category: "tools", icon: "vercel" },
  { name: "Figma", level: 80, category: "tools", icon: "figma" },
];

// Education Data
export const education: Education[] = [
  {
    degree: "Bachelor's Degree in Computer Applications",
    school: "University",
    location: "India",
    startDate: "2020",
    endDate: "2023",
    description: "Focused on software development, web technologies, and computer science fundamentals. Gained strong foundation in programming languages and software engineering principles."
  },
  {
    degree: "Full Stack Web Development",
    school: "Online Learning Platforms",
    location: "Remote",
    startDate: "2023",
    endDate: "2024",
    description: "Intensive learning program covering modern web development technologies including React, Node.js, databases, and deployment strategies."
  }
];

// Experience Data
export const experiences: Experience[] = [
  {
    title: "Freelance Full Stack Developer",
    company: "Self-Employed",
    location: "Remote",
    startDate: "January 2024",
    endDate: "Present",
    type: "full-time",
    description: [
      "Developed and deployed Mohan Enterprises business website using React and Next.js",
      "Created responsive, mobile-first designs ensuring optimal user experience across all devices",
      "Implemented SEO best practices and performance optimizations for fast loading times",
      "Collaborated directly with clients to understand requirements and deliver tailored solutions"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Git"]
  },
  {
    title: "Web Development Student",
    company: "Various Learning Platforms",
    location: "Remote",
    startDate: "June 2023",
    endDate: "December 2023",
    type: "part-time",
    description: [
      "Completed comprehensive full-stack web development courses covering modern technologies",
      "Built multiple projects using React, Node.js, Express, and MongoDB",
      "Learned best practices for code organization, testing, and deployment",
      "Developed problem-solving skills through hands-on coding challenges and projects"
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Computer Science Student",
    company: "University",
    location: "India",
    startDate: "June 2020",
    endDate: "May 2023",
    type: "part-time",
    description: [
      "Studied computer science fundamentals including data structures and algorithms",
      "Learned programming languages including C++, Java, and Python",
      "Completed projects involving database management and software development",
      "Developed strong analytical and problem-solving skills"
    ],
    technologies: ["C++", "Java", "Python", "MySQL", "Data Structures", "Algorithms"]
  }
];

// Projects Data
export const projects: Project[] = [
  {
    id: "mohan-enterprises",
    title: "Mohan Enterprises - Business Website",
    description: "A comprehensive business website for Mohan Enterprises featuring modern design, responsive layout, and user-friendly interface",
    longDescription: "A professional business website developed for Mohan Enterprises, showcasing their services and company information. Built with modern web technologies, the site features a responsive design that works seamlessly across all devices. The website includes service pages, contact information, company overview, and an intuitive navigation system designed to enhance user experience and business credibility.",
    image: "/images/projects/mohan-enterprises.jpg", // Add actual screenshot
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    features: [
      "Responsive design for all devices",
      "Modern and professional layout",
      "Service showcase pages",
      "Contact and inquiry forms",
      "Company information sections",
      "SEO optimized content",
      "Fast loading performance",
      "Mobile-first approach"
    ],
    liveUrl: "https://mohangenterprises.com",
    githubUrl: "https://github.com/dushyantrwt/mohan-enterprises",
    featured: true,
    status: "completed",
    startDate: "2024-01",
    endDate: "2024-03"
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team features",
    longDescription: "A modern task management application similar to Trello or Asana, built with React and Firebase. Features include drag-and-drop task boards, real-time collaboration, file attachments, comments, and team management. The app uses Firebase for real-time database and authentication.",
    image: "/images/projects/taskmanager.jpg", // Placeholder
    technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
    features: [
      "Drag-and-drop task boards",
      "Real-time collaboration",
      "File attachments and comments",
      "Team and project management",
      "Due dates and notifications",
      "Mobile-responsive design"
    ],
    liveUrl: "https://taskmanager-demo.vercel.app",
    githubUrl: "https://github.com/johndoe/task-management",
    featured: true,
    status: "completed",
    startDate: "2022-09",
    endDate: "2022-12"
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts and interactive maps",
    longDescription: "A comprehensive weather dashboard that provides current conditions, 7-day forecasts, and interactive weather maps. Built with React and integrated with multiple weather APIs for accurate data. Features include location search, favorite locations, and detailed weather analytics.",
    image: "/images/projects/weather.jpg", // Placeholder
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    features: [
      "Current weather conditions",
      "7-day weather forecast",
      "Interactive weather maps",
      "Location search and favorites",
      "Weather alerts and notifications",
      "Historical weather data"
    ],
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    featured: true,
    status: "completed",
    startDate: "2022-06",
    endDate: "2022-08"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "This very portfolio website built with Next.js and modern web technologies",
    longDescription: "A responsive and interactive portfolio website showcasing my projects and skills. Built with Next.js, TypeScript, and Tailwind CSS, featuring dark/light mode toggle, smooth animations, and optimized performance. The site includes a contact form with email integration and a blog section.",
    image: "/images/projects/portfolio.jpg", // Placeholder
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design",
      "Dark/light mode toggle",
      "Smooth animations",
      "Contact form integration",
      "SEO optimized",
      "Performance optimized"
    ],
    liveUrl: "https://johndoe.dev",
    githubUrl: "https://github.com/johndoe/portfolio",
    featured: false,
    status: "completed",
    startDate: "2023-09",
    endDate: "2023-10"
  }
];

// Resume Data
export const resumeData: ResumeData = {
  summary: "Passionate Full Stack Developer with expertise in building modern web applications using React, Next.js, and Node.js. Experienced in creating responsive, user-friendly interfaces and scalable backend solutions. Always eager to learn new technologies and contribute to innovative projects like mohangenterprises.com.",
  skills: {
    technical: [
      "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express",
      "MongoDB", "PostgreSQL", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
      "Git", "GitHub", "REST APIs", "GraphQL", "Firebase", "Vercel", "Netlify"
    ],
    soft: [
      "Problem Solving", "Team Collaboration", "Communication", "Project Management",
      "Attention to Detail", "Creativity", "Adaptability", "Time Management"
    ],
    tools: [
      "VS Code", "Git", "Postman", "Figma", "Chrome DevTools",
      "npm", "Yarn", "Webpack", "Babel", "ESLint", "Prettier"
    ]
  },
  languages: [
    { name: "English", proficiency: "fluent" },
    { name: "Hindi", proficiency: "native" }
  ],
  certifications: [
    {
      name: "Full Stack Web Development",
      issuer: "Online Certification",
      issueDate: "2024-01",
      credentialId: "FSWD-2024-DR",
      icon: "certificate"
    },
    {
      name: "React.js Certification",
      issuer: "Tech Learning Platform",
      issueDate: "2023-12",
      credentialId: "REACT-2023-DR",
      icon: "react"
    }
  ]
};

// Achievements Data
export const achievements: Achievement[] = [
  {
    id: "mohan-enterprises-launch",
    title: "Successfully Launched Mohan Enterprises Website",
    description: "Designed and developed a complete business website for Mohan Enterprises, delivering a professional online presence that enhanced their business credibility and customer reach.",
    date: "2024-03",
    type: "milestone",
    issuer: "Mohan Enterprises",
    icon: "trophy",
    metrics: [
      { label: "Project Duration", value: "3 months" },
      { label: "Pages Created", value: "8+" },
      { label: "Performance Score", value: "95/100" }
    ]
  },
  {
    id: "web-development-cert",
    title: "Full Stack Web Development Certification",
    description: "Completed comprehensive full-stack web development course covering React, Node.js, databases, and modern development practices.",
    date: "2024-01",
    type: "certification",
    issuer: "Tech Learning Platform",
    icon: "certificate"
  },
  {
    id: "react-mastery",
    title: "React.js Specialization",
    description: "Achieved proficiency in React.js ecosystem including hooks, state management, routing, and modern React patterns for building dynamic user interfaces.",
    date: "2023-12",
    type: "recognition",
    icon: "react",
    metrics: [
      { label: "Projects Completed", value: "12+" },
      { label: "React Components Built", value: "100+" },
      { label: "Performance Optimization", value: "40%" }
    ]
  },
  {
    id: "github-contributions",
    title: "Active GitHub Contributor",
    description: "Consistently contributing to open-source projects and maintaining personal repositories with clean, well-documented code.",
    date: "2023-ongoing",
    type: "recognition",
    icon: "github",
    metrics: [
      { label: "Repositories", value: "15+" },
      { label: "Commits This Year", value: "200+" },
      { label: "Languages Used", value: "8" }
    ]
  },
  {
    id: "responsive-design-expert",
    title: "Responsive Design Excellence",
    description: "Mastered responsive web design principles and mobile-first development approach, creating seamless experiences across all devices.",
    date: "2023-11",
    type: "milestone",
    icon: "trophy",
    metrics: [
      { label: "Mobile Compatibility", value: "100%" },
      { label: "Cross-browser Support", value: "95%" },
      { label: "Performance Boost", value: "50%" }
    ]
  },
  {
    id: "problem-solving",
    title: "Coding Problem Solver",
    description: "Developed strong problem-solving skills through consistent practice on coding challenges and real-world project implementations.",
    date: "2023-10",
    type: "recognition",
    icon: "trophy",
    metrics: [
      { label: "Problems Solved", value: "500+" },
      { label: "Algorithm Efficiency", value: "95%" },
      { label: "Code Quality Score", value: "A+" }
    ]
  }
];