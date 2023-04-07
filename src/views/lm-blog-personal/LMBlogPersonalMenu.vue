<script>
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';

export default {
  components: {
    PageContents,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      // optional : 헤더 구성 변경
      store.ui.header.setTitle(() => '전체메뉴');
      store.ui.header.setLeftButtons(() => ['']);
      store.ui.header.setRightButtons(() => ['close']);
    });

    onUnmounted(() => {
      // optional : 헤더 구성 설정 값 리셋
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <div :class="$style['nav-menu']">
      <ul :class="$style['nav-menu__list']">
        <li :class="$style['nav-menu__item']">
          <a href="" :class="$style['nav-menu__link']">빠른 대출 상담</a>
        </li>
        <li :class="$style['nav-menu__item']">
          <a href="" :class="$style['nav-menu__link']">SMS 상담</a>
        </li>
        <li :class="$style['nav-menu__item']">
          <a href="" :class="$style['nav-menu__link']">찾아오시는 길</a>
        </li>
      </ul>
    </div>
  </PageContents>
</template>
<style lang="scss" module>
@import '@/assets/scss/views/lm-blog-personal/LMBlogPersonalMenu.scss';
</style>
