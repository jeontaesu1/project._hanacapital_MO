<script>
import { ref, computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  input: '',
  label: '',
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
    type: {
      Type: String,
      default: 'checkbox',
    },
    id: {
      Type: String,
      required: true,
    },
  },
  setup(props) {
    const input = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const getInputElement = () => {
      return input.value;
    };

    return {
      input,
      customClassNames,
      getInputElement,
    };
  },
};
</script>

<template>
  <div :class="[$style['switch-checkbox'], customClassNames.wrap]">
    <input
      ref="input"
      v-bind="$attrs"
      :type="type"
      :class="[$style['switch-checkbox__input'], customClassNames.input]"
      :id="id"
    />
    <label
      :for="id"
      :class="[$style['switch-checkbox__label'], customClassNames.label]"
    >
      스위치박스
    </label>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/SwitchCheckBox.scss';
</style>
