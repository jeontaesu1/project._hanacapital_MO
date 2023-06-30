<script>
// My_M01_p001
import { onMounted, onUnmounted } from 'vue';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicBanner from '@/components/ui/banner/BasicBanner.vue';
import BasicBannerSlide from '@/components/ui/banner/BasicBannerSlide.vue';

import IconCertification from '@/assets/images/icon/certification.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';
import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    Swiper,
    SwiperSlide,
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicHr,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    RoundStatus,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
    BasicButton,
    NoticeText,
    BasicBanner,
    BasicBannerSlide,
    IconCertification,
    IconBuilding,
    IconTell,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '내대출');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      modules: [Pagination, A11y],
    };
  },
};
</script>

<template>
  <PageContents>
    <section>
      <PageTextGroup>
        <PageMainText>
          김하나님이<br />
          <strong
            >보유하신 계약은 총 <span class="color-green">5</span>건
            입니다</strong
          >
        </PageMainText>
      </PageTextGroup>

      <BasicBox>
        <div class="align-center">
          <div :class="[$style['head']]">
            <UnitText
              size="large"
              rightUnit="원"
              align="center"
              verticalAlign="center"
              >400,000</UnitText
            >
            <div class="text-body-3 color-gray">당월 결제예정금액</div>
          </div>
        </div>

        <!-- Case : 렌터카일 경우 미노출 -->
        <BasicHr
          type="contents"
          theme="quaternary"
          className="row-margin-contents-small"
        />

        <KeyValue>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>총 남은 원금</KeyValueTitle>
            <KeyValueText>78,000,000 원</KeyValueText>
          </KeyValueItem>
        </KeyValue>
        <!-- //Case : 렌터카일 경우 미노출 -->
      </BasicBox>

      <!-- Case :  캐피탈 계약 + 파트너사 양도계약 보유 경우 노출 -->
      <NoticeText :classNames="{ wrap: $style['notice'] }">
        렌탈/할부채권 양도계약은 총 금액에 포함되지 않습니다.
      </NoticeText>
      <!-- //Case : 캐피탈 계약 + 파트너사 양도계약 보유 경우 노출 -->

      <!-- Case :  파트너사 양도계약(팩토링)만 보유한 경우 노출 -->
      <ul :class="$style['basic-list']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            하나캐피탈과 제휴된 렌탈(할부)사와의 계약입니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            기간 및 잔액의 경우, 입금반영 스케줄에 따라 실제와 상이할 수
            있습니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            자세한 내용은 각 렌탈(할부)사로 문의 부탁드립니다.
          </div>
        </li>
      </ul>
      <!-- //Case :  파트너사 양도계약(팩토링)만 보유한 경우 노출 -->

      <!-- Case :  캐피탈 계약만 보유한 경우, 캐피탈 계약 + 파트너사 양도계약 보유한 경우 -->
      <div :class="[$style['icon-list'], 'row-margin-container-medium']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"
                ><IconCertification
              /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']"
                  >필요한 증명서를 받아보세요</span
                >
                <span :class="$style['icon-list__title']"
                  >증명서 조회/발급</span
                >
              </span>
            </button>
          </li>
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconBuilding /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']"
                  >근저당설정 상태를 확인해보세요</span
                >
                <span :class="$style['icon-list__title']"
                  >근저당설정 조회/해지</span
                >
              </span>
            </button>
          </li>
        </ul>
      </div>
      <!-- //Case :  캐피탈 계약만 보유한 경우, 캐피탈 계약 + 파트너사 양도계약 보유한 경우 -->
    </section>

    <BasicHr className="row-margin-container-medium" />

    <!-- Case : 캐피탈 계약 + 파트너사 양도계약 보유한 경우 -->
    <!-- Case : 캐피탈 계약만 보유한 경우 노출 -->
    <section>
      <h3 class="text-title-2 row-margin-contents">캐피탈 상품 계약</h3>

      <ul :class="$style['logs']">
        <li :class="$style['logs__item']">
          <div :class="$style['logs__block']">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 class="text-body-1 font-weight-medium">스탁론</h3>
                <div class="text-body-4 color-gray row-margin-small">
                  하나증권 12-3456-7890123
                </div>
              </div>
              <RoundStatus
                :classNames="{ wrap: 'display-block' }"
                theme="secondary"
                >D-7</RoundStatus
              >
              <div :class="$style['logs__right']">
                <button type="button" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>

            <BasicHr
              type="contents"
              theme="quaternary"
              className="row-margin-contents-small"
            />

            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText
                  :classNames="{ text: 'color-green font-weight-medium' }"
                  >845,000 원</KeyValueText
                >
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>2022.02.05 (매월 5일)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>16/60</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <div :class="[$style['logs__button'], 'row-margin-contents-small']">
              <BasicButton size="small">연장</BasicButton>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div :class="$style['logs__block']">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 class="text-body-1 font-weight-medium">렌터카 531다3346</h3>
                <div class="text-body-4 color-gray row-margin-small">
                  벤츠 더 뉴 C-class(W205/S205)
                </div>
                <div
                  class="text-body-5 color-gray row-margin-mini font-weight-light"
                >
                  가솔린 2.0 Sedan (개소세 30% 인하) C200 AMG Line
                </div>
              </div>
              <RoundStatus
                :classNames="{ wrap: 'display-block' }"
                theme="secondary"
                >D-7</RoundStatus
              >
              <div :class="$style['logs__right']">
                <button type="button" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>

            <BasicHr
              type="contents"
              theme="quaternary"
              className="row-margin-contents-small"
            />

            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText
                  :classNames="{ text: 'color-green font-weight-medium' }"
                  >845,000 원</KeyValueText
                >
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>2022.02.05 (매월 5일)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>16/60</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <div
              :class="[
                $style['inline-alert'],
                $style['inline-alert--error'],
                'row-margin-contents-small',
              ]"
            >
              <p :class="$style['inline-alert__text']">
                계약만기일이 90일 남았습니다.<br />
                만기후처리를 등록해 주세요.
              </p>
            </div>

            <div :class="[$style['logs__button'], 'row-margin-contents-small']">
              <BasicButton size="small" :line="true">만기안내장</BasicButton>
              <BasicButton
                size="small"
                :classNames="{ wrap: 'row-margin-item' }"
                >만기후처리</BasicButton
              >
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div :class="$style['logs__block']">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 class="text-body-1 font-weight-medium">e하나신용대출</h3>
              </div>
              <RoundStatus
                :classNames="{ wrap: 'display-block' }"
                theme="secondary"
                >D-day</RoundStatus
              >
              <div :class="$style['logs__right']">
                <button type="button" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>

            <BasicHr
              type="contents"
              theme="quaternary"
              className="row-margin-contents-small"
            />

            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText
                  :classNames="{ text: 'color-green font-weight-medium' }"
                  >845,000 원</KeyValueText
                >
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>2022.02.05 (매월 5일)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>16/60</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출잔액</KeyValueTitle>
                <KeyValueText>50,000,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div :class="$style['logs__block']">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 class="text-body-1 font-weight-medium">오토론</h3>
              </div>
              <RoundStatus
                :classNames="{ wrap: 'display-block' }"
                theme="nonary"
              >
                연체
              </RoundStatus>
              <div :class="$style['logs__right']">
                <button type="button" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>

            <BasicHr
              type="contents"
              theme="quaternary"
              className="row-margin-contents-small"
            />

            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText
                  :classNames="{ text: 'color-green font-weight-medium' }"
                  >845,000 원</KeyValueText
                >
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>2022.02.05 (매월 5일)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>16/60</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출잔액</KeyValueTitle>
                <KeyValueText>50,000,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <div
              :class="[
                $style['inline-alert'],
                $style['inline-alert--error'],
                'row-margin-contents-small',
              ]"
            >
              <p :class="$style['inline-alert__text']">
                만기일이 도래했습니다.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <!-- //Case : 캐피탈 계약만 보유한 경우 노출 -->

    <BasicHr className="row-margin-container-medium" />

    <!-- Case :파트너사 양도계약(팩토링)만 보유한 경우 노출 -->
    <section>
      <h3 class="text-title-2 row-margin-contents">렌탈/할부채권 양도계약</h3>

      <!-- Case :  캐피탈 계약 + 파트너사 양도계약 보유 경우 노출 -->
      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            하나캐피탈과 제휴된 렌탈(할부)사와의 계약입니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            기간 및 잔액의 경우, 입금반영 스케줄에 따라 실제와 상이할 수
            있습니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            자세한 내용은 각 렌탈(할부)사로 문의 부탁드립니다.
          </div>
        </li>
      </ul>
      <!-- //Case :  캐피탈 계약 + 파트너사 양도계약 보유 경우 노출 -->

      <BasicBox className="row-margin-item-group">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">야나두</h3>
            <div class="text-body-4 color-gray row-margin-small">
              품목명 1줄로 여기까지 여기까지 씁니다.<br />
              길 경우 이렇게 2줄까지 됩니다.
            </div>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>월 납입금</KeyValueTitle>
            <KeyValueText
              :classNames="{ text: 'color-green font-weight-medium' }"
              >845,000 원</KeyValueText
            >
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>할부기간</KeyValueTitle>
            <KeyValueText>16/60개월</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>할부금액</KeyValueTitle>
            <KeyValueText>999,999,999 원</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <BasicButton
          tagName="a"
          size="small"
          :classNames="{ wrap: 'row-margin-contents-small' }"
        >
          <template v-slot:leftIcon>
            <IconTell />
          </template>
          야나두 전화연결
        </BasicButton>
      </BasicBox>

      <BasicBox className="row-margin-item-group">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">현대렌탈</h3>
            <div class="text-body-4 color-gray row-margin-small">
              품목명 1줄로 여기까지 여기까지 씁니다.<br />
              길 경우 이렇게 2줄까지 됩니다.
            </div>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>월 납입금</KeyValueTitle>
            <KeyValueText
              :classNames="{ text: 'color-green font-weight-medium' }"
              >845,000 원</KeyValueText
            >
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>렌탈기간</KeyValueTitle>
            <KeyValueText>16/60개월</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>렌탈잔액</KeyValueTitle>
            <KeyValueText>999,999,999 원</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <BasicButton
          tagName="a"
          size="small"
          :classNames="{ wrap: 'row-margin-contents-small' }"
        >
          <template v-slot:leftIcon>
            <IconTell />
          </template>
          현대렌탈 전화연결
        </BasicButton>
      </BasicBox>
    </section>
    <!-- //Case : 파트너사 양도계약(팩토링)만 보유한 경우 노출 -->

    <BasicHr className="row-margin-container-medium" />

    <section>
      <h3 class="text-title-2 row-margin-contents">종료된 계약</h3>
      <BasicBox className="row-margin-item-group">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">스탁론</h3>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <RoundStatus :classNames="{ wrap: 'display-block' }">
              종료
            </RoundStatus>
          </BasicBoxHeadRight>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>대출기간</KeyValueTitle>
            <KeyValueText>2021.01.02 ~ 2021.01.02</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>대출원금</KeyValueTitle>
            <KeyValueText>999,999,999 원</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <!-- Case : 파트너사 양도계약(팩토링)만 보유한 경우 노출 -->
      <BasicBox className="row-margin-item-group">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">야나두</h3>
            <div class="text-body-4 color-gray row-margin-small">
              품목명 1줄로 여기까지 여기까지 씁니다.<br />
              길 경우 이렇게 2줄까지 됩니다.
            </div>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <RoundStatus :classNames="{ wrap: 'display-block' }">
              종료
            </RoundStatus>
          </BasicBoxHeadRight>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>할부기간</KeyValueTitle>
            <KeyValueText>16/60개월</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>할부금액</KeyValueTitle>
            <KeyValueText>999,999,999 원</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <BasicButton
          tagName="a"
          size="small"
          :classNames="{ wrap: 'row-margin-contents-small' }"
        >
          <template v-slot:leftIcon>
            <IconTell />
          </template>
          야나두 전화연결
        </BasicButton>
      </BasicBox>

      <BasicBox className="row-margin-item-group">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">현대렌탈</h3>
            <div class="text-body-4 color-gray row-margin-small">
              품목명 1줄로 여기까지 여기까지 씁니다.<br />
              길 경우 이렇게 2줄까지 됩니다.
            </div>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <RoundStatus :classNames="{ wrap: 'display-block' }">
              종료
            </RoundStatus>
          </BasicBoxHeadRight>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>렌탈기간</KeyValueTitle>
            <KeyValueText>16/60개월</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>렌탈잔액</KeyValueTitle>
            <KeyValueText>999,999,999 원</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <BasicButton
          tagName="a"
          size="small"
          :classNames="{ wrap: 'row-margin-contents-small' }"
        >
          <template v-slot:leftIcon>
            <IconTell />
          </template>
          현대렌탈 전화연결
        </BasicButton>
      </BasicBox>
      <!-- //Case : 파트너사 양도계약(팩토링)만 보유한 경우 노출 -->
      <!-- //Case : 캐피탈 계약 + 파트너사 양도계약 보유한 경우 -->

      <!-- DD : 하드코딩 배너 -->
      <BasicBannerSlide>
        <Swiper :modules="modules" pagination>
          <SwiperSlide>
            <BasicBanner
              thumb="/images/_dummy/banner-001.png"
              tagName="RouterLink"
              to=""
            >
              <p class="text-body-4 color-gray row-margin-mini">
                비용NO! 보험NO! 내 차OK!
              </p>
              <h3 class="text-body-1 font-weight-medium">
                다이렉트 장기렌터카
              </h3>
            </BasicBanner>
          </SwiperSlide>
          <SwiperSlide>
            <BasicBanner
              thumb="/images/_dummy/banner-001.png"
              tagName="RouterLink"
              to=""
            >
              <p class="text-body-4 color-gray row-margin-mini">
                내용 작업 예정
              </p>
              <h3 class="text-body-1 font-weight-medium">내용 작업 예정</h3>
            </BasicBanner>
          </SwiperSlide>
          <SwiperSlide>
            <BasicBanner
              thumb="/images/_dummy/banner-001.png"
              tagName="RouterLink"
              to=""
            >
              <p class="text-body-4 color-gray row-margin-mini">
                내용 작업 예정
              </p>
              <h3 class="text-body-1 font-weight-medium">내용 작업 예정</h3>
            </BasicBanner>
          </SwiperSlide>
        </Swiper>
      </BasicBannerSlide>
      <!-- // DD : 하드코딩 배너 -->
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanHome.scss';
</style>
