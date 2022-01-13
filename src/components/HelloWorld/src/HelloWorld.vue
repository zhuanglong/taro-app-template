<template>
  <view class="HelloWorld-container">
    {{ content }}
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
  .HelloWorld-container {
    color: #000;
    font-size: 40px;
    font-weight: bold;
  }
</style>
