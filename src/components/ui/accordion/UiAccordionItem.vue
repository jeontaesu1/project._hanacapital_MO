<script>
import {
  computed,
  provide,
  inject,
  reactive,
  onMounted,
  onBeforeUnmount,
  watch,
} from 'vue';

const defaultClassNames = () => ({
  item: '',
});

export default {
  props: {
    tagName: {
      Type: String,
      default: 'li',
    },
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    initialOpen: {
      Type: Boolean,
      default: false,
    },
    onBeforeOpened: {
      type: Function,
      default: () => {},
    },
    onOpened: {
      type: Function,
      default: () => {},
    },
    onAfterOpened: {
      type: Function,
      default: () => {},
    },
    onBeforeClosed: {
      type: Function,
      default: () => {},
    },
    onClosed: {
      type: Function,
      default: () => {},
    },
    onAfterClosed: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    const styleModule = inject('styleModule');
    const uiAccordion = inject('uiAccordion', {});

    const state = reactive({
      opened: false,
      key: null,
      layer: null,
      callback: {},
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const getLayer = () => {
      return state.layer;
    };

    const setLayer = (obj) => {
      state.layer = obj;
    };

    const clearLayer = () => {
      state.layer = null;
    };

    const setOpened = (val) => {
      state.opened = val;
    };

    const open = (speed) => {
      if (state.opened) return;

      if (state.layer && state.layer.open) {
        if (uiAccordion && uiAccordion.once && uiAccordion.once.value) {
          if (uiAccordion.items) {
            uiAccordion.items.forEach((item) => {
              if (item.key !== state.key) {
                item.close(speed);
              }
            });
          }
        }

        state.layer.open(speed);
      }
    };

    const close = (speed) => {
      if (!state.opened) return;

      if (state.layer && state.layer.close) {
        state.layer.close(speed);
      }
    };

    const toggle = (speed) => {
      if (state.opened) {
        close(speed);
      } else {
        open(speed);
      }
    };

    onMounted(() => {
      if (uiAccordion && uiAccordion.itemsAdd) {
        state.key = uiAccordion.itemsAdd({
          open,
          close,
          toggle,
        });
      }

      state.callback.onBeforeOpened = props.onBeforeOpened;
      state.callback.onOpened = props.onOpened;
      state.callback.onAfterOpened = props.onAfterOpened;
      state.callback.onBeforeClosed = props.onBeforeClosed;
      state.callback.onClosed = props.onClosed;
      state.callback.onAfterClosed = props.onAfterClosed;

      if (props.initialOpen) {
        open(0);
      }
    });

    onBeforeUnmount(() => {
      if (uiAccordion && uiAccordion.itemsRemove) {
        uiAccordion.itemsRemove(state.key);
      }
    });

    watch(
      () => props.onBeforeOpened,
      (cur) => {
        state.callback.onBeforeOpened = cur;
      }
    );
    watch(
      () => props.onOpened,
      (cur) => {
        state.callback.onOpened = cur;
      }
    );
    watch(
      () => props.onAfterOpened,
      (cur) => {
        state.callback.onAfterOpened = cur;
      }
    );
    watch(
      () => props.onBeforeClosed,
      (cur) => {
        state.callback.onBeforeClosed = cur;
      }
    );
    watch(
      () => props.onClosed,
      (cur) => {
        state.callback.onClosed = cur;
      }
    );
    watch(
      () => props.onAfterClosed,
      (cur) => {
        state.callback.onAfterClosed = cur;
      }
    );

    provide('uiAccordionItem', {
      getLayer,
      setLayer,
      clearLayer,
      setOpened,
      callback: state.callback,
    });

    return {
      uiAccordion,
      styleModule,
      state,
      customClassNames,
      open,
      close,
      toggle,
    };
  },
};
</script>

<template>
  <component
    :is="tagName"
    :class="[
      styleModule['accordion__item'],
      {
        [uiAccordion.openedClassName]: state.opened,
      },
      customClassNames.item,
    ]"
  >
    <slot :open="open" :close="close" :toggle="toggle" :opened="state.opened" />
  </component>
</template>
