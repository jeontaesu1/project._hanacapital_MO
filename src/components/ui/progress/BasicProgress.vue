<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  current: '',
  total: '',
  bar: '',
  barActive: '',
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
    total: {
      Type: Number,
      default: 1,
    },
    current: {
      Type: Number,
      default: 1,
    },
    color: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const activeWidth = computed(() => {
      const { total, current } = props;
      const sum = (100 / total) * current;

      if (current === total) {
        return 100;
      } else {
        return Number(sum.toFixed(8));
      }
    });

    return {
      customClassNames,
      activeWidth,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['progress'],
      {
        [$style[`progress--color-${color}`]]: color,
      },
      customClassNames.wrap,
    ]"
    role="img"
    :aria-label="`총 ${total}단계 중 ${current}단계`"
  >
    <div :class="[$style['progress__bar'], customClassNames.bar]">
      <div
        :class="[$style['progress__bar-active'], customClassNames.barActive]"
        :style="`width: ${activeWidth}%;`"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/progress/BasicProgress.scss';
</style>
