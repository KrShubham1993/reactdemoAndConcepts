module.exports = {
  //....
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/fileMock.js",
      "^.+\\.css$": "jest-transform-css",
      "^.+\\.scss$": 'jest-scss-transform',
  },
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'],
  
};
