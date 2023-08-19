const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  name: "remote-body-app",
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),

    // publicPath: 'http://localhost:4002/', // this also works
    publicPath: 'auto',
    uniqueName: "module-federation-body",
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    port: 4002,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true
  },
  plugins: [
    new ModuleFederationPlugin({
      // a unique name to be used by host
      name: 'remoteBody',
      // filename: 'remote-body-entry.js', // if not specified, defaults to the 'name' value ("remoteBody.js")
      exposes: {
        './body': './src/body-app',
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/standalone-index.html',
      title: 'Standalone SPA to test Body App',
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
                console.log('webpack lazyStyleTag - body app');
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
