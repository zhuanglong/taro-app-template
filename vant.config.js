// 参考文档 https://taro-docs.jd.com/taro/docs/vant

// 当前拉取的 vant 版本是 https://github.com/youzan/vant-weapp/commit/1a01c0eae8dd0df0aa6d7bde1c3a061e2e1d21ed
// 如需更新版本，覆盖 `/src/components/vant-weapp` 即可

// vant 组件中包含一些小程序原生文件的依赖，目前 Taro 没有对这些依赖进行分析，
// 需要配置 copy 移动到 dist 目录
const vantSourceLib = [
  {
    from: 'src/components/vant-weapp/wxs',
    to: 'dist/components/vant-weapp/wxs',
  },
  {
    from: 'src/components/vant-weapp/common/style',
    to: 'dist/components/vant-weapp/common/style',
  },
  {
    from: 'src/components/vant-weapp/common/index.wxss',
    to: 'dist/components/vant-weapp/common/index.wxss',
  },
  {
    from: 'src/components/vant-weapp/calendar/index.wxs',
    to: 'dist/components/vant-weapp/calendar/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/calendar/utils.wxs',
    to: 'dist/components/vant-weapp/calendar/utils.wxs',
  },
  {
    from: 'src/components/vant-weapp/calendar/components/month/index.wxs',
    to: 'dist/components/vant-weapp/calendar/components/month/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/area/index.wxs',
    to: 'dist/components/vant-weapp/area/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/button/index.wxs',
    to: 'dist/components/vant-weapp/button/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/calendar/index.wxs',
    to: 'dist/components/vant-weapp/calendar/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/cell/index.wxs',
    to: 'dist/components/vant-weapp/cell/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/checkbox/index.wxs',
    to: 'dist/components/vant-weapp/checkbox/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/col/index.wxs',
    to: 'dist/components/vant-weapp/col/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/config-provider/index.wxs',
    to: 'dist/components/vant-weapp/config-provider/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/divider/index.wxs',
    to: 'dist/components/vant-weapp/divider/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/dropdown-menu/index.wxs',
    to: 'dist/components/vant-weapp/dropdown-menu/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/empty/index.wxs',
    to: 'dist/components/vant-weapp/empty/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/field/index.wxs',
    to: 'dist/components/vant-weapp/field/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/grid/index.wxs',
    to: 'dist/components/vant-weapp/grid/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/grid-item/index.wxs',
    to: 'dist/components/vant-weapp/grid-item/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/icon/index.wxs',
    to: 'dist/components/vant-weapp/icon/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/image/index.wxs',
    to: 'dist/components/vant-weapp/image/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/loading/index.wxs',
    to: 'dist/components/vant-weapp/loading/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/nav-bar/index.wxs',
    to: 'dist/components/vant-weapp/nav-bar/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/notice-bar/index.wxs',
    to: 'dist/components/vant-weapp/notice-bar/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/notify/index.wxs',
    to: 'dist/components/vant-weapp/notify/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/picker/index.wxs',
    to: 'dist/components/vant-weapp/picker/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/picker-column/index.wxs',
    to: 'dist/components/vant-weapp/picker-column/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/popup/index.wxs',
    to: 'dist/components/vant-weapp/popup/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/progress/index.wxs',
    to: 'dist/components/vant-weapp/progress/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/radio/index.wxs',
    to: 'dist/components/vant-weapp/radio/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/row/index.wxs',
    to: 'dist/components/vant-weapp/row/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/share-sheet/index.wxs',
    to: 'dist/components/vant-weapp/share-sheet/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/share-sheet/options.wxs',
    to: 'dist/components/vant-weapp/share-sheet/options.wxs',
  },
  {
    from: 'src/components/vant-weapp/slider/index.wxs',
    to: 'dist/components/vant-weapp/slider/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/stepper/index.wxs',
    to: 'dist/components/vant-weapp/stepper/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/sticky/index.wxs',
    to: 'dist/components/vant-weapp/sticky/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/switch/index.wxs',
    to: 'dist/components/vant-weapp/switch/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/tabs/index.wxs',
    to: 'dist/components/vant-weapp/tabs/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/tag/index.wxs',
    to: 'dist/components/vant-weapp/tag/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/transition/index.wxs',
    to: 'dist/components/vant-weapp/transition/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/tree-select/index.wxs',
    to: 'dist/components/vant-weapp/tree-select/index.wxs',
  },
  {
    from: 'src/components/vant-weapp/uploader/index.wxs',
    to: 'dist/components/vant-weapp/uploader/index.wxs',
  },
];

// 简化了 Vant 组件的引入，
// 需要使用某个组件，只需要在 app.config.ts，放开相应的注释既可
const vantWeapp = {
  // 'van-action-sheet': '@/components/vant-weapp/action-sheet/index',
  // 'van-area': '@/components/vant-weapp/area/index',
  'van-button': '@/components/vant-weapp/button/index',
  // 'van-calendar': '@/components/vant-weapp/calendar/index',
  // 'van-card': '@/components/vant-weapp/card/index',
  // 'van-cell': '@/components/vant-weapp/cell/index',
  // 'van-cell-group': '@/components/vant-weapp/cell-group/index',
  // 'van-checkbox': '@/components/vant-weapp/checkbox/index',
  // 'van-checkbox-group': '@/components/vant-weapp/checkbox-group/index',
  // 'van-circle': '@/components/vant-weapp/circle/index',
  // 'van-col': '@/components/vant-weapp/col/index',
  // 'van-collapse': '@/components/vant-weapp/collapse/index',
  // 'van-collapse-item': '@/components/vant-weapp/collapse-item/index',
  // 'van-count-down': '@/components/vant-weapp/count-down/index',
  // 'van-datetime-picker': '@/components/vant-weapp/datetime-picker/index',
  // 'van-definitions': '@/components/vant-weapp/definitions/index',
  // 'van-dialog': '@/components/vant-weapp/dialog/index',
  // 'van-divider': '@/components/vant-weapp/divider/index',
  // 'van-dropdown-item': '@/components/vant-weapp/dropdown-item/index',
  // 'van-dropdown-menu': '@/components/vant-weapp/dropdown-menu/index',
  // 'van-empty': '@/components/vant-weapp/empty/index',
  // 'van-field': '@/components/vant-weapp/field/index',
  // 'van-goods-action': '@/components/vant-weapp/goods-action/index',
  // 'van-goods-action-button': '@/components/vant-weapp/goods-action-button/index',
  // 'van-goods-action-icon': '@/components/vant-weapp/goods-action-icon/index',
  // 'van-grid': '@/components/vant-weapp/grid/index',
  // 'van-grid-item': '@/components/vant-weapp/grid-item/index',
  'van-icon': '@/components/vant-weapp/icon/index',
  // 'van-image': '@/components/vant-weapp/image/index',
  // 'van-index-anchor': '@/components/vant-weapp/index-anchor/index',
  // 'van-index-bar': '@/components/vant-weapp/index-bar/index',
  // 'van-info': '@/components/vant-weapp/info/index',
  // 'van-loading': '@/components/vant-weapp/loading/index',
  // 'van-nav-bar': '@/components/vant-weapp/nav-bar/index',
  // 'van-notice-bar': '@/components/vant-weapp/notice-bar/index',
  // 'van-notify': '@/components/vant-weapp/notify/index',
  // 'van-overlay': '@/components/vant-weapp/overlay/index',
  // 'van-panel': '@/components/vant-weapp/panel/index',
  // 'van-picker': '@/components/vant-weapp/picker/index',
  // 'van-picker-column': '@/components/vant-weapp/picker-column/index',
  // 'van-popup': '@/components/vant-weapp/popup/index',
  // 'van-progress': '@/components/vant-weapp/progress/index',
  // 'van-radio': '@/components/vant-weapp/radio/index',
  // 'van-radio-group': '@/components/vant-weapp/radio-group/index',
  // 'van-rate': '@/components/vant-weapp/rate/index',
  // 'van-row': '@/components/vant-weapp/row/index',
  // 'van-search': '@/components/vant-weapp/search/index',
  // 'van-sidebar': '@/components/vant-weapp/sidebar/index',
  // 'van-sidebar-item': '@/components/vant-weapp/sidebar-item/index',
  'van-skeleton': '@/components/vant-weapp/skeleton/index',
  // 'van-slider': '@/components/vant-weapp/slider/index',
  // 'van-stepper': '@/components/vant-weapp/stepper/index',
  // 'van-steps': '@/components/vant-weapp/steps/index',
  // 'van-sticky': '@/components/vant-weapp/sticky/index',
  // 'van-submit-bar': '@/components/vant-weapp/submit-bar/index',
  // 'van-swipe-cell': '@/components/vant-weapp/swipe-cell/index',
  // 'van-switch': '@/components/vant-weapp/switch/index',
  // 'van-share-sheet': '@/components/vant-weapp/share-sheet/index',
  // 'van-tab': '@/components/vant-weapp/tab/index',
  // 'van-tabbar': '@/components/vant-weapp/tabbar/index',
  // 'van-tabbar-item': '@/components/vant-weapp/tabbar-item/index',
  // 'van-tabs': '@/components/vant-weapp/tabs/index',
  // 'van-tag': '@/components/vant-weapp/tag/index',
  // 'van-toast': '@/components/vant-weapp/toast/index',
  // 'van-transition': '@/components/vant-weapp/transition/index',
  // 'van-tree-select': '@/components/vant-weapp/tree-select/index',
  // 'van-uploader': '@/components/vant-weapp/uploader/index',
};

// 配置忽略 vant 的样式尺寸转换
// https://taro-docs.jd.com/taro/docs/vant#%E9%85%8D%E7%BD%AE%E5%BF%BD%E7%95%A5-vant-%E7%9A%84%E6%A0%B7%E5%BC%8F%E5%B0%BA%E5%AF%B8%E8%BD%AC%E6%8D%A2

// 去除 `compilerOptions.isCustomElement` 警告
// https://docs.taro.zone/docs/next/vue3#compileroptions

module.exports = {
  vantSourceLib,
  vantWeapp,
};
