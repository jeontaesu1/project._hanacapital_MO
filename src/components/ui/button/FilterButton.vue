<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  text: '',
  icon: '',
});

export default {
  inheritAttrs: false,
  props: {
    type: {
      Type: String,
      default: 'button',
    },
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
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
  <button
    v-bind="$attrs"
    :type="type"
    :class="[
      $style['filter-button'],
      {
        [$style[`filter-button--type-${type}`]]: type,
      },
      customClassNames.wrap,
    ]"
  >
    <span :class="[$style['filter-button__text'], customClassNames.text]"
      >필터</span
    >
  </button>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/FilterButton.scss';
</style>
