<script>
// Main_M01_p001
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLoadingStore } from '@/stores/ui/loading';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BubbleProgress from '@/components/ui/progress/BubbleProgress.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import SlideImageBanner from '@/components/ui/banner/SlideImageBanner.vue';
import SlideImageBannerBlock from '@/components/ui/banner/SlideImageBannerBlock.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';

import IconAdd from '@/assets/images/icon/add.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';
import IconLinkSmall from '@/assets/images/icon/link-small.svg?component';
import IconDocumentSmall from '@/assets/images/icon/document-small.svg?component';
import IconCapitalSmall from '@/assets/images/icon/img-capital-small.svg?component';
import IconTell from '@/assets/images/icon/tell.svg?component';

const BASE_URL = import.meta.env.BASE_URL;

export default {
  components: {
    RouterLink,
    Swiper,
    SwiperSlide,
    PageContents,
    PageTextGroup,
    PageMainText,
    UnitText,
    RoundStatus,
    BubbleProgress,
    TextButton,
    CarThumb,
    BasicHr,
    BasicButton,
    SlideImageBanner,
    SlideImageBannerBlock,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,

    IconAdd,
    IconLink,
    IconLinkSmall,
    IconDocumentSmall,
    IconCapitalSmall,
    IconTell,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        loading: useUiLoadingStore(),
        header: useUiHeaderStore(),
      },
    };

    // DD : 아코디언 열때 Ajax 통신시 예시 : start
    const testAjax = () => {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1000)
      );
    };

    const testAccordionToggle = (props, call) => {
      const { opened, open, close } = props;

      if (!opened) {
        const result = call();

        store.ui.loading.show();

        result.then(() => {
          open();
          store.ui.loading.hide();
        });
      } else {
        close();
      }
    };
    // DD : 아코디언 열때 Ajax 통신시 예시 : end

    onMounted(() => {
      store.ui.header.setTitle(() => ' ');
      store.ui.header.setUseLeftLogo(() => true);
      store.ui.header.setUseAppButton(() => true);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setUseLeftLogo();
      store.ui.header.setUseAppButton();
    });

    return {
      BASE_URL,
      modules: [Pagination, A11y],
      testAjax,
      testAccordionToggle,
    };
  },
};
</script>

<template>
  <PageContents
    :classNames="{
      body: $style['web-body'],
    }"
  >
    <PageTextGroup>
      <PageMainText>
        <!-- Case : 로그인 전 노출 -->
        <span class="flex-box">
          <span class="flex-box__cell flex-1">
            <span class="display-block font-weight-light">안녕하세요</span>
          </span>
          <span class="flex-box__cell">
            <TextButton
              :block="true"
              :underline="true"
              :classNames="{
                wrap: 'text-body-4 color-gray',
              }"
            >
              로그인
            </TextButton>
          </span>
        </span>
        <!-- // Case : 로그인 전 노출 -->

        <!-- Case : 로그인 후 노출 -->
        <span class="display-block font-weight-light">김하나님,</span>
        <!-- // Case : 로그인 후 노출 -->

        <button type="button" :class="$style['top-link']">
          오늘의 운세를 확인해 보세요!<IconLinkSmall
            :class="$style['top-link__icon']"
          />
        </button>

        <!-- Case : 인앱메시지 '추가대출' -->
        <button type="button" :class="$style['top-link']">
          <span class="color-green">우수고객 추가 대출</span>
          대상자예요<IconLinkSmall :class="$style['top-link__icon']" />
        </button>
        <!-- // Case : 인앱메시지 '추가대출' -->

        <!-- Case : 인앱메시지 '금융상품' -->
        <button type="button" :class="$style['top-link']">
          <span class="color-green">만기 예정인 금융상품</span>이
          있어요<IconLinkSmall :class="$style['top-link__icon']" />
        </button>
        <!-- // Case : 인앱메시지 '금융상품' -->
      </PageMainText>
    </PageTextGroup>

    <div>
      <!-- 약정 중 상품 -->
      <div :class="$style['progress']">
        <UiAccordion
          tagName="div"
          :classNames="{ wrap: $style['progress__list'] }"
        >
          <UiAccordionItem
            tagName="section"
            :classNames="{ item: $style['progress__item'] }"
            v-slot="accordionItemSlotProps"
          >
            <div :class="$style['progress__head']">
              <!-- Case : 진행 중 상품일 경우 노출 -->
              <h2 :class="$style['progress__title']">약정 중 상품</h2>
              <!-- // Case : 진행 중 상품일 경우 노출 -->

              <!-- Case : 거래 상품일 경우 노출 -->
              <h2 :class="$style['progress__title']">거래 중 상품</h2>
              <!-- // Case : 거래 상품일 경우 노출 -->

              <p :class="$style['progress__count']">
                <span :class="$style['progress__count-num']">99</span>
                <span :class="$style['progress__count-unit']">건</span>
              </p>
              <div :class="$style['progress__arrow']">
                <UiAccordionOpener
                  :toggleAction="false"
                  :classNames="{ button: $style['progress__opener'] }"
                  @click="testAccordionToggle(accordionItemSlotProps, testAjax)"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <section :class="$style['progress__contents']">
                <!-- Case : 진행 중인 상품 -->
                <div>
                  <div :class="$style['progress__contents-top']">
                    <div :class="$style['progress__contents-head']">
                      <h3 :class="$style['progress__contents-title']">
                        상품명 노출 상품명 노출
                      </h3>
                      <!-- Case : 2건 이상일 경우 노출 -->
                      <div :class="$style['progress__contents-right']">
                        <TextButton
                          :block="true"
                          :iconFillAll="true"
                          :classNames="{
                            wrap: 'text-body-4 color-gray',
                          }"
                        >
                          전체보기
                          <template v-slot:rightIcon>
                            <IconAdd />
                          </template>
                        </TextButton>
                      </div>
                      <!-- // Case : 2건 이상일 경우 노출 -->
                    </div>
                    <p :class="$style['progress__contents-date']">
                      22.09.19 기준
                    </p>
                  </div>

                  <dl :class="$style['progress__info']">
                    <!-- Case : 신용대출 -->
                    <div :class="$style['progress__info-item']">
                      <dt :class="$style['progress__info-key']">최대한도</dt>
                      <dd :class="$style['progress__info-val']">
                        <div class="flex-box justify-conten-end">
                          <div class="flex-box__cell">
                            <UnitText
                              rightSecondaryUnit="억"
                              align="right"
                              verticalAlign="center"
                              size="medium"
                            >
                              32
                            </UnitText>
                          </div>
                          <div class="flex-box__cell--small">
                            <UnitText
                              rightSecondaryUnit="만원"
                              align="right"
                              verticalAlign="center"
                              size="medium"
                            >
                              7,000
                            </UnitText>
                          </div>
                        </div>
                      </dd>
                    </div>
                    <div :class="$style['progress__info-item']">
                      <dt :class="$style['progress__info-key']">금리</dt>
                      <dd :class="$style['progress__info-val']">
                        <UnitText
                          rightSecondaryUnit="%"
                          align="right"
                          verticalAlign="center"
                          size="medium"
                          >99.9</UnitText
                        >
                      </dd>
                    </div>
                    <!-- // Case : 신용대출 -->

                    <!-- Case : 일반할부금융, 설비리스 -->
                    <div :class="$style['progress__info-item']">
                      <dt :class="$style['progress__info-key']">신청금액</dt>
                      <dd :class="$style['progress__info-val']">
                        <div class="flex-box justify-conten-end">
                          <div class="flex-box__cell">
                            <UnitText
                              rightSecondaryUnit="억"
                              align="right"
                              verticalAlign="center"
                              size="medium"
                            >
                              32
                            </UnitText>
                          </div>
                          <div class="flex-box__cell--small">
                            <UnitText
                              rightSecondaryUnit="만원"
                              align="right"
                              verticalAlign="center"
                              size="medium"
                            >
                              7,000
                            </UnitText>
                          </div>
                        </div>
                      </dd>
                    </div>
                    <div :class="$style['progress__info-item']">
                      <dt :class="$style['progress__info-key']">금리</dt>
                      <dd :class="$style['progress__info-val']">
                        <UnitText
                          rightSecondaryUnit="%"
                          align="right"
                          verticalAlign="center"
                          size="medium"
                          >99.9</UnitText
                        >
                      </dd>
                    </div>
                    <!-- // Case : 일반할부금융, 설비리스 -->

                    <!-- Case : 자동차(리스/렌트 외) -->
                    <div :class="$style['progress__info-item']">
                      <dt :class="$style['progress__info-key']">신청금액</dt>
                      <dd :class="$style['progress__info-val']">
                        <div class="flex-box justify-conten-end">
                          <div class="flex-box__cell">
                            <UnitText
                              rightSecondaryUnit="억"
                              align="right"
                              verticalAlign="center"
                              size="medium"
                            >
                              32
                            </UnitText>
                          </div>
                          <div class="flex-box__cell--small">
                            <UnitText
                              rightSecondaryUnit="만원"
                              align="right"
                              verticalAlign="center"
                              size="medium"
                            >
                              7,000
                            </UnitText>
                          </div>
                        </div>
                      </dd>
                    </div>
                    <!-- // Case : 자동차(리스/렌트 외) -->

                    <!-- Case : 리스/렌트 -->
                    <div :class="$style['progress__info-item']">
                      <dt :class="$style['progress__info-key']">신청차량</dt>
                      <dd :class="$style['progress__info-val']">
                        제네시스 GV70
                      </dd>
                    </div>
                    <!-- // Case : 리스/렌트 -->
                  </dl>

                  <div :class="$style['progress__button']">
                    <BasicButton size="small" :line="true"
                      >약정 이어하기</BasicButton
                    >
                  </div>
                </div>
                <!-- // Case : 진행 중인 상품 -->

                <!-- Case : 거래 상품 -->
                <div>
                  <div :class="$style['progress__contents-top']">
                    <div :class="$style['progress__contents-head']">
                      <div :class="$style['progress__contents-title']">
                        <div class="flex-box">
                          <div class="flex-box__cell">상품명 노출</div>
                          <div class="flex-box__cell flex-box__cell--small">
                            <span
                              class="text-body-5 color-gray font-weight-regular"
                            >
                              외 0건
                            </span>
                          </div>
                        </div>
                      </div>
                      <!-- Case : 2건 이상일 경우 노출 -->
                      <div :class="$style['progress__contents-right']">
                        <TextButton
                          :block="true"
                          :iconFillAll="true"
                          :classNames="{
                            wrap: 'text-body-4 color-gray',
                          }"
                        >
                          전체보기
                          <template v-slot:rightIcon>
                            <IconAdd />
                          </template>
                        </TextButton>
                      </div>
                      <!-- // Case : 2건 이상일 경우 노출 -->
                    </div>
                  </div>

                  <div :class="$style['progress__amount']">
                    <!-- Case : 1건일 경우 노출 -->
                    <div :class="$style['progress__amount-d-day']">
                      <RoundStatus theme="secondary">D-3</RoundStatus>
                    </div>
                    <!-- // Case : 1건일 경우 노출 -->

                    <!-- Case : 결제일일 경우 노출 -->
                    <div :class="$style['progress__amount-d-day']">
                      <RoundStatus theme="secondary">D-DAY</RoundStatus>
                    </div>
                    <!-- // Case : 결제일일 경우 노출-->

                    <!-- Case : 연체중일 경우 노출 -->
                    <div :class="$style['progress__amount-d-day']">
                      <RoundStatus theme="nonary">연체</RoundStatus>
                    </div>
                    <!-- // Case : 연체중일 경우 노출-->

                    <!-- Case : 종료일 경우 노출 -->
                    <div :class="$style['progress__amount-d-day']">
                      <RoundStatus>종료</RoundStatus>
                    </div>
                    <!-- // Case : 종료일 경우 노출-->

                    <dl :class="$style['progress__amount-block']">
                      <!-- Case : 1건일 경우 노출 -->
                      <dt :class="$style['progress__amount-key']">
                        10.10 결제예정금액
                      </dt>
                      <!-- // Case : 1건일 경우 노출 -->

                      <!-- Case : 2건 이상일 경우 노출 -->
                      <dt :class="$style['progress__amount-key']">
                        이번달 총 결제금액
                      </dt>
                      <!-- // Case : 2건 이상일 경우 노출 -->

                      <dd :class="$style['progress__amount-val']">
                        <UnitText
                          rightSecondaryUnit="원"
                          align="center"
                          verticalAlign="center"
                          size="large"
                          >99,999,999</UnitText
                        >
                      </dd>
                    </dl>

                    <!-- Case : 1건일 경우 노출 -->
                    <div :class="$style['progress__amount-bar']">
                      <BubbleProgress
                        :total="12"
                        :current="4"
                        :label="
                          (total, current) => {
                            return `총 ${total}회 중 ${current}회차`;
                          }
                        "
                        :text="
                          (total) => {
                            return `${total}회`;
                          }
                        "
                        :bubble="
                          (total, current) => {
                            return `${current}회차`;
                          }
                        "
                      />
                    </div>
                    <!-- // Case : 1건일 경우 노출 -->
                  </div>

                  <!-- Case : 팩토링은 버튼 미노출 -->
                  <div :class="$style['progress__recommend']">
                    <!-- Case : 모든 상품(렌터카 외) -->
                    <div :class="$style['buttons']">
                      <div :class="$style['buttons__item']">
                        <button type="button" :class="$style['button']">
                          증명서 조회/발급
                        </button>
                      </div>
                      <div :class="$style['buttons__hr']"></div>
                      <div :class="$style['buttons__item']">
                        <button type="button" :class="$style['button']">
                          중도상환신청
                        </button>
                      </div>
                    </div>
                    <!-- // Case : 모든 상품(렌터카 외) -->

                    <!-- Case : 렌터카 -->
                    <div :class="$style['buttons']">
                      <div :class="$style['buttons__item']">
                        <button type="button" :class="$style['button']">
                          지정운전자
                        </button>
                      </div>
                      <div :class="$style['buttons__hr']"></div>
                      <div :class="$style['buttons__item']">
                        <button type="button" :class="$style['button']">
                          증명서 조회/발급
                        </button>
                      </div>
                    </div>
                    <!-- // Case : 렌터카 -->

                    <!-- Case : 스탁론 -->
                    <div :class="$style['buttons']">
                      <div :class="$style['buttons__item']">
                        <button type="button" :class="$style['button']">
                          연장하기
                        </button>
                      </div>
                      <div :class="$style['buttons__hr']"></div>
                      <div :class="$style['buttons__item']">
                        <button type="button" :class="$style['button']">
                          증명서 조회/발급
                        </button>
                      </div>
                    </div>
                    <!-- // Case : 스탁론 -->

                    <!-- Case : 렌터카, 오토리스(운용/금융) -->
                    <div :class="$style['buttons']">
                      <div :class="$style['buttons__item']">
                        <button type="button" :class="$style['button']">
                          만기후처리
                        </button>
                      </div>
                      <div :class="$style['buttons__hr']"></div>
                      <div :class="$style['buttons__item']">
                        <button type="button" :class="$style['button']">
                          근저당설정 조회/해지
                        </button>
                      </div>
                    </div>
                    <!-- // Case : 렌터카, 오토리스(운용/금융) -->
                  </div>
                  <!-- // Case : 팩토링은 버튼 미노출 -->

                  <!-- Case : 팩토링 -->
                  <div>
                    <div :class="$style['progress__contents-top']">
                      <div :class="$style['progress__contents-head']">
                        <div :class="$style['progress__contents-title']">
                          <div class="flex-box">
                            <div class="flex-box__cell">야나두</div>
                            <div class="flex-box__cell flex-box__cell--small">
                              <span
                                class="text-body-5 color-gray font-weight-regular"
                              >
                                외 0건
                              </span>
                            </div>
                          </div>
                        </div>
                        <!-- Case : 2건 이상일 경우 노출 -->
                        <div :class="$style['progress__contents-right']">
                          <TextButton
                            :block="true"
                            :iconFillAll="true"
                            :classNames="{
                              wrap: 'text-body-4 color-gray',
                            }"
                          >
                            전체보기
                            <template v-slot:rightIcon>
                              <IconAdd />
                            </template>
                          </TextButton>
                        </div>
                        <!-- // Case : 2건 이상일 경우 노출 -->
                      </div>
                    </div>

                    <div :class="$style['progress__amount']">
                      <!-- Case : 1건일 경우 노출 -->
                      <div :class="$style['progress__amount-d-day']">
                        <RoundStatus theme="nonary">D-3</RoundStatus>
                      </div>
                      <!-- // Case : 1건일 경우 노출 -->

                      <dl :class="$style['progress__amount-block']">
                        <dt
                          :class="[
                            $style['progress__amount-key'],
                            'text-title-2',
                            'font-weight-medium',
                            'color-black',
                          ]"
                        >
                          수백당(창원북면점)_3년약정_4+1(마스터태블릿)=5_2000_블랙거치대
                        </dt>
                      </dl>
                    </div>
                  </div>
                  <!-- // Case : 팩토링 -->

                  <!-- Case : 30건 이상인 경우 -->
                  <div>
                    <div :class="$style['progress__contents-top']">
                      <div :class="$style['progress__contents-head']">
                        <div :class="$style['progress__contents-title']">
                          <div class="flex-box">
                            <div class="flex-box__cell">행복아파트론</div>
                            <div class="flex-box__cell flex-box__cell--small">
                              <span
                                class="text-body-5 color-gray font-weight-regular"
                              >
                                외 0건
                              </span>
                            </div>
                          </div>
                        </div>
                        <!-- Case : 2건 이상일 경우 노출 -->
                        <div :class="$style['progress__contents-right']">
                          <TextButton
                            :block="true"
                            :iconFillAll="true"
                            :classNames="{
                              wrap: 'text-body-4 color-gray',
                            }"
                          >
                            전체보기
                            <template v-slot:rightIcon>
                              <IconAdd />
                            </template>
                          </TextButton>
                        </div>
                        <!-- // Case : 2건 이상일 경우 노출 -->
                      </div>
                    </div>

                    <div :class="$style['progress__amount']">
                      <dl :class="$style['progress__amount-block']">
                        <dt
                          :class="[
                            $style['progress__amount-key-block'],
                            'text-title-2',
                            'font-weight-medium',
                            'color-black',
                          ]"
                        >
                          자세히 보기
                        </dt>
                      </dl>
                    </div>
                  </div>
                  <!-- // Case : 30건 이상인 경우 -->
                </div>
                <!-- // Case : 거래 상품 -->
              </section>
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>

        <!-- 서류등록 -->
        <div :class="$style['join']">
          <div :class="$style['join__inner']">
            <div :class="$style['join__icon']"><IconDocumentSmall /></div>
            <div :class="$style['join__title']">
              간편하게 서류를 등록해보세요.
            </div>
            <TextButton
              :block="true"
              :classNames="{
                wrap: [$style['join__link'], 'text-body-4 color-gray'],
              }"
            >
              서류등록
              <template v-slot:rightIcon>
                <IconLink />
              </template>
            </TextButton>
          </div>
        </div>
        <!-- // 서류등록 -->
      </div>
      <!-- // 약정 중 상품 -->

      <!-- 오토리스 / 렌터카 -->
      <section :class="$style['card']">
        <h2 :class="$style['card__title']">오토리스 / 렌터카</h2>
        <p :class="$style['card__text']">
          쉽고 빠른<br />
          자동차 견적조회
        </p>
        <div :class="$style['card__image']">
          <img src="@/assets/images/contents/img-car.png" alt="" />
        </div>
        <div :class="[$style['buttons'], $style['buttons--auto']]">
          <div :class="$style['buttons__item']">
            <button type="button" :class="$style['button']">
              견적 바로가기
            </button>
          </div>
        </div>
      </section>
      <!-- // 오토리스 / 렌터카 -->

      <!-- 즉시출고 핫딜! -->
      <section class="row-margin-container-medium">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell">
            <div :class="$style['hot-deal-icon']"></div>
          </div>
          <div class="flex-box__cell flex-box__cell--small flex-1">
            <h2 class="text-title-2">즉시출고 핫딜!</h2>
          </div>
          <div class="flex-box__cell">
            <TextButton
              :block="true"
              :iconFillAll="true"
              :classNames="{
                wrap: 'text-body-4 color-gray',
              }"
            >
              전체보기
              <template v-slot:rightIcon>
                <IconAdd />
              </template>
            </TextButton>
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
      </section>
      <!-- // 즉시출고 핫딜! -->

      <!-- 중고차 오토론 -->
      <section
        :class="[
          $style['card'],
          $style['card--secondary'],
          'row-margin-contents',
        ]"
      >
        <h2 :class="$style['card__title']">중고차 오토론</h2>
        <p :class="$style['card__text']">
          중고차 구입<br />
          자금 대출
        </p>
        <div :class="$style['card__image']">
          <img src="@/assets/images/contents/img-used-car.png" alt="" />
        </div>
        <div :class="[$style['buttons'], $style['buttons--used-auto']]">
          <div :class="$style['buttons__item']">
            <button type="button" :class="$style['button']">
              상품 바로가기
            </button>
          </div>
        </div>
      </section>
      <!-- // 중고차 오토론 -->

      <!-- 신용대출 -->
      <section :class="[$style['card'], $style['card--tertiary']]">
        <h2 :class="$style['card__title']">신용대출</h2>
        <p :class="$style['card__text']">
          1분이면<br />
          한도조회 OK!
        </p>
        <p :class="$style['card__sub']">신용점수 영향 없음</p>
        <div :class="$style['card__image']">
          <img src="@/assets/images/contents/img-document.png" alt="" />
        </div>
        <div :class="[$style['buttons'], $style['buttons--personal']]">
          <div :class="$style['buttons__item']">
            <button type="button" :class="$style['button']">한도조회</button>
          </div>
        </div>
      </section>
      <!-- // 신용대출 -->

      <div class="row-margin-item-group">
        <!-- 슬라이드 배너 A -->
        <!-- DD : 관리자 등록 배너 -->
        <SlideImageBanner>
          <Swiper :modules="modules" pagination>
            <!-- Case : 링크 기능 없을 때 -->
            <SwiperSlide>
              <div
                :class="[$style['image-view'], $style['image-view--img-width']]"
              >
                <img
                  :src="`${BASE_URL}images/_dummy/banner-main.png`"
                  alt="배너 설명 넣어주세요"
                />
              </div>
            </SwiperSlide>
            <!-- //Case : 링크 기능 없을 때 -->

            <!-- Case : 링크 기능 있을 때 (RouterLink) -->
            <SwiperSlide>
              <RouterLink to="" class="link-block">
                <div
                  :class="[
                    $style['image-view'],
                    $style['image-view--img-width'],
                  ]"
                >
                  <img
                    :src="`${BASE_URL}images/_dummy/banner-main.png`"
                    alt="배너 설명 넣어주세요"
                  />
                </div>
              </RouterLink>
            </SwiperSlide>
            <!-- // Case : 링크 기능 있을 때 (RouterLink) -->

            <!-- Case : 링크 기능 있을 때 (a tag) -->
            <SwiperSlide>
              <a href="" class="link-block">
                <div
                  :class="[
                    $style['image-view'],
                    $style['image-view--img-width'],
                  ]"
                >
                  <img
                    :src="`${BASE_URL}images/_dummy/banner-main.png`"
                    alt="배너 설명 넣어주세요"
                  />
                </div>
              </a>
            </SwiperSlide>
            <!-- // Case : 링크 기능 있을 때 (a tag) -->
          </Swiper>
        </SlideImageBanner>
        <!-- // DD : 관리자 등록 배너 -->
        <!-- // 슬라이드 배너 A -->
      </div>
    </div>

    <BasicHr theme="secondary" :className="$style['hr']" />

    <div>
      <!-- 상품 배너 -->
      <div :class="$style['product']">
        <div :class="$style['product__contents']">
          <div :class="$style['product__group']">
            <RouterLink to="" :class="$style['product__block']">
              <div :class="$style['product__info']">
                <div :class="$style['product__sub']">의료기 · 설비</div>
                <div :class="$style['product__title']">리스</div>
              </div>
              <div :class="$style['product__image']">
                <img
                  src="@/assets/images/contents/img-medical-lease.png"
                  alt=""
                />
              </div>
            </RouterLink>
          </div>
          <div :class="$style['product__group']">
            <RouterLink to="" :class="$style['product__block']">
              <div :class="$style['product__info']">
                <div :class="$style['product__sub']">의료기 · 설비</div>
                <div :class="$style['product__title']">할부</div>
              </div>
              <div :class="$style['product__image']">
                <img
                  src="@/assets/images/contents/img-medical-installment.png"
                  alt=""
                />
              </div>
            </RouterLink>
          </div>
          <div
            :class="[$style['product__group'], $style['product__group--full']]"
          >
            <div
              :class="[
                $style['product__block'],
                $style['product__block--secondary'],
              ]"
            >
              <div :class="$style['product__item']">
                <RouterLink to="" :class="$style['product__link']">
                  <div :class="$style['product__info']">
                    <div :class="$style['product__sub']">
                      교육 가구 등 상품 알아보기
                    </div>
                    <div :class="$style['product__title']">
                      생활 속 렌탈 상품
                    </div>
                  </div>
                  <div :class="$style['product__image']">
                    <img
                      src="@/assets/images/contents/img-main-rental.png"
                      alt=""
                    />
                  </div>
                </RouterLink>
              </div>
              <div :class="$style['product__item']">
                <RouterLink to="" :class="$style['product__link']">
                  <div :class="$style['product__info']">
                    <div :class="$style['product__sub']">한곳에서 모아보는</div>
                    <div :class="$style['product__title']">
                      다이렉트 자동차 보험
                    </div>
                  </div>
                  <div :class="$style['product__image']">
                    <img
                      src="@/assets/images/contents/img-main-insurance.png"
                      alt=""
                    />
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- // 상품 배너 -->

      <div class="row-margin-contents">
        <!-- 슬라이드 배너 B -->
        <!-- DD : 관리자 등록 배너 -->
        <SlideImageBanner theme="secondary">
          <Swiper :modules="modules" pagination>
            <!-- Case : 링크 기능 없을 때 -->
            <SwiperSlide>
              <SlideImageBannerBlock bgColor="#f3f3f3">
                <div
                  :class="[
                    $style['image-view'],
                    $style['image-view--img-width'],
                  ]"
                >
                  <img
                    :src="`${BASE_URL}images/_dummy/main_banner_h.png`"
                    alt="배너 설명 넣어주세요"
                  />
                </div>
              </SlideImageBannerBlock>
            </SwiperSlide>
            <!-- //Case : 링크 기능 없을 때 -->

            <!-- Case : 링크 기능 있을 때 (RouterLink)  -->
            <SwiperSlide>
              <SlideImageBannerBlock bgColor="#dbeaf3">
                <RouterLink to="" class="link-block">
                  <div
                    :class="[
                      $style['image-view'],
                      $style['image-view--img-width'],
                    ]"
                  >
                    <img
                      :src="`${BASE_URL}images/_dummy/main_banner_h2.png`"
                      alt="배너 설명 넣어주세요"
                    />
                  </div>
                </RouterLink>
              </SlideImageBannerBlock>
            </SwiperSlide>
            <!-- // Case : 링크 기능 있을 때 (RouterLink) -->

            <!-- Case : 링크 기능 있을 때 (a tag) -->
            <SwiperSlide>
              <SlideImageBannerBlock bgColor="#eef8f4">
                <a href="" class="link-block">
                  <div
                    :class="[
                      $style['image-view'],
                      $style['image-view--img-width'],
                    ]"
                  >
                    <img
                      :src="`${BASE_URL}images/_dummy/main_banner_h3.png`"
                      alt="배너 설명 넣어주세요"
                    />
                  </div>
                </a>
              </SlideImageBannerBlock>
            </SwiperSlide>
            <!-- // Case : 링크 기능 있을 때 (a tag) -->

            <SwiperSlide>
              <SlideImageBannerBlock bgColor="#edf3f3">
                <div
                  :class="[
                    $style['image-view'],
                    $style['image-view--img-width'],
                  ]"
                >
                  <img
                    :src="`${BASE_URL}images/_dummy/main_banner_h4.png`"
                    alt="배너 설명 넣어주세요"
                  />
                </div>
              </SlideImageBannerBlock>
            </SwiperSlide>
          </Swiper>
        </SlideImageBanner>
        <!-- // DD : 관리자 등록 배너 -->
        <!-- // 슬라이드 배너 B -->
      </div>

      <dl :class="$style['info']">
        <div :class="$style['info__item']">
          <dt :class="$style['info__key']">신용대출상담</dt>
          <dd :class="$style['info__val']">
            <TextButton
              :block="true"
              :iconFillAll="true"
              :classNames="{
                wrap: 'color-gray',
              }"
              tagName="a"
              href="tel:1599-7942"
            >
              <template v-slot:leftIcon>
                <IconTell />
              </template>
              1599-7942
            </TextButton>
          </dd>
        </div>
        <div :class="$style['info__item']">
          <dt :class="$style['info__key']">고객센터</dt>
          <dd :class="$style['info__val']">
            <TextButton
              :block="true"
              :iconFillAll="true"
              :classNames="{
                wrap: 'color-gray',
              }"
              tagName="a"
              href="tel:1599-1110"
            >
              <template v-slot:leftIcon>
                <IconTell />
              </template>
              1599-1110
            </TextButton>
          </dd>
        </div>
      </dl>
    </div>

    <BasicHr theme="secondary" className="row-margin-container-medium" />

    <div>
      <!-- 공지 -->
      <section :class="$style['notice']">
        <h2 class="for-a11y">공지사항</h2>
        <RouterLink to="" :class="$style['notice__block']">
          <span :class="$style['notice__text']">
            채권양도 관련 개인신용정보 제공사실 공지문
          </span>
          <span :class="$style['notice__icon']">
            <IconLink />
          </span>
        </RouterLink>
      </section>
      <!-- // 공지 -->

      <!-- 앱 다운로드 안내 -->
      <section :class="$style['app']">
        <div :class="$style['app__icon']">
          <IconCapitalSmall />
        </div>
        <h2 :class="$style['app__title']">
          다양한 금융서비스 제공<br />
          <strong>쉽고 빠른 하나원큐 하나캐피탈!</strong>
        </h2>
        <div class="inline-wrap">
          <TextButton theme="secondary" :underline="true">
            앱 다운로드
          </TextButton>
        </div>
      </section>
      <!-- // 앱 다운로드 안내 -->
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainHome.scss';
</style>
