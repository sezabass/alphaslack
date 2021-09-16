// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  roots: [
    "test/"
  ],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  }
};

export default config