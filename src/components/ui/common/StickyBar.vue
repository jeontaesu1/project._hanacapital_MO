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
} from 'vue';

import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';
import { useUiHeaderStore } from '@/stores/ui/header';

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
      },
    };

    const state = reactive({
      isSticky: false,
      marginTop: '0',
      marginBottom: '0',
      height: '0',
    });

    const wrap = ref(null);
    const contents = ref(null);
    const fake = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const headerH = computed(() => {
      return store.ui.header.height;
    });

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

      const contentsEl = contents.value;
      const contentsInnerEl = contentsEl.children[0];
      const offsetTop = wrapEl.offsetTop;
      const popupHead =
        popupLayout && popupLayout.head && popupLayout.head.value;
      const popupHeadH = (() => {
        if (popupHead) {
          return popupHead.offsetHeight;
        } else {
          return 0;
        }
      })();
      const popupBody =
        popupLayout && popupLayout.body && popupLayout.body.value;
      const scrollTop = (() => {
        if (popupBody) {
          return popupBody.scrollTop - popupHeadH;
        } else if (store.ui.scrollBlock.isBlocking) {
          return store.ui.scrollBlock.scrollTop;
        } else {
          const html = document.getElementsByTagName('html')[0];
          return html.scrollTop;
        }
      })();

      if (
        (popupHead && scrollTop < offsetTop - popupHeadH) ||
        scrollTop < offsetTop - headerH.value
      ) {
        if (state.isSticky) {
          state.isSticky = false;
        }
        return;
      }

      const height = contentsInnerEl.offsetHeight;

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
      window.removeEventListener('load', load);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resize);

      const popupBody =
        popupLayout && popupLayout.body && popupLayout.body.value;

      if (popupBody) {
        popupBody.removeEventListener('scroll', scroll);
      }
    });

    return {
      state,
      wrap,
      contents,
      fake,
      customClassNames,
      headerH,
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
        top: state.isSticky ? `${headerH}px` : null,
        left: state.isSticky ? '0' : null,
        width: state.isSticky ? '100%' : null,
        zIndex: state.isSticky ? '1000' : null,
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
