// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  env: {
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["/dist/*"],
  rules: {
    "prettier/prettier": "error",
  },
};
