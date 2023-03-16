<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  subTitle: '',
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
  <p :class="[$style['popup__sub-title'], customClassNames.subTitle]">
    <slot />
  </p>
</template>
