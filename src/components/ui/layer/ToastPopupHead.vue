<script>
import { computed, inject, reactive, onBeforeMount, onUpdated } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  center: '',
  right: '',
});

const isSlot = (slot) => {
  if (!slot || typeof slot !== 'function') return false;

  const items = slot();
  let vIfLength = 0;

  items.forEach((item) => item.children === 'v-if' && vIfLength++);

  return items.length !== vIfLength;
};

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
  },
  setup(props, { slots }) {
    const styleModule = inject('popupStyleModule');

    const state = reactive({
      slots: {},
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isRight = computed(() => {
      return isSlot(state.slots.right);
    });

    onBeforeMount(() => {
      state.slots.right = slots.right;
    });

    onUpdated(() => {
      state.slots.right = slots.right;
    });

    return {
      styleModule,
      customClassNames,
      isRight,
    };
  },
};
</script>

<template>
  <div :class="[styleModule['popup__header'], customClassNames.wrap]">
    <div
      :class="[styleModule['popup__header-center'], customClassNames.center]"
    >
      <slot />
    </div>
    <div
      v-if="isRight"
      :class="[styleModule['popup__header-right'], customClassNames.right]"
    >
      <slot name="right" />
    </div>
  </div>
</template>
