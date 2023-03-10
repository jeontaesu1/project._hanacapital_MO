<script>
import { reactive, computed } from 'vue';

import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';
import { useUiLayerStore } from '@/stores/ui/layer';

export default {
  props: {
    full: {
      type: Boolean,
      default: false,
    },
    onBeforeOpened: {
      type: Function,
      default: () => {},
    },
    onOpened: {
      type: Function,
      default: () => {},
    },
    onAfterOpened: {
      type: Function,
      default: () => {},
    },
    onBeforeClosed: {
      type: Function,
      default: () => {},
    },
    onClosed: {
      type: Function,
      default: () => {},
    },
    onAfterClosed: {
      type: Function,
      default: () => {},
    },
  },
  components: {
    // BasicButton,
  },
  setup() {
    const defaultSpeed = 350;
    let timer = null;

    const store = {
      ui: {
        scrollBlock: useUiScrollBlockStore(),
        layer: useUiLayerStore(),
      },
    };

    const state = reactive({
      display: 'none',
      opened: false,
      zIndex: store.ui.layer.zIndex,
      speed: defaultSpeed,
    });

    const open = (opener = null, speed = defaultSpeed) => {
      const html = document.getElementsByTagName('html')[0];

      console.log(html, opener, speed, store.scrollBlock);

      clearTimeout(timer);
      store.ui.scrollBlock.block();
      state.speed = speed;
      state.display = 'block';
      state.zIndex = store.ui.layer.zIndex;
      store.ui.layer.updateZIndex();

      timer = setTimeout(function () {
        state.opened = true;
      }, 0);
    };

    const close = (speed = defaultSpeed) => {
      const html = document.getElementsByTagName('html')[0];

      console.log(html, speed);

      clearTimeout(timer);
      state.speed = speed;
      state.opened = false;

      timer = setTimeout(function () {
        state.display = 'none';
        store.ui.scrollBlock.clear();
      }, speed);
    };

    return {
      state,
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
        [$style['layer--opened']]: state.opened,
      },
    ]"
    :style="`display: ${state.display}; z-index: ${state.zIndex}; transition-duration: ${state.speed}ms;`"
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
