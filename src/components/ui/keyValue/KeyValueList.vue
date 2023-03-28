<script>
import { computed, useCssModule, provide } from 'vue';

const defaultClassNames = () => ({
  wrap: 'key-value',
  list: '',
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

    provide('styleModule', useCssModule());

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['key-value'],
      {
        [$style[`key-value--${align}`]]: align,
      },
      customClassNames.wrap,
    ]"
  >
    <dl :class="[$style['key-value-list'], customClassNames.list]">
      <slot />
    </dl>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/keyValue/keyValueList.scss';
</style>
