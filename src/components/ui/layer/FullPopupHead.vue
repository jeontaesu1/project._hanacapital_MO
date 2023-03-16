<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  left: '',
  center: '',
  right: '',
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
  <div :class="[$style['popup__header'], customClassNames.wrap]">
    <div :class="[$style['popup__header-left'], customClassNames.left]">
      <slot name="left" />
    </div>
    <div :class="[$style['popup__header-center'], customClassNames.center]">
      <slot />
    </div>
    <div :class="[$style['popup__header-right'], customClassNames.right]">
      <slot name="right" />
    </div>
  </div>
</template>
