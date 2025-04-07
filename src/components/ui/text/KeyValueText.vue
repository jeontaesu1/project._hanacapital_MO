<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  text: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    // s: 250407추가
    isBlur: {
      Type: Boolean,
      default: false,
    },
    // e:// 250407추가
  },
  setup(props) {
    const styleModule = inject('keyValueStyleModule');

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      styleModule,
      customClassNames,
    };
  },
};
</script>

<template>
  <dd
    :class="[
      styleModule['key-value__value'],
      isBlur ? styleModule['key-value__value--blur'] : '' /* 250407 수정 */,
      customClassNames.text,
    ]"
  >
    <slot />
  </dd>
</template>
