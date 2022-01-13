<template>
  <view class="HttpDemo-container">{{ cityInfo }}</view>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { getCity } from '@/api';

  const cityInfo = ref('');

  onMounted(async () => {
    try {
      const res = await getCity();
      if (res) {
        cityInfo.value = res.split('var returnCitySN = ')[1];
      }
    } catch (error) {
      throw error;
    }
  });
</script>

<style lang="scss">
  .HttpDemo-container {
    margin-top: 10px;
    color: #333;
    font-size: 18px;
  }
</style>
