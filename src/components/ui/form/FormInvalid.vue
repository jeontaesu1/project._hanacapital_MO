<script>
import { computed, watch, inject } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    error: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const formListItem = inject('formListItem', {});

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    watch(
      () => props.error,
      (cur) => {
        if (formListItem && formListItem.error) {
          formListItem.error(cur);
        }
      }
    );

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['invalid'],
      {
        [$style['invalid--error']]: error,
      },
      customClassNames.wrap,
    ]"
  >
    <slot
      :messageClass="$style['invalid__message']"
      :helpClass="$style['invalid__help']"
    />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/FormInvalid.scss';
</style>
