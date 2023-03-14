<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  item: '',
});

export default {
  inject: ['$style'],
  props: {
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
  <li :class="[$style['buttons__item'], customClassNames.item]">
    <slot />
  </li>
</template>
