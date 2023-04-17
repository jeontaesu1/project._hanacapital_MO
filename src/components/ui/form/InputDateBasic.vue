<script>
import { ref, reactive, computed, onBeforeMount } from 'vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/plugins/confirmDate/confirmDate.css';
import 'flatpickr/dist/plugins/monthSelect/style.css';
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
        dateBasic: null,
      },
      configs: {
        basic: {},
        wrap: {
          wrap: true,
          altFormat: 'M	j, Y',
          altInput: true,
          dateFormat: 'Y-m-d',
          minDate: new Date(),
        },
        inline: {
          inline: true,
        },
        allowInput: {
          allowInput: true,
          dateFormat: 'Y-m-d',
        },
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
  inheritAttrs: false,
  components: {
    flatPickr,
  },
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
  setup(props) {
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
      // emit('update:modelValue', value);
    };

    const onKeyup = (e) => {
      state.isInputed = e.target.value.length ? true : false;
    };

    onBeforeMount(() => {
      // state.val = props.modelValue || props.defaultValue || '';
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
        v-model="form.dateBasic"
        :class="[$style['input-date']]"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/DateInput.scss';
</style>
