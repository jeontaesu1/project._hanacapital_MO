<template>
  <div :class="$style['layout']">
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/FullLayout.scss';
</style>
