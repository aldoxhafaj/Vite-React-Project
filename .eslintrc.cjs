module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  rules: {
    // Customize your rules here
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react-hooks/exhaustive-deps": "warn",

    // Additional rules
    eqeqeq: "error",
    "no-else-return": "error",
    "no-unreachable": "error",
    "no-duplicate-imports": "error",
    "default-case": "error",
    "no-trailing-spaces": "error",
    "react/jsx-curly-newline": [
      "error",
      { multiline: "consistent", singleline: "consistent" },
    ],
    "react/jsx-pascal-case": "error",
    "no-constant-condition": "error", // Check for always truthy conditions
    "no-extra-boolean-cast": "error", // Check for unnecessary boolean casts
    "no-unneeded-ternary": "error", // Check for unnecessary ternary expressions
    "no-unsafe-optional-chaining": "error",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
