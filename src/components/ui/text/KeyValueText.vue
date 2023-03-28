<script>
import { computed, inject } from 'vue';

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
  <dd :class="[styleModule['key-value__value'], customClassNames.wrap]">
    <slot />
  </dd>
</template>
