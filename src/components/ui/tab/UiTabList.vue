<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  list: '',
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
    const styleModule = inject('uiTabStyleModule');

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
  <div
    :class="[styleModule['tab__list'], customClassNames.list]"
    role="tablist"
  >
    <slot />
  </div>
</template>
