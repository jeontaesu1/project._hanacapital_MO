<script>
// Main_M04_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';
import { useUiHeaderStore } from '@/stores/ui/header';
import { useUiDockBarStore } from '@/stores/ui/dockBar';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicBanner from '@/components/ui/banner/BasicBanner.vue';

import IconPig from '@/assets/images/icon/pig.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';
import IconInterestRate from '@/assets/images/icon/interest-rate.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    StickyBar,
    NavTab,
    NavTabButton,
    RoundStatus,
    BasicBanner,
    IconPig,
    IconBuilding,
    IconCar,
    IconInterestRate,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        layout: useUiLayoutStore(),
        header: useUiHeaderStore(),
        dockBar: useUiDockBarStore(),
      },
    };

    onMounted(() => {
      store.ui.common.setApp(true); // 앱모드 테스트 변수

      store.ui.layout.setUseFooter(false);

      store.ui.header.setTitle(() => ' ');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => []);

      store.ui.dockBar.setActive(() => 'product');
    });

    onUnmounted(() => {
      store.ui.common.setApp(); // 앱모드 테스트 변수

      store.ui.layout.setUseFooter();

      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();

      store.ui.dockBar.setActive();
    });
  },
};
</script>

<template>
  <PageContents :classNames="{ head: $style['head'] }">
    <template v-slot:head>
      <PageTextGroup>
        <PageMainText>
          <strong>상품</strong>
        </PageMainText>
      </PageTextGroup>

      <StickyBar>
        <NavTab :auto="true" :classNames="{ wrap: $style['nav'] }">
          <NavTabButton tagName="button" type="button" :active="true">
            전체
          </NavTabButton>
          <NavTabButton tagName="button" type="button">신용대출</NavTabButton>
          <NavTabButton tagName="button" type="button">자동차</NavTabButton>
          <NavTabButton tagName="button" type="button">제휴</NavTabButton>
        </NavTab>
      </StickyBar>
    </template>

    <!-- Case : 상품이 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">상품을 준비중입니다.</p>
    </div>
    <!-- // Case : 상품이 없을 때 -->

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <!-- Case : 신용대출 -->
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconPig /></span>
            <span :class="$style['icon-list__content']">
              <span
                :class="[
                  $style['icon-list__text'],
                  'text-body-5',
                  'color-green',
                ]"
              >
                소득이 있다면 쉽고 빠른 신용대출
              </span>
              <span :class="$style['icon-list__title']">e하나신용대출</span>
              <span :class="$style['etc-text']">
                <span :class="$style['etc-text__item']">최대한도 6억원</span>
                <span :class="$style['etc-text__dot']"></span>
                <span :class="$style['etc-text__item']">최대 12개월</span>
              </span>
            </span>
          </button>
          <button type="button" :class="$style['tag-button']">
            <RoundStatus theme="undenary">
              지금 가입하면 최대 1만원 지원!
            </RoundStatus>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']">
              <IconInterestRate />
            </span>
            <span :class="$style['icon-list__content']">
              <span
                :class="[
                  $style['icon-list__text'],
                  'text-body-5',
                  'color-green',
                ]"
              >
                주식매입자금을 위한 자금지원 금융서비스
              </span>
              <span :class="$style['icon-list__title']">스탁론</span>
              <span :class="$style['etc-text']">
                <span :class="$style['etc-text__item']">최대한도 6억원</span>
                <span :class="$style['etc-text__dot']"></span>
                <span :class="$style['etc-text__item']">최대 12개월</span>
              </span>
            </span>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconBuilding /></span>
            <span :class="$style['icon-list__content']">
              <span
                :class="[
                  $style['icon-list__text'],
                  'text-body-5',
                  'color-green',
                ]"
              >
                아파트가 있으신가요?
              </span>
              <span :class="$style['icon-list__title']">행복아파트론</span>
              <span :class="$style['etc-text']">
                <span :class="$style['etc-text__item']">최대한도 6억원</span>
                <span :class="$style['etc-text__dot']"></span>
                <span :class="$style['etc-text__item']">최대 12개월</span>
              </span>
            </span>
          </button>
        </li>
        <!-- // Case : 신용대출 -->

        <!-- Case : 자동차 -->
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconCar /></span>
            <span :class="$style['icon-list__content']">
              <span
                :class="[
                  $style['icon-list__text'],
                  'text-body-5',
                  'color-green',
                ]"
              >
                차량이 필요하신가요?
              </span>
              <span :class="$style['icon-list__title']">장기렌터카</span>
              <span :class="$style['etc-text']">
                <span :class="$style['etc-text__item']">최대한도 6억원</span>
                <span :class="$style['etc-text__dot']"></span>
                <span :class="$style['etc-text__item']">최대 12개월</span>
              </span>
            </span>
          </button>
          <button type="button" :class="$style['tag-button']">
            <RoundStatus theme="undenary">
              지금 가입하면 최대 1만원 지원!
            </RoundStatus>
          </button>
        </li>
        <!-- // Case : 자동차 -->

        <!-- Case : 제휴 -->
        <li :class="$style['icon-list__item']">
          <BasicBanner
            thumb="/images/_dummy/banner-money-up.png"
            @click="() => {}"
          >
            <h3 class="text-body-1 font-weight-medium">
              에코플러스 자동차보험
            </h3>
            <p class="text-body-4 color-gray row-margin-mini">지금 바로 GO!</p>
          </BasicBanner>
        </li>
        <!-- // Case : 제휴 -->
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainProduct.scss';
</style>
