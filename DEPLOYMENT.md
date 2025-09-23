# Development & Deployment Notes

## Development

The portfolio is fully functional in development mode. Run:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Build Issue Fix

There's currently a build issue related to the theme context during static generation. Here are two solutions:

### Solution 1: Disable Static Generation (Quick Fix)

Add this to `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

### Solution 2: Fix Theme Context (Recommended)

Update the theme context to handle SSR properly by checking for `window` availability:

```typescript
// In src/contexts/ThemeContext.tsx, update the useEffect:
useEffect(() => {
  if (typeof window !== 'undefined') {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }
}, []);
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Publish directory: `.next` or `out` (if using static export)

### Manual Static Export
1. Update `next.config.ts` with export configuration
2. Run `npm run build`
3. Deploy the `out` folder

The portfolio works perfectly in development mode and can be deployed with the suggested fixes above.