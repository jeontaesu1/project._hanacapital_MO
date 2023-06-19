<script>
// Main_M01_p001
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BubbleProgress from '@/components/ui/progress/BubbleProgress.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconRegistration from '@/assets/images/icon/registration.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';
import IconClover from '@/assets/images/icon/clover.svg?component';
import IconGraph from '@/assets/images/icon/graph.svg?component';
import IconCrown from '@/assets/images/icon/crown.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';
import ImgMainSample from '@/assets/images/_dummy/main-sample.svg?component';

export default {
  components: {
    RouterLink,
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicBox,
    UnitText,
    RoundStatus,
    BubbleProgress,
    TextButton,
    CarThumb,
    BasicHr,
    IconRegistration,
    IconCalculate,
    IconClover,
    IconGraph,
    IconCrown,
    IconLink,
    ImgMainSample,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.common.setRootClassName('page-home');

      store.ui.header.setTitle(() => '타이틀');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.common.setRootClassName();

      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents
    :classNames="{
      body: $style['body'],
    }"
  >
    <PageTextGroup>
      <!-- Case : 기본 -->
      <PageMainText>
        <strong>김하나님,</strong><br />
        좋은 하루 보내세요
      </PageMainText>
      <!-- // Case : 기본 -->

      <!-- Case : 진행중인 상품 -->
      <PageMainText>
        <strong>김하나님,</strong><br />
        진행중인 상품이 있어요!
      </PageMainText>
      <!-- // Case : 진행중인 상품 -->

      <!-- Case : 계약현황 -->
      <PageMainText>
        <strong>김하나님,</strong><br />
        9월 5일 결제금액을 확인해보세요
      </PageMainText>
      <!-- // Case : 계약현황 -->
    </PageTextGroup>

    <!-- Case : 진행중인 상품 -->
    <section :class="$style['progress']">
      <BasicBox theme="octonary">
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

        <!-- Case : 단건일 경우 노출 -->
        <ul :class="$style['buttons']">
          <li :class="$style['buttons__item']">
            <button type="button" :class="$style['button']">
              이어서 진행하기
            </button>
          </li>
        </ul>
        <!-- Case : 단건일 경우 노출 -->

        <!-- Case : 다건일 경우 노출 -->
        <ul :class="$style['buttons']">
          <li :class="$style['buttons__item']">
            <button type="button" :class="$style['button']">
              진행중인 상품 모두 보기
            </button>
          </li>
        </ul>
        <!-- Case : 다건일 경우 노출 -->
      </BasicBox>
    </section>

    <div
      :class="[
        $style['icon-list'],
        'row-margin-container-medium',
        'row-margin-top-none',
      ]"
    >
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span
              :class="[
                $style['icon-list__icon'],
                $style['icon-list__icon--white'],
              ]"
              ><IconRegistration
            /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__text']">빠르고 간편한</span>
              <span :class="$style['icon-list__title']">서류 등록하기</span>
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
              ><IconCalculate
            /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__text']">월 납입금 계산</span>
              <span :class="$style['icon-list__title']">대출 계산기</span>
            </span>
          </button>
        </li>
      </ul>
    </div>
    <!-- // Case : 진행중인 상품 -->

    <!-- Case : 계약현황 -->
    <section :class="$style['progress']">
      <BasicBox theme="octonary">
        <div :class="[$style['progress__head'], 'align-items-start']">
          <div :class="$style['progress__head-left']">
            <div :class="$style['progress__head-row']">
              <h2 :class="$style['progress__title']">오토할부</h2>
              <!-- Case : 다건일 경우 노출 -->
              <div :class="$style['progress__title-sub']">외 2건</div>
              <!-- // Case : 다건일 경우 노출 -->
            </div>
            <div :class="$style['progress__head-row']">
              <div :class="$style['progress__title-sub']">141노 1160</div>
              <div :class="$style['progress__title-sub']">(12회 중 4회차)</div>
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
            <dt :class="$style['progress__amount-key']">당월 결제예정금액</dt>
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
        </div>

        <!-- Case : 단건일 경우 노출 -->
        <ul :class="$style['buttons']">
          <li :class="$style['buttons__item']">
            <button type="button" :class="$style['button']">
              증명서 조회/발급
            </button>
          </li>
          <li :class="$style['buttons__item']">
            <button type="button" :class="$style['button']">
              근저당설정 조회/해지
            </button>
          </li>
        </ul>
        <!-- Case : 단건일 경우 노출 -->

        <!-- Case : 다건일 경우 노출 -->
        <ul :class="$style['buttons']">
          <li :class="$style['buttons__item']">
            <button type="button" :class="$style['button']">전체 보기</button>
          </li>
        </ul>
        <!-- Case : 다건일 경우 노출 -->
      </BasicBox>
    </section>
    <!-- // Case : 계약현황 -->

    <!-- Case : 계약현황 - 팩토링 -->
    <section :class="$style['progress']">
      <BasicBox theme="octonary">
        <!-- Case : 단건일 경우 -->
        <div :class="[$style['progress__head'], 'align-items-start']">
          <div :class="$style['progress__head-left']">
            <div :class="$style['progress__head-row']">
              <h2 :class="$style['progress__title']">팩토링 업체명</h2>
            </div>
            <div :class="$style['progress__head-row']">
              <div :class="$style['progress__title-sub']">123가123456</div>
            </div>
          </div>
          <div :class="$style['progress__head-right']">
            <RoundStatus :classNames="{ wrap: 'display-block' }" theme="nonary">
              D-3
            </RoundStatus>
          </div>
        </div>
        <!-- // Case : 단건일 경우 -->

        <!-- Case : 다건일 경우 -->
        <div :class="[$style['progress__head'], 'align-items-start']">
          <div :class="$style['progress__head-left']">
            <div :class="$style['progress__head-row']">
              <h2 :class="$style['progress__title']">오토할부</h2>
              <div :class="$style['progress__title-sub']">외 2건</div>
            </div>
            <div :class="$style['progress__head-row']">
              <div :class="$style['progress__title-sub']">123가123456</div>
            </div>
          </div>
          <div :class="$style['progress__head-right']">
            <RoundStatus :classNames="{ wrap: 'display-block' }" theme="nonary">
              D-3
            </RoundStatus>
          </div>
        </div>
        <!-- // Case : 다건일 경우 -->

        <!-- Case : 단건일 경우 노출 -->
        <ul :class="$style['buttons']">
          <li :class="$style['buttons__item']">
            <button type="button" :class="$style['button']">자세히 보기</button>
          </li>
        </ul>
        <!-- Case : 단건일 경우 노출 -->

        <!-- Case : 다건일 경우 노출 -->
        <ul :class="$style['buttons']">
          <li :class="$style['buttons__item']">
            <button type="button" :class="$style['button']">전체 보기</button>
          </li>
        </ul>
        <!-- Case : 다건일 경우 노출 -->
      </BasicBox>
    </section>
    <!-- // Case : 계약현황 - 팩토링 -->

    <div>
      <!-- 오토견적 -->
      <section :class="[$style['card'], 'row-margin-container-medium']">
        <BasicBox theme="nonary">
          <h2 :class="$style['card__title']">오토견적</h2>
          <p :class="$style['card__text']">
            쉽고 빠른<br />
            렌터카 견적조회
          </p>
          <div :class="$style['card__image']">
            <ImgMainSample />
          </div>
          <ul :class="[$style['buttons'], $style['buttons--auto']]">
            <li :class="$style['buttons__item']">
              <button type="button" :class="$style['button']">
                리스/렌터카 견적
              </button>
            </li>
            <li :class="$style['buttons__item']">
              <button type="button" :class="$style['button']">
                중고 렌터카 견적
              </button>
            </li>
          </ul>
        </BasicBox>
      </section>
      <!-- // 오토견적 -->

      <!-- 이달의 즉시출고 Hot Deal -->
      <section class="row-margin-container-medium">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell flex-1">
            <h2 class="text-title-2">
              이달의 즉시출고<br />
              Hot Deal!
            </h2>
          </div>
          <div class="flex-box__cell">
            <TextButton
              :block="true"
              :classNames="{
                wrap: 'text-body-4 color-gray',
              }"
            >
              더보기
              <template v-slot:rightIcon>
                <IconLink />
              </template>
            </TextButton>
          </div>
        </div>
        <ul class="reset-list">
          <li class="row-margin-contents">
            <RouterLink to="" class="link-block">
              <span class="flex-box">
                <span class="flex-box__cell">
                  <CarThumb src="/images/_dummy/car-thumb.png" />
                </span>
                <span class="flex-box__cell flex-box__cell--medium flex-1">
                  <span class="display-block text-body-4 color-gray"
                    >현대 아이오닉6</span
                  >
                  <span class="display-block text-body-1 font-weight-medium"
                    >월 832,000 원</span
                  >
                </span>
                <span class="flex-box__cell flex-box__cell--medium">
                  <RoundStatus
                    :classNames="{ wrap: 'display-block' }"
                    theme="nonary"
                  >
                    3대 남음
                  </RoundStatus>
                </span>
              </span>
            </RouterLink>
          </li>
          <li class="row-margin-contents">
            <RouterLink to="" class="link-block">
              <span class="flex-box">
                <span class="flex-box__cell">
                  <CarThumb src="/images/_dummy/car-thumb.png" />
                </span>
                <span class="flex-box__cell flex-box__cell--medium flex-1">
                  <span class="display-block text-body-4 color-gray"
                    >현대 아이오닉6</span
                  >
                  <span class="display-block text-body-1 font-weight-medium"
                    >월 832,000 원</span
                  >
                </span>
                <span class="flex-box__cell flex-box__cell--medium">
                  <RoundStatus
                    :classNames="{ wrap: 'display-block' }"
                    theme="nonary"
                  >
                    3대 남음
                  </RoundStatus>
                </span>
              </span>
            </RouterLink>
          </li>
          <li class="row-margin-contents">
            <RouterLink to="" class="link-block">
              <span class="flex-box">
                <span class="flex-box__cell">
                  <CarThumb src="/images/_dummy/car-thumb.png" />
                </span>
                <span class="flex-box__cell flex-box__cell--medium flex-1">
                  <span class="display-block text-body-4 color-gray"
                    >현대 아이오닉6</span
                  >
                  <span class="display-block text-body-1 font-weight-medium"
                    >월 832,000 원</span
                  >
                </span>
              </span>
            </RouterLink>
          </li>
          <li class="row-margin-contents">
            <RouterLink to="" class="link-block">
              <span class="flex-box">
                <span class="flex-box__cell">
                  <CarThumb src="/images/_dummy/car-thumb.png" />
                </span>
                <span class="flex-box__cell flex-box__cell--medium flex-1">
                  <span class="display-block text-body-4 color-gray"
                    >현대 아이오닉6</span
                  >
                  <span class="display-block text-body-1 font-weight-medium"
                    >월 832,000 원</span
                  >
                </span>
              </span>
            </RouterLink>
          </li>
        </ul>
      </section>
      <!-- // 이달의 즉시출고 Hot Deal -->

      <!-- 신용대출 -->
      <section :class="[$style['card'], 'row-margin-container-medium']">
        <BasicBox theme="denary">
          <h2 :class="$style['card__title']">신용대출</h2>
          <p :class="$style['card__text']">
            1분이면 끝나는<br />
            신용대출 간편조회
          </p>
          <div :class="$style['card__image']">
            <ImgMainSample />
          </div>
          <ul :class="[$style['buttons'], $style['buttons--personal']]">
            <li :class="$style['buttons__item']">
              <button type="button" :class="$style['button']">한도조회</button>
            </li>
          </ul>
        </BasicBox>
      </section>
      <!-- // 신용대출 -->
    </div>

    <BasicHr theme="secondary" :className="$style['hr']" />

    <div>
      <!-- 이런 서비스는 어때요? -->
      <section class="row-margin-container-medium">
        <h2 class="text-title-2 row-margin-contents">이런 서비스는 어때요?</h2>

        <div
          :class="[
            $style['icon-list'],
            'row-margin-container-medium',
            'row-margin-top-none',
          ]"
        >
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <button type="button" :class="$style['icon-list__block']">
                <span
                  :class="[
                    $style['icon-list__icon'],
                    $style['icon-list__icon--white'],
                  ]"
                  ><IconClover
                /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__text']">매일 재미있는</span>
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
                    >간편하게 확인하는</span
                  >
                  <span :class="$style['icon-list__title']"
                    >부동산/자동차 시세</span
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
                  ><IconCrown
                /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__text']"
                    >가입하면 다양한 혜택!</span
                  >
                  <span :class="$style['icon-list__title']"
                    >하나캐피탈 멤버십</span
                  >
                </span>
              </button>
            </li>
          </ul>
        </div>
      </section>
      <!-- // 이런 서비스는 어때요? -->
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainHome.scss';
</style>
