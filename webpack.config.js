const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./sass/mdn-minimalist.scss",
  output: {
    filename: "mdn-minimalist.css",
    path: path.resolve(__dirname, "public", "css"),
  },
  mode: "development",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2)$/,
        use: ["file-loader"],
      },
    ],
  },
};
