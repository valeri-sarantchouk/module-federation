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

    // publicPath: either 'auto' or 'http://localhost:4001/' works.
    // publicPath: 'http://localhost:4001/',
    publicPath: 'auto',
    uniqueName: "module-federation-header",
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    port: 4001,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    // hot: true
  },
  plugins: [
    new ModuleFederationPlugin({
      // a unique name to be used by host
      name: 'remoteHeader',
      // filename: if not specified, defaults to the 'name' value ("remoteHeader.js")
      // filename: 'remote-header-entry.js',
      exposes: {
        './header': './src/header-app',
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/standalone-index.html',
      title: 'Standalone SPA to test Header App',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'lazyStyleTag',
              insert: (element, options) => {
                console.log('webpack lazyStyleTag - header');
                let parent = options.target || document.head;
                parent.appendChild(element);
              }
            }
          }, 
          'css-loader', 
          'sass-loader'
        ],
      },
    ],
  },
};
