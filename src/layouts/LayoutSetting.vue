<script setup>
// import { ref, reactive, computed, watch, markRaw } from 'vue';
// import { useRouter, useRoute, RouterView } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useRoute, RouterView } from 'vue-router';

// 레이아웃 설정
import { useUiStore } from '@/stores/ui/ui';
import { useHead } from '@vueuse/head';
import favicon from '@/assets/images/common/favicon.ico';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

// html head 셋팅
useHead({
  title: '하나캐피탈 공식 웹사이트',
  htmlAttrs: {
    lang: 'ko',
  },
  link: {
    rel: 'icon',
    href: favicon,
  },
  meta: [
    {
      charset: 'utf-8',
    },
    /*
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    */
    {
      hid: 'title',
      name: 'title',
      content: '하나캐피탈 공식 웹사이트',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        '자동차금융, 개인금융, 기업금융 상품정보 및 온라인 대출 상담 및 신청 가능.',
    },
    {
      name: 'subject',
      content: '하나캐피탈(주) IR WebSite',
    },
    {
      name: 'keywords',
      content: '하나캐피탈(주)',
    },
    {
      name: 'copyright',
      content: 'copyright(c)2011 Hana Capital Co.,Ltd. All rights reserved.',
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
  ],
});
const store = {
  ui: useUiStore(),
};
onMounted(() => {
  store.ui.setScrollbarsWidth();
});

// 레이아웃 셋팅
const route = useRoute();
const layouts = {
  DefaultLayout,
};
const layout = computed(() => {
  const { layout } = route.meta;
  return layout ? layouts[layout] : layouts['DefaultLayout'];
});
</script>

<template>
  <component :is="layout"><RouterView /></component>
</template>

<style lang="scss" scoped></style>
