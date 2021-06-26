const config = {
  preset: 'ts-jest',
  rootDir: '..',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  testPathIgnorePatterns: ['dist', "/node_modules/"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    },
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  }
  g
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}

module.exports = config
