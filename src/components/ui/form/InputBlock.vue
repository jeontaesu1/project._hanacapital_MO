<script>
import { computed, useCssModule } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  left: '',
  center: '',
  right: '',
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
  },
  setup(props, context) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isLeft = computed(() => {
      return Boolean(context.slots.left);
    });

    const isRight = computed(() => {
      return Boolean(context.slots.right);
    });

    return {
      customClassNames,
      isLeft,
      isRight,
    };
  },
};
</script>

<template>
  <div :class="[$style['input-block'], customClassNames.wrap]">
    <div
      v-if="isLeft"
      :class="[$style['input-block__left'], customClassNames.left]"
    >
      <slot name="left" />
    </div>
    <div :class="[$style['input-block__center'], customClassNames.center]">
      <slot />
    </div>
    <div
      v-if="isRight"
      :class="[$style['input-block__right'], customClassNames.right]"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/InputBlock.scss';
</style>
