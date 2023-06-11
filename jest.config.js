module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*',
    '!**/node_modules/**',
    '!<rootDir>/src/**/*app.js',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
    'coverage',
    'node_modules',
    'index.js',
  ],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },

  moduleDirectories: ['node_modules'],
  roots: ['<rootDir>/src/'],
};
