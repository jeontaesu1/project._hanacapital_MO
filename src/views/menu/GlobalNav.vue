<script>
// Common_M00_l017
import { onMounted, onUnmounted } from 'vue';
import { useHead } from '@vueuse/head';

import { useUiCommonStore } from '@/stores/ui/common';
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
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.common.setRootClassName('page-gnb');
      store.ui.header.setTitle(() => ' ');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => ['search', 'setting']);
    });

    onUnmounted(() => {
      store.ui.common.setRootClassName();
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <GlobalNav />
  </PageContents>
</template>
