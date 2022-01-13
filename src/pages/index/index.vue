<template>
  <HelloWorld content="Hello Taro" />
  <VantDemo />
  <HttpDemo />
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import HelloWorld from '@/components/HelloWorld';
  import VantDemo from '@/components/VantDemo';
  import HttpDemo from '@/components/HttpDemo';

  onMounted(() => {
    //
  });
</script>
