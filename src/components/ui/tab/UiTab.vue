<script>
import { computed, useCssModule, provide } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
});

export default {
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    provide('uiTabStyleModule', useCssModule());
    provide('uiTab', {
      //
    });

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div :class="[$style['tab'], customClassNames.wrap]">
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/tab/UiTab.scss';
</style>
