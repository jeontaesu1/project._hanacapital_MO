<script>
import { ref, reactive, computed, useCssModule } from 'vue';

import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';
import { useUiLayerStore } from '@/stores/ui/layer';

const filter = Array.prototype.filter;
const getParents = (el) => {
  const parents = [];
  for (el = el.parentNode; el && el !== document; el = el.parentNode) {
    parents.push(el);
  }
  return parents;
};

export default {
  props: {
    full: {
      type: Boolean,
      default: false,
    },
    classNames: {
      Type: Object,
      default() {
        return {
          wrap: '',
          container: '',
        };
      },
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
  setup(props) {
    const $style = useCssModule();
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
      opener: null,
    });

    const layer = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(
        {
          wrap: '',
          container: '',
        },
        classNames
      );
    });

    const open = (opener = null, speed = defaultSpeed) => {
      if (state.opened) return;

      const { onBeforeOpened, onOpened, onAfterOpened } = props;

      onBeforeOpened();

      const html = document.getElementsByTagName('html')[0];
      const body = document.getElementsByTagName('body')[0];
      const layers = document.getElementsByClassName($style['layer']);
      const preOpenLayers = filter.call(layers, (item) => {
        return (
          layer.value !== item &&
          item.classList.contains($style['layer--opened'])
        );
      });
      const notOhterElements =
        'script, link, style, base, meta, br, [aria-hidden], [inert], [data-ui-js]';
      const layersParents = (() => {
        let re = [];
        for (let i = 0; i < layers.length; i++) {
          re = re.concat(getParents(layers[i]));
        }
        re = new Set(re);
        return Array.from(re);
      })();
      const ohterElements = filter.call(body.querySelectorAll('*'), (item) => {
        return (
          !item.classList.contains($style['layer']) &&
          !item.closest(`.${$style['layer']}`) &&
          !item.closest(notOhterElements) &&
          !layersParents.find((parent) => parent === item)
        );
      });
      const preLayersElements = (() => {
        let re = [];
        for (let i = 0; i < preOpenLayers.length; i++) {
          re = re.concat(
            filter.call(preOpenLayers[i].querySelectorAll('*'), (item) => {
              return !item.closest(notOhterElements);
            })
          );
        }
        re = new Set(re);
        return Array.from(re);
      })();

      console.log(opener, html, ohterElements, preLayersElements);

      clearTimeout(timer);
      store.ui.scrollBlock.block();
      state.speed = speed;
      state.display = 'block';
      state.zIndex = store.ui.layer.zIndex;
      store.ui.layer.updateZIndex();

      if (opener) {
        store.opener = opener;
      }

      timer = setTimeout(function () {
        state.opened = true;
        onOpened();
        clearTimeout(timer);
        timer = setTimeout(function () {
          onAfterOpened();
          clearTimeout(timer);
        }, speed);
      }, 0);
    };

    const close = (speed = defaultSpeed) => {
      if (!state.opened) return;

      const { onBeforeClosed, onClosed, onAfterClosed } = props;

      onBeforeClosed();

      const html = document.getElementsByTagName('html')[0];
      const preOpenLayers = filter.call(
        document.getElementsByClassName($style['layer--opened']),
        (item) => {
          return layer.value !== item;
        }
      );
      const preOpenLayer = (() => {
        const higherZIndex = (() => {
          const arr = [];
          for (let i = 0; i < preOpenLayers.length; i++) {
            arr.push(preOpenLayers[i].style.zIndex);
          }
          arr.sort();
          return arr[arr.length - 1];
        })();
        return filter.call(preOpenLayers, (item) => {
          return item.style.zIndex === higherZIndex;
        });
      })();

      console.log(html, preOpenLayer);

      clearTimeout(timer);
      state.speed = speed;
      state.opened = false;
      onClosed();

      timer = setTimeout(function () {
        state.display = 'none';

        if (!preOpenLayers.length) {
          store.ui.scrollBlock.clear();
        }

        onAfterClosed();
        clearTimeout(timer);
      }, speed);
    };

    return {
      state,
      customClassNames,
      layer,
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
      customClassNames.wrap,
    ]"
    :style="`display: ${state.display}; z-index: ${state.zIndex}; transition-duration: ${state.speed}ms;`"
  >
    <div :class="[$style['layer__container'], customClassNames.container]">
      <slot :open="open" :close="close" />
    </div>
    <div ref="loopFocus" tabindex="0"></div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/UiLayer.scss';
</style>
