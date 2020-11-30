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
    rules: [
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"], // compiles Styl to CSS
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"], // compiles Less to CSS
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass"),
            },
          },
        ],
      },
    ],
  },
};
