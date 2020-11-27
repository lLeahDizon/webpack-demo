var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  mode: "development", // 打包模式 development production
  entry: "./src/index.js", // js入口
  output: {
    // 文件输出
    filename: "index.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Lemon",
      template: "src/assets/index.html", // 引入html
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // 引入css
      },
    ],
  },
};
