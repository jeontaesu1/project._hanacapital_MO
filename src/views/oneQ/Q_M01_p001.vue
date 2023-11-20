<script>
// Q_M01_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ProductIcon from '@/components/ui/imageData/ProductIcon.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';

import IconLightning from '@/assets/images/icon/lightning.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    ProductIcon,
    RoundStatus,
    BasicHr,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    IconLightning,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        layout: useUiLayoutStore(),
      },
    };

    onMounted(() => {
      store.ui.layout.setUseFooter(false);
      store.ui.layout.setUseHeader(false);
    });

    onUnmounted(() => {
      store.ui.layout.setUseFooter();
      store.ui.layout.setUseHeader();
    });
  },
};
</script>

<template>
  <PageContents>
    <!-- Case : 진행중인 계약/ 우수고객 추가 대출 대상인 경우 노출 -->
    <div>
      <ul :class="$style['logs']">
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <!-- Case : 진행중인 계약 있는 경우 -->
                <h3 class="text-body-3 font-weight-medium">
                  <span class="text-body-1 color-green"
                    >진행 중인 계약이 있습니다.</span
                  ><br />
                  이어서 진행하시겠습니까?
                </h3>
                <!-- // Case : 진행중인 계약 있는 경우 -->

                <!-- Case : 우수고객 추가 대출 대상인 경우 -->
                <h3 class="text-body-3 font-weight-medium">
                  <span class="text-body-1 color-green"
                    >우수고객 추가대출 대상 고객입니다.</span
                  ><br />
                  한도 확인해 보세요
                </h3>
                <!-- // Case : 우수고객 추가 대출 대상인 경우 -->
              </div>
              <div :class="$style['logs__right']">
                <button type="button" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <CheckBox
        id="Q_M01_p001_Check"
        theme="tertiary"
        :classNames="{
          wrap: [$style['check-box-wrap'], 'row-margin-small'],
        }"
      >
        <CheckBoxObject />
        <CheckBoxLabelText>오늘하루 그만보기</CheckBoxLabelText>
      </CheckBox>
    </div>
    <!-- // Case : 진행중인 계약/ 우수고객 추가 대출 대상인 경우 노출 -->

    <PageTextGroup :classNames="{ wrap: 'row-margin-contents-group' }">
      <PageMainText>김하나님, 안녕하세요!</PageMainText>
    </PageTextGroup>

    <div>
      <div class="row-margin-contents-group">
        <ul :class="$style['logs']">
          <li :class="$style['logs__item']">
            <div :class="$style['logs__block']">
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <span :class="$style['logs__contents__icon']"
                        ><IconLightning
                      /></span>
                    </div>
                    <div class="flex-box__cell flex-1 flex-box__cell--small">
                      <h3 class="text-body-1 font-weight-bold">
                        특가할인! 장기렌터카 즉시출고
                      </h3>
                    </div>
                  </div>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <section>
        <h3 class="text-title-2 font-weight-bold row-margin-contents">
          자동차
        </h3>

        <div :class="$style['icon-list']">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <div
                :class="[
                  $style['icon-list__block'],
                  $style['icon-list__block--product'],
                ]"
              >
                <div :class="$style['icon-list__icon']">
                  <ProductIcon
                    :classNames="{ wrap: $style['icon-list__icon-image'] }"
                    src="/images/product-icon/car-rent.png"
                  />
                </div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__sup']">
                    로켓출고! 하나캐피탈 장기렌터카
                  </div>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <div :class="$style['icon-list__title']">장기렌터카</div>
                    </div>
                    <div class="flex-box__cell--small-regular">
                      <RoundStatus
                        theme="quattuordenary"
                        :classNames="{ wrap: 'display-block' }"
                        >추천</RoundStatus
                      >
                    </div>
                  </div>
                </div>
                <button type="button" :class="$style['icon-list__view-button']">
                  <span class="for-a11y">상세보기</span>
                </button>
              </div>
            </li>

            <li :class="$style['icon-list__item']">
              <div
                :class="[
                  $style['icon-list__block'],
                  $style['icon-list__block--product'],
                ]"
              >
                <div :class="$style['icon-list__icon']">
                  <ProductIcon
                    :classNames="{ wrap: $style['icon-list__icon-image'] }"
                    src="/images/product-icon/auto-lease.png"
                  />
                </div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__sup']">
                    빠른견적! 저렴한 견적!
                  </div>
                  <div :class="$style['icon-list__title']">오토리스</div>
                </div>
                <button type="button" :class="$style['icon-list__view-button']">
                  <span class="for-a11y">상세보기</span>
                </button>
              </div>
            </li>

            <li :class="$style['icon-list__item']">
              <div
                :class="[
                  $style['icon-list__block'],
                  $style['icon-list__block--product'],
                ]"
              >
                <div :class="$style['icon-list__icon']">
                  <ProductIcon
                    :classNames="{ wrap: $style['icon-list__icon-image'] }"
                    src="/images/product-icon/car-used.png"
                  />
                </div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__sup']">
                    스마트한 중고차 구입자금 대출
                  </div>
                  <div :class="$style['icon-list__title']">중고차오토론</div>
                </div>
                <button type="button" :class="$style['icon-list__view-button']">
                  <span class="for-a11y">상세보기</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <BasicHr className="row-margin-container-medium" />

      <section>
        <h3 class="text-title-2 font-weight-bold row-margin-contents">
          개인대출
        </h3>

        <div :class="$style['icon-list']">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <div
                :class="[
                  $style['icon-list__block'],
                  $style['icon-list__block--product'],
                ]"
              >
                <div :class="$style['icon-list__icon']">
                  <ProductIcon
                    :classNames="{ wrap: $style['icon-list__icon-image'] }"
                    src="/images/product-icon/pig.png"
                  />
                </div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__sup']">
                    소득이 있다면 쉽고 빠른 신용대출
                  </div>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <div :class="$style['icon-list__title']">
                        e하나신용대출
                      </div>
                    </div>
                    <div class="flex-box__cell--small-regular">
                      <RoundStatus
                        theme="quattuordenary"
                        :classNames="{ wrap: 'display-block' }"
                        >추천</RoundStatus
                      >
                    </div>
                  </div>
                  <div
                    :class="[
                      $style['icon-list__text'],
                      $style['icon-list__text--secondary'],
                    ]"
                  >
                    최대 1억원
                  </div>
                </div>
                <button type="button" :class="$style['icon-list__view-button']">
                  <span class="for-a11y">상세보기</span>
                </button>
              </div>
            </li>

            <li :class="$style['icon-list__item']">
              <div
                :class="[
                  $style['icon-list__block'],
                  $style['icon-list__block--product'],
                ]"
              >
                <div :class="$style['icon-list__icon']">
                  <ProductIcon
                    :classNames="{ wrap: $style['icon-list__icon-image'] }"
                    src="/images/product-icon/building.png"
                  />
                </div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__sup']">
                    아파트 소유자를 위한 대출
                  </div>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <div :class="$style['icon-list__title']">
                        행복아파트론
                      </div>
                    </div>
                  </div>
                  <div
                    :class="[
                      $style['icon-list__text'],
                      $style['icon-list__text--secondary'],
                    ]"
                  >
                    최대 2억원
                  </div>
                </div>
                <button type="button" :class="$style['icon-list__view-button']">
                  <span class="for-a11y">상세보기</span>
                </button>
              </div>
            </li>

            <li :class="$style['icon-list__item']">
              <div
                :class="[
                  $style['icon-list__block'],
                  $style['icon-list__block--product'],
                ]"
              >
                <div :class="$style['icon-list__icon']">
                  <ProductIcon
                    :classNames="{ wrap: $style['icon-list__icon-image'] }"
                    src="/images/product-icon/car-security.png"
                  />
                </div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__sup']">
                    내 차만 있다면 특별한 한도·금리
                  </div>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <div :class="$style['icon-list__title']">
                        원큐자동차담보대출
                      </div>
                    </div>
                  </div>
                  <div
                    :class="[
                      $style['icon-list__text'],
                      $style['icon-list__text--secondary'],
                    ]"
                  >
                    최대 1억원
                  </div>
                </div>
                <button type="button" :class="$style['icon-list__view-button']">
                  <span class="for-a11y">상세보기</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M01_p001.scss';
</style>
