<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
});

export default {
  inheritAttrs: false,
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    theme: {
      Type: String,
      default: null,
    },
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
  <div
    :class="[
      $style['banner'],
      {
        [$style[`banner--theme-${theme}`]]: theme,
      },
      customClassNames.wrap,
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/banner/SlideImageBanner.scss';
</style>
