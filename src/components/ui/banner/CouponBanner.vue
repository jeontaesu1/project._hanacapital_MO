<script>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const BASE_URL = import.meta.env.BASE_URL;

const defaultClassNames = () => ({
  wrap: '',
  inner: '',
  contents: '',
  logo: '',
  logoImg: '',
  button: '',
  buttonText: '',
  download: '',
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
    logo: {
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
  setup(props, context) {
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

    const isDownload = computed(() => {
      return Boolean(context.slots.download);
    });

    const imgSrc = computed(() => {
      const { logo = '' } = props;

      if (logo.match(/^\//)) {
        return BASE_URL + logo.replace(/^\//, '');
      } else {
        return logo;
      }
    });

    return {
      setComponent,
      setType,
      customClassNames,
      isDownload,
      imgSrc,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['banner'],
      {
        [$style['banner--disabled']]: disabled || disabledStyle,
      },
      customClassNames.wrap,
    ]"
    :style="{
      backgroundColor: bgColor,
    }"
  >
    <div :class="[$style['banner__inner'], customClassNames.inner]">
      <div v-if="logo" :class="[$style['banner__logo'], customClassNames.logo]">
        <div :class="[$style['banner__logo-img'], customClassNames.logoImg]">
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
      <div :class="[$style['banner__contents'], customClassNames.contents]">
        <slot />
      </div>
      <component
        :is="setComponent"
        v-if="!disabled && action"
        v-bind="$attrs"
        :type="setType"
        :class="[$style['banner__button'], customClassNames.button]"
      >
        <span
          :class="[$style['banner__button-text'], customClassNames.buttonText]"
          >{{ buttonText }}</span
        >
      </component>
    </div>
    <div
      v-if="isDownload"
      :class="[$style['banner__download'], customClassNames.download]"
    >
      <slot name="download" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/banner/CouponBanner.scss';
</style>
