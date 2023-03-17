<script>
import { ref, computed, reactive, provide, inject } from 'vue';

const defaultClassNames = () => ({
  item: '',
  title: '',
  titleText: '',
  titleOptionalText: '',
  require: '',
  requireText: '',
  contents: '',
});

export default {
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
    forceFocus: {
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
    target: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const styleModule = inject('styleModule');

    let timer = null;

    const state = reactive({
      isFocus: false,
      isInputed: false,
      isError: false,
    });

    const areaClass = styleModule['form__area'];

    const contents = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const checkInputed = () => {
      const inputs = contents.value.querySelectorAll(
        `.${areaClass} input:not(.js-ignore):not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="image"])`
      );
      let isInputed = false;

      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length) {
          isInputed = true;
          break;
        }
      }

      state.isInputed = isInputed;
    };

    const onfocusin = () => {
      clearTimeout(timer);
      state.isFocus = true;

      checkInputed();
    };

    const onfocusout = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        state.isFocus = false;
        clearTimeout(timer);
      }, 50);
    };

    const onKeyup = () => {
      checkInputed();
    };

    const labelClick = () => {
      const { target } = props;

      if (target) {
        contents.value.querySelector(target).focus();
      }
    };

    const error = (val) => {
      state.isError = val;
    };

    provide('formListItem', {
      areaClass,
      onfocusin,
      onfocusout,
      error,
    });

    return {
      state,
      styleModule,
      contents,
      customClassNames,
      onfocusin,
      onfocusout,
      onKeyup,
      labelClick,
    };
  },
};
</script>

<template>
  <div
    :class="[
      styleModule['form__item'],
      {
        [styleModule['form__item--focus']]: state.isFocus,
        [styleModule['form__item--inputed']]: state.isInputed,
        [styleModule['form__item--force-focus']]: forceFocus,
        [styleModule['form__item--error']]: state.isError,
      },
      customClassNames.item,
    ]"
  >
    <dt
      :class="[styleModule['form__title'], customClassNames.title]"
      @click="labelClick"
    >
      <span
        :class="[styleModule['form__title-text'], customClassNames.titleText]"
      >
        {{ titleText }}
      </span>
      <span
        v-if="titleOptionalText"
        :class="[
          styleModule['form__title-optional'],
          customClassNames.titleOptionalText,
        ]"
      >
        {{ titleOptionalText }}
      </span>
      <span
        v-if="require"
        :class="[styleModule['form__require'], customClassNames.require]"
      >
        <span
          :class="[
            styleModule['form__require-text'],
            customClassNames.requireText,
          ]"
        >
          (필수)
        </span>
      </span>
    </dt>
    <dd
      ref="contents"
      :class="[styleModule['form__contents'], customClassNames.contents]"
      @keyup="onKeyup"
    >
      <slot />
    </dd>
  </div>
</template>
