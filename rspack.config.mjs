/**
 * @type {import('@rspack/core').Configuration}
 */
export default {
  mode: "production",
  experiments: {
    outputModule: true,
  },
  entry: "./src/index.ts",
  output: {
    clean: true,
    filename: "[name].js",
    enabledLibraryTypes: ["module"],
    library: {
      type: "module",
    },
    module: true,
    chunkFormat: "module",
    chunkLoading: "import",
  },
  target: "es2021",
  resolve: {
    extensions: [".js", ".mjs", ".cjs", ".ts"],
    extensionAlias: {
      ".js": [".ts", ".js"],
    },
    mainFields: ["module", "main"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/[\\/]node_modules[\\/]/],
        loader: "builtin:swc-loader",
        type: "javascript/auto",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
            },
            target: "es2021",
          },
        },
      },
    ],
  },
  devtool: "inline-source-map",
  stats: "normal",
};
