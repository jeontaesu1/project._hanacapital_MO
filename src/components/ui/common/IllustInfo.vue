<script>
import { computed, useCssModule, provide } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
});

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
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    provide('illustInfoTextStyleModule', useCssModule());

    return {
      customClassNames,
    };
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
      customClassNames.wrap,
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/common/IllustInfo.scss';
</style>
