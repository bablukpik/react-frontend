const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
// as style-loader only creates a style tag and put all the sccs inside it
// instead we can create seperate css files for each scss files using this plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const eslintPluginOptions = {
  extensions: ['tsx'],
  fix: true,
};

module.exports = {
  entry: './index.js',
  context: path.join(__dirname, 'src'),
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  watchOptions: {
    ignored: ['dist/**'],
  },
  // it will create a react-frontend.js under the dist directory
  output: {
    filename: 'react-frontend.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
  // before creating the final output called komoshala-ui.js
  // all the loaders are loaded first using this module section
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json',
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      // this rule is to handle scss files
      {
        // since JavaScript can not load scss directly
        // this is why we're gonna use following loaders
        // so that we can get css in js
        test: /\.scss$/, // find files
        // prevent finding from node_modules
        exclude: /node_modules/,
        // use: after finding what to do with them
        use: [
          {
            // loader: 'style-loader', // to create a style tag
            loader: MiniCssExtractPlugin.loader, // create a seperate css file
          },
          {
            loader: 'css-loader', // to load css to that style tag
            options: {
              url: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]__[hash:base64:5]',
            },
          },
          'sass-loader', // to convert scss into css
        ],
      },
    ],
  },
  // when final output is creacted like react-frontend.js then
  // the plugins section comes into play on the final result
  plugins: [new MiniCssExtractPlugin(), new ESLintPlugin(eslintPluginOptions)],
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  stats: {
    children: true,
  },
};
