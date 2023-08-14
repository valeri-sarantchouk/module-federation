const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  name: "remote-header-app",
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    // publicPath: 'http://localhost:3001/',
    uniqueName: "module-federation-header",
    clean: true,
  },
  devtool: 'hidden-source-map',
  devServer: {
    port: 4001,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      // a unique name to be used by host
      name: 'remoteHeader',
      filename: 'remote-header-entry.js',
      exposes: {
        './Header': './src/app',
      },
      // exposes: {
      //   './react': 'react',
      //   './react-dom': 'react-dom',
      // },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Remote Header',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
