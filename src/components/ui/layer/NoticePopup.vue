<script>
import {
  computed,
  useCssModule,
  provide,
  reactive,
  onBeforeMount,
  onUpdated,
} from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  outerTop: '',
  outerBottom: '',
  block: '',
  body: '',
});

const isSlot = (slot) => {
  if (!slot || typeof slot !== 'function') return false;

  const items = slot();
  let vIfLength = 0;

  items.forEach((item) => item.children === 'v-if' && vIfLength++);

  return items.length !== vIfLength;
};

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
  setup(props, { slots }) {
    const state = reactive({
      slots: {},
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isSlotDefault = computed(() => {
      return isSlot(state.slots.default);
    });

    const isOuterTop = computed(() => {
      return isSlot(state.slots.outerTop);
    });

    const isOuterBottom = computed(() => {
      return isSlot(state.slots.outerBottom);
    });

    onBeforeMount(() => {
      state.slots.default = slots.default;
      state.slots.outerTop = slots.outerTop;
      state.slots.outerBottom = slots.outerBottom;
    });

    onUpdated(() => {
      state.slots.default = slots.default;
      state.slots.outerTop = slots.outerTop;
      state.slots.outerBottom = slots.outerBottom;
    });

    provide('popupStyleModule', useCssModule());

    return {
      customClassNames,
      isSlotDefault,
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
        v-if="isSlotDefault"
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
