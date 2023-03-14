<script>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const defaultClassNames = () => ({
  wrap: '',
  text: '',
  icon: '',
});

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
        return defaultClassNames();
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
    line: {
      Type: Boolean,
      default: false,
    },
    inline: {
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

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      setComponent,
      setType,
      isText,
      isLeftIcon,
      isRightIcon,
      customClassNames,
    };
  },
};
</script>

<template>
  <component
    :is="setComponent"
    v-bind="$attrs"
    :type="setType"
    :class="[
      $style['button'],
      {
        [$style['button--icon-only']]: (isLeftIcon || isRightIcon) && !isText,
        [$style[`button--${size}`]]: size,
        [$style[`button--${theme}`]]: theme,
        [$style[`button--line`]]: line,
        [$style[`button--inline`]]: inline,
        [$style['button--disabled']]: disabledStyle,
      },
      customClassNames.wrap,
    ]"
  >
    <span
      v-if="isLeftIcon"
      :class="[$style['button__icon'], customClassNames.icon]"
    >
      <slot name="leftIcon" />
    </span>
    <span
      v-if="isText"
      :class="[$style['button__text'], customClassNames.text]"
    >
      <slot />
    </span>
    <span
      v-if="isRightIcon"
      :class="[$style['button__icon'], customClassNames.icon]"
    >
      <slot name="rightIcon" />
    </span>
  </component>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/BasicButton.scss';
</style>
