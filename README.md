# Taro3 + Vue3 + TS 开发微信小程序

## 实现的功能

- Taro3 Vue3
- 请求封装，可取消重复请求
- 代码规范，ESLint + Prettier + StyleLint
- Vant Weapp
- ECharts

## 如何使用

```
# CLI 工具安装
$ npm install -g @tarojs/cli

# 安装依赖
$ yarn install

# 运行
$ yarn dev:weapp

# 打包
$ yarn build:weapp
```

下载并打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，然后选择***\*项目根目录\****进行预览。

## VSCode 插件

为了更好的开发体验，建议安装推荐的插件，`.vscode/extensions.json`

## 常见问题

- 行内样式单位转换 [文档](https://taro-docs.jd.com/taro/docs/size#api)
- CSS 编译时忽略（过滤）[文档](https://taro-docs.jd.com/taro/docs/size#css-%E7%BC%96%E8%AF%91%E6%97%B6%E5%BF%BD%E7%95%A5%E8%BF%87%E6%BB%A4)
- [vue3 具名插槽失效](https://github.com/NervJS/taro/issues/8104) [文档](https://taro-docs.jd.com/taro/docs/hybrid/#%E4%BD%BF%E7%94%A8-slot)

## 其他限制

- 小程序中不支持 `<style scoped>`，建议使用 cssModules 代替。

  ```
  import styles from './HelloWorld.module.scss'
  <text :class="styles.title">{{ msg }}</text>
  
  # 编译后
  class="HelloWorld-module__title___2orUO"
  ```

- 不能在页面组件的 DOM 树之外插入元素，因此不支持 `<teleport>`。

- Vue 3 内部实现使用了 Proxy ，在 iOS 9 及以下操作系统无法运行。但 Vue 官方团队在正式版发布后会推出兼容版本。

- 在 H5 端使用 ref 获取基础组件的 DOM 节点，现在只能得到适配层的 Vue 组件实例，而不是对应的 webComponent 根节点。在 Vue2 里可以通过修改父元素的 refs 属性实现，但 Vue3 中组件间初始化顺序有变化，因此暂时不能支持。

- 小程序端非类似 HTML 表单标签规范的表单组件，如 Picker，暂不兼容 v-model。Vue3 的 v-model 绑定属性改为了 modelValue，事件绑定改为了 update:modelValue。对于 HTML 表单标签会自动对接表单的值与事件，例如 input 会自动对应 modelValue 与 value、update:modelValue 与 @input。但对于 Picker 这种小程序特有表单则无法对应，建议这种情况不使用 v-model。

- VirtualList 组件需要实现一份 Vue3 版本（待实现）。

- 所有组件的 id 必须在整个应用中保持唯一（即使他们在不同的页面），否则可能导致事件不触发的问题。

## 本项目搭建过程

### 创建项目

```
# CLI 工具安装
$ npm install -g @tarojs/cli

# 项目初始化
$ taro init myApp

# 进入项目根目录
$ cd myApp

# 使用 yarn 安装依赖
$ yarn

# 编译
$ yarn dev:weapp
$ yarn build:weapp
```

### 预览

下载并打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，然后选择**项目根目录**进行预览。

### VSCode 插件

.vscode\extensions.json

```
{
  "recommendations": [
    "johnsoncodehk.volar",
    "johnsoncodehk.vscode-typescript-vue-plugin",
    "dbaeumer.vscode-eslint",
    "stylelint.vscode-stylelint",
    "esbenp.prettier-vscode",
    "mikestead.dotenv",
    "ionutvmi.path-autocomplete",
    "lihuiwang.vue-alias-skip"
  ]
}

```

.vscode\settings.json

```
{
  "editor.tabSize": 2,
  "prettier.requireConfig": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "path-autocomplete.extensionOnImport": true
}
```

### 别名路径

.vscode\settings.json 添加

```
{
  ...
  "alias-skip.mappings": {
    "@": "/src"
  },
  "path-autocomplete.pathMappings": {
    "@": "${folder}/src"
  }
}
```

tsconfig.json 添加

```
"baseUrl": ".",
"paths": {
	"@/*": ["./src/*"]
},
```

config\index.js 添加

```
const path = require('path');

const config = {
  ...
  alias: {
    '@': path.resolve(__dirname, '..', 'src')
  }
}

```

### 代码规范

#### ESLint

安装依赖

```
$ yarn add -D eslint eslint-plugin-vue eslint-define-config@^1.1.1 @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

可以把 `eslint-config-taro` 删除

.eslintrc.js

```
// @ts-check
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
  root: true,
  // 规则运行的环境
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // 继承规则集
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  // 忽略检查的全局变量
  // globals: {
  //   process: true
  // },
  rules: {
    'no-unused-vars': 'off',
    'space-before-function-paren': 'off',
    'no-use-before-define': 'off',

    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    'vue/v-on-event-hyphenation': 'off',
    'vue/script-setup-uses-vars': 'error',
    'vue/custom-event-name-casing': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-components': 'warn',
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
});

```

.eslintignore

```
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
Dockerfile
```

package.json

```
"scripts": {
    "lint:js": "eslint \"src/**/*.{vue,ts,tsx}\"",
    "lint:js--fix": "eslint \"src/**/*.{vue,ts,tsx}\" --fix"
},
```

#### Prettier

安装依赖

```
$ yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

.prettierrc.js

```
module.exports = {
  printWidth: 100, // 默认 80
  tabWidth: 2,
  useTabs: false, // 不使用缩进符，而使用空格
  semi: true, // 句末加分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
  bracketSpacing: true, // 对象数组加空格
  trailingComma: 'all', // 最后一个对象元素加逗号
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  vueIndentScriptAndStyle: true,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto',
};

```

.prettierignore

```
/dist/*
/node_modules/**

**/*.svg
**/*.sh
```

.eslintrc.js，extends 增加

```
extends: [
    ...
    'prettier',
    'plugin:prettier/recommended',
],
```

#### StyleLint

##### 13.x 版本安装

<font color="red">vscode-stylelint 需要降级到 0.x 版本</font>

安装依赖

```
yarn add -D stylelint@^13.13.1 stylelint-config-prettier stylelint-config-standard stylelint-config-idiomatic-order
```

.stylelintrc.js

```
module.exports = {
  root: true,
  // 继承规则集
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-idiomatic-order',
  ],
  rules: {
    // https://github.com/ream88/stylelint-config-idiomatic-order
    'selector-class-pattern': null,
    'no-empty-source': null,
    'no-duplicate-selectors': null, // 禁止样式表中的重复选择器
    'declaration-empty-line-before': null, // 声明前要求或禁止空行
    'at-rule-empty-line-before': null, // 规则前要求或禁止使用空行
    'at-rule-no-unknown': null, // 禁止使用未知规则
    'selector-pseudo-class-no-unknown': null, // 禁止未知的伪类选择器
    'property-no-unknown': null, // 禁止未知属性
  },
};

```

.stylelintignore

```
**/node_modules
/dist
README.md

```

package.json

```
"scripts": {
    "lint:style": "stylelint \"src/**/*.{vue,css,less,scss,postcss}\"",
    "lint:style--fix": "stylelint \"src/**/*.{vue,css,less,scss,postcss}\" --fix"
},
```

##### 14.x 版本安装

<font color="red">vscode-stylelint 需要升级到 1.x 版本 [文档](https://github.com/stylelint/vscode-stylelint#migrating-from-vscode-stylelint-0xstylelint-13x)</font>

```
$ yarn add -D stylelint stylelint-config-prettier stylelint-config-standard stylelint-config-idiomatic-order
```

由于 14.x 已经把 scss 剥离，所以需要安装扩展 [文档](https://github.com/stylelint/stylelint/blob/main/docs/migration-guide/to-14.md)

```
$ yarn add -D postcss postcss-scss postcss-html
```

.stylelintrc.js

```
module.exports = {
  root: true,
  // 继承规则集
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-idiomatic-order',
  ],
  overrides: [{
    files: ['**/*.scss'],
    customSyntax: 'postcss-scss',
  }, {
    files: ['**/*.vue'],
    customSyntax: 'postcss-html',
  }],
  rules: {
    // https://github.com/ream88/stylelint-config-idiomatic-order
    'selector-class-pattern': null,
    'no-empty-source': null,
    'no-duplicate-selectors': null, // 禁止样式表中的重复选择器
    'declaration-empty-line-before': null, // 声明前要求或禁止空行
    'at-rule-empty-line-before': null, // 规则前要求或禁止使用空行
    'at-rule-no-unknown': null, // 禁止使用未知规则
    'selector-pseudo-class-no-unknown': null, // 禁止未知的伪类选择器
    'property-no-unknown': null, // 禁止未知属性
  },
};

```

.stylelintignore

```
**/node_modules
/dist
README.md

```

.vscode\settings.json

```
{
  ...
  "stylelint.validate": ["css", "scss", "vue"],
}
```

package.json

```
"scripts": {
    "lint:style": "stylelint \"src/**/*.{vue,css,less,scss,postcss}\"",
    "lint:style--fix": "stylelint \"src/**/*.{vue,css,less,scss,postcss}\" --fix"
},
```

### 参考

- [使用 Taro3 + Vue3 + TypeScript + NutUi + Vuex4 开发微信小程序](https://github.com/Yill625/taro3-vue3-template)

