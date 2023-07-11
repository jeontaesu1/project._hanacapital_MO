<script>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

import IconPin from '@/assets/images/common/pin.svg?component';
import IconPinOn from '@/assets/images/common/pin_on.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  text: '',
  icon: '',
  active: '',
});

export default {
  inheritAttrs: false,
  components: {
    IconPin,
    IconPinOn,
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
    theme: {
      Type: String,
      default: null,
    },
    text: {
      Type: String,
      default: '고정하기',
    },
    activeText: {
      Type: String,
      default: '고정해제하기',
    },
    active: {
      Type: Boolean,
      default: false,
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
      $style['button'],
      {
        [$style[`button--theme-${theme}`]]: theme,
        [customClassNames.active]: active,
      },
      customClassNames.wrap,
    ]"
  >
    <span :class="[$style['button__icon'], customClassNames.icon]">
      <IconPinOn v-if="active" />
      <IconPin v-else />
    </span>
    <span :class="[$style['button__text'], customClassNames.text]">
      {{ active ? activeText : text }}
    </span>
  </component>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/PinButton.scss';
</style>
