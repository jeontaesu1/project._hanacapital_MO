<script>
import { computed, inject } from 'vue';
import { RouterLink } from 'vue-router';

const BASE_URL = import.meta.env.BASE_URL;

const defaultClassNames = () => ({
  block: '',
  contents: '',
  thumb: '',
  thumbImg: '',
  button: '',
  buttonText: '',
});

export default {
  inheritAttrs: false,
  props: {
    tagName: {
      Type: String,
      default: 'button',
    },
    type: {
      Type: String,
      default: 'button',
    },
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    buttonText: {
      Type: String,
      default: '상세보기',
    },
    bgColor: {
      Type: String,
      default: null,
    },
    thumb: {
      Type: String,
      default: null,
    },
    action: {
      Type: Boolean,
      default: true,
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
    disabledStyle: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const styleModule = inject('slideBannerStyleModule');

    const setComponent = computed(() => {
      const { tagName } = props;
      return tagName === 'RouterLink' ? RouterLink : tagName;
    });

    const setType = computed(() => {
      const { tagName, type } = props;
      return tagName === 'button' ? type : null;
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const imgSrc = computed(() => {
      const { thumb = '' } = props;

      if (thumb.match(/^\//)) {
        return BASE_URL + thumb.replace(/^\//, '');
      } else {
        return thumb;
      }
    });

    return {
      setComponent,
      setType,
      styleModule,
      customClassNames,
      imgSrc,
    };
  },
};
</script>

<template>
  <div
    :class="[
      styleModule['banner__block'],
      {
        [styleModule['banner__block--disabled']]: disabled || disabledStyle,
      },
      customClassNames.block,
    ]"
    :style="{
      backgroundColor: bgColor,
    }"
  >
    <div :class="[styleModule['banner__contents'], customClassNames.contents]">
      <slot />
    </div>
    <div
      v-if="thumb"
      :class="[styleModule['banner__thumb'], customClassNames.thumb]"
    >
      <div
        :class="[styleModule['banner__thumb-img'], customClassNames.thumbImg]"
      >
        <img
          :src="imgSrc"
          @error="
            (e) => {
              e.target.parentNode.classList.add('is-error');
            }
          "
        />
      </div>
    </div>
    <component
      :is="setComponent"
      v-if="!disabled && action"
      v-bind="$attrs"
      :type="setType"
      :class="[styleModule['banner__button'], customClassNames.button]"
    >
      <span
        :class="[
          styleModule['banner__button-text'],
          customClassNames.buttonText,
        ]"
        >{{ buttonText }}</span
      >
    </component>
  </div>
</template>
