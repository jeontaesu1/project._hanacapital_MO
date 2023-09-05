<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  frame: '',
});

export default {
  inheritAttrs: false,
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    url: {
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
  <div :class="[$style['video-iframe'], customClassNames.wrap]">
    <iframe
      v-bind="$attrs"
      ref="iframe"
      :src="url"
      frameborder="0"
      scrolling="no"
      :class="[$style['video-iframe__frame'], customClassNames.frame]"
    ></iframe>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/viewer/VideoIframe.scss';
</style>
