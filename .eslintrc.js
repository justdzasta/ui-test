const path = require("path");

module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "prettier/@typescript-eslint"
    ],
    plugins: ["react-hooks", "import"],
    parserOptions: {
        project: path.resolve(process.cwd(), "./tsconfig.json"),
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "import/no-duplicates": "off",
        "import/export": "off",
        "no-undef": "off",
        "no-dupe-class-members": "off",
        "no-redeclare": "off",
        "react/display-name": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/explicit-function-return-type": "off",

        "eqeqeq": "error",
        "guard-for-in": "error",
        "consistent-return": "error",
        "no-new-wrappers": "error",
        "no-throw-literal": "error",
        "dot-notation": "error",
        "dot-location": ["error", "property"],
        "arrow-spacing": "error",
        "prefer-const": "error",
        "prefer-template": "error",
        "switch-colon-spacing": [
            "error",
            {
                after: true,
                before: false
            }
        ],

        "import/no-unresolved": "off",
        "import/no-named-as-default": "off",
        "import/order": [
            "error",
            {
                "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
                "newlines-between": "never"
            }
        ],

        "react/jsx-sort-props": [
            "error",
            {
                callbacksLast: true,
                shorthandFirst: true,
                shorthandLast: false,
                ignoreCase: false,
                noSortAlphabetically: false,
                reservedFirst: true
            }
        ],
        "react-hooks/rules-of-hooks": "error",

        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/prefer-includes": "error"
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
