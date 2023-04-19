<script>
import { computed } from 'vue';

import IconBack from '@/assets/images/common/back-left.svg?component';
import IconClose from '@/assets/images/common/close.svg?component';
import IconSearch from '@/assets/images/common/search.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  icon: '',
  text: '',
});

export default {
  inheritAttrs: false,
  props: {
    type: {
      Type: String,
      default: 'close',
    },
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

    const icons = {
      close: IconClose,
      back: IconBack,
      search: IconSearch,
    };

    const texts = {
      close: '레이어 닫기',
      back: '뒤로가기',
      search: '검색',
    };

    return {
      customClassNames,
      isSlot,
      icons,
      texts,
    };
  },
};
</script>

<template>
  <button
    v-bind="$attrs"
    type="button"
    :class="[$style['popup-button'], customClassNames.wrap]"
  >
    <component
      :is="icons[type]"
      :class="[$style['popup-button__icon'], customClassNames.icon]"
    />
    <span
      v-if="!isSlot"
      :class="[$style['popup-button__text'], customClassNames.text]"
      >{{ texts[type] }}</span
    >
    <span
      v-if="isSlot"
      :class="[$style['popup-button__text'], customClassNames.text]"
    >
      <slot />
    </span>
  </button>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/PopupButton.scss';
</style>
