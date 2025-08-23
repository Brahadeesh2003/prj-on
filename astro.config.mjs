import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Ensure proper output for static site generation
  output: 'static',

  // Build configuration
  build: {
    // Ensure assets are properly handled
    assets: '_astro'
  },

  // Server configuration for development
  server: {
    port: 3000,
    host: true
  },

  // Ensure proper routing
  trailingSlash: 'ignore',

  // Base configuration (leave empty for root deployment)
  base: '/',

  // Site URL (replace with your actual domain)
  site: 'https://govalsma.netlify.app'
});