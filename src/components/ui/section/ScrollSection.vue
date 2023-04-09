<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  head: '',
  headCenter: '',
  headRight: '',
  headIcon: '',
  headIconText: '',
  body: '',
  bodyScroller: '',
  bodyInner: '',
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
  <section :class="[$style['scroll'], customClassNames.wrap]">
    <div :class="[$style['scroll__head'], customClassNames.head]">
      <div
        :class="[$style['scroll__head-center'], customClassNames.headCenter]"
      >
        <slot name="head" />
      </div>
      <div :class="[$style['scroll__head-right'], customClassNames.headRight]">
        <div :class="[$style['scroll__icon'], customClassNames.headIcon]">
          <div
            :class="[
              $style['scroll__icon-text'],
              customClassNames.headIconText,
            ]"
          >
            스와이프하여 스크롤
          </div>
        </div>
      </div>
    </div>
    <div :class="[$style['scroll__body'], customClassNames.body]">
      <div
        :class="[
          $style['scroll__body-scroller'],
          customClassNames.bodyScroller,
        ]"
      >
        <div
          :class="[$style['scroll__body-inner'], customClassNames.bodyInner]"
        >
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/section/ScrollSection.scss';
</style>
