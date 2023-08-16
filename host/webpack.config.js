const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  name: "host-app",
  mode: "development",
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist'),

    publicPath: 'auto',
    // publicPath: '/',

    // Each build needs a unique name to avoid runtime; defaults to "name" in package.json.
    uniqueName: "module-federation-host",
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Host",
      // List of remotes with URLs
      remotes: {
        'remote-header-app': `remoteHeader@http://localhost:4001/remoteHeader.js`,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: 'Module Federation Host App'
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  target: "web",
};
