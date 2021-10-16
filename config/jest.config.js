const config = {
  preset: 'ts-jest',
  rootDir: '..',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  testPathIgnorePatterns: ['/dist/', "/node_modules/"],
  setupFilesAfterEnv: ["jest-extended/all"],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75
    },
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}

module.exports = config
