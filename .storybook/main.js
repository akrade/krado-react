module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    emotionAlias: false
  },
  babel: async (options) => ({
    ...options,
    presets: [
      [
        '@babel/preset-react',
        {
          importSource: 'theme-ui',
          runtime: 'automatic',
          throwIfNamespace: false
        }
      ]
    ]
  })
};
