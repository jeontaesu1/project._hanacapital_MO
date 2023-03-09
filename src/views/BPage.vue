<script>
import { onMounted, onUnmounted } from 'vue';
import { useHead } from '@vueuse/head';
import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

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
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.common.setRootClassName('page-b');
      store.ui.header.setTitle(() => 'B 페이지');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => [
        {
          name: 'close',
          onClick: () => alert('닫기 클릭'),
        },
      ]);
    });

    onUnmounted(() => {
      store.ui.common.setRootClassName();
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
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
