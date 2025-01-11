module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  globals: {
    "ts-test": {
      tsConfig: "tsconfig.test.json",
    },
  },
  transform: {
    "^.+\\.[jt]s?$": ["ts-jest"],
  },
  transformIgnorePatterns: ["node_modules/(?!@me/test-package)"],
};