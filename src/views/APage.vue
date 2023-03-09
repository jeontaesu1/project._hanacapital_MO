<script>
import { onMounted, onUnmounted } from 'vue';
import { useHead } from '@vueuse/head';
import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

export default {
  setup() {
    useHead({
      title: 'A 페이지 - 하나캐피탈 공식 웹사이트',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'A 페이지 - 하나캐피탈 공식 웹사이트',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'A 페이지 설명',
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
      store.ui.common.setRootClassName('page-a');
      store.ui.header.setTitle(() => 'A 페이지');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => [
        'search',
        {
          name: 'share',
          onClick: () => alert('공유하기 클릭'),
        },
        'menu',
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
  <h1>A 페이지</h1>
</template>
