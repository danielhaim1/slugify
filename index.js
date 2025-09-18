import { slugify as SlugifyAlias } from './src/index.js';

// Export for ESM environment
// ! camel-case and Pascal-case names for compatibility
export { SlugifyAlias as slugify };
export { SlugifyAlias as Slugify };

// Export for Node.js environment
if (typeof module === 'object' && module.exports) {
  module.exports = { slugify: SlugifyAlias, Slugify: SlugifyAlias };
}

// Export for web environment
if (typeof window === 'object') {
  window.slugify = SlugifyAlias;
  window.Slugify = SlugifyAlias;
}
