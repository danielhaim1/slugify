import { slugify } from './src/index.js';

const exports = { slugify };

// Export for Node.js environment
if (typeof module === 'object' && module.exports) {
    module.exports = exports;
}

// Export for web environment
if (typeof window === 'object') {
    Object.assign(window, exports);
}