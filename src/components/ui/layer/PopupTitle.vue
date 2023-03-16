<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  title: '',
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
  <h2 :class="[$style['popup__title'], customClassNames.title]">
    <slot />
  </h2>
</template>
