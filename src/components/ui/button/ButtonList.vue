<script>
import { computed, useCssModule } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  list: '',
});

export default {
  provide() {
    const $style = useCssModule();

    return {
      $style,
    };
  },
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

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['buttons'],
      {
        [$style[`buttons--${align}`]]: align,
      },
      customClassNames.wrap,
    ]"
  >
    <ul :class="[$style['buttons__list'], customClassNames.list]">
      <slot />
    </ul>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/ButtonList.scss';
</style>
