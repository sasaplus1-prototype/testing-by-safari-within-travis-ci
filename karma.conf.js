const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: __dirname,
    client: {
      mocha: {
        reporter: 'html',
        require: [
          require.resolve('chai/chai'),
        ],
        ui: 'bdd',
      },
    },
    files: [
      'test/karma/**/*.js',
    ],
    frameworks: [
      'mocha',
    ],
    reporters: [
      'dots',
    ],
  });
};
