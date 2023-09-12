<script>
import {
  computed,
  inject,
  reactive,
  onMounted,
  onBeforeUnmount,
  watch,
} from 'vue';

const defaultClassNames = () => ({
  option: '',
});

export default {
  inheritAttrs: false,
  props: {
    tagName: {
      Type: String,
      default: 'button',
    },
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    value: {
      Type: String,
      default: '',
    },
    text: {
      Type: String,
      default: '',
    },
    type: {
      Type: String,
      default: 'button',
    },
  },
  setup(props) {
    const styleModule = inject('extendSelectStyleModule');
    const extendSelect = inject('extendSelect', {});

    const state = reactive({
      key: null,
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const selectOption = () => {
      const option = {
        value: props.value,
        text: props.text,
      };

      if (extendSelect && extendSelect.selectOption) {
        extendSelect.selectOption(option);
      }
    };

    const optionClick = (e) => {
      const { optionClick } = extendSelect;

      optionClick(e);
    };

    onMounted(() => {
      const option = {
        value: props.value,
        text: props.text,
      };

      if (extendSelect && extendSelect.optionsAdd) {
        state.key = extendSelect.optionsAdd(option);

        if (
          extendSelect.value &&
          extendSelect.value.value &&
          extendSelect.value.value === option.value &&
          extendSelect.selectOption
        ) {
          extendSelect.selectOption(option);
        }
      }
    });

    onBeforeUnmount(() => {
      if (extendSelect && extendSelect.optionsRemove) {
        extendSelect.optionsRemove(state.key);
      }
    });

    watch(
      () => props.value,
      (cur) => {
        if (extendSelect && extendSelect.optionsChange) {
          extendSelect.optionsChange(state.key, {
            value: cur,
          });
        }
      }
    );
    watch(
      () => props.text,
      (cur) => {
        if (extendSelect && extendSelect.optionsChange) {
          extendSelect.optionsChange(state.key, {
            text: cur,
          });
        }
      }
    );

    return {
      extendSelect,
      styleModule,
      customClassNames,
      selectOption,
      optionClick,
    };
  },
};
</script>

<template>
  <component
    :is="tagName"
    v-bind="$attrs"
    :type="type"
    :title="
      extendSelect.value && extendSelect.value.value === value
        ? '선택 됨'
        : null
    "
    :class="[
      styleModule['select__option'],
      {
        'is-selected': extendSelect.value && extendSelect.value.value === value,
      },
      customClassNames.option,
    ]"
    @click="
      (e) => {
        selectOption();
        optionClick(e);
      }
    "
  >
    <slot />
  </component>
</template>
