import { slugify } from './src/index.js';
// Export for Node.js environment
if (typeof module === 'object' && module.exports) {
  module.exports = { slugify };
}

// Export for web environment
if (typeof window === 'object') {
  window.slugify = slugify;
}
