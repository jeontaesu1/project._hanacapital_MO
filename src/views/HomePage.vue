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
  <div>
    <h1>Home Page</h1>
    <h2 :class="[$style['home_class']]">Home Page</h2>
  </div>
</template>

<style lang="scss" scoped module>
@import '@/assets/scss/home_page.scss';
</style>
