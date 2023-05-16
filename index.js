module.exports = {
  parser: "vue-eslint-parser",

  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended",
  ],

  rules: {
    "vue/html-closing-bracket-spacing": ["error", {"selfClosingTag": "never"}],

    "vue/html-self-closing": ["error", {"html": {"normal": "never"}}],

    "vue/html-comment-indent": ["error", 2],

    "vue/html-indent": ["error", 2],

    "vue/multi-word-component-names": "off",

    "vue/script-indent": ["error", 2, {"baseIndent": 1, "switchCase": 1}],

    "vue/v-on-event-hyphenation": ["error", "always"],
  },

  overrides: [
    {
      files: [
        "*.vue",
      ],

      rules: {
        "indent": "off",
      },
    },
  ],
};
