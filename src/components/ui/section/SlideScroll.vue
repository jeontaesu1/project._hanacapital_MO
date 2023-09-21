<script>
import { computed, useCssModule, provide } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';

const defaultClassNames = () => ({
  wrap: '',
  frame: '',
  scroller: '',
  inner: '',
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
    hideScrollbar: {
      Type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const store = {
      ui: {
        common: useUiCommonStore(),
      },
    };

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const scrollbarsWidth = computed(() => {
      return store.ui.common.scrollbarsWidth;
    });

    provide('slideScrollStyleModule', useCssModule());

    return {
      customClassNames,
      scrollbarsWidth,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['slide-scroll'],
      {
        [$style['slide-scroll--hide-scrollbar']]: hideScrollbar,
        [$style['slide-scroll--pc']]: scrollbarsWidth > 0,
      },
      customClassNames.wrap,
    ]"
  >
    <div :class="[$style['slide-scroll__frame'], customClassNames.frame]">
      <div
        :class="[$style['slide-scroll__scroller'], customClassNames.scroller]"
      >
        <div :class="[$style['slide-scroll__inner'], customClassNames.inner]">
          <ul :class="[$style['slide-scroll__list'], customClassNames.list]">
            <slot />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/section/SlideScroll.scss';
</style>
