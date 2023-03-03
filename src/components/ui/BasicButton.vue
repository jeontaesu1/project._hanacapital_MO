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
@import '@/assets/scss/components/ui/BasicButton.scss';
</style>
