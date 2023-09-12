<script>
import {
  ref,
  computed,
  reactive,
  nextTick,
  inject,
  onMounted,
  watch,
} from 'vue';

import SelectButton from '@/components/ui/form/SelectButton.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';

import IconCheck from '@/assets/images/icon/check-l.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  input: '',
  optionWrap: '',
  optionList: '',
  optionItem: '',
  optionButton: '',
  optionCheck: '',
});
const defaultOption = () => ({
  value: '',
  text: '',
  disabled: false,
});

export default {
  components: {
    SelectButton,
    UiLayer,
    PopupTitle,
    ToastPopup,
    ToastPopupHead,
    IconCheck,
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
    theme: {
      Type: String,
      default: null,
    },
    option: {
      Type: Array,
      default() {
        return [defaultOption()];
      },
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
    openerFocusToAfterClose: {
      Type: Boolean,
      default: true,
    },
    onChange: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    onOptionClick: {
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
    const option = props.option.map((item) =>
      Object.assign(defaultOption(), item)
    );

    const state = reactive({
      value: props.defaultValue || '',
      text:
        (props.defaultValue &&
          option.filter((item) => item.value === props.defaultValue)[0].text) ||
        '',
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

    const makeOption = computed(() => {
      const { option } = props;
      return option.map((item) => Object.assign(defaultOption(), item));
    });

    watch(
      () => props.modelValue,
      (cur) => {
        setValue(cur);
      }
    );

    const layerOpen = () => {
      layer.value.open(button.value.button);

      if (formListItem && formListItem.selectFocus) {
        formListItem.selectFocus(true);
      }
      if (inputBlock && inputBlock.selectFocus) {
        inputBlock.selectFocus(true);
      }
    };

    const selectOption = (option) => {
      state.value = (option && option.value) || '';
      state.text = (option && option.text) || '';
      state.forcePlaceholder = !option;
      layer.value.close();

      nextTick(() => {
        const eChange = new Event('change');
        const eInput = new Event('input');
        input.value.dispatchEvent(eChange);
        input.value.dispatchEvent(eInput);

        if (formListItem && formListItem.checkInputed) {
          formListItem.checkInputed();
        }
      });
    };

    const setValue = (value) => {
      const { option } = props;
      const makeOption = option.map((item) =>
        Object.assign(defaultOption(), item)
      );
      const filterOption = makeOption.filter((item) => item.value === value);

      if (filterOption.length) {
        selectOption(filterOption[0]);
      } else {
        selectOption(null);
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

    const optionClick = (e) => {
      const { onOptionClick } = props;

      onOptionClick(e);
    };

    onMounted(() => {
      setValue(props.modelValue || props.defaultValue);
    });

    return {
      state,
      layer,
      button,
      input,
      customClassNames,
      makeOption,
      layerOpen,
      selectOption,
      setValue,
      onAfterClosed,
      onInput,
      optionClick,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['select'],
      {
        [$style[`select--theme-${theme}`]]: theme,
      },
      customClassNames.wrap,
    ]"
  >
    <input
      type="hidden"
      ref="input"
      :class="[$style['select__input'], customClassNames.input]"
      :id="id"
      :name="name"
      :disabled="disabled"
      :value="state.value"
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
      :theme="theme"
      @click="layerOpen"
      >{{ state.text }}</SelectButton
    >

    <UiLayer
      ref="layer"
      type="toast"
      :onAfterClosed="onAfterClosed"
      :backgroundClose="true"
      :openerFocusToAfterClose="openerFocusToAfterClose"
      v-slot="layerSlotProps"
    >
      <ToastPopup v-if="layerSlotProps.display !== 'none'">
        <template v-slot:head>
          <ToastPopupHead>
            <PopupTitle>{{ layerTitle || '선택해 주세요' }}</PopupTitle>
          </ToastPopupHead>
        </template>

        <div :class="[$style['select__option'], customClassNames.optionWrap]">
          <ul
            :class="[
              $style['select__option-list'],
              customClassNames.optionList,
            ]"
          >
            <li
              v-for="(item, i) in makeOption"
              :key="i"
              :class="[
                $style['select__option-item'],
                {
                  [$style['select__option-item--checked']]:
                    state.value === item.value,
                },
                customClassNames.optionItem,
              ]"
            >
              <button
                type="button"
                :title="state.value === item.value ? '선택 됨' : null"
                :class="[
                  $style['select__option-button'],
                  customClassNames.optionButton,
                ]"
                :disabled="item.disabled"
                @click="
                  (e) => {
                    selectOption(item);
                    optionClick(e);
                  }
                "
              >
                <template v-for="(text, i) in item.text.split(/\n/)" :key="i">
                  <br v-if="i > 0" />{{ text }}
                </template>
                <span
                  :class="[
                    $style['select__option-check'],
                    customClassNames.optionCheck,
                  ]"
                >
                  <IconCheck />
                </span>
              </button>
            </li>
          </ul>
        </div>
      </ToastPopup>
    </UiLayer>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/BasicSelect.scss';
</style>
