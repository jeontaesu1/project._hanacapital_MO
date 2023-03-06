<script>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

export default {
  props: {
    tag: {
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
        return {
          wrap: '',
          text: '',
          icon: '',
        };
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
    disabledStyle: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const setComponent = computed(() => {
      const { tag } = props;
      return tag === 'RouterLink' ? RouterLink : tag;
    });

    const setType = computed(() => {
      const { tag, type } = props;
      return tag === 'button' ? type : null;
    });

    const isText = computed(() => {
      return Boolean(context.slots.default);
    });

    const isLeftIcon = computed(() => {
      return Boolean(context.slots.leftIcon);
    });

    const isRightIcon = computed(() => {
      return Boolean(context.slots.rightIcon);
    });

    return {
      setComponent,
      setType,
      isText,
      isLeftIcon,
      isRightIcon,
    };
  },
};
</script>

<template>
  <component
    :is="setComponent"
    :type="setType"
    v-bind="$attrs"
    :class="[
      $style['button'],
      {
        [$style['button--icon-only']]: (isLeftIcon || isRightIcon) && !isText,
        [$style[`button--${size}`]]: size,
        [$style[`button--${theme}`]]: theme,
        [$style['button--disabled']]: disabledStyle,
      },
      classNames.wrap,
    ]"
  >
    <span v-if="isLeftIcon" :class="[$style['button__icon'], classNames.icon]">
      <slot name="leftIcon" />
    </span>
    <span v-if="isText" :class="[$style['button__text'], classNames.text]">
      <slot />
    </span>
    <span v-if="isRightIcon" :class="[$style['button__icon'], classNames.icon]">
      <slot name="rightIcon" />
    </span>
  </component>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/BasicButton.scss';
</style>
