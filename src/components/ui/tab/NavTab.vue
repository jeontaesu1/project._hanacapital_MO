<script>
import {
  reactive,
  computed,
  useCssModule,
  provide,
  onBeforeMount,
  watch,
} from 'vue';

import UiTabList from '@/components/ui/tab/UiTabList.vue';

const defaultClassNames = () => ({
  wrap: '',
  inner: '',
  list: '',
});

export default {
  components: {
    UiTabList,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    useUiTab: {
      Type: Boolean,
      default: false,
    },
    scroll: {
      Type: Boolean,
      default: false,
    },
    auto: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const state = reactive({
      useUiTab: {
        value: null,
      },
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const setComponent = computed(() => {
      const { useUiTab } = props;
      return useUiTab ? UiTabList : 'ul';
    });

    onBeforeMount(() => {
      state.useUiTab.value = props.useUiTab;
    });

    watch(
      () => props.useUiTab,
      (cur) => {
        state.useUiTab.value = cur;
      }
    );

    provide('navTabStyleModule', useCssModule());
    provide('navTab', {
      useUiTab: state.useUiTab,
    });

    return {
      customClassNames,
      setComponent,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['nav-tab'],
      {
        [$style['nav-tab--scroll']]: scroll,
        [$style['nav-tab--auto']]: auto,
      },
      customClassNames.wrap,
    ]"
  >
    <div :class="[$style['nav-tab__inner'], customClassNames.inner]">
      <component
        :is="setComponent"
        :class="[$style['nav-tab__list'], customClassNames.list]"
      >
        <slot />
      </component>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/tab/NavTab.scss';
</style>
