<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  img: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    size: {
      Type: String,
      default: null,
    },
    src: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <span
    :class="[
      $style['coupon-logo'],
      {
        [$style[`coupon-logo--size-${size}`]]: size,
      },
      customClassNames.wrap,
    ]"
  >
    <img
      v-if="src"
      :src="src"
      alt=""
      :class="[$style['coupon-logo__img'], customClassNames.img]"
      @error="
        (e) => {
          e.target.parentNode.classList.add('is-error');
        }
      "
    />
  </span>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/imageData/CouponLogo.scss';
</style>
