<script>
import {
  ref,
  reactive,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  watch,
  inject,
  nextTick,
} from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import IconDelete from '@/assets/images/icon/text-delete.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  cell: '',
  input: '',
  delete: '',
  deleteText: '',
});

export default {
  components: {
    IconDelete,
  },
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
    maxLength: {
      Type: Number,
      default: null,
    },
    onDelete: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    useDelete: {
      Type: Boolean,
      default: true,
    },
    readonly: {
      Type: Boolean,
      default: false,
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
    align: {
      Type: String,
      default: null,
    },
    defaultValue: {
      Type: String,
      default: null,
    },
    modelValue: {
      Type: String,
    },
  },
  setup(props, { emit }) {
    let timer = null;
    const inputScroll = {
      timer: null,
      iosClick: false,
      iosFocus: false,
      androidFocus: false,
      androidClick: false,
    };

    const state = reactive({
      isFocus: false,
      isInputed: false,
      val: '',
    });

    const formListItem = inject('formListItem', {});
    const popupLayout = inject('popupLayout', {});

    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    const input = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
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

    const getInputElement = () => {
      return input.value;
    };

    const focus = () => {
      input.value.focus();
    };

    const deleteAction = () => {
      const { onDelete } = props;
      input.value.value = '';
      input.value.focus();
      onDelete();

      const eInput = new Event('input');
      input.value.dispatchEvent(eInput);
    };

    const onfocusin = () => {
      clearTimeout(timer);
      state.isFocus = true;
      state.isInputed = input.value.value.length ? true : false;
    };

    const onfocusout = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        state.isFocus = false;
        clearTimeout(timer);
      }, 50);
    };

    const onInput = (e) => {
      const { value } = e.target;
      const { maxLength } = props;
      const val =
        maxLength === null ? value : value.substr(0, Number(maxLength));

      e.target.value = val;
      state.val = val;
      emit('update:modelValue', val);
    };

    const onKeyup = (e) => {
      state.isInputed = e.target.value.length ? true : false;
    };

    const focusScroll = () => {
      const { isIos, isAndroid } = store.ui.common.userAgent;

      if (isIos || isAndroid) {
        const html = document.getElementsByTagName('html')[0];
        const inputEl = input.value;
        const popupBodyEl = popupLayout.body ? popupLayout.body.value : null;
        const offsetTop =
          (popupBodyEl ? popupBodyEl.scrollTop : html.scrollTop) +
          inputEl.getBoundingClientRect().top;
        const moveTop = offsetTop - headerH.value - 50;

        if (popupBodyEl) {
          if (store.ui.common.userAgent.isIos) {
            html.scrollTop = 0;
            clearTimeout(inputScroll.timer);
            inputScroll.timer = setTimeout(() => {
              html.scrollTop = moveTop;
            }, 5);
          } else {
            popupBodyEl.scrollTop = moveTop;
          }
        } else {
          html.scrollTop = moveTop;
        }
      }
    };

    const onInputFocusin = () => {
      if (store.ui.common.userAgent.isIos) {
        inputScroll.iosFocus = true;
      } else if (store.ui.common.userAgent.isAndroid) {
        inputScroll.androidFocus = true;
        focusScroll();
      }
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

    onBeforeMount(() => {
      state.val = props.modelValue || props.defaultValue || '';
    });

    onMounted(() => {
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

    watch(
      () => props.modelValue,
      (cur) => {
        state.val = cur;

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
      getInputElement,
      focus,
      deleteAction,
      onfocusin,
      onInput,
      onKeyup,
      onfocusout,
      onInputFocusin,
      onInputClick,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['input'],
      {
        [$style['input--focus']]: state.isFocus,
        [$style['input--inputed']]: state.isInputed,
      },
      customClassNames.wrap,
    ]"
    @focusin="onfocusin"
    @focusout="onfocusout"
  >
    <div :class="[$style['input__cell'], customClassNames.cell]">
      <input
        ref="input"
        v-bind="$attrs"
        :type="type"
        :class="[
          $style['input__input'],
          {
            [$style[`input__input--align-${align}`]]: align,
          },
          customClassNames.input,
        ]"
        :value="modelValue || state.val"
        :disabled="disabled"
        :readonly="readonly"
        @input="onInput"
        @keyup="onKeyup"
        @focusin="onInputFocusin"
        @click="onInputClick"
      />
    </div>
    <button
      type="button"
      v-if="!disabled && !readonly && useDelete"
      :class="[$style['input__delete'], customClassNames.delete]"
      @click="deleteAction"
    >
      <IconDelete />
      <span :class="[$style['input__delete-text'], customClassNames.deleteText]"
        >입력 내용 지우기</span
      >
    </button>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/BasicInput.scss';
</style>
