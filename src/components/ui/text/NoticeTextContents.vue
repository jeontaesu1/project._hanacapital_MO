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
  <div :class="styleModule['ui-notice__text']">
    <slot />
  </div>
</template>
