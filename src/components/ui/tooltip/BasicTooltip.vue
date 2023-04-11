<script>
import { computed, ref, reactive, onMounted, onUnmounted, nextTick } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  button: '',
  bubble: '',
  tail: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    placement: {
      Type: String,
      default: 'top',
    },
  },
  setup(props) {
    const state = reactive({
      show: false,
      top: 0,
      tailLeft: 0,
    });

    const button = ref(null);
    const bubble = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const setPosition = () => {
      if (!state.show) return;

      const { placement } = props;
      const buttonEl = button.value;
      const bubbleEl = bubble.value;
      const width = buttonEl.offsetWidth;
      const bubbleW = bubbleEl.offsetWidth;
      const left = (() => {
        const left = buttonEl.offsetLeft - 20 + width / 2;
        const max = bubbleW - 22;

        if (left < 22) {
          return 22;
        } else if (left > max) {
          return max;
        } else {
          return left;
        }
      })();

      if (placement === 'bottom') {
        state.top = 0;
      } else {
        state.top = buttonEl.offsetHeight + 12;
      }

      state.tailLeft = left;
    };

    const toggle = () => {
      state.show = !state.show;

      nextTick(() => {
        setPosition();
      });
    };

    const onClick = () => {
      toggle();
    };

    const onKeyup = (e) => {
      const { keyCode } = e;

      switch (keyCode) {
        case 13:
        case 32:
          toggle();
          break;
        default:
          break;
      }
    };

    onMounted(() => {
      setPosition();
      window.addEventListener('resize', setPosition);
      window.addEventListener('orientationchange', setPosition);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', setPosition);
      window.removeEventListener('orientationchange', setPosition);
    });

    return {
      state,
      button,
      bubble,
      customClassNames,
      toggle,
      onClick,
      onKeyup,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['tooltip'],
      {
        [$style['tooltip--bottom']]: placement === 'bottom',
        'is-show': state.show,
      },
      customClassNames.wrap,
    ]"
  >
    <div
      ref="button"
      :class="[$style['tooltip__button'], customClassNames.button]"
      tabindex="0"
      role="button"
      @click="onClick"
      @keyup="onKeyup"
    >
      <slot />
    </div>
    <div
      ref="bubble"
      :class="[$style['tooltip__bubble'], customClassNames.bubble]"
      :style="`margin-top: -${state.top}px;`"
    >
      <div
        :class="[$style['tooltip__tail'], customClassNames.tail]"
        :style="`left: ${state.tailLeft}px;`"
      />
      <slot name="contents" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/tooltip/BasicTooltip.scss';
</style>
