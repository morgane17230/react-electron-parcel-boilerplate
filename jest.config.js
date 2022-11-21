/* eslint-disable no-undef */
module.exports = () => {
  return {
    verbose: true,
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.js'],
    testMatch: ['**/tests/**/*.test.js'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  };
};
