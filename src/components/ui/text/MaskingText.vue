<script>
import { reactive, computed, ref, nextTick } from 'vue';

import iconClick from '@/assets/images/icon/click.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  contents: '',
  button: '',
  buttonIcon: '',
  buttonText: '',
});

export default {
  components: {
    iconClick,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    tagName: {
      Type: String,
      default: 'span',
    },
    size: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const state = reactive({
      clear: false,
    });

    const wrap = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const buttonClick = () => {
      state.clear = true;

      nextTick(() => {
        const el = wrap.value;
        let setTabindex = false;

        if (!el.getAttribute('tabindex')) {
          el.setAttribute('tabindex', '0');
          setTabindex = true;
        }

        el.focus();

        if (setTabindex) {
          el.removeAttribute('tabindex');
        }
      });
    };

    return {
      state,
      wrap,
      customClassNames,
      buttonClick,
    };
  },
};
</script>

<template>
  <component
    :is="tagName"
    :class="[
      $style['masking'],
      {
        [$style[`masking--size-${size}`]]: size,
      },
      customClassNames.wrap,
    ]"
    ref="wrap"
  >
    <button
      v-if="!state.clear"
      type="button"
      :class="[$style['masking__button'], customClassNames.button]"
      title="마스킹 제거"
      @click="buttonClick"
    >
      <span
        :class="[$style['masking__button-icon'], customClassNames.buttonIcon]"
      >
        <iconClick />
      </span>
      <span
        :class="[$style['masking__button-text'], customClassNames.buttonText]"
      >
        터치하세요
      </span>
    </button>
    <component
      :is="tagName"
      :class="[$style['masking__contents'], customClassNames.contents]"
      :aria-hidden="!state.clear"
    >
      <slot />
    </component>
  </component>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/text/MaskingText.scss';
</style>
