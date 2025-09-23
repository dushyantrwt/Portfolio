# Portfolio Website

A modern, responsive, and interactive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Fully Responsive**: Mobile-first approach that looks great on all devices
- **Dark/Light Mode**: Toggle between themes with persistence
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Comprehensive meta tags and Open Graph support
- **Accessibility**: WCAG compliant with keyboard navigation
- **Type Safe**: Full TypeScript implementation
- **Smooth Animations**: Framer Motion animations throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Ready for Vercel, Netlify, or any static host

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles and custom CSS
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main portfolio page
│   ├── components/          # Reusable components
│   │   ├── Hero.tsx         # Landing section with intro
│   │   ├── About.tsx        # About me, education, skills
│   │   ├── Projects.tsx     # Project showcase with filtering
│   │   ├── Experience.tsx   # Work experience timeline
│   │   ├── Contact.tsx      # Contact form and information
│   │   ├── Footer.tsx       # Footer with theme toggle
│   │   └── Navigation.tsx   # Sticky navigation header
│   ├── contexts/            # React contexts
│   │   └── ThemeContext.tsx # Theme management
│   ├── data/                # Portfolio data
│   │   └── portfolio.ts     # All personal data and content
│   └── types/               # TypeScript type definitions
│       └── index.ts         # Shared interfaces
├── public/
│   ├── images/              # Image assets
│   │   ├── projects/        # Project screenshots
│   │   ├── profile.jpg      # Profile photo (add your own)
│   │   └── og-image.jpg     # Open Graph image (add your own)
│   ├── resume.pdf           # Downloadable resume (add your own)
│   └── favicon files        # Favicon and app icons (add your own)
└── docs/                    # Documentation
    └── CUSTOMIZATION.md     # Detailed customization guide
```

## 🚀 Quick Start

1. **Clone or download the project**
   ```bash
   cd your-portfolio-folder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Customize your content**
   - Edit `src/data/portfolio.ts` with your personal information
   - Replace placeholder images in `public/images/`
   - Update SEO metadata in `src/app/layout.tsx`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** to see your portfolio

## 📝 Customization

### Personal Information

All personal data is centralized in `src/data/portfolio.ts`. Update the following:

- **Personal Info**: Name, title, bio, contact details
- **Social Links**: GitHub, LinkedIn, Twitter, email
- **Skills**: Technologies and proficiency levels
- **Education**: Degrees and certifications
- **Experience**: Work history and achievements
- **Projects**: Portfolio showcase items

### Images

Replace these placeholder images with your own:

- `public/images/profile.jpg` - Your profile photo (500x500px recommended)
- `public/images/projects/*.jpg` - Project screenshots (1200x800px recommended)
- `public/images/og-image.jpg` - Social media preview image (1200x630px)
- `public/favicon.ico` and other favicon files

### Styling and Theme

- **Colors**: Modify the color scheme in `tailwind.config.ts`
- **Fonts**: Update fonts in `src/app/layout.tsx` 
- **Custom CSS**: Add styles to `src/app/globals.css`
- **Animations**: Adjust Framer Motion settings in components

### Components

Each component is self-contained and documented:

- **Hero**: Landing section with introduction
- **About**: Personal information and skills
- **Projects**: Portfolio showcase with filtering
- **Experience**: Work timeline
- **Contact**: Contact form and information
- **Navigation**: Sticky header with smooth scrolling

## 🎯 SEO Optimization

The portfolio includes comprehensive SEO setup:

- Meta tags and Open Graph data
- Structured data markup
- Sitemap generation ready
- Performance optimized images
- Semantic HTML structure

Update the metadata in `src/app/layout.tsx` with your information.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

- **Mobile**: Optimized for phones and small screens
- **Tablet**: Adapted layouts for medium screens
- **Desktop**: Full feature experience for large screens
- **Ultra-wide**: Optimized for large desktop displays

## ♿ Accessibility

Built with accessibility in mind:

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast mode support
- Screen reader friendly
- Reduced motion support

## 🚢 Deployment

Ready to deploy to popular platforms:

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the 'out' folder to Netlify
```

### GitHub Pages
Enable static exports in `next.config.ts` and deploy the `out` folder.

## 🤝 Contact Form Integration

The contact form is ready for backend integration. Popular options:

- **EmailJS**: Client-side email sending
- **Formspree**: Form handling service
- **Netlify Forms**: Built-in form handling
- **Custom API**: Your own backend service

Update the `handleSubmit` function in `Contact.tsx` to integrate with your chosen service.

## 🎨 Customization Examples

### Changing the Color Scheme
Update `tailwind.config.ts`:
```js
theme: {
  extend: {
    colors: {
      primary: '#your-primary-color',
      secondary: '#your-secondary-color',
    }
  }
}
```

### Adding a New Section
1. Create a new component in `src/components/`
2. Add the data structure to `src/types/index.ts`
3. Add sample data to `src/data/portfolio.ts`
4. Import and use in `src/app/page.tsx`

### Modifying Animations
Components use Framer Motion. Example:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

## 🐛 Common Issues

**Images not loading**: Make sure images are in the `public/` folder and paths start with `/`

**Dark mode not persisting**: Check if localStorage is available in your deployment environment

**Form not submitting**: Integrate with a form handling service (see Contact Form Integration above)

**Build errors**: Check TypeScript types in `src/types/index.ts`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- **Design Inspiration**: Modern portfolio websites
- **Icons**: [Heroicons](https://heroicons.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

---

**Happy coding! 🚀**

For detailed customization instructions, see [CUSTOMIZATION.md](./docs/CUSTOMIZATION.md).