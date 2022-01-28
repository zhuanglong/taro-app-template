const vantConfig = require('../vant.config');

export default defineAppConfig({
  pages: ['pages/index/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  usingComponents: {
    ...vantConfig.vantWeapp,
    'ec-canvas': '@/components/Echart/ec-canvas/ec-canvas',
  },
});
