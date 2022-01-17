const { default: rules } = require("@typescript-eslint/eslint-plugin/dist/rules");

module.exports = {
    extends: 'standard-with-typescript',
    parserOptions: {
      project: './tsconfig.json'
    }
    
  }

  rules["strict-boolean-expressions"] = 0
 