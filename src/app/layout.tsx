import type { Metadata } from 'next';
import './globals.css';
import ClientWrapper from '@/components/ClientWrapper';

// SEO metadata
export const metadata: Metadata = {
  title: 'Dushyant Rawat | Full Stack Developer Portfolio',
  description: 'Passionate full-stack developer with expertise in building scalable web applications. Specializing in React, Next.js, TypeScript, and modern web technologies. Creator of Mohan Enterprises website.',
  keywords: [
    'Dushyant Rawat',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'JavaScript',
    'Web Development',
    'Portfolio',
    'Software Engineer',
    'Mohan Enterprises',
    'India Developer'
  ],
  authors: [{ name: 'Dushyant Rawat' }],
  creator: 'Dushyant Rawat',
  publisher: 'Dushyant Rawat',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dushyantrawat.dev',
    title: 'Dushyant Rawat | Full Stack Developer Portfolio',
    description: 'Passionate full-stack developer with expertise in building scalable web applications. Creator of mohangenterprises.com.',
    siteName: 'Dushyant Rawat Portfolio',
    images: [
      {
        url: '/images/dushyant-og-image.jpg', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Dushyant Rawat - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dushyant Rawat | Full Stack Developer Portfolio',
    description: 'Passionate full-stack developer with expertise in building scalable web applications. Creator of mohangenterprises.com.',
    creator: '@roar_dushyant', // Instagram handle as Twitter reference
    images: ['/images/dushyant-og-image.jpg'], // Add your Twitter card image
  },
  verification: {
    google: 'dushyant-google-verification-code', // Add your Google verification code
  },
};

/**
 * Root Layout Component
 * 
 * Features:
 * - Global styles and fonts
 * - Theme provider context
 * - SEO metadata
 * - Viewport configuration
 * - App structure
 * 
 * Customization:
 * - Update metadata with your information
 * - Add custom fonts if needed
 * - Modify global styles in globals.css
 * - Add analytics scripts if needed
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
      </head>
      <body className="antialiased">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}