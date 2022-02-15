# snowpack-javascript-obfuscator

Obfuscate your JavaScript files when bundling with Snowpack.

## Install

### npm

`npm i -D snowpack-javascript-obfuscator`

## Options

| Option             | Type   | Description                                                                                                                                          |
| ------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `filesToObfuscate` | array  | An array of files to obfuscate, relative to your public directory.                                                                                   |
| `jsObfuscatorOpts` | object | javascript-obfuscator options, reference: [https://www.npmjs.com/package/javascript-obfuscator](https://www.npmjs.com/package/javascript-obfuscator) |

## Example usage

`snowpack.config.js`

```js
module.exports = {
  // ...
  plugins: [
    // ...
    [
      "snowpack-javascript-obfuscator",
      {
        filesToObfuscate: ["app.js", "utils.js"],
        jsObfuscatorOpts: {
          splitStrings: true,
          stringArray: true,
          stringArrayEncoding: ["base64"],
        },
      },
    ],
  ],
  // ...
};
```
