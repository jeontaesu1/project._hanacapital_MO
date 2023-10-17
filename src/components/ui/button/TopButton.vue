<script>
import { computed, ref, onMounted } from 'vue';

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
    disabled: {
      Type: Boolean,
      default: false,
    },
    disabledStyle: {
      Type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isScrollDown: true,
    };
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    // const scrollToTop = () => {
    //   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // };

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
    // const isVisible = ref(false);
    // const onScroll = (e) => {
    // if (typeof window == 'undefined') return;
    // const top = window.scrollY || e.target.scrollTop || 0;
    // this.visible = top > 20;
    // isVisible.value = true;
    // };

    const toTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    // onMounted(() => {
    // const onScroll = (e) => {
    //   if (typeof window == 'undefined') return;
    //   const top = window.scrollY || e.target.scrollTop || 0;
    //   this.visible = top > 20;
    // };
    const onScroll = () => {
      // if (typeof window == 'undefined') return;
      // const visible = ref(false);
      const top = window.scrollY || 0;
      const test = document.getElementsByClassName('test');
      const testY = test.window.scrollY;
      this.last = window.scrollY;
      // this.scrollTop = e.target.scrollTop;
      // const display = top > 20;
      testY == top > 20 ? { display: 'block' } : { display: 'none' };

      // this.visible = true;
      // const visible = top > 20;
      // this.visible = !this.visible;
      // this.visible = ref(true);
      // visible.value = top > 300 ? false : true;
      // if (top > 20) {
      //   topButton = false;
      // }

      console.log('bottom!', top, this.last);
    };
    // const onScroll = (e) => {
    //   this.visible = e.target.scrollTop > 300 ? false : true;
    // };

    //   console.log('compoent');
    // });
    // const onScroll = (e) => {
    //   this.visible = e.target.scrollTop > 300 ? false : true;
    // };
    onMounted(() => {
      // DOM이 마운트 되었을 때 이벤트 핸들러를 등록한다.
      // this.target = document.querySelector('.test');
      document.addEventListener('scroll', onScroll);
    });

    return {
      customClassNames,
      // scrollTop,
      // scrollListener,
      onMounted,
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
    class="test"
  >
    <span :class="[$style['button__icon'], customClassNames.icon]">
      <BtnTop />
    </span>
  </button>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/TopButton.scss';
</style>
