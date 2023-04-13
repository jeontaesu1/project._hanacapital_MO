<script>
import { ref, reactive, computed, onBeforeMount } from 'vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/plugins/confirmDate/confirmDate.css';
import 'flatpickr/dist/plugins/monthSelect/style.css';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
const defaultClassNames = () => ({
  wrap: '',
  cell: '',
  input: '',
  delete: '',
  deleteText: '',
});

export default {
  data() {
    return {
      inputDisabled: false,
      form: {
        dateStart: 2023 - 1 - 11,
        dateEnd: 2023 - 4 - 12,
      },
      configs: {
        start: {
          minDate: new Date(),
          maxDate: null,
        },
        end: {
          minDate: null,
        },
      },
    };
  },
  components: {
    flatPickr,
    InputBlockCell,
  },
  inheritAttrs: false,
  props: {
    id: {
      Type: String,
      default: null,
    },
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    type: {
      Type: String,
      default: 'text',
    },
    align: {
      Type: String,
      default: null,
    },
    defaultValue: {
      Type: String,
      default: null,
    },
    modelValue: {
      Type: String,
    },
  },
  setup(props, { emit }) {
    let timer = null;

    const state = reactive({
      isFocus: false,
      isInputed: false,
      val: '',
    });

    const input = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const getInputElement = () => {
      return input.value;
    };

    const focus = () => {
      console.log('focus');
      // input.value.focus();
    };

    const onfocusin = () => {
      clearTimeout(timer);
      state.isFocus = true;
      // state.isInputed = input.value.value.length ? true : false;
    };

    const onfocusout = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        state.isFocus = false;
        clearTimeout(timer);
      }, 50);
    };

    const onInput = (e) => {
      const { value } = e.target;
      state.val = value;
      emit('update:modelValue', value);
    };

    const onKeyup = (e) => {
      state.isInputed = e.target.value.length ? true : false;
    };

    onBeforeMount(() => {
      state.val = props.modelValue || props.defaultValue || '';
    });

    return {
      state,
      input,
      customClassNames,
      getInputElement,
      focus,
      onfocusin,
      onInput,
      onKeyup,
      onfocusout,
    };
  },
};
</script>

<template>
  <InputBlockCell :flexible="true">
    <div
      :class="[
        $style['input'],
        {
          [$style['input--focus']]: state.isFocus,
          [$style['input--inputed']]: state.isInputed,
        },
        customClassNames.wrap,
      ]"
      @focusin="onfocusin"
      @focusout="onfocusout"
    >
      <div :class="[$style['input__cell'], customClassNames.cell]">
        <flat-pickr
          :id="`${id}`"
          v-model="form.dateStart"
          :class="[$style['input-date']]"
        />
      </div>
    </div>
  </InputBlockCell>
  <InputBlockCell type="sub">-</InputBlockCell>
  <InputBlockCell :flexible="true">
    <div
      :class="[
        $style['input'],
        {
          [$style['input--focus']]: state.isFocus,
          [$style['input--inputed']]: state.isInputed,
        },
        customClassNames.wrap,
      ]"
      @focusin="onfocusin"
      @focusout="onfocusout"
    >
      <div :class="[$style['input__cell'], customClassNames.cell]">
        <flat-pickr v-model="form.dateEnd" :class="[$style['input-date']]" />
      </div>
    </div>
  </InputBlockCell>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/BasicInput.scss';
@import '@/assets/scss/components/ui/form/DateInput.scss';
</style>
