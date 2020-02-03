module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    ['module-resolver',
      {
        alias: {
          components: './src/components',
          screens: './src/screens/',
          'theme-consts': './src/config/theme.js',
          assets: './src/assets/',
        },
      },
    ],
  ],
}
