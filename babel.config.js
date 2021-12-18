module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        importSource: 'theme-ui',
        runtime: 'automatic',
        throwIfNamespace: false
      }
    ]
  ]
};
