<script>
// Q_M01_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ProductIcon from '@/components/ui/imageData/ProductIcon.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconCertification from '@/assets/images/icon/certification.svg?component';
import IconMainFour from '@/assets/images/icon/main-4.svg?component';
import IconMainFive from '@/assets/images/icon/main-5.svg?component';
import IconMyInfo from '@/assets/images/icon/my-info.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    ProductIcon,
    RoundStatus,
    BasicHr,
    BasicBox,
    UnitText,
    TextButton,
    IconCertification,
    IconMainFour,
    IconMainFive,
    IconMyInfo,
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
    <PageTextGroup>
      <PageMainText>
        김하나님이<br />
        보유하신 계약은 총 <span class="color-green">5</span>건 입니다
      </PageMainText>
    </PageTextGroup>

    <!-- Case : 30건 이상일 경우 미노출 -->
    <BasicBox theme="fourteenth">
      <div class="align-center">
        <div>
          <UnitText
            size="small-large"
            rightSecondaryUnit="원"
            align="center"
            verticalAlign="center"
            >400,000</UnitText
          >
          <div class="text-body-3 color-gray-tertiary">당월 결제예정금액</div>
        </div>
      </div>
    </BasicBox>
    <!-- // Case : 30건 이상일 경우 미노출 -->

    <!-- Case : 30건 이상일 경우 -->
    <BasicBox theme="fourteenth">
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell flex-1">
          <div class="text-body-3 color-gray-tertiary">당월 결제예정금액</div>
        </div>
        <div class="flex-box__cell">
          <div class="inline-wrap">
            <TextButton
              :classNames="{ wrap: 'text-body-4 color-gray' }"
              :underline="true"
              >자세히 보기</TextButton
            >
          </div>
        </div>
      </div>
    </BasicBox>
    <!-- // Case : 30건 이상일 경우 -->

    <div :class="$style['icon-column-list']">
      <ul :class="$style['icon-column-list__list']">
        <li :class="$style['icon-column-list__item']">
          <RouterLink to="" :class="$style['icon-column-list__block']">
            <span :class="$style['icon-column-list__icon']"
              ><IconCertification
            /></span>
            <span :class="$style['icon-column-list__content']">
              <span :class="$style['icon-column-list__title']">증명서</span>
            </span>
          </RouterLink>
        </li>
        <li :class="$style['icon-column-list__item']">
          <RouterLink to="" :class="$style['icon-column-list__block']">
            <span :class="$style['icon-column-list__icon']"
              ><IconMainFour
            /></span>
            <span :class="$style['icon-column-list__content']">
              <span :class="$style['icon-column-list__title']">계좌변경</span>
            </span>
          </RouterLink>
        </li>
        <li :class="$style['icon-column-list__item']">
          <RouterLink to="" :class="$style['icon-column-list__block']">
            <span :class="$style['icon-column-list__icon']"
              ><IconMainFive
            /></span>
            <span :class="$style['icon-column-list__content']">
              <span :class="$style['icon-column-list__title']">중도상환</span>
            </span>
          </RouterLink>
        </li>
        <li :class="$style['icon-column-list__item']">
          <RouterLink to="" :class="$style['icon-column-list__block']">
            <span :class="$style['icon-column-list__icon']"
              ><IconMyInfo
            /></span>
            <span :class="$style['icon-column-list__content']">
              <span :class="$style['icon-column-list__title']">나의정보</span>
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>

    <BasicHr className="row-margin-container-medium" />

    <div>
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
                  <button
                    type="button"
                    :class="$style['icon-list__tag-button']"
                  >
                    <RoundStatus theme="undenary">
                      지금 가입하면 최대 1만원 지원!
                    </RoundStatus>
                  </button>
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
                  <button
                    type="button"
                    :class="$style['icon-list__tag-button']"
                  >
                    <RoundStatus theme="undenary">
                      지금 가입하면 최대 1만원 지원!
                    </RoundStatus>
                  </button>
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
@import '@/assets/scss/views/oneQ/Q_M01_p002.scss';
</style>
