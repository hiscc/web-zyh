/*
 * @Author: km2021
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2022-06-23 22:29:44
 * @Description:
 * @FilePath: /web-zyh/.eslintrc.js
 *
 */
module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'prettier'],
  // extends: ['next/core-web-vitals'],
  rules: {
    // 'prettier/prettier': [
    //   2,
    //   {
    //     printWidth: 120,
    //     usePrettierrc: false,
    //     singleQuote: true,
    //     trailingComma: 'es5',
    //     semi: false,
    //   },
    // ],
    'react-hooks/rules-of-hooks': 0,
    'react-native/no-inline-styles': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-shadow': 0,
    eqeqeq: [0],
    'handle-callback-err': 0,
    'jsx-a11y/alt-text': 0,
  },
}
