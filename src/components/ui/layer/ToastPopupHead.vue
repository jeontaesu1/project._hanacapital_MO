<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  center: '',
  right: '',
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
  setup(props, context) {
    const styleModule = inject('popupStyleModule');

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isRight = computed(() => {
      return Boolean(context.slots.right);
    });

    return {
      styleModule,
      customClassNames,
      isRight,
    };
  },
};
</script>

<template>
  <div :class="[styleModule['popup__header'], customClassNames.wrap]">
    <div
      :class="[styleModule['popup__header-center'], customClassNames.center]"
    >
      <slot />
    </div>
    <div
      v-if="isRight"
      :class="[styleModule['popup__header-right'], customClassNames.right]"
    >
      <slot name="right" />
    </div>
  </div>
</template>
