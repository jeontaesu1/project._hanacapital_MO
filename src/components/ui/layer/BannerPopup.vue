<script>
import { computed, useCssModule, provide } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  closeTop: '',
  closeBottom: '',
  body: '',
  outerBottom: '',
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
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isSlot = computed(() => {
      return Boolean(context.slots.default);
    });

    const isCloseButtonTop = computed(() => {
      return Boolean(context.slots.closeTop);
    });

    const isCloseButtonBottom = computed(() => {
      return Boolean(context.slots.closeBottom);
    });

    const isOuterBottom = computed(() => {
      return Boolean(context.slots.outerBottom);
    });

    provide('popupStyleModule', useCssModule());

    return {
      customClassNames,
      isSlot,
      isCloseButtonTop,
      isCloseButtonBottom,
      isOuterBottom,
    };
  },
};
</script>

<template>
  <div :class="[$style['popup'], customClassNames.wrap]">
    <!-- 상단 닫기버튼 -->
    <div
      v-if="isCloseButtonTop"
      :class="[$style['popup__close-top'], customClassNames.closeTop]"
    >
      <slot name="closeTop" />
    </div>
    <!-- //상단 닫기버튼 -->

    <!-- 컨텐츠 -->
    <slot />
    <!-- //컨텐츠 -->

    <!-- 하단 닫기버튼 -->
    <div
      v-if="isCloseButtonBottom"
      :class="[$style['popup__close-bottom'], customClassNames.closeBottom]"
    >
      <slot name="closeBottom" />
    </div>
    <!-- //하단 닫기버튼 -->

    <!-- 하단 outer영역 -->
    <div
      v-if="isOuterBottom"
      :class="[$style['popup__outer-bottom'], customClassNames.outerBottom]"
    >
      <slot name="outerBottom" />
    </div>
    <!-- //하단 outer영역 -->
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/BannerPopup.scss';
</style>
