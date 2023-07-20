<script>
// Main_M09_p001
import { reactive, onMounted, onUnmounted } from 'vue';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import PinButton from '@/components/ui/button/PinButton.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

import IllustObject from '@/components/ui/common/IllustObject.vue';
import IconCarRegistration from '@/assets/images/icon/car-registration.svg?component';
import IconRealEstateRegistration from '@/assets/images/icon/real-estate-registration.svg?component';

export default {
  components: {
    Swiper,
    SwiperSlide,
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicHr,
    BasicBox,
    CarThumb,
    RoundStatus,
    PinButton,
    UnitText,

    IllustObject,
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
      modules: [A11y],
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

    <!-- case : 시세등록 전 -->
    <IllustObject type="search" />

    <BasicHr
      theme="quaternary"
      type="contents"
      className="row-margin-container"
    />
    <!-- //case : 시세등록 전 -->
    <!-- case : 시세등록 후 -->
    <section>
      <h3 class="text-title-2 row-margin-contents">부동산시세</h3>
      <div
        :class="[
          $style['products'],
          {
            [$style['products--accordion-animate']]:
              state.productsAccordionAnimate,
          },
        ]"
      >
        <Swiper
          :modules="modules"
          :autoHeight="true"
          :observeSlideChildren="true"
          @swiper="
            (swiper) => {
              state.productsSlider = swiper;
            }
          "
        >
          <!-- item -->
          <SwiperSlide v-for="i in 3" :key="i">
            <div :class="$style['estimate-list']">
              <BasicBox>
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    <PinButton :active="true" />
                  </div>
                  <div class="flex-box__cell">
                    <RoundStatus
                      :classNames="{
                        wrap: $style['status-box'],
                      }"
                    >
                      2022.09.03 기준
                    </RoundStatus>
                  </div>
                </div>

                <div class="flex-box row-margin-item">
                  <div class="flex-box__cell flex-1">
                    <div class="text-body-1 color-black">쏘나타</div>
                    <div class="text-body-4 color-gray row-margin-small">
                      뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                    </div>
                  </div>
                  <div
                    class="flex-box__cell flex-box__cell--medium row-margin-item-regular"
                  >
                    <CarThumb src="/images/_dummy/car-thumb.png" />
                  </div>
                </div>

                <UnitText rightUnit="원" align="left" verticalAlign="center">
                  16,200,000
                </UnitText>
              </BasicBox>
            </div>
          </SwiperSlide>
          <!-- // item -->
        </Swiper>
      </div>
    </section>
    <section class="row-margin-container-medium">
      <h3 class="text-title-2 row-margin-contents">부동산시세</h3>
      <div
        :class="[
          $style['products'],
          {
            [$style['products--accordion-animate']]:
              state.productsAccordionAnimate,
          },
        ]"
      >
        <Swiper
          :modules="modules"
          :autoHeight="true"
          :observeSlideChildren="true"
          @swiper="
            (swiper) => {
              state.productsSlider = swiper;
            }
          "
        >
          <!-- item -->
          <SwiperSlide v-for="i in 3" :key="i">
            <div :class="$style['estimate-list']">
              <BasicBox>
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    <PinButton :active="true" />
                  </div>
                  <div class="flex-box__cell">
                    <RoundStatus
                      :classNames="{
                        wrap: $style['status-box'],
                      }"
                    >
                      2022.09.03 기준
                    </RoundStatus>
                  </div>
                </div>

                <div class="text-body-1 color-black row-margin-item">
                  쏘나타
                </div>

                <UnitText rightUnit="원" align="left" verticalAlign="center">
                  16,200,000
                </UnitText>
              </BasicBox>
            </div>
          </SwiperSlide>
          <!-- // item -->
        </Swiper>
      </div>
    </section>
    <!-- //case : 시세등록 후 -->

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
            <span :class="$style['icon-list__icon']"
              ><IconRealEstateRegistration
            /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']"
                >부동산 시세 등록하기</span
              >
            </span>
          </button>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/Main_M09_p001.scss';
</style>
