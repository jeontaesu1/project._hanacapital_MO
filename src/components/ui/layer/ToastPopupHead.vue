<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
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
  setup(props, context) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isRight = computed(() => {
      return Boolean(context.slots.right);
    });

    return {
      customClassNames,
      isRight,
    };
  },
};
</script>

<template>
  <div :class="[$style['popup__header'], customClassNames.wrap]">
    <div :class="[$style['popup__header-center'], customClassNames.center]">
      <slot />
    </div>
    <div
      v-if="isRight"
      :class="[$style['popup__header-right'], customClassNames.right]"
    >
      <slot name="right" />
    </div>
  </div>
</template>
