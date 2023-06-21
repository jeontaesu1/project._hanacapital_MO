<script>
// Common_M00_l017
import { onMounted, onUnmounted } from 'vue';
import { useHead } from '@vueuse/head';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';
import { useUiHeaderStore } from '@/stores/ui/header';
import { useUiDockBarStore } from '@/stores/ui/dockBar';

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
        layout: useUiLayoutStore(),
        header: useUiHeaderStore(),
        dockBar: useUiDockBarStore(),
      },
    };

    onMounted(() => {
      store.ui.common.setApp(true); // 앱모드 테스트 변수

      store.ui.common.setRootClassName('page-gnb');

      store.ui.layout.setUseFooter(false);

      store.ui.header.setTitle(() => ' ');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => ['search', 'setting']);

      store.ui.dockBar.setActive(() => 'menu');
    });

    onUnmounted(() => {
      store.ui.common.setApp(); // 앱모드 테스트 변수

      store.ui.common.setRootClassName();

      store.ui.layout.setUseFooter();

      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();

      store.ui.dockBar.setActive();
    });
  },
};
</script>

<template>
  <PageContents>
    <GlobalNav />
  </PageContents>
</template>
