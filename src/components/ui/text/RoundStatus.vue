<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
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
    theme: {
      Type: String,
      default: null,
    },
    block: {
      Type: Boolean,
      default: false,
    },
    square: {
      Type: Boolean,
      default: false,
    },
    // 240702 추가
    border: {
      Type: String,
      default: null,
    },
    // // 240702 추가
  },
  setup(props) {
    // s: 241125_border prop이 있으면 그 값을 theme으로 사용하게끔 추가
    const effectiveTheme = computed(() => {
      return props.theme || props.border;
    });
    // e:// 241125_border prop이 있으면 그 값을 theme으로 사용하게끔 추가

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      customClassNames,
      effectiveTheme,
    };
  },
};
</script>

<template>
  <span
    :class="[
      $style['status'],
      {
        /* 기존코드 */
        // [$style['status--block']]: block,
        // [$style['status--square']]: square,
        // [$style['status--border']]: border, // 241125 추가
        // [$style[`status--border-${theme}`]]: border, // 241125 추가
        // [$style[`status--theme-${theme}`]]: theme,
        // [$style[`status--size-${size}`]]: size,

        /* 수정코드 */
        [$style['status--block']]: block,
        [$style['status--square']]: square,
        [$style['status--border']]: border,
        [$style[`status--border-${effectiveTheme}`]]: border,
        [$style[`status--theme-${effectiveTheme}`]]: !border,
        [$style[`status--size-${size}`]]: size,
      },
      customClassNames.wrap,
    ]"
  >
    <slot />
  </span>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/text/RoundStatus.scss';
</style>
