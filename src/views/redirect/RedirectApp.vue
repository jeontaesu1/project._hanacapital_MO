<script>
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconPlayStore from '@/assets/images/icon/playstore.svg?component';
import IconAppStore from '@/assets/images/icon/appstore.svg?component';
import IconHanaCapital from '@/assets/images/icon/1qcapital.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    IllustObject,
    BasicHr,
    IconPlayStore,
    IconAppStore,
    IconHanaCapital,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      // store.ui.header.setTitle(() => ' ');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      // store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        1Q 캐피탈 앱으로<br />
        <strong>이동합니다</strong>
      </PageMainText>
    </PageTextGroup>

    <IllustObject />

    <BasicHr
      theme="quaternary"
      type="contents"
      className="row-margin-container"
    />

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <!-- Case : Android -->
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconPlayStore /></span>
            <span :class="$style['icon-list__content']">
              <span class="display-block">아직 앱이 없으시다면</span>
              <span :class="$style['icon-list__title']"
                >Google Play로 이동</span
              >
            </span>
          </button>
        </li>
        <!-- // Case : Android -->

        <!-- Case : IOS -->
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconAppStore /></span>
            <span :class="$style['icon-list__content']">
              <span class="display-block">아직 앱이 없으시다면</span>
              <span :class="$style['icon-list__title']">App Store로 이동</span>
            </span>
          </button>
        </li>
        <!-- // Case : IOS -->

        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconHanaCapital /></span>
            <span :class="$style['icon-list__content']">
              <span class="display-block">앱을 설치하셨다면</span>
              <span :class="$style['icon-list__title']">
                1Q캐피탈 앱으로 이동
              </span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </PageContents>
</template>
<style lang="scss" module>
@import '@/assets/scss/views/redirect/RedirectApp.scss';
</style>
