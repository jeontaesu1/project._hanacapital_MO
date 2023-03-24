<script>
import { onMounted, onUnmounted } from 'vue';
import { useHead } from '@vueuse/head';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';

export default {
  components: {
    PageContents,
  },
  setup() {
    useHead({
      title: '로그인 - 하나캐피탈 공식 웹사이트',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: '로그인 - 하나캐피탈 공식 웹사이트',
        },
        {
          hid: 'description',
          name: 'description',
          content: '로그인 페이지 설명',
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
      store.ui.header.setTitle(() => '로그인');
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
    <h1>로그인</h1>

    <form action="">
      <input type="text" placeholder="ID" />
      <input type="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  </PageContents>
</template>
