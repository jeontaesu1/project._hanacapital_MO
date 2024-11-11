<script>
import { ref, computed, inject } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  text: '',
  icon: '',
  placeholder: '',
});

export default {
  inheritAttrs: false,
  components: {},
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    type: {
      Type: String,
      default: 'button',
    },
    placeholder: {
      Type: String,
      default: null,
    },
    forcePlaceholder: {
      Type: Boolean,
      default: false,
    },
    theme: {
      Type: String,
      default: null,
    },
  },
  setup(props, context) {
    const formListItem = inject('formListItem', {});

    const button = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isText = computed(() => {
      return Boolean(context.slots.default);
    });

    const isPlaceholder = computed(() => {
      return typeof props.placeholder === 'string';
    });

    const formSelectOnly = computed(() => {
      return formListItem.selectOnly && formListItem.selectOnly.value;
    });

    const formSelectTextClass = computed(() => {
      return formListItem.selectTextClass;
    });

    return {
      button,
      customClassNames,
      isText,
      isPlaceholder,
      formSelectOnly,
      formSelectTextClass,
    };
  },
};
</script>

<template>
  <button
    v-bind="$attrs"
    ref="button"
    :type="type"
    :class="[
      $style['select-button'],
      {
        [$style[`select-button--theme-${theme}`]]: theme,
      },
      customClassNames.wrap,
    ]"
  >
    <span
      v-if="(!forcePlaceholder && !isText && isPlaceholder) || forcePlaceholder"
      :class="[
        $style['select-button__placeholder'],
        {
          [formSelectTextClass]: formSelectOnly,
        },
        customClassNames.placeholder,
      ]"
    >
      {{ placeholder }}
    </span>
    <span
      v-if="!isPlaceholder || (!forcePlaceholder && isText && isPlaceholder)"
      :class="[
        $style['select-button__text'],
        {
          [formSelectTextClass]: formSelectOnly,
        },
        customClassNames.text,
      ]"
    >
      <slot />
    </span>
    <span :class="[$style['select-button__icon'], customClassNames.icon]">
    </span>
  </button>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/SelectButton.scss';
</style>
