<script>
import { computed } from 'vue';

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return {
          wrap: '',
          head: '',
          body: '',
          foot: '',
        };
      },
    },
  },
  setup(props, context) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(
        {
          wrap: '',
          head: '',
          body: '',
          foot: '',
        },
        classNames
      );
    });

    const isSlot = computed(() => {
      return Boolean(context.slots.default);
    });

    const isHead = computed(() => {
      return Boolean(context.slots.head);
    });

    const isFoot = computed(() => {
      return Boolean(context.slots.foot);
    });

    return {
      customClassNames,
      isSlot,
      isHead,
      isFoot,
    };
  },
};
</script>

<template>
  <div :class="[$style['page-contents'], customClassNames.wrap]">
    <div
      v-if="isHead"
      :class="[$style['page-contents__head'], customClassNames.head]"
    >
      <slot name="head" />
    </div>
    <div
      v-if="isSlot"
      :class="[$style['page-contents__body'], customClassNames.body]"
    >
      <slot />
    </div>
    <div
      v-if="isFoot"
      :class="[$style['page-contents__foot'], customClassNames.foot]"
    >
      <slot name="foot" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/common/PageContents.scss';
</style>
