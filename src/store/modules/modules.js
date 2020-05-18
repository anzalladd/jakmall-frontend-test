const requireModule = require.context("../modules/", true, /\.js$/);
const modules = {};

requireModule.keys().forEach((fileName) => {
  if (fileName.includes("index")) {
    const moduleName = fileName.replace(/(\.\/|\/.+\.js)/g, "");
    modules[moduleName] = requireModule(fileName).default;
  }
});

export default modules;
