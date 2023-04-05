<script>
import {
  ref,
  computed,
  reactive,
  nextTick,
  provide,
  inject,
  useCssModule,
  onMounted,
  watch,
} from 'vue';

import SelectButton from '@/components/ui/form/SelectButton.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';

const defaultClassNames = () => ({
  wrap: '',
  input: '',
});

export default {
  components: {
    SelectButton,
    UiLayer,
    PopupTitle,
    ToastPopup,
    ToastPopupHead,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    buttonClassNames: {
      Type: Object,
      default: null,
    },
    defaultValue: {
      Type: String,
      default: null,
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
    buttonTitle: {
      Type: String,
      default: null,
    },
    layerTitle: {
      Type: String,
      default: null,
    },
    id: {
      Type: String,
      default: null,
    },
    name: {
      Type: String,
      default: null,
    },
    placeholder: {
      Type: String,
      default: '',
    },
    buttonId: {
      Type: String,
      default: null,
    },
    onChange: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    modelValue: {
      Type: String,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      options: [],
      count: 0,
      value: {
        value: props.defaultValue || '',
      },
      text: '',
      forcePlaceholder: !props.defaultValue,
    });

    const formListItem = inject('formListItem', {});
    const inputBlock = inject('inputBlock', {});

    const layer = ref(null);
    const button = ref(null);
    const input = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const optionsAdd = (obj) => {
      const key = state.count;

      state.options.push(
        Object.assign({}, obj, {
          key,
        })
      );

      state.count++;

      return key;
    };

    const optionsRemove = (key) => {
      const i = state.options.findIndex((item) => item.key === key);

      state.options.splice(i, 1);
    };

    const optionsChange = (key, obj) => {
      const i = state.options.findIndex((item) => item.key === key);

      Object.assign(state.options[i], obj, {
        key,
      });
    };

    const selectOption = (option) => {
      state.value.value = option.value;
      state.text = option.text;
      state.forcePlaceholder = false;
      layer.value.close();

      nextTick(() => {
        const eChange = new Event('change');
        const eInput = new Event('input');
        input.value.dispatchEvent(eChange);
        input.value.dispatchEvent(eInput);
      });
    };

    const setValue = (value) => {
      const i = state.options.findIndex((item) => item.value === value);

      if (i > -1) {
        selectOption(state.options[i]);
      }
    };

    const layerOpen = () => {
      layer.value.open(button.value.button);

      if (formListItem && formListItem.selectFocus) {
        formListItem.selectFocus(true);
      }
      if (inputBlock && inputBlock.selectFocus) {
        inputBlock.selectFocus(true);
      }
    };

    const onAfterClosed = () => {
      if (formListItem && formListItem.selectFocus) {
        formListItem.selectFocus(false);
      }
      if (inputBlock && inputBlock.selectFocus) {
        inputBlock.selectFocus(false);
      }
    };

    const onInput = (e) => {
      emit('update:modelValue', e.target.value);
    };

    onMounted(() => {
      setValue(props.modelValue);
    });

    watch(
      () => props.modelValue,
      (cur) => {
        setValue(cur);
      }
    );

    provide('extendSelectStyleModule', useCssModule());
    provide('extendSelect', {
      options: state.options,
      value: state.value,
      optionsAdd,
      optionsRemove,
      optionsChange,
      selectOption,
    });

    return {
      state,
      layer,
      button,
      input,
      customClassNames,
      setValue,
      selectOption,
      layerOpen,
      onAfterClosed,
      onInput,
    };
  },
};
</script>

<template>
  <div :class="[$style['select'], customClassNames.wrap]">
    <input
      type="hidden"
      ref="input"
      :class="[$style['select__input'], customClassNames.input]"
      :id="id"
      :name="name"
      :disabled="disabled"
      :value="state.value.value"
      @change="onChange"
      @input="onInput"
    />
    <SelectButton
      ref="button"
      :classNames="buttonClassNames"
      :disabled="disabled"
      :title="buttonTitle"
      :placeholder="placeholder"
      :forcePlaceholder="state.forcePlaceholder"
      :id="buttonId"
      @click="layerOpen"
      >{{ state.text }}</SelectButton
    >

    <UiLayer
      ref="layer"
      type="toast"
      :onAfterClosed="onAfterClosed"
      :backgroundClose="true"
    >
      <ToastPopup>
        <template v-slot:head>
          <ToastPopupHead>
            <PopupTitle>{{ layerTitle || '선택해 주세요' }}</PopupTitle>
          </ToastPopupHead>
        </template>

        <slot />
      </ToastPopup>
    </UiLayer>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/ExtendSelect.scss';
</style>
