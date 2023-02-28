<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useHead } from '@vueuse/head';
import { useUiStore } from '@/stores/ui/ui';

const store = {
  ui: useUiStore(),
};

useHead({
  title: 'C 페이지 - 하나캐피탈 공식 웹사이트',
  meta: [
    {
      hid: 'title',
      name: 'title',
      content: 'C 페이지 - 하나캐피탈 공식 웹사이트',
    },
    {
      hid: 'description',
      name: 'description',
      content: 'C 페이지 설명',
    },
  ],
});

onMounted(() => {
  store.ui.setRootClassName('page-c');
});

onUnmounted(() => {
  store.ui.setRootClassName(null);
});
</script>

<template>
  <h1>C 페이지</h1>
</template>
