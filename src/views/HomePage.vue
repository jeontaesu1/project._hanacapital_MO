<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useUiStore } from '@/stores/ui/ui';

const store = {
  ui: useUiStore(),
};

onMounted(() => {
  store.ui.setRootClassName('page-home');
});

onUnmounted(() => {
  store.ui.setRootClassName(null);
});
</script>

<template>
  <h1>Home Page</h1>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/HomePage.scss';
</style>
