<script>
import { computed, reactive, nextTick } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  inner: '',
  message: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
  },
  setup(props) {
    const state = reactive({
      count: 0,
      messages: [],
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const push = (message) => {
      const key = state.count;
      const obj = {
        key,
        message: message.split(/\n/),
        timer: null,
      };

      state.messages.push(obj);
      state.count++;

      nextTick(() => {
        obj.timer = setTimeout(() => {
          clear(key);
          clearTimeout(obj.timer);
        }, 3600);
      });
    };

    const clear = (key) => {
      const i = state.messages.findIndex((item) => item.key === key);

      state.messages.splice(i, 1);
    };

    return {
      state,
      customClassNames,
      push,
      clear,
    };
  },
};
</script>

<template>
  <div :class="[$style['toast-alert'], customClassNames.wrap]">
    <div :class="[$style['toast-alert__inner'], customClassNames.inner]">
      <p
        v-for="item in state.messages"
        :key="item.key"
        :class="[$style['toast-alert__message'], customClassNames.message]"
        aria-role="alert"
        aria-live="assertive"
      >
        <template v-for="(text, i) in item.message" :key="i">
          <br v-if="i > 0" />{{ text }}
        </template>
      </p>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/ToastAlert.scss';
</style>
