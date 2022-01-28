<template>
  <view class="EchartDemo-container">
    <van-skeleton row="5" :loading="loading">
      <view style="width: 100%; height: 300px">
        <Echart ref="refChartA" canvasId="chartA" v-if="success" />
      </view>
    </van-skeleton>
  </view>
</template>

<script lang="ts" setup>
  import { onMounted, ref, unref } from 'vue';

  import Echart from '@/components/Echart';

  const refChartA = ref<any>();
  const loading = ref<boolean>(false); // 加载状态
  const success = ref<boolean>(false); // 是否加载了数据

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  function refresh() {
    unref(refChartA).setOption({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {},
        },
      ],
    });
  }

  onMounted(async () => {
    loading.value = true;
    await delay(1500); // 模拟获取数据
    loading.value = false;
    success.value = true;
    // 由于图表是 success = true 才渲染，所以需要等待 500s 让其渲染完成后初始化；
    // 初始化完成再设置图表的数据。
    await delay(500);
    refresh();
  });
</script>

<style lang="scss">
  .EchartDemo-container {
    margin-top: 10px;
  }
</style>
