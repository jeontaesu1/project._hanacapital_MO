<script>
import { computed, inject } from 'vue';
import { RouterLink } from 'vue-router';

import { useUiHeaderStore } from '@/stores/ui/header';

import UiTabButton from '@/components/ui/tab/UiTabButton.vue';

const defaultClassNames = () => ({
  item: '',
  button: '',
  text: '',
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
    link: {
      Type: String,
      default: null,
    },
    tagName: {
      Type: String,
      default: 'div',
    },
    active: {
      Type: Boolean,
      default: false,
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const styleModule = inject('navTabStyleModule');
    const navTab = inject('navTab', {});
    const popupLayout = inject('popupLayout', {});
    const stickyBar = inject('stickyBar', {});

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const setItemComponent = computed(() => {
      const { useUiTab } = navTab;
      return useUiTab.value ? UiTabButton : 'li';
    });

    const setButtonComponent = computed(() => {
      const { useUiTab } = navTab;
      const { tagName } = props;
      return useUiTab.value
        ? 'div'
        : tagName === 'RouterLink'
        ? RouterLink
        : tagName;
    });

    const itemDisabled = computed(() => {
      const { useUiTab } = navTab;
      const { disabled } = props;
      return (useUiTab.value && disabled) || null;
    });

    const buttonDisabled = computed(() => {
      const { useUiTab } = navTab;
      const { tagName, disabled } = props;
      return useUiTab.value ? null : tagName === 'button' ? disabled : null;
    });

    const headerH = computed(() => {
      const popupHead =
        popupLayout && popupLayout.head && popupLayout.head.value;
      const popupHeadH = (() => {
        if (popupHead) {
          return popupHead.offsetHeight;
        } else {
          return 0;
        }
      })();

      return popupHeadH || store.ui.header.height;
    });

    const buttonClick = () => {
      const { tagName } = props;
      const stickyBarEl = stickyBar.getElement ? stickyBar.getElement() : null;

      if (tagName === 'RouterLink' || tagName === 'a' || !stickyBarEl) return;

      const html = document.getElementsByTagName('html')[0];
      const popupBodyEl = popupLayout.body ? popupLayout.body.value : null;
      const offsetTop =
        stickyBarEl.offsetTop - (popupBodyEl ? 0 : headerH.value);

      if (popupBodyEl) {
        if (popupBodyEl.scrollTop > offsetTop) {
          popupBodyEl.scrollTop = offsetTop;
        }
      } else {
        if (html.scrollTop > offsetTop) {
          html.scrollTop = offsetTop;
        }
      }
    };

    return {
      styleModule,
      customClassNames,
      setItemComponent,
      setButtonComponent,
      itemDisabled,
      buttonDisabled,
      buttonClick,
    };
  },
};
</script>

<template>
  <component
    :is="setItemComponent"
    :class="[
      styleModule['nav-tab__item'],
      {
        [styleModule['nav-tab__item--active']]: active,
        [styleModule['nav-tab__item--disabled']]: disabled,
      },
      customClassNames.item,
    ]"
    :link="link"
    :disabled="itemDisabled"
    @click="buttonClick"
  >
    <component
      :is="setButtonComponent"
      v-bind="$attrs"
      :class="[styleModule['nav-tab__button'], customClassNames.button]"
      :title="active ? '선택 됨' : null"
      :disabled="buttonDisabled"
    >
      <span :class="[styleModule['nav-tab__text'], customClassNames.text]">
        <slot />
      </span>
    </component>
  </component>
</template>
