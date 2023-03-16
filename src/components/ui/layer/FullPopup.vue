<script>
import { computed, useCssModule } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  head: '',
  body: '',
  bodyInner: '',
  foot: '',
});

export default {
  provide() {
    const $style = useCssModule();

    return {
      $style,
    };
  },
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

    const isFoot = computed(() => {
      return Boolean(context.slots.foot);
    });

    return {
      customClassNames,
      isHead,
      isFoot,
    };
  },
};
</script>

<template>
  <div :class="[$style['popup'], customClassNames.wrap]">
    <div v-if="isHead" :class="[$style['popup__head'], customClassNames.head]">
      <slot name="head" />
    </div>
    <div :class="[$style['popup__body'], customClassNames.body]">
      <div :class="[$style['popup__body-inner'], customClassNames.bodyInner]">
        <slot />
      </div>
    </div>
    <div v-if="isFoot" :class="[$style['popup__foot'], customClassNames.foot]">
      <slot name="foot" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/FullPopup.scss';
</style>
