<script>
import { onMounted, onUnmounted } from 'vue';
import { useHead } from '@vueuse/head';
import { useUiCommonStore } from '@/stores/ui/common';

export default {
  setup() {
    useHead({
      title: 'B 페이지 - 하나캐피탈 공식 웹사이트',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'B 페이지 - 하나캐피탈 공식 웹사이트',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'B 페이지 설명',
        },
      ],
    });

    const store = {
      ui: {
        common: useUiCommonStore(),
      },
    };

    onMounted(() => {
      store.ui.common.setRootClassName('page-b');
    });

    onUnmounted(() => {
      store.ui.common.setRootClassName(null);
    });

    return {
      store,
    };
  },
};
</script>

<template>
  <h1>B 페이지</h1>
</template>
