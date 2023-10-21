module.exports = {
  webpack: {
    entry: './src/index.jsx',
  },
};

const path = require('path');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
    },
  },
};
