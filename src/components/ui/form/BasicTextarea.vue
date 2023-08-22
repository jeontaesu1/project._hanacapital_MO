<script>
import {
  ref,
  reactive,
  computed,
  inject,
  provide,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUpdated,
  useCssModule,
  watch,
  nextTick,
} from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import FormInvalid from '@/components/ui/form/FormInvalid.vue';

const defaultClassNames = () => ({
  item: '',
  title: '',
  titleText: '',
  titleOptionalText: '',
  require: '',
  requireText: '',
  contents: '',
  input: '',
  bottom: '',
  bottomLeft: '',
  count: '',
  countCurrent: '',
});

export default {
  components: {
    FormInvalid,
  },
  inheritAttrs: false,
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    require: {
      Type: Boolean,
      default: false,
    },
    titleText: {
      Type: String,
      default: '',
    },
    titleOptionalText: {
      Type: String,
      default: null,
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
    count: {
      Type: Boolean,
      default: false,
    },
    error: {
      Type: Boolean,
      default: false,
    },
    maxlength: {
      Type: Number,
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
  setup(props, context) {
    const { emit } = context;
    let timer = null;
    const inputScroll = {
      timer: null,
      iosClick: false,
      iosFocus: false,
      androidFocus: false,
      androidClick: false,
    };

    const $style = useCssModule();
    const formListStyleModule = inject('formListStyleModule');
    const popupLayout = inject('popupLayout', {});

    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      isFocus: false,
      isInputed: false,
      val: '',
      count: props.modelValue ? props.modelValue.length : 0,
    });

    const input = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isBottom = computed(() => {
      return Boolean(context.slots.bottom);
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

    const labelClick = () => {
      focus();
    };

    const checkLength = () => {
      const { maxlength } = props;

      if (typeof maxlength !== 'number') return;

      const val = input.value.value;

      if (val.length > maxlength) {
        input.value.value = val.substr(0, maxlength);

        const eInput = new Event('input');
        input.value.dispatchEvent(eInput);
      }
    };

    const checkInputed = () => {
      const length = input.value.value.length;
      state.isInputed = length ? true : false;
      state.count = length;
    };

    const onfocusin = () => {
      clearTimeout(timer);
      checkLength();
      state.isFocus = true;
      state.isInputed = input.value.value.length ? true : false;
      onInputFocusin();
    };

    const onfocusout = () => {
      clearTimeout(timer);
      checkLength();

      timer = setTimeout(() => {
        state.isFocus = false;
        clearTimeout(timer);
      }, 50);
    };

    const onInput = (e) => {
      const { value } = e.target;
      state.val = value;
      emit('update:modelValue', value);
    };

    const onKeydown = () => {
      checkLength();
    };

    const onKeyup = () => {
      checkLength();
      checkInputed();
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
      checkLength();
      checkInputed();
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
      checkLength();
    });

    watch(
      () => props.modelValue,
      (cur) => {
        state.val = cur;

        nextTick(() => {
          checkInputed();
        });
      }
    );

    provide('formListItem', {
      helpClass: formListStyleModule['form__help'],
    });

    provide('basicTextarea', {
      helpClass: $style['input__help'],
      invalidClass: $style['input__invalid'],
    });

    return {
      formListStyleModule,
      state,
      input,
      customClassNames,
      isBottom,
      getInputElement,
      focus,
      labelClick,
      onfocusin,
      onInput,
      onKeydown,
      onKeyup,
      onfocusout,
      onInputClick,
    };
  },
};
</script>

<template>
  <div
    :class="[
      formListStyleModule['form__item'],
      {
        [formListStyleModule['form__item--focus']]: state.isFocus,
        [formListStyleModule['form__item--inputed']]: state.isInputed,
        [formListStyleModule['form__item--error']]: error,
        [formListStyleModule['form__item--disabled']]: disabled,
      },
      $style['input'],
      {
        [$style['input--focus']]: state.isFocus,
        [$style['input--inputed']]: state.isInputed,
        [$style['input--error']]: error,
        [$style['input--disabled']]: disabled,
      },
      customClassNames.item,
    ]"
  >
    <dt
      :class="[
        formListStyleModule['form__title'],
        $style['input__title'],
        customClassNames.title,
      ]"
      @click="labelClick"
    >
      <span
        :class="[
          formListStyleModule['form__title-text'],
          customClassNames.titleText,
        ]"
      >
        {{ titleText }}
      </span>
      <span
        v-if="titleOptionalText"
        :class="[
          formListStyleModule['form__title-optional'],
          customClassNames.titleOptionalText,
        ]"
      >
        {{ titleOptionalText }}
      </span>
      <span
        v-if="require"
        :class="[
          formListStyleModule['form__require'],
          customClassNames.require,
        ]"
      >
        <span
          :class="[
            formListStyleModule['form__require-text'],
            customClassNames.requireText,
          ]"
        >
          (필수)
        </span>
      </span>
    </dt>
    <dd
      :class="[
        formListStyleModule['form__contents'],
        $style['input__contents'],
        customClassNames.contents,
      ]"
    >
      <FormInvalid :error="error">
        <div :class="[$style['input__input'], customClassNames.input]">
          <textarea
            ref="input"
            v-bind="$attrs"
            :value="modelValue || state.val"
            :disabled="disabled"
            @input="onInput"
            @focusin="onfocusin"
            @focusout="onfocusout"
            @keydown="onKeydown"
            @keyup="onKeyup"
            @click="onInputClick"
          ></textarea>
        </div>
        <div
          v-if="isBottom || count"
          :class="[$style['input__bottom'], customClassNames.bottom]"
        >
          <div
            v-if="isBottom"
            :class="[$style['input__bottom-left'], customClassNames.bottom]"
          >
            <slot name="bottom" />
          </div>
          <div
            v-if="count"
            :class="[$style['input__count'], customClassNames.bottom]"
          >
            <span
              :class="[
                $style['input__count-current'],
                customClassNames.countCurrent,
              ]"
              >{{ state.count }}</span
            ><span v-if="maxlength">/{{ maxlength }}</span>
          </div>
        </div>
      </FormInvalid>
    </dd>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/BasicTextarea.scss';
</style>
