<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  text: '',
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
  <p :class="[$style['popup__text'], customClassNames.text]">
    <slot />
  </p>
</template>
