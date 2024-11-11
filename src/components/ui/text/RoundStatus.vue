<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    size: {
      Type: String,
      default: null,
    },
    theme: {
      Type: String,
      default: null,
    },
    block: {
      Type: Boolean,
      default: false,
    },
    square: {
      Type: Boolean,
      default: false,
    },
    // 240702 추가
    border: {
      Type: Boolean,
      default: false,
    },
    // // 240702 추가
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <span
    :class="[
      $style['status'],
      {
        [$style['status--block']]: block,
        [$style['status--square']]: square,
        [$style['status--border']]: border, //240702 추가
        [$style[`status--theme-${theme}`]]: theme,
        [$style[`status--size-${size}`]]: size,
      },
      customClassNames.wrap,
    ]"
  >
    <slot />
  </span>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/text/RoundStatus.scss';
</style>
