<script>
import {
  reactive,
  computed,
  onMounted,
  onUpdated,
  ref,
  onUnmounted,
  onBeforeMount,
} from 'vue';

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
    // visible: {
    //   Type: Boolean,
    //   default: false,
    // },
  },
  data() {
    return {
      visible: false,
    };
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    // const scrollTop = () => {
    //   this.intervalId = setInterval(() => {
    //     if (window.scrollY === 0) {
    //       clearInterval(this.intervalId);
    //     }
    //     window.scroll(0, window.pageYOffset - 50);
    //   }, 20);
    //   console.log('sss');
    // };
    // const scrollListener = () => {
    //   this.visible = window.scrollY > 150;
    // };

    // onMounted(() => {
    //   scrollTop();
    // });
    // onBeforeMount(() => {
    //   scrollListener();
    // });

    const onScroll = (e) => {
      const { visible } = props;
      if (typeof window == 'undefined') return;
      const top = window.scrollY || e.target.scrollTop || 0;
      this.visible = top > 20;
    };

    const toTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return {
      customClassNames,
      // scrollTop,
      // scrollListener,
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
    v-show="visible"
  >
    <span :class="[$style['button__icon'], customClassNames.icon]">
      <BtnTop />
    </span>
  </button>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/TopButton.scss';
</style>
