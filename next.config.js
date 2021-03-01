const path = require('path');

module.exports = {
  webpack (config) {
    Object.assign(config.resolve.alias, {
      '~': path.resolve(__dirname),
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
