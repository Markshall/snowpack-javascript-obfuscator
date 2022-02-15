const JavaScriptObfuscator = require("javascript-obfuscator");
const path = require("path");

module.exports = (snowpackConfig, pluginOptions = {}) => {
  return {
    name: "snowpack-javascript-obfuscator",

    async transform({ contents, fileExt, filePath, isDev }) {
      if (isDev) return contents; // don't obfuscate if running in dev server

      // check if we are only obfuscating specific files
      if ("filesToObfuscate" in pluginOptions) {
        if (
          fileExt === ".js" &&
          pluginOptions.filesToObfuscate.includes(filePath)
        ) {
          return JavaScriptObfuscator.obfuscate(
            contents,
            pluginOptions.jsObfuscatorOpts ?? {}
          ).getObfuscatedCode();
        }
      } else {
        // if not, obfuscate all
        return JavaScriptObfuscator.obfuscate(
          contents,
          pluginOptions.jsObfuscatorOpts ?? {}
        ).getObfuscatedCode();
      }
    },
  };
};
