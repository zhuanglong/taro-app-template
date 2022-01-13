<template>
  <view class="VantDemo-container">
    <van-button type="default">默认按钮</van-button>
    <text style="margin-left: 10px" />
    <van-button plain type="primary">朴素按钮</van-button>
  </view>
</template>

<script lang="ts" setup>
  import { PropType } from 'vue';

  defineProps({
    content: {
      type: String as PropType<string>,
      default: '',
    },
  });
</script>

<style lang="scss">
  .VantDemo-container {
    margin-top: 10px;
  }
</style>
