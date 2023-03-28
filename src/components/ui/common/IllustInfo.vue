<script>
export default {
  props: {
    className: {
      Type: String,
      default: null,
    },
    theme: {
      Type: String,
      default: null,
    },
  },
};
</script>

<template>
  <div
    :class="[
      $style['illust-info'],
      {
        [$style[`illust-info--${theme}`]]: theme,
      },
      className,
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/import/IllustInfo.scss';
</style>
