<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  item: '',
});

export default {
  inject: ['$style'],
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    flex: {
      // none, flexible
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <li
    :class="[
      $style['buttons__item'],
      {
        [$style['buttons__item--flex-none']]: flex === 'none',
        [$style['buttons__item--flexible']]: flex === 'flexible',
      },
      customClassNames.item,
    ]"
  >
    <slot />
  </li>
</template>
