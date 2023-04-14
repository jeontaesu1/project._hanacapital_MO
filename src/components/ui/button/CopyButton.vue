<script>
import { computed } from 'vue';

import IconCopy from '@/assets/images/icon/copy.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  inner: '',
  contents: '',
  right: '',
  button: '',
  text: '',
  icon: '',
});

export default {
  inheritAttrs: false,
  components: {
    IconCopy,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    text: {
      Type: String,
      default: '',
    },
    align: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const copy = () => {
      navigator.clipboard.writeText(props.text).then(() => {
        console.log('success');
      });
    };

    return {
      customClassNames,
      copy,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['copy'],
      {
        [$style[`copy--align-${align}`]]: align,
      },
      customClassNames.wrap,
    ]"
  >
    <div :class="[$style['copy__inner'], customClassNames.inner]">
      <div :class="[$style['copy__contents'], customClassNames.contents]">
        <slot />
      </div>
      <div :class="[$style['copy__right'], customClassNames.right]">
        <button
          type="button"
          :class="[$style['copy__button'], customClassNames.button]"
          @click="copy"
        >
          <span :class="[$style['copy__button-icon'], customClassNames.icon]">
            <IconCopy />
          </span>
          <span :class="[$style['copy__button-text'], customClassNames.text]"
            >복사하기</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/CopyButton.scss';
</style>
