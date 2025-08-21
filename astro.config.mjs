// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mejonatechnology.github.io',
  base: '/data-ai-learning-center',
  integrations: [tailwind(), sitemap()],
  
  // Performance optimizations
  build: {
    inlineStylesheets: 'auto',
  },
  
  // Image optimization (built-in in Astro v5)
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  
  // Vite configuration for additional optimizations
  vite: {
    build: {
      // Optimize CSS
      cssMinify: true,
      // Enable gzip compression
      rollupOptions: {
        output: {
          // Manual chunk splitting for better caching
          manualChunks: {
            vendor: ['astro'],
          }
        }
      }
    }
  }
});