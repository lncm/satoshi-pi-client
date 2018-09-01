module.exports = {
  collectCoverageFrom: [
    '**/*.{js}',
    '!**/index.js',
    '!**/*.mock.js',
    '!**/*.style.js',
    '!**/build/**',
    '!**/node_modules/**',
    '!**/public/**',
    '!App.js',
  ],
  coverageDirectory: 'build/coverage',
  coverageReporters: [
    'json',
    'text',
    'html',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  preset: 'jest-expo',
  silent: true,
  testEnvironment: 'jsdom',
};
