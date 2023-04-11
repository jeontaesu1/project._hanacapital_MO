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
        dateTime: null,
        time: null,
        date: '2017-01-01',
        dateLocale: null,
        dateInline: +new Date(),
        dateConfirm: null,
        allowInput: null,
        dateStart: null,
        dateEnd: null,
        monthSelect: null,
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
  components: {
    flatPickr,
  },
  methods: {
    setNewDate() {
      console.log('Set new date');
      this.form.dateBasic = new Date();
    },
    updateConfig() {
      console.log('Update config');
      this.configs.basic.mode = 'range';
    },
    // changeLocale() {
    //   console.log('Changing locale to english');
    //   this.configs.locale.locale = EnglishLocale;
    // },
    // onChange(selectedDates, dateStr, instance) {
    //   console.log('Date change hook was called', dateStr);
    // },
    // listenToOnChangeEvent(selectedDates, dateStr, instance) {
    //   console.log('listen To OnChange Event', dateStr);
    // },
    // submit() {
    //   console.log('Form submit event', this.form);
    // },
    // onStartChange(selectedDates, dateStr, instance) {
    //   this.configs.end.minDate = dateStr;
    // },
    // onEndChange(selectedDates, dateStr, instance) {
    //   this.configs.start.maxDate = dateStr;
    // },
  },
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
      input.value.focus();
    };

    const onfocusin = () => {
      clearTimeout(timer);
      state.isFocus = true;
      state.isInputed = input.value.value.length ? true : false;
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
      <input
        ref="input"
        v-model="form.dateBasic"
        v-bind="$attrs"
        :type="type"
        :class="[
          $style['input__input'],
          {
            [$style[`input__input--align-${align}`]]: align,
          },
          customClassNames.input,
        ]"
        @input="onInput"
        @keyup="onKeyup"
      />
      <flat-pickr v-model="form.dateBasic" class="form-control" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/BasicInput.scss';
// https://github.com/ankurk91/vue-flatpickr-component
</style>
