# Detailed Customization Guide

This guide provides step-by-step instructions for customizing your portfolio website to match your personal brand and requirements.

## 🎯 Quick Customization Checklist

- [ ] Update personal information in `src/data/portfolio.ts`
- [ ] Replace placeholder images in `public/images/`
- [ ] Update SEO metadata in `src/app/layout.tsx`
- [ ] Add your resume PDF to `public/`
- [ ] Test contact form integration
- [ ] Deploy to your preferred platform

## 📝 Updating Personal Information

### 1. Basic Information

Edit `src/data/portfolio.ts` and update the `personalInfo` object:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your tagline or brief description",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567", // Optional
  location: "Your City, State/Country",
  bio: "Your detailed bio...",
  profileImage: "/images/profile.jpg",
  resumeUrl: "/resume.pdf" // Optional
};
```

### 2. Social Media Links

Update the `socialLinks` array:

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github"
  },
  // Add more social links as needed
];
```

### 3. Skills and Technologies

Modify the `skills` array with your technologies:

```typescript
export const skills: Skill[] = [
  {
    name: "React",
    level: 90, // 1-100 scale
    category: "frontend", // frontend, backend, tools, other
    icon: "react"
  },
  // Add your skills here
];
```

### 4. Education History

Update the `education` array:

```typescript
export const education: Education[] = [
  {
    degree: "Your Degree",
    school: "Your School",
    location: "School Location",
    startDate: "Start Year",
    endDate: "End Year",
    description: "Optional description",
    gpa: "Optional GPA"
  }
];
```

### 5. Work Experience

Modify the `experiences` array:

```typescript
export const experiences: Experience[] = [
  {
    title: "Job Title",
    company: "Company Name",
    location: "Location",
    startDate: "Month Year",
    endDate: "Month Year" | "Present",
    type: "full-time", // full-time, part-time, internship, contract, freelance
    description: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2"
    ],
    technologies: ["Tech1", "Tech2", "Tech3"]
  }
];
```

### 6. Projects Portfolio

Update the `projects` array:

```typescript
export const projects: Project[] = [
  {
    id: "unique-project-id",
    title: "Project Title",
    description: "Brief description",
    longDescription: "Detailed description",
    image: "/images/projects/project-screenshot.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    features: [
      "Feature 1",
      "Feature 2"
    ],
    liveUrl: "https://project-demo.com", // Optional
    githubUrl: "https://github.com/you/project", // Optional
    featured: true, // Show in featured filter
    status: "completed", // completed, in-progress, planned
    startDate: "YYYY-MM",
    endDate: "YYYY-MM" // Optional
  }
];
```

## 🖼️ Images and Media

### Profile Images

Replace these files with your own images:

1. **Profile Photo** (`public/images/profile.jpg`)
   - Recommended size: 500x500px
   - Format: JPG or PNG
   - Square aspect ratio works best

2. **Project Screenshots** (`public/images/projects/`)
   - Recommended size: 1200x800px (3:2 aspect ratio)
   - Format: JPG or PNG
   - Show the main interface/homepage

3. **Open Graph Image** (`public/images/og-image.jpg`)
   - Required size: 1200x630px
   - Format: JPG or PNG
   - Used for social media previews

### Resume

Add your resume as `public/resume.pdf`:
- Format: PDF
- Keep file size under 2MB
- Ensure text is selectable (not just an image)

### Favicons

Generate and replace favicon files in `public/`:
- Use a favicon generator like [Favicon.io](https://favicon.io)
- Include all standard sizes (16x16, 32x32, 180x180, etc.)

## 🎨 Styling and Theming

### Color Scheme

Update colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Add your brand colors
      brand: {
        50: '#eff6ff',
        500: '#3b82f6',
        900: '#1e3a8a'
      }
    }
  }
}
```

Then use in components:
```jsx
<div className="bg-brand-500 text-white">
  Your content
</div>
```

### Typography

Add custom fonts in `src/app/layout.tsx`:

```typescript
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

// In your HTML
<body className={`${inter.variable} ${robotoMono.variable}`}>
```

Update `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    fontFamily: {
      sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      mono: ['var(--font-roboto-mono)', ...defaultTheme.fontFamily.mono],
    }
  }
}
```

### Custom CSS

Add custom styles to `src/app/globals.css`:

```css
/* Your custom styles */
.your-custom-class {
  @apply bg-blue-500 text-white rounded-lg;
}

/* Custom animations */
@keyframes yourAnimation {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-your-animation {
  animation: yourAnimation 1s ease-out;
}
```

## 🔧 Component Customization

### Adding New Sections

1. **Create the component** (`src/components/YourSection.tsx`):

```typescript
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const YourSection: React.FC = () => {
  return (
    <section id="your-section" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Your Section Title
        </motion.h2>
        {/* Your content */}
      </div>
    </section>
  );
};

export default YourSection;
```

2. **Add to main page** (`src/app/page.tsx`):

```typescript
import YourSection from '@/components/YourSection';

// Add to the component tree
<YourSection />
```

3. **Add to navigation** (`src/components/Navigation.tsx`):

```typescript
const navItems = useMemo(() => [
  // ... existing items
  { name: 'Your Section', href: '#your-section' }
], []);
```

### Modifying Existing Components

Each component has detailed documentation at the top. Key customization points:

**Hero Section**:
- Background animations and gradients
- Call-to-action buttons
- Profile image styling

**About Section**:
- Skills visualization (progress bars, badges, etc.)
- Education timeline styling
- Bio content layout

**Projects Section**:
- Card layouts and hover effects
- Filter categories
- Project detail displays

**Experience Section**:
- Timeline design
- Job type badges
- Technology tag styling

**Contact Section**:
- Form validation rules
- Contact information display
- Social media integration

## 🚀 Advanced Customization

### Adding Blog Functionality

1. **Create blog data structure**:

```typescript
// src/types/index.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  tags: string[];
  featured: boolean;
}
```

2. **Create blog component and integrate**

3. **Add Markdown support** with `react-markdown`

### Adding Animation Variants

Create custom animation presets:

```typescript
// src/utils/animations.ts
export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

### Performance Optimization

1. **Image Optimization**:
   - Use Next.js `Image` component
   - Provide proper `sizes` prop
   - Use WebP format when possible

2. **Bundle Analysis**:
   ```bash
   npm install @next/bundle-analyzer
   ```

3. **Loading States**:
   - Add skeleton loaders
   - Implement proper error boundaries

## 🔗 Integrations

### Contact Form Services

**EmailJS Integration**:
```bash
npm install emailjs-com
```

```typescript
// In Contact.tsx
import emailjs from 'emailjs-com';

const sendEmail = async (formData: ContactForm) => {
  try {
    await emailjs.send(
      'your_service_id',
      'your_template_id',
      formData,
      'your_user_id'
    );
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};
```

**Formspree Integration**:
```typescript
const handleSubmit = async (formData: ContactForm) => {
  const response = await fetch('https://formspree.io/f/your-form-id', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  return response.ok;
};
```

### Analytics Integration

**Google Analytics**:
```bash
npm install @next/third-parties
```

```typescript
// src/app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  )
}
```

### CMS Integration

For dynamic content management, integrate with:
- **Contentful**: Headless CMS
- **Sanity**: Real-time CMS
- **Strapi**: Open-source CMS

## 📱 Mobile Customization

### Responsive Breakpoints

Tailwind CSS breakpoints used:
- `sm:` - 640px and up
- `md:` - 768px and up  
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

### Mobile-Specific Features

1. **Touch Interactions**:
```jsx
<motion.div
  whileTap={{ scale: 0.95 }}
  className="cursor-pointer md:cursor-default"
>
  Touch/click target
</motion.div>
```

2. **Mobile Menu**:
   - Customizable hamburger animation
   - Slide-in/fade transitions
   - Touch-friendly tap targets

## 🎯 SEO Optimization

### Meta Tags

Update in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your professional description',
  keywords: ['your', 'keywords'],
  openGraph: {
    title: 'Your Portfolio',
    description: 'Your description',
    url: 'https://yourdomain.com',
    images: ['/images/og-image.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yourhandle'
  }
};
```

### Structured Data

Add JSON-LD structured data for better SEO:

```typescript
// src/components/StructuredData.tsx
export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Your Name",
    "jobTitle": "Your Title",
    "url": "https://yourdomain.com"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
```

## 🚢 Deployment Guide

### Vercel Deployment

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `.next`
4. Deploy automatically on push

### Netlify Deployment

1. Build command: `npm run build && npm run export`
2. Publish directory: `out`
3. Add `_redirects` file for SPA behavior

### Custom Domain

1. Purchase domain from registrar
2. Update DNS settings to point to your hosting provider
3. Configure SSL certificate (usually automatic)

## 🐛 Troubleshooting

### Common Issues

**Hydration Errors**:
- Ensure client-side only code is wrapped in `useEffect`
- Use `suppressHydrationWarning` for theme components

**Image Loading Issues**:
- Check file paths (must start with `/`)
- Verify images are in `public/` directory
- Use proper Next.js `Image` component

**Build Failures**:
- Check TypeScript errors
- Verify all imports are correct
- Ensure environment variables are set

**Performance Issues**:
- Optimize images (use WebP, proper sizes)
- Implement lazy loading
- Check for memory leaks in animations

### Debug Mode

Enable debug logging:

```typescript
// Add to component
useEffect(() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Debug info:', data);
  }
}, [data]);
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

Need help with customization? Check the main README.md or create an issue in the repository.