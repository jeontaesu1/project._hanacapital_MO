<script>
import {
  reactive,
  computed,
  useCssModule,
  provide,
  onBeforeMount,
  watch,
} from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  list: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
  },
  setup(props) {
    const state = reactive({
      selectOnly: {
        value: false,
      },
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    onBeforeMount(() => {
      state.selectOnly.value = props.isSelect;
    });

    watch(
      () => props.selectOnly,
      (cur) => {
        state.selectOnly.value = cur;
      }
    );

    provide('formListStyleModule', useCssModule());
    provide('formListSelectOnly', {
      selectOnly: state.selectOnly,
    });

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div :class="[$style['form'], customClassNames.wrap]">
    <dl :class="[$style['form__list'], customClassNames.list]">
      <slot />
    </dl>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/FormList.scss';
</style>
