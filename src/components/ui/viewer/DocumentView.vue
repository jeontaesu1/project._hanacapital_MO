<script>
import { ref, computed, reactive, onMounted, onBeforeUnmount } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  fake: '',
  origin: '',
});

export default {
  inheritAttrs: false,
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
  },
  setup(props) {
    const state = reactive({
      zoom: 1,
      height: 0,
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const fake = ref(null);
    const origin = ref(null);

    const update = () => {
      const fakeEl = fake.value;
      const originEl = origin.value;
      const fakeW = fakeEl.offsetWidth;
      const originW = originEl.offsetWidth;
      const originH = originEl.offsetHeight;

      if (fakeW <= 0 || originW <= 0) return;

      const zoom = ((1 / originW) * fakeW).toFixed(6);

      state.zoom = zoom;
      state.height = (originH * zoom).toFixed(6);
    };

    onMounted(() => {
      update();

      window.addEventListener('load', update);
      window.addEventListener('resize', update);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('load', update);
      window.removeEventListener('resize', update);
    });

    return {
      state,
      customClassNames,
      fake,
      origin,
    };
  },
};
</script>

<template>
  <div :class="[$style['viewer'], customClassNames.wrap]">
    <div
      ref="fake"
      :class="[$style['viewer__fake'], customClassNames.fake]"
      :style="`height: ${state.height}px;`"
    ></div>
    <div
      ref="origin"
      :class="[$style['viewer__origin'], customClassNames.origin]"
      :style="`transform: scale(${state.zoom}) translateZ(0);`"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/viewer/DocumentView.scss';
</style>
