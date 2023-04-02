<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    type: {
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
  <div
    :class="[
      $style['illust-object'],
      {
        [$style[`illust-object--type-${type}`]]: type,
      },
      customClassNames.wrap,
    ]"
  />
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/common/IllustObject.scss';
</style>
