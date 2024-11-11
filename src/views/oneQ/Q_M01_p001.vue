<script>
// Q_M01_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';

import PageContents from '@/components/ui/layout/PageContents.vue';
import ProductIcon from '@/components/ui/imageData/ProductIcon.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import IconPassbook from '@/assets/images/illustration/img-passbook.svg?component';

import LogoHyundai from '@/assets/images/etc-logo/logo_hyundai.svg?component';
import LogoKia from '@/assets/images/etc-logo/logo_kia.svg?component';
import LogoBenz from '@/assets/images/etc-logo/logo_benz.svg?component';
import LogoBMW from '@/assets/images/etc-logo/logo_bmw.svg?component';
import LogoPorsche from '@/assets/images/etc-logo/logo_porsche.svg?component';
import LogoKGM from '@/assets/images/etc-logo/logo_kgm.svg?component';
import LogoLexus from '@/assets/images/etc-logo/logo_lexus.svg?component';
import LogoVolks from '@/assets/images/etc-logo/logo_volkswagen.svg?component';
import LogoChevrolet from '@/assets/images/etc-logo/logo_chevrolet.svg?component';
import LogoAudi from '@/assets/images/etc-logo/logo_audi.svg?component';
import LogoVolvo from '@/assets/images/etc-logo/logo_volvo.svg?component';

import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';

// import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
// import PageMainText from '@/components/ui/text/PageMainText.vue';
// import BasicHr from '@/components/ui/common/BasicHr.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
// import IconLightning from '@/assets/images/icon/lightning.svg?component';

export default {
  components: {
    PageContents,
    ProductIcon,
    RoundStatus,
    IconPassbook,
    BasicButton,
    BasicBox,
    ButtonList,
    ButtonListItem,
    CarThumb,

    LogoHyundai,
    LogoKia,
    LogoBenz,
    LogoBMW,
    LogoPorsche,
    LogoKGM,
    LogoLexus,
    LogoVolks,
    LogoChevrolet,
    LogoAudi,
    LogoVolvo,
    // PageTextGroup,
    // PageMainText,
    // BasicHr,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    // IconLightning,
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
    <div :class="$style['bg']">
      <!-- Case : 진행중인 계약/ 우수고객 추가 대출 대상인 경우 노출 -->
      <div class="row-margin-contents-small">
        <ul :class="$style['logs']">
          <li :class="$style['logs__item']">
            <div
              :class="[$style['logs__block'], $style['logs__block--fourth']]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <!-- Case : 진행중인 계약 있는 경우 -->
                  <!-- <h3 class="text-body-3 font-weight-medium color-white">
                    <span class="text-body-1 color-white"
                      >진행 중인 계약이 있습니다.</span
                    ><br />
                    <span class="opacity-60">이어서 진행하시겠습니까?</span>
                  </h3> -->
                  <!-- // Case : 진행중인 계약 있는 경우 -->

                  <!-- Case : 우수고객 추가 대출 대상인 경우 -->
                  <h3 class="text-body-3 font-weight-medium color-white">
                    <span class="text-body-1"
                      >우수고객 추가대출 대상 고객입니다.</span
                    ><br />
                    <span class="opacity-60">한도 확인해 보세요</span>
                  </h3>
                  <!-- // Case : 우수고객 추가 대출 대상인 경우 -->
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link-white']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
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
          </li>
        </ul>
      </div>
      <!-- // Case : 진행중인 계약/ 우수고객 추가 대출 대상인 경우 노출 -->
      <section :class="$style['green__box']">
        <div :class="$style['green__box__flex']">
          <span :class="[$style['green__box__title'], 'font-weight-medium']"
            >신용등급 영향 NO!</span
          >
          <span :class="$style['green__box__img']">
            <IconPassbook />
          </span>
          <p class="row-margin-none text-title-2 color-white font-weight-bold">
            내 계좌로 바로 꽂히는<br />
            하나캐피탈 신용대출
          </p>

          <BasicButton
            size="small"
            :class="[$style['green__box__button'], 'font-weight-regular']"
            >바로 대출받기</BasicButton
          >
        </div>
      </section>

      <BasicBox
        theme="sixteenth"
        :class="[$style['logo__box'], 'row-margin-contents-small']"
      >
        <p class="text-body-4 color-gray-tertiary">리스/렌터카</p>
        <h3 class="text-title-2 font-weight-bold row-margin-item-small">
          국산차/수입차 셀프 견적내기
        </h3>

        <div :class="$style['logo__loop']">
          <ul :class="$style['logo__carsBrand']">
            <li :class="$style['logo__carsItem']">
              <LogoHyundai />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoKia />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoBenz />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoBMW />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoPorsche />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoKGM />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoLexus />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoVolks />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoChevrolet />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoAudi />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoVolvo />
            </li>
          </ul>
          <ul :class="$style['logo__carsBrand']">
            <li :class="$style['logo__carsItem']">
              <LogoHyundai />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoKia />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoBenz />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoBMW />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoPorsche />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoKGM />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoLexus />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoVolks />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoChevrolet />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoAudi />
            </li>
            <li :class="$style['logo__carsItem']">
              <LogoVolvo />
            </li>
          </ul>
        </div>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="small" theme="quaternary" class="text-body-3"
              >상담원 연결</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="small" class="text-body-3"
              >셀프 견적내기</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
      </BasicBox>

      <BasicBox theme="sixteenth" class="row-margin-contents-small">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell flex-box__cell--small flex-1">
            <p class="text-body-4 color-gray-tertiary">장기렌터카</p>
            <h3 class="text-title-2 font-weight-bold row-margin-item-small">
              즉시 출고 가능
            </h3>
          </div>
        </div>
        <ul :class="$style['hot-deal-list']">
          <li v-for="i in 3" :key="i" :class="$style['hot-deal-list__item']">
            <RouterLink to="" :class="$style['hot-deal-list__block']">
              <span class="flex-box">
                <span class="flex-box__cell">
                  <CarThumb size="small" src="/images/_dummy/car-thumb.png" />
                </span>
                <span class="flex-box__cell flex-box__cell--large flex-1">
                  <span class="display-block text-body-4 color-gray ellipsis"
                    >현대</span
                  >
                  <span
                    class="display-block text-body-1 font-weight-medium ellipsis"
                    >아이오닉6</span
                  >
                </span>
                <span class="flex-box__cell flex-box__cell--medium">
                  <BasicButton size="mini" theme="quaternary" tagName="span">
                    옵션보기
                  </BasicButton>
                </span>
              </span>
            </RouterLink>
          </li>
        </ul>
        <BasicButton
          :line="true"
          size="small"
          theme="quaternary"
          class="row-margin-contents-small"
          >차량 더보기</BasicButton
        >
      </BasicBox>
    </div>

    <div class="padding-top-40">
      <h2 class="row-margin-contents text-title-2">하나캐피탈 상품목록</h2>

      <section>
        <h3 class="text-body-2 font-weight-bold row-margin-contents">
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
                  <div
                    :class="[$style['icon-list__sup'], 'color-gray-tertiary']"
                  >
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
                      'font-weight-bold',
                      'color-green',
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
                  <div
                    :class="[$style['icon-list__sup'], 'color-gray-tertiary']"
                  >
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
                      'font-weight-bold',
                      'color-green',
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
                  <div
                    :class="[$style['icon-list__sup'], 'color-gray-tertiary']"
                  >
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
                      'font-weight-bold',
                      'color-green',
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

      <div className="row-margin-container-medium" />

      <section>
        <h3 class="text-body-2 font-weight-bold row-margin-contents">자동차</h3>

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
                  <div
                    :class="[$style['icon-list__sup'], 'color-gray-tertiary']"
                  >
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
                  <div
                    :class="[$style['icon-list__sup'], 'color-gray-tertiary']"
                  >
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
                  <div
                    :class="[$style['icon-list__sup'], 'color-gray-tertiary']"
                  >
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
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M01_p001.scss';
</style>
