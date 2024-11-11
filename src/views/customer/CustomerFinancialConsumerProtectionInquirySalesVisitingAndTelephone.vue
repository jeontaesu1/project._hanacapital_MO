<script>
// Customer_M11_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '방문·전화권유판매원 조회');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
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
    <PageTextGroup>
      <PageMainText
        >방문·전화권유판매원 조회는<br />
        PC홈페이지에서 이용 가능합니다</PageMainText
      >
    </PageTextGroup>

    <section>
      <section class="row-margin-contents-group row-margin-bottom-none">
        <ol
          :class="[
            $style['contents-list__list'],
            $style['contents-list__list--senary'],
          ]"
        >
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">1</div>
              <div :class="$style['contents-list__title']">
                PC에서 하나캐피탈 홈페이지 접속
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">2</div>
              <div :class="$style['contents-list__title']">
                우측 상단의 메뉴(☰) 선택
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">3</div>
              <div :class="$style['contents-list__title']">
                스크롤을 내려 금융소비자보호>민원<br />
                창구·유익정보>방문·전화권유판매원<br />
                메뉴 선택
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">4</div>
              <div :class="$style['contents-list__title']">
                판매원 및 임직원 조회하기
              </div>
            </div>
          </li>
        </ol>
      </section>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtectionInterestRateCutRequestInfo.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>
