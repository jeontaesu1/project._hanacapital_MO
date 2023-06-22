<script>
import { computed, useCssModule, provide } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  outerTop: '',
  outerBottom: '',
  block: '',
  body: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    fix: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isSlot = computed(() => {
      return Boolean(context.slots.default);
    });

    const isOuterTop = computed(() => {
      return Boolean(context.slots.outerTop);
    });

    const isOuterBottom = computed(() => {
      return Boolean(context.slots.outerBottom);
    });

    provide('popupStyleModule', useCssModule());

    return {
      customClassNames,
      isSlot,
      isOuterTop,
      isOuterBottom,
    };
  },
};
</script>

<template>
  <div :class="[$style['popup'], customClassNames.wrap]">
    <div
      v-if="isOuterTop"
      :class="[$style['popup__outer-top'], customClassNames.outerTop]"
    >
      <slot name="outerTop" />
    </div>
    <div :class="[$style['popup__block'], customClassNames.block]">
      <div
        v-if="isSlot"
        :class="[$style['popup__body'], customClassNames.body]"
      >
        <slot />
      </div>
    </div>
    <div
      v-if="isOuterBottom"
      :class="[$style['popup__outer-bottom'], customClassNames.outerBottom]"
    >
      <slot name="outerBottom" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/NoticePopup.scss';
</style>
