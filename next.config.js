const path = require('path');

module.exports = {
  webpack (config) {
    config.resolve.alias = {
      '@pages': path.resolve(__dirname, '@pages'),
      '@components': path.resolve(__dirname, '@components'),
    }
    return config;
  }
};
