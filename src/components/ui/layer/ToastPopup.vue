<script>
import { computed, useCssModule, provide } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  outerTop: '',
  head: '',
  body: '',
  bodyInner: '',
  foot: '',
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

    const isHead = computed(() => {
      return Boolean(context.slots.head);
    });

    const isFoot = computed(() => {
      return Boolean(context.slots.foot);
    });

    provide('popupStyleModule', useCssModule());

    return {
      customClassNames,
      isSlot,
      isOuterTop,
      isHead,
      isFoot,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['popup'],
      {
        [$style['popup--fix']]: fix,
      },
      customClassNames.wrap,
    ]"
  >
    <div
      v-if="isOuterTop"
      :class="[$style['popup__outer-top'], customClassNames.outerTop]"
    >
      <slot name="outerTop" />
    </div>
    <div v-if="isHead" :class="[$style['popup__head'], customClassNames.head]">
      <slot name="head" />
    </div>
    <div v-if="isSlot" :class="[$style['popup__body'], customClassNames.body]">
      <div :class="[$style['popup__body-inner'], customClassNames.bodyInner]">
        <slot />
      </div>
    </div>
    <div v-if="isFoot" :class="[$style['popup__foot'], customClassNames.foot]">
      <slot name="foot" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/ToastPopup.scss';
</style>
