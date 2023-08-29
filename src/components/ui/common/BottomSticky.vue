<script>
import {
  ref,
  reactive,
  computed,
  onMounted,
  onBeforeUnmount,
  nextTick,
  inject,
} from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';

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
    const pageContents = inject('pageContents', {});

    const store = {
      ui: {
        common: useUiCommonStore(),
        scrollBlock: useUiScrollBlockStore(),
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
      const scrollTop = (() => {
        if (store.ui.scrollBlock.isBlocking) {
          return store.ui.scrollBlock.scrollTop;
        } else {
          const html = document.getElementsByTagName('html')[0];
          return html.scrollTop;
        }
      })();
      const offsetTop = scrollTop + wrapEl.getBoundingClientRect().top;
      const height = contentsInnerEl.offsetHeight;
      const winHeight = window.innerHeight;

      if (
        store.ui.common.keypadOpened ||
        scrollTop >= offsetTop + height - winHeight
      ) {
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

    const keypadOpened = () => {
      update();
    };

    const keypadClosed = () => {
      update();
    };

    onMounted(() => {
      setMargin();

      nextTick(() => {
        update();
      });

      window.addEventListener('load', load);
      window.addEventListener('scroll', scroll);
      window.addEventListener('resize', resize);
      window.addEventListener('keypadOpened', keypadOpened);
      window.addEventListener('keypadClosed', keypadClosed);

      if (pageContents.wrap && pageContents.wrap.value) {
        pageContents.wrap.value.addEventListener('resize', resize);
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener('load', load);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resize);
      window.removeEventListener('keypadOpened', keypadOpened);
      window.removeEventListener('keypadClosed', keypadClosed);

      if (pageContents.wrap && pageContents.wrap.value) {
        pageContents.wrap.value.removeEventListener('resize', resize);
      }
    });

    return {
      state,
      wrap,
      contents,
      fake,
      customClassNames,
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
        bottom: state.isSticky ? '0' : null,
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
