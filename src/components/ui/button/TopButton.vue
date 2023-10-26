<script>
import { computed, onMounted, onUnmounted } from 'vue';

import BtnTop from '@/assets/images/icon/btn-top.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  text: '',
  icon: '',
});

export default {
  inheritAttrs: false,
  components: {
    BtnTop,
  },
  props: {
    type: {
      Type: String,
      default: 'button',
    },
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });
    const toTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    const onScroll = () => {
      const btnTop = document.querySelector('.button_top');
      const scrollTop = document.documentElement.scrollTop;
      if (btnTop) {
        if (scrollTop > 20) {
          btnTop.style.opacity = '1';
          btnTop.style.transition = '0.3s';
        } else {
          btnTop.style.opacity = '0';
          btnTop.style.transition = '0.3s';
        }
      }
    };
    onMounted(() => {
      document.addEventListener('scroll', onScroll, true);
    });
    onUnmounted(() => {
      document.removeEventListener('scroll', onScroll, false);
    });

    return {
      customClassNames,
      onScroll,
      toTop,
    };
  },
};
</script>

<template>
  <button
    v-bind="$attrs"
    :type="type"
    :class="[$style['button'], customClassNames.wrap]"
    @click="toTop"
    class="button_top"
  >
    <span :class="[$style['button__icon'], customClassNames.icon]">
      <BtnTop />
    </span>
  </button>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/TopButton.scss';
</style>
