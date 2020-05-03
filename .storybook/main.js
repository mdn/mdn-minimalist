const path = require("path");
const rootPath = path.resolve(__dirname, "..");

module.exports = {
  stories: ["../stories/**/*.stories.js"],
  //   addons: [
  //     '@storybook/addon-essentials',
  //   ],
  webpackFinal: async (config, { configType }) => {
    // Add global styles to the iFrame
    // Queston: should this be a global scss file instead of mdn-minimalist?
    config.entry.push(
      path.resolve(__dirname, "..", "sass", "mdn-minimalist.scss")
    );

    // Allows us to import SCSS files in stories
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "..", "sass"),
    });

    config.resolve.alias["@"] = rootPath;

    return config;
  },
};
