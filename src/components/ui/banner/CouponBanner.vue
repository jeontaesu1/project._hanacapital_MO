<script>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

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

    return {
      setComponent,
      setType,
      customClassNames,
      isDownload,
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
            :src="logo"
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
        v-if="!disabled"
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
