<template>
  <ec-canvas :id="canvasId" :canvas-id="canvasId" :ec="ec" />
</template>

<script lang="ts" setup>
  import Taro from '@tarojs/taro';
  import { onMounted, onUnmounted, PropType } from 'vue';

  import echarts from './ec-canvas/echarts';

  interface ECProps {
    lazyLoad: boolean;
  }

  const props = defineProps({
    canvasId: {
      type: String,
      default: 'default-chart',
    },
    ec: {
      type: Object as PropType<ECProps>,
      default: () => ({
        lazyLoad: false,
      }),
    },
  });

  defineExpose({
    initChart,
    setOption,
    getInstance,
  });

  let chartInstance = null; // 图表的实例

  function initChart() {
    (Taro.getCurrentInstance().page as any)
      .selectComponent(`#${props.canvasId}`)
      .init((canvas, width, height, dpr) => {
        chartInstance = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr,
        });
        canvas.setChart(chartInstance);
        return chartInstance;
      });
  }

  function setOption(data) {
    (chartInstance as any).setOption(data);
  }

  function getInstance() {
    return chartInstance;
  }

  onMounted(() => {
    // 如果开始懒加载则需要手动 initChart
    if (!props.ec.lazyLoad) {
      setTimeout(() => {
        initChart();
      }, 100);
    }
  });

  onUnmounted(() => {
    if (chartInstance) {
      (chartInstance as any).dispose();
      chartInstance = null;
    }
  });
</script>
