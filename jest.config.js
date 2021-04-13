module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
