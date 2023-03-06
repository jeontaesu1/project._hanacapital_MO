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
@import '@/assets/scss/layouts/DefaultLayout.scss';
</style>
