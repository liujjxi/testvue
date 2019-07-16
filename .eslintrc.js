module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
    rules: {
        "quotes": [1, "single", "avoid-escape"], //引号风格
        'semi': ['error', 'never'], // 行尾不使用分号
        "newline-after-var": 0, //变量声明后必须空一行
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    },
    parserOptions: {
        parser: "@typescript-eslint/parser"
    }
};