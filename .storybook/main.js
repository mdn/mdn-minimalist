const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-knobs",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
  ],
  webpackFinal: async (config, { configType }) => {
    // Add global styles to the iFrame
    // config.entry.push(
    //   path.resolve(__dirname, "..", "sass", "mdn-minimalist.scss")
    // );

    // Allows us to import SCSS files in stories
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: [path.resolve(__dirname), path.resolve(__dirname, "..", "sass")],
    });

    return config;
  },
};
