module.exports = {
  verbose: true,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageReporters: ['html', 'text-summary'],
  collectCoverage: true,
  coverageDirectory: 'coverage'
};