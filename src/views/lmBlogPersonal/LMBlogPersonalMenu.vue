<script>
// LM_M06_p002
import { onMounted, onUnmounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';

export default {
  components: {
    PageContents,
    RouterLink,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const router = useRouter();

    onMounted(() => {
      store.ui.header.setTitle(() => '전체메뉴');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => [
        {
          name: 'homeButton',
          onClick: () => router.push('/lm-blog-personal/home'),
        },
        {
          name: 'close',
          onClick: () => router.push('/lm-blog-personal/home'),
        },
      ]);
    });

    onUnmounted(() => {
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
          <RouterLink
            to="/lm-blog-personal/quick-counseling"
            :class="$style['nav-menu__link']"
            >빠른 대출 상담</RouterLink
          >
        </li>
        <li :class="$style['nav-menu__item']">
          <RouterLink
            to="/lm-blog-personal/sms-counseling"
            :class="$style['nav-menu__link']"
            >SMS 상담</RouterLink
          >
        </li>
        <li :class="$style['nav-menu__item']">
          <RouterLink
            to="/lm-blog-personal/map"
            :class="$style['nav-menu__link']"
            >찾아오시는 길</RouterLink
          >
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lmBlogPersonal/LMBlogPersonalMenu.scss';
</style>
