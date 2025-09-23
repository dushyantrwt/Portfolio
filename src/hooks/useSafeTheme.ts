'use client';

import { useTheme } from '@/contexts/ThemeContext';

/**
 * Safe Theme Hook
 * 
 * This hook provides a safer way to use the theme context
 * with fallback values for SSR and error cases.
 */

export const useSafeTheme = () => {
  try {
    return useTheme();
  } catch (error) {
    // Fallback for cases where ThemeProvider is not available
    console.warn('ThemeProvider not found, using fallback theme');
    return {
      theme: 'light' as const,
      toggleTheme: () => {
        console.warn('Theme toggle not available - ThemeProvider missing');
      }
    };
  }
};

export default useSafeTheme;