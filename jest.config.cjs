module.exports = {
    // preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    transform: {
      '^.+\\.vue$': 'vue3-jest',
    },
    testMatch: ['<rootDir>/**/*(*.)(spec).ts', '<rootDir>/**/*(*.)(spec).vue'],
    collectCoverageFrom: [
      '<rootDir>/**/*.{ts,tsx,vue}',
      '!<rootDir>/**/*.stories.ts',
      '!<rootDir>/**/constants/**',
      '!<rootDir>/**/__stories__/**',
      '!<rootDir>/**/storybook/**',
      '!<rootDir>/**/types/**',
    ],
    globals: {
      'ts-jest': {
        isolatedModules: true,
      },
    },
    transformIgnorePatterns: [
      'node_modules/(?!(ol)/)', // <- exclude the OL lib
    ],
    moduleNameMapper: {
      '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/mocks/file-mock.ts',
    },
  };
  