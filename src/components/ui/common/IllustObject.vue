<script>
import { computed, inject } from 'vue';

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
    // s: 250407 추가
    variant: {
      Type: String,
      default: null,
    },
    // e:// 250407 추가
  },
  setup(props) {
    const illustInfoStyleModule = inject('illustInfoStyleModule', {});

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      customClassNames,
      illustInfoStyleModule,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['illust-object'],
      variant && $style[`illust-object-${variant}`] /* 250407 추가 */,
      {
        [$style[`illust-object--type-${type}`]]: type,
      },
      illustInfoStyleModule['illust-info__object'],
      customClassNames.wrap,
    ]"
  />
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/common/IllustObject.scss';
</style>
