<script>
import { useUiCommonStore } from '@/stores/ui/common';

export default {
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
      },
    };

    return {
      store,
    };
  },
};
</script>

<template>
  <h1>Home</h1>
  <button type="button" @click="store.ui.common.setApp(true)">
    APP 모드 ON
  </button>
  <button type="button" @click="store.ui.common.setApp(false)">
    APP 모드 OFF
  </button>
</template>
