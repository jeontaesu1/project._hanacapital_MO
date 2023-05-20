<script>
// Main_M04_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

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
    IconPig,
    IconBuilding,
    IconCar,
    IconInterestRate,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => ' ');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => []);
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
  <PageContents :classNames="{ body: $style['wrap'] }">
    <PageTextGroup>
      <PageMainText>
        <strong>상품</strong>
      </PageMainText>
    </PageTextGroup>

    <StickyBar>
      <NavTab :auto="true">
        <NavTabButton tagName="button" type="button" :active="true">
          전체
        </NavTabButton>
        <NavTabButton tagName="button" type="button">신용대출</NavTabButton>
        <NavTabButton tagName="button" type="button">자동차</NavTabButton>
        <NavTabButton tagName="button" type="button">제휴</NavTabButton>
      </NavTab>
    </StickyBar>

    <!-- Case : 상품이 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">상품을 준비중입니다.</p>
    </div>
    <!-- // Case : 상품이 없을 때 -->

    <!-- Case : 전체 탭 선택 시 -->
    <div>
      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <!-- Case : 신용대출 탭 선택 시 -->
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
                <div class="flex-box text-body-4 row-margin-small">
                  <div
                    class="flex-box__cell font-weight-light color-gray-tertiary"
                  >
                    최대한도 6억원
                  </div>
                  <div
                    :class="[
                      $style['symbol'],
                      'flex-box__cell flex-box__cell--small',
                    ]"
                  ></div>
                  <div
                    class="flex-box__cell flex-box__cell--small font-weight-light color-gray-tertiary"
                  >
                    최대 12개월
                  </div>
                </div>
                <RoundStatus
                  :classNames="{ wrap: 'row-margin-small' }"
                  theme="undenary"
                >
                  지금 가입하면 최대 1만원 지원!
                </RoundStatus>
              </span>
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
                <div class="flex-box text-body-4 row-margin-small">
                  <div
                    class="flex-box__cell font-weight-light color-gray-tertiary"
                  >
                    최대한도 6억원
                  </div>
                  <div
                    :class="[
                      $style['symbol'],
                      'flex-box__cell flex-box__cell--small',
                    ]"
                  ></div>
                  <div
                    class="flex-box__cell flex-box__cell--small font-weight-light color-gray-tertiary"
                  >
                    최대 12개월
                  </div>
                </div>
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
                <div class="flex-box text-body-4 row-margin-small">
                  <div
                    class="flex-box__cell font-weight-light color-gray-tertiary"
                  >
                    최대한도 6억원
                  </div>
                  <div
                    :class="[
                      $style['symbol'],
                      'flex-box__cell flex-box__cell--small',
                    ]"
                  ></div>
                  <div
                    class="flex-box__cell flex-box__cell--small font-weight-light color-gray-tertiary"
                  >
                    최대 12개월
                  </div>
                </div>
              </span>
            </button>
          </li>
          <!-- // Case : 신용대출 탭 선택 시 -->

          <!-- Case : 자동차 탭 선택 시 -->
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
                <div class="flex-box text-body-4 row-margin-small">
                  <div
                    class="flex-box__cell font-weight-light color-gray-tertiary"
                  >
                    최대한도 6억원
                  </div>
                  <div
                    :class="[
                      $style['symbol'],
                      'flex-box__cell flex-box__cell--small',
                    ]"
                  ></div>
                  <div
                    class="flex-box__cell flex-box__cell--small font-weight-light color-gray-tertiary"
                  >
                    최대 12개월
                  </div>
                </div>
                <RoundStatus
                  :classNames="{ wrap: 'row-margin-small' }"
                  theme="undenary"
                >
                  지금 가입하면 최대 1만원 지원!
                </RoundStatus>
              </span>
            </button>
          </li>
          <!-- Case : 자동차 탭 선택 시 -->
        </ul>
      </div>

      <!-- Case : 제휴 탭 선택 시 -->
      <div class="row-margin-contents">
        // 배너 영역 (내용 확인 후 진행 예정)
      </div>
      <!-- // Case : 제휴 탭 선택 시 -->
    </div>
    <!-- // Case : 전체 탭 선택 시 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainProduct.scss';
</style>
