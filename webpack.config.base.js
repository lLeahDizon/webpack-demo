const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js", // js入口
  output: {
    // 文件输出
    filename: "index.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack-demo",
      template: "src/assets/index.html", // 引入html
    }),
  ],
  module: {
    rules: [],
  },
};
