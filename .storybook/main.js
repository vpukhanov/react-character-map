module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-storysource"],
  core: {
    builder: "webpack5",
  },
};
