<script>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

import IconFilter from '@/assets/images/icon/filter.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  text: '',
  icon: '',
});

export default {
  inheritAttrs: false,
  components: {
    IconFilter,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    tagName: {
      Type: String,
      default: 'button',
    },
    type: {
      Type: String,
      default: 'button',
    },
    active: {
      Type: Boolean,
      default: false,
    },
    theme: {
      Type: String,
      default: null,
    },
    text: {
      Type: String,
      default: '조회 필터 열기',
    },
    activeText: {
      Type: String,
      default: '입력 됨',
    },
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const setComponent = computed(() => {
      const { tagName } = props;
      return tagName === 'RouterLink' ? RouterLink : tagName;
    });

    const setType = computed(() => {
      const { tagName, type } = props;
      return tagName === 'button' ? type : null;
    });

    return {
      customClassNames,
      setComponent,
      setType,
    };
  },
};
</script>

<template>
  <component
    :is="setComponent"
    v-bind="$attrs"
    :type="setType"
    :class="[
      $style['filter-button'],
      {
        [$style['filter-button--active']]: active,
        [$style[`filter-button--theme-${theme}`]]: theme,
      },
      customClassNames.wrap,
    ]"
    :title="active ? activeText : null"
  >
    <span :class="[$style['filter-button__icon'], customClassNames.icon]">
      <IconFilter />
    </span>
    <span :class="[$style['filter-button__text'], customClassNames.text]">
      {{ text }}
    </span>
  </component>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/FilterButton.scss';
</style>
