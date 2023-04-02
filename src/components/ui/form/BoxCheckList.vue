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
    align: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    provide('boxCheckListStyleModule', useCssModule());

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['box-check-list'],
      {
        [$style[`box-check-list--align-${align}`]]: align,
      },
      customClassNames.wrap,
    ]"
  >
    <ul :class="[$style['box-check-list__list'], customClassNames.list]">
      <slot />
    </ul>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/BoxCheckList.scss';
</style>
