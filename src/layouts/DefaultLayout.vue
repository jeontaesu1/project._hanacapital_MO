<script setup>
import DefaultHeader from '@/layouts/DefaultHeader.vue';
import DefaultFooter from '@/layouts/DefaultFooter.vue';
</script>

<template>
  <div :class="$style['layout']">
    <DefaultHeader />
    <div :class="$style['layout__body']"><slot /></div>
    <DefaultFooter />
  </div>
</template>

<style lang="scss" module>
.layout {
  position: relative;
  z-index: 0;
  height: 100%;
  min-width: $page-min-width;
  box-sizing: border-box;

  &__body {
    padding: 50px;
  }
}
</style>
