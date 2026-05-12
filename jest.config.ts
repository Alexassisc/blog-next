import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.d.ts',
    '!src/**/*.stories.ts(x)?',
    '!src/**/styles.ts(x)?',
  ],
  collectCoverage: true,
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/out/', '/public/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};

export default createJestConfig(config);
