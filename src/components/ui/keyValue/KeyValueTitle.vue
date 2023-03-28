<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  item: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
  },
  setup(props) {
    const styleModule = inject('styleModule');

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      styleModule,
      customClassNames,
    };
  },
};
</script>

<template>
  <dt :class="styleModule['key-value-list__key']">
    <slot />
  </dt>
</template>
