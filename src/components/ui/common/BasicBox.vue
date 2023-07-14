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
    radius: {
      Type: String,
      default: null,
    },
  },
};
</script>

<template>
  <div
    :class="[
      $style['box'],
      {
        [$style[`box--theme-${theme}`]]: theme,
        [$style[`box--radius-${radius}`]]: radius,
      },
      className,
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/common/BasicBox.scss';
</style>
