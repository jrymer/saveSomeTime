module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  moduleFileExtensions: [
      "ts",
      "tsx",
      "js"
    ],
    transform: {
      "^.+\\.(js)$": "./node_modules/babel-jest",
      "\\.(ts|tsx)$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    testPathIgnorePatterns: [
      "\\.snap$",
      "./node_modules/"
    ],
    cacheDirectory: ".jest/cache"
};