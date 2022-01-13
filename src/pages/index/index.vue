<template>
  <HelloWorld content="Hello Taro" />
  <HttpDemo />
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import HelloWorld from '@/components/HelloWorld';
  import HttpDemo from '@/components/HttpDemo';

  onMounted(() => {
    //
  });
</script>
