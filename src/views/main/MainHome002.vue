<script>
// Main_M02_p001
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';
import { useUiHeaderStore } from '@/stores/ui/header';
import { useUiDockBarStore } from '@/stores/ui/dockBar';

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

import IconAdd from '@/assets/images/icon/add.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';
import IconLinkSmall from '@/assets/images/icon/link-small.svg?component';
import IconDocumentSmall from '@/assets/images/icon/document-small.svg?component';
import IconBird from '@/assets/images/icon/bird.svg?component';
import IconGraph from '@/assets/images/icon/graph.svg?component';
import IconStudy from '@/assets/images/icon/study.svg?component';

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

    IconAdd,
    IconLink,
    IconLinkSmall,
    IconDocumentSmall,
    IconBird,
    IconGraph,
    IconStudy,
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

      store.ui.common.setRootClassName('page-home');

      store.ui.layout.setUseFooter(false);

      store.ui.header.setTitle(() => ' ');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => ['push']);

      store.ui.dockBar.setActive(() => 'home');
    });

    onUnmounted(() => {
      store.ui.common.setApp(); // 앱모드 테스트 변수

      store.ui.common.setRootClassName();

      store.ui.layout.setUseFooter();

      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();

      store.ui.dockBar.setActive();
    });

    return {
      BASE_URL,
      modules: [Pagination, A11y],
    };
  },
};
</script>

<template>
  <PageContents
    :classNames="{
      body: $style['app-body'],
    }"
  >
    <PageTextGroup>
      <PageMainText>
        <button type="button" :class="$style['top-link']">
          <strong>김하나님,</strong><br />
          오늘의 운세를 확인해 보세요!<IconLinkSmall
            :class="$style['top-link__icon']"
          />
        </button>
      </PageMainText>
    </PageTextGroup>

    <!-- Case : 진행 중인 상품 -->
    <section :class="$style['progress']">
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell">
          <div :class="$style['loan-icon']"></div>
        </div>
        <div class="flex-box__cell flex-box__cell--small flex-1">
          <h2 class="text-title-2">진행 중인 상품</h2>
        </div>
        <!-- Case : 다건일 경우 노출 -->
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
        <!-- // Case : 다건일 경우 노출 -->
      </div>

      <!-- Case : 신용대출 -->
      <div :class="$style['progress__block']">
        <div :class="$style['progress__head']">
          <div :class="$style['progress__head-left']">
            <div :class="$style['progress__head-row']">
              <h2 :class="$style['progress__title']">e하나신용대출</h2>
              <!-- Case : 다건일 경우 노출 -->
              <div :class="$style['progress__title-sub']">외 2건</div>
              <!-- // Case : 다건일 경우 노출 -->
            </div>
          </div>
          <div :class="$style['progress__head-right']">
            <p :class="$style['progress__date']">22.09.19 기준</p>
          </div>
        </div>

        <dl :class="$style['progress__info']">
          <div :class="$style['progress__info-item']">
            <dt :class="$style['progress__info-key']">최대한도</dt>
            <dd :class="$style['progress__info-val']">
              <UnitText
                rightUnit="만원"
                align="center"
                verticalAlign="center"
                size="medium"
                >7,000</UnitText
              >
            </dd>
          </div>
          <div :class="$style['progress__info-item']">
            <dt :class="$style['progress__info-key']">예상금리</dt>
            <dd :class="$style['progress__info-val']">
              <UnitText
                rightUnit="%"
                align="center"
                verticalAlign="center"
                size="medium"
                >5.2</UnitText
              >
            </dd>
          </div>
        </dl>

        <div :class="$style['progress__button']">
          <BasicButton size="small" :line="true">약정 이어하기</BasicButton>
        </div>
      </div>
      <!-- // Case : 신용대출 -->

      <!-- Case : 일반할부금융, 설비리스 -->
      <div :class="$style['progress__block']">
        <div :class="$style['progress__head']">
          <div :class="$style['progress__head-left']">
            <div :class="$style['progress__head-row']">
              <h2 :class="$style['progress__title']">의료기할부</h2>
              <!-- Case : 다건일 경우 노출 -->
              <div :class="$style['progress__title-sub']">외 2건</div>
              <!-- // Case : 다건일 경우 노출 -->
            </div>
          </div>
          <div :class="$style['progress__head-right']">
            <p :class="$style['progress__date']">22.09.19 기준</p>
          </div>
        </div>

        <dl :class="$style['progress__info']">
          <div :class="$style['progress__info-item']">
            <dt :class="$style['progress__info-key']">신청금액</dt>
            <dd :class="$style['progress__info-val']">
              <UnitText
                rightUnit="만원"
                align="center"
                verticalAlign="center"
                size="medium"
                >7,000</UnitText
              >
            </dd>
          </div>
          <div :class="$style['progress__info-item']">
            <dt :class="$style['progress__info-key']">금리</dt>
            <dd :class="$style['progress__info-val']">
              <UnitText
                rightUnit="%"
                align="center"
                verticalAlign="center"
                size="medium"
                >12.9</UnitText
              >
            </dd>
          </div>
        </dl>

        <div :class="$style['progress__button']">
          <BasicButton size="small" :line="true">약정 이어하기</BasicButton>
        </div>
      </div>
      <!-- // Case : 일반할부금융, 설비리스 -->

      <!-- Case : 자동차(리스/렌트 외) -->
      <div :class="$style['progress__block']">
        <div :class="$style['progress__head']">
          <div :class="$style['progress__head-left']">
            <div :class="$style['progress__head-row']">
              <h2 :class="$style['progress__title']">원큐다이렉트 오토론</h2>
              <!-- Case : 다건일 경우 노출 -->
              <div :class="$style['progress__title-sub']">외 2건</div>
              <!-- // Case : 다건일 경우 노출 -->
            </div>
          </div>
          <div :class="$style['progress__head-right']">
            <p :class="$style['progress__date']">22.09.19 기준</p>
          </div>
        </div>

        <dl :class="$style['progress__info']">
          <div :class="$style['progress__info-item']">
            <dt :class="$style['progress__info-key']">신청금액</dt>
            <dd :class="$style['progress__info-val']">
              <UnitText
                rightUnit="만원"
                align="center"
                verticalAlign="center"
                size="medium"
                >7,000</UnitText
              >
            </dd>
          </div>
        </dl>

        <div :class="$style['progress__button']">
          <BasicButton size="small" :line="true">약정 이어하기</BasicButton>
        </div>
      </div>
      <!-- // Case : 자동차(리스/렌트 외) -->

      <!-- Case : 리스/렌트 -->
      <div :class="$style['progress__block']">
        <div :class="$style['progress__head']">
          <div :class="$style['progress__head-left']">
            <div :class="$style['progress__head-row']">
              <h2 :class="$style['progress__title']">오토리스</h2>
              <!-- Case : 다건일 경우 노출 -->
              <div :class="$style['progress__title-sub']">외 2건</div>
              <!-- // Case : 다건일 경우 노출 -->
            </div>
          </div>
          <div :class="$style['progress__head-right']">
            <p :class="$style['progress__date']">22.09.19 기준</p>
          </div>
        </div>

        <dl :class="$style['progress__info']">
          <div :class="$style['progress__info-item']">
            <dt :class="$style['progress__info-key']">신청차량</dt>
            <dd :class="$style['progress__info-val']">
              <div :class="$style['progress__info-text']">제네시스 GV70</div>
            </dd>
          </div>
        </dl>

        <div :class="$style['progress__button']">
          <BasicButton size="small" :line="true">약정 이어하기</BasicButton>
        </div>
      </div>
      <!-- // Case : 리스/렌트 -->

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
    </section>
    <!-- // Case : 진행 중인 상품 -->

    <!-- Case : 거래 상품 -->
    <section :class="$style['progress']">
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell">
          <div :class="$style['loan-icon']"></div>
        </div>
        <div class="flex-box__cell flex-box__cell--small flex-1">
          <h2 class="text-title-2">거래 상품</h2>
        </div>
        <!-- Case : 다건일 경우 노출 -->
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
        <!-- // Case : 다건일 경우 노출 -->
      </div>

      <div :class="$style['progress__block']">
        <div :class="[$style['progress__head'], 'align-items-start']">
          <div :class="$style['progress__head-left']">
            <div :class="$style['progress__head-row']">
              <h2 :class="$style['progress__title']">행복아파트론</h2>
              <!-- Case : 다건일 경우 노출 -->
              <div :class="$style['progress__title-sub']">외 2건</div>
              <!-- // Case : 다건일 경우 노출 -->
            </div>
          </div>
          <div :class="$style['progress__head-right']">
            <RoundStatus :classNames="{ wrap: 'display-block' }" theme="nonary">
              D-3
            </RoundStatus>
          </div>
        </div>

        <div :class="$style['progress__amount']">
          <dl :class="$style['progress__amount-block']">
            <!-- Case : 단건일 경우 노출 -->
            <dt :class="$style['progress__amount-key']">10.10 결제예정금액</dt>
            <!-- // Case : 단건일 경우 노출 -->

            <!-- Case : 다건일 경우 노출 -->
            <dt :class="$style['progress__amount-key']">이번달 총 결제금액</dt>
            <!-- // Case : 다건일 경우 노출 -->

            <dd :class="$style['progress__amount-val']">
              <UnitText
                rightUnit="원"
                align="center"
                verticalAlign="center"
                size="large"
                >400,000</UnitText
              >
            </dd>
          </dl>
          <!-- Case : 단건일 경우 노출 -->
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
          <!-- // Case : 단건일 경우 노출 -->
        </div>

        <!-- Case : 모든 상품(렌터카 외) -->
        <div :class="$style['progress__button']">
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
        </div>
        <!-- // Case : 모든 상품(렌터카 외) -->

        <!-- Case : 렌터카 -->
        <div :class="$style['progress__button']">
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
        </div>
        <!-- // Case : 렌터카 -->

        <!-- Case : 스탁론 -->
        <div :class="$style['progress__button']">
          <div :class="$style['buttons']">
            <div :class="$style['buttons__item']">
              <button type="button" :class="$style['button']">연장하기</button>
            </div>
            <div :class="$style['buttons__hr']"></div>
            <div :class="$style['buttons__item']">
              <button type="button" :class="$style['button']">
                증명서 조회/발급
              </button>
            </div>
          </div>
        </div>
        <!-- // Case : 스탁론 -->

        <!-- Case : 렌터카, 오토리스(운용/금융) -->
        <div :class="$style['progress__button']">
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
        </div>
        <!-- // Case : 렌터카, 오토리스(운용/금융) -->

        <!-- Case : 팩토링은 버튼 없음 -->
      </div>
    </section>
    <!-- // Case : 거래 상품 -->

    <div>
      <!-- 오토리스 / 렌터카 -->
      <section :class="$style['card']">
        <h2 :class="$style['card__title']">오토리스 / 렌터카</h2>
        <p :class="$style['card__text']">
          쉽고 빠른<br />
          렌터카 견적조회
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
              <div :class="$style['image-view']">
                <img
                  :src="`${BASE_URL}images/_dummy/banner-005.png`"
                  alt="배너 설명 넣어주세요"
                />
              </div>
            </SwiperSlide>
            <!-- //Case : 링크 기능 없을 때 -->

            <!-- Case : 링크 기능 있을 때 (RouterLink) -->
            <SwiperSlide>
              <RouterLink to="" class="link-block">
                <div :class="$style['image-view']">
                  <img
                    :src="`${BASE_URL}images/_dummy/banner-005.png`"
                    alt="배너 설명 넣어주세요"
                  />
                </div>
              </RouterLink>
            </SwiperSlide>
            <!-- // Case : 링크 기능 있을 때 (RouterLink) -->

            <!-- Case : 링크 기능 있을 때 (a tag) -->
            <SwiperSlide>
              <a href="" class="link-block">
                <div :class="$style['image-view']">
                  <img
                    :src="`${BASE_URL}images/_dummy/banner-005.png`"
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
                    <div :class="$style['product__sub']">#야나두 #가구</div>
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
                    <div :class="$style['product__sub']">한눈에 모아보는</div>
                    <div :class="$style['product__title']">다이렉트 보험</div>
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

      <!-- 이런 서비스는 어때요? -->
      <section class="row-margin-container-medium">
        <h2 class="text-title-2 row-margin-contents">이런 서비스는 어때요?</h2>

        <div :class="$style['icon-list']">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <button type="button" :class="$style['icon-list__block']">
                <span
                  :class="[
                    $style['icon-list__icon'],
                    $style['icon-list__icon--white'],
                  ]"
                  ><IconBird
                /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__text']"
                    >운새가 말해주는</span
                  >
                  <span :class="$style['icon-list__title']">오늘의 운세</span>
                </span>
              </button>
            </li>
            <li :class="$style['icon-list__item']">
              <button type="button" :class="$style['icon-list__block']">
                <span
                  :class="[
                    $style['icon-list__icon'],
                    $style['icon-list__icon--white'],
                  ]"
                  ><IconGraph
                /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__text']"
                    >내 차, 저 아파트가 얼마일까?</span
                  >
                  <span :class="$style['icon-list__title']"
                    >아파트/자동차 시세조회</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-list__item']">
              <button type="button" :class="$style['icon-list__block']">
                <span
                  :class="[
                    $style['icon-list__icon'],
                    $style['icon-list__icon--white'],
                  ]"
                  ><IconStudy
                /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__text']"
                    >알아두면 유용한 재미있는 콘텐츠</span
                  >
                  <span :class="$style['icon-list__title']">스토리</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </section>
      <!-- // 이런 서비스는 어때요? -->

      <div class="row-margin-container-medium">
        <!-- 슬라이드 배너 B -->
        <!-- DD : 관리자 등록 배너 -->
        <SlideImageBanner theme="secondary">
          <Swiper :modules="modules" pagination>
            <!-- Case : 링크 기능 없을 때 -->
            <SwiperSlide>
              <div :class="$style['image-view']">
                <img
                  :src="`${BASE_URL}images/_dummy/banner-004.png`"
                  alt="배너 설명 넣어주세요"
                />
              </div>
            </SwiperSlide>
            <!-- //Case : 링크 기능 없을 때 -->

            <!-- Case : 링크 기능 있을 때 (RouterLink) -->
            <SwiperSlide>
              <RouterLink to="" class="link-block">
                <div :class="$style['image-view']">
                  <img
                    :src="`${BASE_URL}images/_dummy/banner-004.png`"
                    alt="배너 설명 넣어주세요"
                  />
                </div>
              </RouterLink>
            </SwiperSlide>
            <!-- // Case : 링크 기능 있을 때 (RouterLink) -->

            <!-- Case : 링크 기능 있을 때 (a tag) -->
            <SwiperSlide>
              <a href="" class="link-block">
                <div :class="$style['image-view']">
                  <img
                    :src="`${BASE_URL}images/_dummy/banner-004.png`"
                    alt="배너 설명 넣어주세요"
                  />
                </div>
              </a>
            </SwiperSlide>
            <!-- // Case : 링크 기능 있을 때 (a tag) -->
          </Swiper>
        </SlideImageBanner>
        <!-- // DD : 관리자 등록 배너 -->
        <!-- // 슬라이드 배너 B -->
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainHome.scss';
</style>
