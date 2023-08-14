<script>
import {
  ref,
  reactive,
  computed,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  useCssModule,
  provide,
  watch,
} from 'vue';
import { useRoute, RouterLink } from 'vue-router';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';
import { useUiHeaderStore } from '@/stores/ui/header';

import HeaderButton from '@/components/ui/layout/HeaderButton.vue';
import RoundButton from '@/components/ui/button/RoundButton.vue';

import IconLogoMain from '@/assets/images/icon/logo-main.svg?component';
import IconDownload from '@/assets/images/icon/download.svg?component';

export default {
  components: {
    RouterLink,
    HeaderButton,
    RoundButton,
    IconLogoMain,
    IconDownload,
  },
  setup() {
    const route = useRoute();

    const store = {
      ui: {
        common: useUiCommonStore(),
        scrollBlock: useUiScrollBlockStore(),
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      isScroll: false,
    });

    const header = ref(null);
    const fixbar = ref(null);
    const fake = ref(null);

    const isBlocking = computed(() => {
      return store.ui.scrollBlock.isBlocking;
    });

    const scrollbarsWidth = computed(() => {
      return store.ui.common.scrollbarsWidth;
    });

    const blockingScrollLeft = computed(() => {
      return store.ui.scrollBlock.scrollLeft;
    });

    const theme = computed(() => {
      return store.ui.header.theme;
    });

    const title = computed(() => {
      return store.ui.header.title;
    });

    const leftButtons = computed(() => {
      const defaultButtons = [];
      return store.ui.header.leftButtons || defaultButtons;
    });

    const rightButtons = computed(() => {
      const defaultButtons = ['menu'];
      return store.ui.header.rightButtons || defaultButtons;
    });

    const useLeftLogo = computed(() => {
      return store.ui.header.useLeftLogo;
    });

    const useAppButton = computed(() => {
      return store.ui.header.useAppButton;
    });

    const update = () => {
      if (fixbar.value && fake.value) {
        const height = fixbar.value.offsetHeight;
        fake.value.style.height = `${height}px`;
        store.ui.header.setHeight(height);
      }
    };

    const scroll = () => {
      const html = document.getElementsByTagName('html')[0];

      if (html && header.value) {
        if (isBlocking.value) {
          header.value.style.marginLeft = `-${blockingScrollLeft.value}px`;
          state.isScroll = store.ui.scrollBlock.scrollTop > 0;
        } else {
          header.value.style.marginLeft = `-${html.scrollLeft}px`;
          state.isScroll = html.scrollTop > 0;
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

    onBeforeUnmount(() => {
      store.ui.header.setHeight(0);

      window.removeEventListener('load', load);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resize);
    });

    watch(
      () => route.path,
      () => {
        scroll();
        update();
      }
    );

    provide('headerStyleModule', useCssModule());

    return {
      store,
      state,
      header,
      fixbar,
      fake,
      isBlocking,
      scrollbarsWidth,
      theme,
      title,
      leftButtons,
      rightButtons,
      useLeftLogo,
      useAppButton,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['header-wrap'],
      {
        [$style[`header-wrap--theme-${theme}`]]: theme,
      },
    ]"
  >
    <div
      ref="fixbar"
      :class="$style['header-fix']"
      :style="`${isBlocking ? `margin-right: ${scrollbarsWidth}px` : ''}`"
    >
      <header
        ref="header"
        :class="[
          $style['header'],
          {
            [$style['header--scroll']]: state.isScroll,
            [$style[`header--theme-${theme}`]]: theme,
          },
        ]"
      >
        <div :class="$style['header__left']">
          <HeaderButton
            v-for="item in leftButtons"
            :key="`left_${typeof item === 'string' ? item : item.name}`"
            :type="typeof item === 'string' ? item : item.name"
            :onClick="item.onClick"
          />
          <h1 v-if="useLeftLogo" :class="$style['header__logo']">
            <RouterLink to="/" :class="$style['header__logo-link']">
              <IconLogoMain />
              <span :class="$style['header__logo-text']">하나캐피탈</span>
            </RouterLink>
          </h1>
        </div>
        <div :class="[$style['header__center']]">
          <h1 :class="$style['header__title']">
            {{ title || '하나캐피탈' }}
          </h1>
        </div>
        <div :class="$style['header__right']">
          <RoundButton
            v-if="useAppButton"
            theme="secondary"
            :classNames="{
              wrap: $style['header__app'],
            }"
          >
            <template v-slot:leftIcon>
              <IconDownload />
            </template>
            앱설치
          </RoundButton>
          <HeaderButton
            v-for="item in rightButtons"
            :key="`right_${typeof item === 'string' ? item : item.name}`"
            :type="typeof item === 'string' ? item : item.name"
            :text="item.text"
            :theme="item.theme"
            :onClick="item.onClick"
          />
        </div>
      </header>
    </div>
    <div ref="fake" :class="$style['header-fake']"></div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/DefaultHeader.scss';
</style>
