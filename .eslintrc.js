module.exports = {
    root: true,
    env: {
        node: true
    },
    // extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
    rules: {
        'semi': ['error', 'never'], // 行尾不使用分号
        "newline-after-var": ['error'], //变量声明后必须空一行
        "quotes": ["error", "single"],
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    },
    parserOptions: {
        parser: "@typescript-eslint/parser"
    }
};