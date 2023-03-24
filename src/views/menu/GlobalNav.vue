<script>
import { onMounted, onUnmounted } from 'vue';
import { useHead } from '@vueuse/head';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import GlobalNav from '@/components/ui/gnb/GlobalNav.vue';

export default {
  components: {
    PageContents,
    GlobalNav,
  },
  setup() {
    useHead({
      title: '전체메뉴 - 하나캐피탈 공식 웹사이트',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: '전체메뉴 - 하나캐피탈 공식 웹사이트',
        },
        {
          hid: 'description',
          name: 'description',
          content: '전체메뉴 페이지 설명',
        },
      ],
    });

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '전체메뉴');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['search']);
    });

    onUnmounted(() => {
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
  <PageContents>
    <h1>전체메뉴</h1>

    <GlobalNav />
  </PageContents>
</template>
