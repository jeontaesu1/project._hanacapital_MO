<script>
import { ref, computed, reactive, onBeforeMount, watch } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  input: '',
  label: '',
  object: '',
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
    theme: {
      Type: String,
      default: null,
    },
    type: {
      Type: String,
      default: 'checkbox',
    },
    name: {
      Type: String,
      default: null,
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
    const eSiblingsChange = new Event('siblingsChange');

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
      const el = e.target;
      const { checked } = el;
      const { type, name } = props;

      state.checked = checked;
      emit('update:modelValue', checked);

      if (type === 'radio' && name) {
        const siblingsEl = Array.prototype.filter.call(
          document.querySelectorAll(`[name="${name}"]`),
          (item) => {
            return !(item === el);
          }
        );

        siblingsEl.forEach((item) => {
          item.dispatchEvent(eSiblingsChange);
        });
      }
    };

    const onSiblingsChange = (e) => {
      const el = e.target;
      const { checked } = el;

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
      onSiblingsChange,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['switch-checkbox'],
      {
        [$style[`switch-checkbox--theme-${theme}`]]: theme,
      },
      customClassNames.wrap,
    ]"
  >
    <input
      ref="input"
      v-bind="$attrs"
      :type="type"
      :class="[$style['switch-checkbox__input'], customClassNames.input]"
      :name="name"
      :id="id"
      :checked="state.checked"
      @change="onChange"
      @siblingsChange="onSiblingsChange"
    />
    <label
      :for="id"
      :class="[$style['switch-checkbox__label'], customClassNames.label]"
    >
      <span
        :class="[$style['switch-checkbox__object'], customClassNames.object]"
      />
      <span :class="[$style['switch-checkbox__text'], customClassNames.text]">
        On/Off
      </span>
    </label>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/SwitchCheckBox.scss';
</style>
