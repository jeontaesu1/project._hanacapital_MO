<script>
import { ref, reactive, computed, useCssModule } from 'vue';

import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';
import { useUiLayerStore } from '@/stores/ui/layer';

const defaultClassNames = () => ({
  wrap: '',
  container: '',
  loop: '',
});
const filter = Array.prototype.filter;
const getParents = (el) => {
  const parents = [];
  for (el = el.parentNode; el && el !== document; el = el.parentNode) {
    parents.push(el);
  }
  return parents;
};
const setAttr = (elArr, name, val) => {
  for (let i = 0; i < elArr.length; i++) {
    elArr[i].setAttribute(name, val);
  }
};
const removeAttr = (elArr, name) => {
  for (let i = 0; i < elArr.length; i++) {
    elArr[i].removeAttribute(name);
  }
};
const elFocus = (el) => {
  let setTabindex = false;

  if (!el.getAttribute('tabindex')) {
    el.setAttribute('tabindex', '0');
    setTabindex = true;
  }

  el.focus();

  if (setTabindex) {
    el.removeAttribute('tabindex');
  }
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
        return defaultClassNames();
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
    const layerContainer = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const open = (opener = null, speed = defaultSpeed) => {
      if (state.opened) return;

      const { onBeforeOpened, onOpened, onAfterOpened } = props;

      onBeforeOpened();

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
          !item.matches(notOhterElements) &&
          !layersParents.find((parent) => parent === item)
        );
      });
      const preLayersElements = (() => {
        let re = [];
        for (let i = 0; i < preOpenLayers.length; i++) {
          re = re.concat(
            filter.call(preOpenLayers[i].querySelectorAll('*'), (item) => {
              return !item.matches(notOhterElements);
            })
          );
        }
        re = new Set(re);
        return Array.from(re);
      })();

      clearTimeout(timer);
      store.ui.scrollBlock.block();
      state.speed = speed;
      state.display = 'block';
      state.zIndex = store.ui.layer.zIndex;
      store.ui.layer.updateZIndex();

      if (opener) {
        state.opener = opener;
      }

      setAttr(ohterElements, 'aria-hidden', 'true');
      setAttr(ohterElements, 'inert', '');
      setAttr(ohterElements, 'data-ui-js', 'hidden');
      setAttr(preLayersElements, 'aria-hidden', 'true');
      setAttr(preLayersElements, 'inert', '');
      setAttr(preLayersElements, 'data-ui-js', 'hidden');
      setAttr(preOpenLayers, 'aria-hidden', 'true');
      setAttr(preOpenLayers, 'inert', '');
      removeAttr(preOpenLayers, 'aria-modal');

      timer = setTimeout(function () {
        state.opened = true;
        onOpened();
        clearTimeout(timer);
        timer = setTimeout(function () {
          layerContainer.value.focus();
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
      const body = document.getElementsByTagName('body')[0];
      const preOpenLayers = filter.call(
        document.getElementsByClassName($style['layer--opened']),
        (item) => {
          return layer.value !== item;
        }
      );
      const preOpenLayer = (() => {
        if (!preOpenLayers.length) return null;

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
        })[0];
      })();
      const preOpenLayerOhterElements = preOpenLayer
        ? preOpenLayer.querySelectorAll('[data-ui-js="hidden"]')
        : [];

      clearTimeout(timer);
      state.speed = speed;
      state.opened = false;
      onClosed();

      timer = setTimeout(function () {
        const { opener } = state;
        state.display = 'none';

        if (preOpenLayer) {
          removeAttr(preOpenLayerOhterElements, 'aria-hidden');
          removeAttr(preOpenLayerOhterElements, 'inert');
          removeAttr(preOpenLayerOhterElements, 'data-ui-js');
          preOpenLayer.removeAttribute('inert');
          preOpenLayer.setAttribute('aria-hidden', 'false');
          preOpenLayer.setAttribute('aria-modal', 'true');
        } else {
          const ohterElements = body.querySelectorAll('[data-ui-js="hidden"]');
          removeAttr(ohterElements, 'aria-hidden');
          removeAttr(ohterElements, 'inert');
          removeAttr(ohterElements, 'data-ui-js');
        }

        if (!preOpenLayers.length) {
          store.ui.scrollBlock.clear();
        }

        if (opener) {
          if (preOpenLayer) {
            if (opener.closest(`.${$style['layer']}`) === preOpenLayer) {
              elFocus(opener);
            }
          } else {
            elFocus(opener);
          }
          state.opener = null;
        } else {
          elFocus(html);
        }

        onAfterClosed();
        clearTimeout(timer);
      }, speed);
    };

    const loopFocusBefore = () => {
      const lastChild = (() => {
        const arr = layerContainer.value.querySelectorAll(':last-child');

        if (arr.length) {
          return arr[arr.length - 1];
        } else {
          return null;
        }
      })();

      if (lastChild) {
        elFocus(lastChild);
      } else {
        layerContainer.value.focus();
      }
    };

    const loopFocusAfter = () => {
      layerContainer.value.focus();
    };

    return {
      state,
      customClassNames,
      layer,
      layerContainer,
      open,
      close,
      loopFocusBefore,
      loopFocusAfter,
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
    :style="`display: ${state.display}; z-index: ${
      state.zIndex
    }; transition-duration: ${state.speed}ms; visibility: ${
      state.display === 'none' ? 'hidden' : 'visible'
    };`"
    :aria-hidden="state.opened ? 'false' : 'true'"
    :aria-modal="state.opened ? 'true' : null"
    :hidden="state.opened ? null : ''"
  >
    <div
      :class="[$style['layer__loop'], customClassNames.loop]"
      tabindex="0"
      @focus="loopFocusBefore"
    ></div>
    <div
      ref="layerContainer"
      :class="[$style['layer__container'], customClassNames.container]"
      :tabindex="state.opened ? '0' : null"
    >
      <slot :open="open" :close="close" />
    </div>
    <div
      :class="[$style['layer__loop'], customClassNames.loop]"
      tabindex="0"
      @focus="loopFocusAfter"
    ></div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/UiLayer.scss';
</style>
