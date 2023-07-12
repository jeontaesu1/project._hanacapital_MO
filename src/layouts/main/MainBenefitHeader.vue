<script>
import {
  ref,
  computed,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  reactive,
} from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';
import { useUiHeaderStore } from '@/stores/ui/header';

import BasicInput from '@/components/ui/form/BasicInput.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import RoundButton from '@/components/ui/button/RoundButton.vue';

import IconSetting from '@/assets/images/common/setting.svg?component';

export default {
  components: {
    BasicInput,
    PopupButton,
    SearchButton,
    RoundButton,
    IconSetting,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        scrollBlock: useUiScrollBlockStore(),
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      searchMode: false,
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

    const searchModeOn = () => {
      state.searchMode = true;
    };

    const searchModeOff = () => {
      state.searchMode = false;
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

    return {
      store,
      state,
      header,
      fixbar,
      fake,
      isBlocking,
      scrollbarsWidth,
      searchModeOn,
      searchModeOff,
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
      <div ref="header" :class="$style['header']">
        <div
          v-if="state.searchMode"
          :class="[$style['header__row'], $style['header__row--form']]"
        >
          <div :class="$style['header__left']">
            <PopupButton type="back" @click="searchModeOff" />
          </div>
          <div :class="[$style['header__center']]">
            <BasicInput
              type="search"
              title="검색어"
              placeholder="검색어를 입력하세요"
              :classNames="{
                input: $style['header__input'],
              }"
            />
          </div>
          <div :class="$style['header__right']">
            <SearchButton />
          </div>
        </div>

        <div v-else :class="$style['header__row']">
          <div :class="$style['header__right']">
            <!-- Case : Fun 탭 선택시 노출 -->
            <RoundButton
              :classNames="{
                wrap: $style['header__setting'],
              }"
            >
              <template v-slot:leftIcon>
                <IconSetting />
              </template>
              구독관리
            </RoundButton>
            <!-- // Case : Fun 탭 선택시 노출 -->

            <SearchButton @click="searchModeOn" />
          </div>
        </div>
      </div>
    </div>
    <div ref="fake" :class="$style['header-fake']"></div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/main/MainBenefitHeader.scss';
</style>
