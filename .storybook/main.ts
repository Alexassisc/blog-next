import type { StorybookConfig } from '@storybook/nextjs';
import type { TransformOptions } from '@babel/core'; // Tipo padrão que o Storybook usa para o Babel

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  babel: async (options: TransformOptions) => {
    const plugins = options.plugins || [];
    return {
      ...options,
      plugins: [...plugins, 'babel-plugin-styled-components'],
    };
  },
};

export default config;
