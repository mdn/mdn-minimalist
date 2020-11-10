const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ASSET_PATH = process.env.ASSET_PATH || "/";

module.exports = {
  entry: {
    main: "./sass/mdn-minimalist.scss",
    shared: "./sass/shared-variables.module.scss",
  },
  output: {
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ASSET_PATH,
            },
          },
          "css-loader",
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: "file-loader",
      },
      {
        test: /\.svg$/,
        use: ["url-loader"],
      },
    ],
  },
  watch: true,
};
