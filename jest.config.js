const path = require('path');

process.env.TS_NODE_TRANSPILE_ONLY = 'true';

module.exports = {
  verbose: true,
  rootDir: './src',
  preset: 'ts-jest/presets/js-with-ts',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  coverageDirectory: path.join(__dirname, './coverage'),
  transformIgnorePatterns: [`/node_modules`],
};
