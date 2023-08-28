<script>
import {
  ref,
  reactive,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  nextTick,
  inject,
  provide,
} from 'vue';

import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';
import { useUiHeaderStore } from '@/stores/ui/header';
import { useUiStickyStore } from '@/stores/ui/sticky';

const defaultClassNames = () => ({
  wrap: '',
  contents: '',
  fake: '',
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
  setup(props) {
    const uiLayer = inject('uiLayer', {});
    const popupLayout = inject('popupLayout', {});

    const store = {
      ui: {
        scrollBlock: useUiScrollBlockStore(),
        header: useUiHeaderStore(),
        sticky: useUiStickyStore(),
      },
    };

    const state = reactive({
      isSticky: false,
      marginTop: '0',
      marginBottom: '0',
      height: '0',
      storeKey: null,
    });

    const wrap = ref(null);
    const contents = ref(null);
    const fake = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const headerH = computed(() => {
      const popupHead =
        popupLayout && popupLayout.head && popupLayout.head.value;
      const popupHeadH = (() => {
        if (popupHead) {
          return popupHead.offsetHeight;
        } else {
          return 0;
        }
      })();

      return popupHeadH || store.ui.header.height;
    });

    const stickyH = computed(() => {
      return getStickyH();
    });

    const getStickyH = () => {
      const { items } = store.ui.sticky;
      let height = 0;

      if (state.storeKey) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].key === state.storeKey) break;

          height += items[i].height;
        }
      }

      return height;
    };

    const setMargin = () => {
      const contentsEl = contents.value;
      const contentsInnerEl = contentsEl.children[0];
      const contentsInnerStyles = getComputedStyle(contentsInnerEl);
      const marginTop = contentsInnerStyles.getPropertyValue('margin-top');
      const marginBottom =
        contentsInnerStyles.getPropertyValue('margin-bottom');

      state.marginTop = marginTop;
      state.marginBottom = marginBottom;
    };

    const update = () => {
      const wrapEl = wrap.value;

      if (wrapEl.offsetHeight <= 0) return;

      const html = document.getElementsByTagName('html')[0];
      const contentsEl = contents.value;
      const contentsInnerEl = contentsEl.children[0];
      const popupBody =
        popupLayout && popupLayout.body && popupLayout.body.value;
      const headH = headerH.value;
      const htmlScrollTop = html.scrollTop;
      const scrollTop = (() => {
        if (popupBody) {
          return popupBody.scrollTop + headH;
        } else if (store.ui.scrollBlock.isBlocking) {
          return store.ui.scrollBlock.scrollTop;
        } else {
          return htmlScrollTop;
        }
      })();
      const offsetTop =
        (popupBody ? scrollTop + htmlScrollTop : scrollTop) +
        wrapEl.getBoundingClientRect().top;
      const stickyH = getStickyH();
      const height = contentsInnerEl.offsetHeight;

      if (popupBody) {
        if (state.storeKey) {
          store.ui.sticky.remove(state.storeKey);
          state.storeKey = null;
        }
      } else if (state.storeKey) {
        store.ui.sticky.update(state.storeKey, height);
      } else {
        state.storeKey = store.ui.sticky.add(height);
      }

      if (scrollTop <= offsetTop - headH - stickyH) {
        if (state.isSticky) {
          state.isSticky = false;
        }
        return;
      }

      state.height = `${height}px`;

      if (!state.isSticky) {
        state.isSticky = true;
      }
    };

    const scroll = () => {
      update();
    };

    const resize = () => {
      update();
    };

    const load = () => {
      update();
    };

    const scrollBind = () => {
      const popupBody =
        popupLayout && popupLayout.body && popupLayout.body.value;

      if (popupBody) {
        popupBody.addEventListener('scroll', scroll);
      }
    };

    const getElement = () => {
      return wrap.value;
    };

    onBeforeMount(() => {
      if (uiLayer && uiLayer.stickyBar) {
        uiLayer.stickyBar.value = {
          update,
        };
        popupLayout.stickyBar.value = {
          scrollBind,
        };
      }
    });

    onMounted(() => {
      setMargin();

      nextTick(() => {
        update();
      });

      window.addEventListener('load', load);
      window.addEventListener('scroll', scroll);
      window.addEventListener('resize', resize);
    });

    onBeforeUnmount(() => {
      if (state.storeKey) {
        store.ui.sticky.remove(state.storeKey);
      }

      window.removeEventListener('load', load);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resize);

      const popupBody =
        popupLayout && popupLayout.body && popupLayout.body.value;

      if (popupBody) {
        popupBody.removeEventListener('scroll', scroll);
      }
    });

    provide('stickyBar', {
      getElement,
    });

    return {
      state,
      wrap,
      contents,
      fake,
      customClassNames,
      headerH,
      stickyH,
    };
  },
};
</script>

<template>
  <div ref="wrap" :class="customClassNames.wrap">
    <div
      ref="contents"
      :style="{
        position: state.isSticky ? 'fixed' : 'static',
        top: state.isSticky ? `${headerH + stickyH}px` : null,
        left: state.isSticky ? '0' : null,
        width: state.isSticky ? '100%' : null,
        zIndex: state.isSticky ? '1000' : null,
        transform: 'translateZ(0)',
        transition: 'transform 0s',
      }"
      :class="[
        {
          'is-sticky': state.isSticky,
        },
        customClassNames.contents,
      ]"
    >
      <slot :isSticky="state.isSticky" />
    </div>
    <div
      :class="customClassNames.fake"
      :style="{
        display: state.isSticky ? 'block' : 'none',
        marginTop: state.marginTop,
        marginBottom: state.marginBottom,
        height: state.height,
      }"
    ></div>
  </div>
</template>
