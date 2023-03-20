<script>
import { ref, computed } from 'vue';

import IconDropdown from '@/assets/images/icon/dropdown.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  text: '',
  icon: '',
  placeholder: '',
});

export default {
  inheritAttrs: false,
  components: {
    IconDropdown,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    type: {
      Type: String,
      default: 'button',
    },
    placeholder: {
      Type: String,
      default: null,
    },
    forcePlaceholder: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const button = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isText = computed(() => {
      return Boolean(context.slots.default);
    });

    const isPlaceholder = computed(() => {
      return typeof props.placeholder === 'string';
    });

    return {
      button,
      customClassNames,
      isText,
      isPlaceholder,
    };
  },
};
</script>

<template>
  <button
    v-bind="$attrs"
    ref="button"
    :type="type"
    :class="[$style['select-button'], customClassNames.wrap]"
  >
    <span
      v-if="(!forcePlaceholder && !isText && isPlaceholder) || forcePlaceholder"
      :class="[
        $style['select-button__placeholder'],
        customClassNames.placeholder,
      ]"
    >
      {{ placeholder }}
    </span>
    <span
      v-if="!isPlaceholder || (!forcePlaceholder && isText && isPlaceholder)"
      :class="[$style['select-button__text'], customClassNames.text]"
    >
      <slot />
    </span>
    <span :class="[$style['select-button__icon'], customClassNames.icon]">
      <IconDropdown />
    </span>
  </button>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/SelectButton.scss';
</style>
