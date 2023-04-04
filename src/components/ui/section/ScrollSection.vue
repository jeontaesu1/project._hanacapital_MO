<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  head: '',
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
  setup(props, context) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isHead = computed(() => {
      return Boolean(context.slots.head);
    });

    return {
      customClassNames,
      isHead,
    };
  },
};
</script>

<template>
  <div :class="[$style['scroll'], customClassNames.wrap]">
    <div v-if="isHead" :class="[$style['scroll__head'], customClassNames.head]">
      <div><slot name="head" /></div>
      <div :class="$style['scroll__head-right']">스와이프 이미지</div>
    </div>
    <div :class="[$style['scroll__body'], customClassNames.body]">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/section/Scroll.scss';
</style>
