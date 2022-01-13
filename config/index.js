const path = require('path');
const vantConfig = require('../vant.config');

const config = {
  projectName: 'taro-app-template',
  date: '2022-1-13',
  designWidth: 375, // https://taro-docs.jd.com/taro/docs/size
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    // https://docs.taro.zone/docs/next/vue3#compileroptions
    ['@tarojs/plugin-framework-vue3', {
      mini: {
        compilerOptions: {
          isCustomElement: (tag) => /van-|ec-canvas/.test(tag)
        }
      }
    }]
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
      ...vantConfig.vantSourceLib
    ],
    options: {
    }
  },
  framework: 'vue3',
  alias: {
    '@': path.resolve(__dirname, '..', 'src')
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/] // https://taro-docs.jd.com/taro/docs/vant/#%E9%85%8D%E7%BD%AE%E5%BF%BD%E7%95%A5-vant-%E7%9A%84%E6%A0%B7%E5%BC%8F%E5%B0%BA%E5%AF%B8%E8%BD%AC%E6%8D%A2
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
