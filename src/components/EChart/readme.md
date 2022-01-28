## 参考

- [echarts-for-weixin](https://github.com/ecomfe/echarts-for-weixin)
- [taro-vue3-miniprogram](https://github.com/aehyok/taro-vue3-miniprogram)

当前项目拉取的是 `echarts-for-weixin` [306f729](https://github.com/ecomfe/echarts-for-weixin/commit/306f729e306f5f969b5e2994316f91528589dc71) 版本。

## 问题修复

### [在 Taro3 中 ec-canvas 不能正常运行](https://github.com/ecomfe/echarts-for-weixin/issues/834)

echarts.js

```js
var isDomLevel2 = typeof window !== 'undefined' && !!window.addEventListener;
// =>
var isDomLevel2 = process.env.TARO_ENV === 'h5';
```

echarts.min.js

```js
"undefined"!=typeof window&&!!window.addEventListener
// =>
process.env.TARO_ENV === 'h5';
```

## 优化

### 自定义构建以减小文件大小

[自定义构建地址](https://echarts.apache.org/zh/builder.html)，下载替换 echarts.js 和 echarts.min.js 即可

当前项目自定义构建的模块：

- 图表chart

  Bar，Line，Graph

- 坐标系coordinate systems

  Grid

- 组件component

  Title，Legend，Tooltip

- 其它选项others

  工具集

