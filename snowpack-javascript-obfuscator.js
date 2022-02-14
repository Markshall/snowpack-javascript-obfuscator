const JavaScriptObfuscator = require("javascript-obfuscator");

module.exports = (snowpackConfig, pluginOptions = {}) => {
  return {
    name: "snowpack-javascript-obfuscator",

    async transform({ contents, fileExt }) {
      if (fileExt === ".js") {
        return JavaScriptObfuscator.obfuscate(
          contents,
          pluginOptions
        ).getObfuscatedCode();
      }
    },
  };
};
