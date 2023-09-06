<script>
// Main_M09_p001
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import PinButton from '@/components/ui/button/PinButton.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import SlideScroll from '@/components/ui/section/SlideScroll.vue';
import SlideScrollItem from '@/components/ui/section/SlideScrollItem.vue';

import IconCarRegistration from '@/assets/images/icon/car-registration.svg?component';
import IconRealEstateRegistration from '@/assets/images/icon/real-estate-registration.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    IllustObject,
    BasicHr,
    BasicBox,
    CarThumb,
    RoundStatus,
    PinButton,
    UnitText,
    SlideScroll,
    SlideScrollItem,

    IconCarRegistration,
    IconRealEstateRegistration,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      productsSlider: null,
      productsAccordionAnimate: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '부동산/자동차 시세');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        내 차, 저 아파트 얼마일까?<br />
        <strong>시세 알아보기</strong>
      </PageMainText>
    </PageTextGroup>

    <!-- Case : 시세등록 전 -->
    <div class="contents-wrap">
      <IllustObject type="search" />

      <BasicHr
        theme="quaternary"
        type="contents"
        className="row-margin-container"
      />

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']">
                <IconCarRegistration />
              </span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']"
                  >내 차 시세 등록하기</span
                >
              </span>
            </button>
          </li>
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']">
                <IconRealEstateRegistration />
              </span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']"
                  >부동산 시세 등록하기</span
                >
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-- // Case : 시세등록 전 -->

    <!-- Case : 시세등록 후 -->
    <div>
      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">내 차 시세</h3>
        <SlideScroll>
          <SlideScrollItem v-for="i in 3" :key="i">
            <BasicBox theme="duodenary">
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell">
                  <PinButton :active="true" />
                </div>
                <div class="flex-box__cell flex-box__cell--small flex-1">
                  <div class="inline-wrap align-right">
                    <RoundStatus :classNames="{ wrap: 'text-body-5' }">
                      2022.09.03 기준
                    </RoundStatus>
                  </div>
                </div>
              </div>

              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div class="text-body-1 font-weight-medium color-black">
                    쏘나타
                  </div>
                  <div class="text-body-4 color-gray row-margin-small">
                    뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--medium">
                  <CarThumb src="/images/_dummy/car-thumb.png" />
                </div>
              </div>

              <div class="row-margin-item">
                <UnitText rightUnit="원">17,000,000</UnitText>
              </div>
            </BasicBox>
          </SlideScrollItem>
        </SlideScroll>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">부동산 시세</h3>
        <SlideScroll>
          <SlideScrollItem v-for="i in 3" :key="i">
            <BasicBox theme="duodenary">
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell">
                  <PinButton :active="true" />
                </div>
                <div class="flex-box__cell flex-box__cell--small flex-1">
                  <div class="inline-wrap align-right">
                    <RoundStatus :classNames="{ wrap: 'text-body-5' }">
                      2022.09.03 기준
                    </RoundStatus>
                  </div>
                </div>
              </div>

              <div class="text-body-1 font-weight-medium color-black">
                마장동 세림아파트
              </div>

              <div class="row-margin-item">
                <UnitText rightUnit="원">230,000,000</UnitText>
              </div>
            </BasicBox>
          </SlideScrollItem>
        </SlideScroll>
      </section>

      <div class="row-margin-container-medium">
        <div :class="$style['icon-list']">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <button type="button" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']">
                  <IconCarRegistration />
                </span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']"
                    >내 차 시세 등록하기</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-list__item']">
              <button type="button" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']">
                  <IconRealEstateRegistration />
                </span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']"
                    >부동산 시세 등록하기</span
                  >
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- // Case : 시세등록 후 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/Main_M09_p001.scss';
</style>
