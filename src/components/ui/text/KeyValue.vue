<script>
import { computed, useCssModule, provide } from 'vue';

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
    align: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    provide('keyValueStyleModule', useCssModule());

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <dl
    :class="[
      $style['key-value'],
      {
        [$style[`key-value--${align}`]]: align,
      },
      customClassNames.wrap,
    ]"
  >
    <slot />
  </dl>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/text/KeyValue.scss';
</style>
