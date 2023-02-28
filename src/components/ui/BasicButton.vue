<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
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
      };
    },
  },
  disabledStyle: {
    Type: Boolean,
    default: false,
  },
  theme: {
    Type: String,
    default: null,
  },
});

const setComponent = computed(() => {
  const { tag } = props;
  return tag === 'RouterLink' ? RouterLink : tag;
});

const setType = computed(() => {
  const { tag, type } = props;
  return tag === 'button' ? type : null;
});
</script>

<template>
  <component
    :is="setComponent"
    :type="setType"
    v-bind="$attrs"
    :class="[
      $style['button'],
      {
        [$style[`button--${theme}`]]: theme,
        [$style['button--disabled']]: disabledStyle,
      },
      classNames.wrap,
    ]"
  >
    <span :class="[$style['button__text'], classNames.text]">
      <slot />
    </span>
  </component>
</template>

<style lang="scss" module>
.button {
  @include reset-button;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  min-height: 60px;
  border-radius: 4px;
  padding: 2px 19px;
  @include font-size-set(18);
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: $color-white;
  border: 1px solid $color-green;
  background: $color-green;

  &__text {
    display: block;
  }
  &:hover {
    border-color: $color-green-2;
    background-color: $color-green-2;
  }
  &[disabled],
  &--disabled,
  &[disabled]:hover,
  &--disabled:hover {
    color: $color-white;
    border-color: $color-green-3;
    background-color: $color-green-3;
  }

  &--secondary {
    border-color: $color-blue;
    background-color: $color-blue;

    &:hover {
      border-color: $color-blue-2;
      background-color: $color-blue-2;
    }
    &[disabled],
    &.button--disabled,
    &[disabled]:hover,
    &.button--disabled:hover {
      border-color: $color-blue-3;
      background-color: $color-blue-3;
    }
  }

  &--tertiary {
    border-color: $color-pink;
    background-color: $color-pink;

    &:hover {
      border-color: $color-pink-2;
      background-color: $color-pink-2;
    }
    &[disabled],
    &.button--disabled,
    &[disabled]:hover,
    &.button--disabled:hover {
      border-color: $color-pink-3;
      background-color: $color-pink-3;
    }
  }
}
</style>
