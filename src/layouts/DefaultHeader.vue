<script>
import { ref, computed, onMounted, onUpdated, onUnmounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';

import IconBack from '@/assets/images/common/header-back.svg?component';
import IconPush from '@/assets/images/common/header-alarm.svg?component';
import IconMenu from '@/assets/images/common/header-menu.svg?component';
import IconSearch from '@/assets/images/common/header-search.svg?component';
import IconShare from '@/assets/images/common/header-share.svg?component';
import IconClose from '@/assets/images/common/header-close.svg?component';

export default {
  props: {
    full: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    RouterLink,
    IconBack,
    IconPush,
    IconMenu,
    IconSearch,
    IconShare,
    IconClose,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        scrollBlock: useUiScrollBlockStore(),
      },
    };

    const PATH = {
      ROOT: '/',
      HOME: '/home',
      A_PAGE: '/a',
      B_PAGE: '/b',
      C_PAGE: '/c',
      TEST_PAGE: '/test',
    };

    const header = ref(null);
    const fixbar = ref(null);
    const fake = ref(null);

    const route = useRoute();

    const isBlocking = computed(() => {
      return store.ui.scrollBlock.isBlocking;
    });

    const scrollbarsWidth = computed(() => {
      return store.ui.common.scrollbarsWidth;
    });

    const blockingScrollLeft = computed(() => {
      return store.ui.scrollBlock.scrollLeft;
    });

    const update = () => {
      if (fixbar.value && fake.value) {
        const height = fixbar.value.offsetHeight;
        fake.value.style.height = `${height}px`;
      }
    };

    const scroll = () => {
      const html = document.getElementsByTagName('html')[0];

      if (html && header.value) {
        if (isBlocking.value) {
          header.value.style.marginLeft = `-${blockingScrollLeft.value}px`;
        } else {
          header.value.style.marginLeft = `-${html.scrollLeft}px`;
        }
      }
    };

    const resize = () => {
      scroll();
      update();
    };

    const load = () => {
      resize();
    };

    onMounted(() => {
      update();

      window.addEventListener('load', load);
      window.addEventListener('scroll', scroll);
      window.addEventListener('resize', resize);
    });

    onUpdated(() => {
      update();
    });

    onUnmounted(() => {
      window.removeEventListener('load', load);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resize);
    });

    return {
      store,
      PATH,
      header,
      fixbar,
      fake,
      route,
      isBlocking,
      scrollbarsWidth,
    };
  },
};
</script>

<template>
  <div :class="$style['header-wrap']">
    <div
      ref="fixbar"
      :class="$style['header-fix']"
      :style="`${isBlocking ? `margin-right: ${scrollbarsWidth}px` : ''}`"
    >
      <header ref="header" :class="$style['header']">
        <div :class="$style['header__left']">
          <RouterLink
            to=""
            :class="[$style['header__button'], $style['header__button--back']]"
          >
            <IconBack />
            <span class="for-a11y">뒤로가기</span>
          </RouterLink>
        </div>
        <h1 :class="$style['header__title']">Title</h1>
        <div :class="$style['header__right']">
          <RouterLink
            to=""
            :class="[$style['header__button'], $style['header__button--push']]"
          >
            <IconPush />
            <span class="for-a11y">알림</span>
          </RouterLink>
          <RouterLink
            to=""
            :class="[$style['header__button'], $style['header__button--menu']]"
          >
            <IconMenu />
            <span class="for-a11y">메뉴</span>
          </RouterLink>
          <RouterLink
            to=""
            :class="[
              $style['header__button'],
              $style['header__button--search'],
            ]"
          >
            <IconSearch />
            <span class="for-a11y">검색</span>
          </RouterLink>
          <RouterLink
            to=""
            :class="[$style['header__button'], $style['header__button--share']]"
          >
            <IconShare />
            <span class="for-a11y">공유하기</span>
          </RouterLink>
          <RouterLink
            to=""
            :class="[$style['header__button'], $style['header__button--close']]"
          >
            <IconClose />
            <span class="for-a11y">닫기</span>
          </RouterLink>
        </div>
      </header>
    </div>
    <div ref="fake" :class="$style['header-fake']"></div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/DefaultHeader.scss';
</style>
