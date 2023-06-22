<script>
import { computed, useCssModule, provide } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
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
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    provide('colorSelectListStyleModule', useCssModule());

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div :class="[$style['color-selects'], customClassNames.wrap]">
    <ul :class="[$style['color-selects__list'], customClassNames.list]">
      <slot />
    </ul>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/ColorSelectList.scss';
</style>
