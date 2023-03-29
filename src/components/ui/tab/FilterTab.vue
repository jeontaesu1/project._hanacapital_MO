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

    provide('filterTabStyleModule', useCssModule());
    provide('filterTab', {
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
  <div :class="[$style['filter-tab'], customClassNames.wrap]">
    <div :class="[$style['filter-tab__inner'], customClassNames.inner]">
      <component
        :is="setComponent"
        :class="[$style['filter-tab__list'], customClassNames.list]"
      >
        <slot />
      </component>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/tab/FilterTab.scss';
</style>
