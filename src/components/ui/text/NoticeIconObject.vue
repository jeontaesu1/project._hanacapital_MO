<script>
import { computed, inject } from 'vue';

import iconNotice from '@/assets/images/icon/important.svg?component';
import iconNoticeCheck from '@/assets/images/icon/complete.svg?component';

const defaultClassNames = () => ({
  object: '',
});

export default {
  components: {
    iconNotice,
    iconNoticeCheck,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
  },
  setup(props) {
    const styleModule = inject('styleModule');
    const state = inject('noticeType');

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      state,
      styleModule,
      customClassNames,
    };
  },
};
</script>

<template>
  <span :class="[styleModule['ui-notice__object'], customClassNames.object]">
    <iconNoticeCheck v-if="state.value === 'check'" />
    <iconNotice v-else />
  </span>
</template>
