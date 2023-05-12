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
    const styleModule = inject('colorSelectListStyleModule');

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
  <li :class="[styleModule['color-selects__item'], customClassNames.item]">
    <slot />
  </li>
</template>
