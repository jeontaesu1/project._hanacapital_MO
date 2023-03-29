<script>
import {
  reactive,
  computed,
  useCssModule,
  provide,
  onMounted,
  watch,
} from 'vue';

import NoticeIconObject from '@/components/ui/text/NoticeIconObject.vue';

const defaultClassNames = () => ({
  wrap: '',
});

export default {
  components: {
    NoticeIconObject,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    type: {
      Type: String,
      default: 'notice',
    },
  },
  setup(props) {
    const state = reactive({
      type: { value: null },
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    provide('styleModule', useCssModule());
    provide('noticeType', state.type);

    onMounted(() => {
      state.type.value = props.type;
    });

    watch(
      () => props.type,
      (cur) => {
        state.type.value = cur;
      }
    );

    return {
      state,
      customClassNames,
    };
  },
};
</script>

<template>
  <div :class="[$style['ui-notice'], customClassNames.wrap]">
    <NoticeIconObject />
    <p :class="[$style['ui-notice__text']]">
      <slot />
    </p>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/text/NoticeText.scss';
</style>
