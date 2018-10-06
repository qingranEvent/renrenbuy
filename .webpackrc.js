const path = require('path');

export default {
  entry: 'src/index.js',
  outputPath: 'dist/csm',
  extraBabelPlugins: [['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true }]],
  // publicPath: '/csm/',
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
      publicPath: '/',
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    confs: path.resolve(__dirname, 'src/confs/'),
    layouts: path.resolve(__dirname, 'src/layouts/'),
    pages: path.resolve(__dirname, 'src/routes/'),
  },
  ignoreMomentLocale: true,
  theme: './src/theme.js',
  disableDynamicImport: true,
  hash: true,
};
