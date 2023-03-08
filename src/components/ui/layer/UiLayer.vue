<script>
import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';

export default {
  props: {
    full: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    // BasicButton,
  },
  setup() {
    const store = {
      ui: {
        scrollBlock: useUiScrollBlockStore(),
      },
    };

    const open = (opener, speed) => {
      const html = document.getElementsByTagName('html')[0];
      console.log(html, opener, speed, store.scrollBlock);
      store.ui.scrollBlock.block();
    };

    const close = (speed) => {
      const html = document.getElementsByTagName('html')[0];
      console.log(html, speed);
      store.ui.scrollBlock.clear();
    };

    return {
      open,
      close,
    };
  },
};
</script>

<template>
  <div
    ref="layer"
    :class="[
      $style['layer'],
      {
        [$style['layer--full']]: full,
      },
    ]"
  >
    <div :class="$style['layer__container']">
      <slot />
    </div>
    <div ref="loopFocus" tabindex="0"></div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/UiLayer.scss';
</style>
