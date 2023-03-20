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
  <p :class="[$style['page-main-text'], customClassNames.wrap]"><slot /></p>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/text/PageMainText.scss';
</style>
