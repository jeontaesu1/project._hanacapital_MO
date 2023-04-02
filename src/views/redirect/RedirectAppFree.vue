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
import IconAppFree from '@/assets/images/icon/appfree.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    IllustObject,
    BasicHr,
    IconPlayStore,
    IconAppStore,
    IconAppFree,
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
        앱프리 앱으로<br />
        <strong>이동합니다</strong>
      </PageMainText>
    </PageTextGroup>

    <IllustObject type="appfree" />

    <BasicHr
      theme="quaternary"
      type="contents"
      className="row-margin-container"
    />

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <div :class="$style['icon-list__icon']"><IconPlayStore /></div>
            <div :class="$style['icon-list__content']">
              <div>아직 앱이 없으시다면</div>
              <div :class="$style['icon-list__title']">Google Play로 이동</div>
            </div>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <div :class="$style['icon-list__icon']"><IconAppStore /></div>
            <div :class="$style['icon-list__content']">
              <div>아직 앱이 없으시다면</div>
              <div :class="$style['icon-list__title']">App Store로 이동</div>
            </div>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <div :class="$style['icon-list__icon']"><IconAppFree /></div>
            <div :class="$style['icon-list__content']">
              <div>앱을 설치하셨다면</div>
              <div :class="$style['icon-list__title']">앱프리 앱으로 이동</div>
            </div>
          </button>
        </li>
      </ul>
    </div>
  </PageContents>
</template>
<style lang="scss" module>
@import '@/assets/scss/views/redirect/RedirectAppFree.scss';
</style>
