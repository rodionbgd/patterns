module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["airbnb-typescript/base", "prettier", "plugin:import/recommended"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    overrides: [
        {
            files: ["src/**/*.ts"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "./tsconfig.json",
            },
            plugins: ["@typescript-eslint/eslint-plugin"],
            rules: {
                "import/extensions": [
                    "error",
                    "ignorePackages",
                    {
                        ts: "never",
                        js: "never",
                    },
                ],
                "max-len": [
                    "error",
                    {
                        ignoreComments: true,
                        code: 120,
                    },
                ],
                "no-console": "off",
                "max-classes-per-file": "off",
                "class-methods-use-this": "off",
            },
        },
    ],
    settings: {
        "import/resolver": {
            node: {
                extensions: [".ts"],
            },
        },
    },
};
