const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "production", // 打包模式 development production
  entry: "./src/index.js", // js入口
  output: {
    // 文件输出
    filename: "index.[contenthash].js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "production",
      template: "src/assets/index.html", // 引入html
    }),
    new MiniCssExtractPlugin({
      // 类似于 webpackOptions.output 中的选项
      // 所有选项都是可选的
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
      ignoreOrder: false, // 忽略有关顺序冲突的警告
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 你可以在这里指定特定的 publicPath
              // 默认情况下使用 webpackOptions.output 中的 publicPath
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
