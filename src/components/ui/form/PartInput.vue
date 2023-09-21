<script>
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  onUpdated,
  watch,
  inject,
  nextTick,
  reactive,
} from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

const defaultClassNames = () => ({
  wrap: '',
  block: '',
  input: '',
  dot: '',
  placeholderDot: '',
  placeholderDotItem: '',
  placeholderDotItemHide: '',
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
    type: {
      Type: String,
      default: 'text',
    },
    length: {
      Type: Number,
      default: 1,
    },
    beforeDot: {
      Type: Number,
      default: 0,
    },
    afterDot: {
      Type: Number,
      default: 0,
    },
    defaultValue: {
      Type: String,
      default: null,
    },
    scrollFocus: {
      Type: Boolean,
      default: true,
    },
    modelValue: {
      Type: String,
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
    placeholderDot: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const inputScroll = {
      iosClick: false,
      iosFocus: false,
      androidFocus: false,
      androidClick: false,
    };

    const formListItem = inject('formListItem', {});
    const popupLayout = inject('popupLayout', {});

    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      valueLength: 0,
      value: null,
    });

    const input = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const value = computed(() => {
      const { modelValue, defaultValue } = props;
      const { value } = state;

      return typeof modelValue === 'string'
        ? modelValue
        : typeof value === 'string'
        ? value
        : defaultValue;
    });

    const headerH = computed(() => {
      const popupHead =
        popupLayout && popupLayout.head && popupLayout.head.value;
      const popupHeadH = (() => {
        if (popupHead) {
          return popupHead.offsetHeight;
        } else {
          return 0;
        }
      })();

      return popupHeadH || store.ui.header.height;
    });

    const checkLength = () => {
      const { length } = props;
      const val = input.value.value;

      if (val.length > length) {
        input.value.value = val.substr(0, length);

        const eInput = new Event('input');
        input.value.dispatchEvent(eInput);
      }
    };

    const onInput = (e) => {
      const val = e.target.value;

      state.value = val;
      state.valueLength = val.length;

      emit('update:modelValue', val);
    };

    const focusScroll = () => {
      const { isIos, isAndroid } = store.ui.common.userAgent;
      const { scrollFocus } = props;

      if (!scrollFocus || (!isIos && !isAndroid)) return;

      const html = document.getElementsByTagName('html')[0];
      const inputEl = input.value;
      const popupBodyEl = popupLayout.body ? popupLayout.body.value : null;
      const headH = headerH.value;
      const htmlScrollTop = html.scrollTop;
      const scrollTop = (() => {
        if (popupBodyEl) {
          return popupBodyEl.scrollTop + headH;
        } else {
          return htmlScrollTop;
        }
      })();
      const offsetTop =
        (popupBodyEl ? scrollTop + htmlScrollTop : scrollTop) +
        inputEl.getBoundingClientRect().top;
      const moveTop = offsetTop - headH - 80;

      if (popupBodyEl) {
        if (store.ui.common.userAgent.isIos) {
          html.scrollTop = moveTop - scrollTop;
        } else {
          popupBodyEl.scrollTop = moveTop - headH;
        }
      } else {
        html.scrollTop = moveTop;
      }
    };

    const onInputFocusin = () => {
      if (store.ui.common.userAgent.isIos) {
        inputScroll.iosFocus = true;
      } else if (store.ui.common.userAgent.isAndroid) {
        inputScroll.androidFocus = true;
        focusScroll();
      }

      checkLength();
    };

    const onInputClick = () => {
      if (store.ui.common.userAgent.isIos) {
        inputScroll.iosClick = true;
      } else if (store.ui.common.userAgent.isAndroid) {
        inputScroll.androidClick = true;
      }
    };

    const onKeypadOpened = () => {
      const { iosFocus, iosClick } = inputScroll;

      if (store.ui.common.userAgent.isIos) {
        if (iosFocus && !iosClick) {
          focusScroll();
        }

        inputScroll.iosFocus = false;
        inputScroll.iosClick = false;
      }
    };

    const onKeypadOpenedLegacy = () => {
      const { androidFocus, androidClick } = inputScroll;

      if (androidFocus || androidClick) {
        focusScroll();
      }

      inputScroll.androidFocus = false;
    };

    onMounted(() => {
      if (typeof value.value === 'string') {
        state.value = value.value;
        state.valueLength = value.value.length;
      }

      checkLength();

      window.addEventListener('keypadOpened', onKeypadOpened);
      window.addEventListener(
        'legacyAndroidKeypadOpened',
        onKeypadOpenedLegacy
      );
    });

    onBeforeUnmount(() => {
      window.removeEventListener('keypadOpened', onKeypadOpened);
      window.removeEventListener(
        'legacyAndroidKeypadOpened',
        onKeypadOpenedLegacy
      );
    });

    onUpdated(() => {
      if (input.value) {
        const val = input.value.value;

        state.value = val;
        state.valueLength = val.length;
      }

      checkLength();
    });

    watch(
      () => props.modelValue,
      (cur) => {
        state.value = cur;
        state.valueLength = cur.length;

        checkLength();

        nextTick(() => {
          if (formListItem && formListItem.checkInputed) {
            formListItem.checkInputed();
          }
        });
      }
    );

    return {
      state,
      input,
      customClassNames,
      value,
      checkLength,
      onInput,
      onInputFocusin,
      onInputClick,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['part-input'],
      {
        [$style['part-input--disabled']]: disabled,
      },
      customClassNames.wrap,
    ]"
  >
    <div
      v-for="item in beforeDot"
      :key="item"
      :class="[$style['part-input__dot'], customClassNames.dot]"
    />
    <div
      :class="[$style['part-input__block'], customClassNames.block]"
      :style="`width: ${16 * length}px;`"
    >
      <div
        v-if="placeholderDot"
        :class="[
          $style['part-input__placeholder-dot'],
          customClassNames.placeholderDot,
        ]"
      >
        <div
          v-for="item in length"
          :key="item"
          :class="[
            $style['part-input__placeholder-dot-item'],
            customClassNames.placeholderDotItem,
            {
              [$style['part-input__placeholder-dot-item--hide']]:
                item <= state.valueLength,
              [customClassNames.placeholderDotItemHide]:
                item <= state.valueLength,
            },
          ]"
        />
      </div>
      <input
        ref="input"
        v-bind="$attrs"
        :type="type"
        :class="[$style['part-input__input'], customClassNames.input]"
        :maxlength="length"
        :value="value"
        :disabled="disabled"
        @input="onInput"
        @focusin="onInputFocusin"
        @focusout="checkLength"
        @keydown="checkLength"
        @keyup="checkLength"
        @click="onInputClick"
      />
    </div>
    <div
      v-for="item in afterDot"
      :key="item"
      :class="[$style['part-input__dot'], customClassNames.dot]"
    />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/PartInput.scss';
</style>
