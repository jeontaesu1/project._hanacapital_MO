<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  left: '',
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
  setup(props) {
    const styleModule = inject('popupStyleModule');

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
  <div :class="[styleModule['popup__header'], customClassNames.wrap]">
    <div :class="[styleModule['popup__header-left'], customClassNames.left]">
      <slot name="left" />
    </div>
    <div
      :class="[styleModule['popup__header-center'], customClassNames.center]"
    >
      <slot />
    </div>
    <div :class="[styleModule['popup__header-right'], customClassNames.right]">
      <slot name="right" />
    </div>
  </div>
</template>
