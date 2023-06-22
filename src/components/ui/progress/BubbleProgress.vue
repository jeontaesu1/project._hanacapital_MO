<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  text: '',
  current: '',
  total: '',
  bar: '',
  barActive: '',
  barPoint: '',
  bubble: '',
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
    label: {
      Type: Function,
      default() {
        return (total, current) => {
          return `총 ${total}단계 중 ${current}단계`;
        };
      },
    },
    text: {
      Type: Function,
      default() {
        return (total /* , current */) => {
          return `${total}단계`;
        };
      },
    },
    bubble: {
      Type: Function,
      default() {
        return (total, current) => {
          return `${current}단계`;
        };
      },
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
    :class="[$style['progress'], customClassNames.wrap]"
    role="img"
    :aria-label="label(total, current)"
  >
    <div :class="[$style['progress__bar'], customClassNames.bar]">
      <div
        :class="[$style['progress__bar-active'], customClassNames.barActive]"
        :style="`width: ${activeWidth}%;`"
      ></div>
      <div
        :class="[$style['progress__bar-point'], customClassNames.barPoint]"
        :style="`left: ${activeWidth}%;`"
      >
        <div :class="[$style['progress__bubble'], customClassNames.bubble]">
          {{ bubble(total, current) }}
        </div>
      </div>
    </div>
    <div :class="[$style['progress__text'], customClassNames.text]">
      {{ text(total, current) }}
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/progress/BubbleProgress.scss';
</style>
