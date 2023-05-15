<script>
import { ref, computed, reactive, onBeforeMount, watch } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  input: '',
  label: '',
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
    type: {
      Type: String,
      default: 'radio',
    },
    label: {
      Type: String,
      required: true,
    },
    id: {
      Type: String,
      required: true,
    },
    defaultChecked: {
      Type: Boolean,
      default: false,
    },
    modelValue: {
      Type: Boolean,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      checked: false,
    });

    const input = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const getInputElement = () => {
      return input.value;
    };

    const onChange = (e) => {
      const { checked } = e.target;

      state.checked = checked;
      emit('update:modelValue', checked);
    };

    watch(
      () => props.modelValue,
      (cur) => {
        state.checked = cur;
      }
    );

    onBeforeMount(() => {
      const { modelValue, defaultChecked } = props;
      state.checked =
        typeof modelValue === 'boolean' ? modelValue : defaultChecked;
    });

    return {
      state,
      input,
      customClassNames,
      getInputElement,
      onChange,
    };
  },
};
</script>

<template>
  <div :class="[$style['color-select'], customClassNames.wrap]">
    <input
      ref="input"
      v-bind="$attrs"
      :type="type"
      :class="[$style['color-select__input'], customClassNames.input]"
      :id="id"
      :checked="state.checked"
      @change="onChange"
    />
    <label
      :for="id"
      :class="[$style['color-select__label'], customClassNames.label]"
    >
      <span :class="[$style['color-select__text'], customClassNames.text]">
        {{ label }}
      </span>
      <slot />
    </label>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/ColorSelect.scss';
</style>
