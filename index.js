import { Slugify } from './src/index.js';
// Export for Node.js environment
if (typeof module === 'object' && module.exports) {
  module.exports = { Slugify };
}

// Export for web environment
if (typeof window === 'object') {
  window.Slugify = Slugify;
}
