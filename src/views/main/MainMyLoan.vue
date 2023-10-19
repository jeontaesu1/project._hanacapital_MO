<script>
// Main_M03_p001
import { onMounted, onUnmounted } from 'vue';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';
import { useUiHeaderStore } from '@/stores/ui/header';
import { useUiDockBarStore } from '@/stores/ui/dockBar';

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
import SlideImageBanner from '@/components/ui/banner/SlideImageBanner.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconCertification from '@/assets/images/icon/certification.svg?component';
import IconSecurity from '@/assets/images/icon/security.svg?component';
import IconTell from '@/assets/images/icon/tell.svg?component';
import IconArrow from '@/assets/images/icon/dropdown.svg?component';

const BASE_URL = import.meta.env.BASE_URL;

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
    SlideImageBanner,
    TextButton,
    IconCertification,
    IconSecurity,
    IconTell,
    IconArrow,
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

      store.ui.layout.setUseFooter(false);

      store.ui.header.setTitle(() => ' ');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => []);
      store.ui.header.setTheme(() => 'tertiary');

      store.ui.dockBar.setActive(() => 'my');
    });

    onUnmounted(() => {
      store.ui.common.setApp(); // 앱모드 테스트 변수

      store.ui.layout.setUseFooter();

      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
      store.ui.header.setTheme();

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
      body: $style['page-body'],
    }"
  >
    <section>
      <PageTextGroup>
        <PageMainText>
          김하나님이<br />
          보유하신 계약은 총 <span class="color-green">5</span>건 입니다
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
        <!-- // Case : 렌터카일 경우 미노출 -->
      </BasicBox>

      <!-- Case : 캐피탈 + 파트너사 양도계약(팩토링) 보유 -->
      <NoticeText :classNames="{ wrap: $style['notice'] }">
        렌탈/할부채권 양도계약은 총 금액에 포함되지 않습니다.
      </NoticeText>
      <!-- // Case : 캐피탈 + 파트너사 양도계약(팩토링) 보유 -->

      <!-- Case : 파트너사 양도계약(팩토링)만 보유 -->
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
      <!-- // Case : 파트너사 양도계약(팩토링)만 보유 -->

      <!-- Case : 캐피탈 계약 보유 -->
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
              <span :class="$style['icon-list__icon']"><IconSecurity /></span>
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
      <!-- // Case : 캐피탈 계약 보유 -->
    </section>

    <!-- Case : 캐피탈 계약 보유 -->
    <BasicHr className="row-margin-container-medium" />

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

      <!-- Case : 상품이 더 있을 경우 노출 -->
      <div class="inline-wrap align-center row-margin-item-group">
        <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
          더보기
          <template v-slot:rightIcon>
            <IconArrow />
          </template>
        </TextButton>
      </div>
      <!-- // Case : 상품이 더 있을 경우 노출 -->
    </section>
    <!-- // Case : 캐피탈 계약 보유 -->

    <!-- Case : 파트너사 양도계약(팩토링) 보유 -->
    <BasicHr className="row-margin-container-medium" />

    <section>
      <h3 class="text-title-2 row-margin-contents">렌탈/할부채권 양도계약</h3>

      <!-- Case : 캐피탈 + 파트너사 양도계약(팩토링) 보유 -->
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
      <!-- // Case : 캐피탈 + 파트너사 양도계약(팩토링) 보유 -->

      <ul class="reset-list">
        <li class="row-margin-item-group">
          <BasicBox>
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
        </li>

        <li class="row-margin-item-group">
          <BasicBox>
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
        </li>
      </ul>

      <!-- Case : 상품이 더 있을 경우 노출 -->
      <div class="inline-wrap align-center row-margin-item-group">
        <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
          더보기
          <template v-slot:rightIcon>
            <IconArrow />
          </template>
        </TextButton>
      </div>
      <!-- // Case : 상품이 더 있을 경우 노출 -->
    </section>
    <!-- // Case : 파트너사 양도계약(팩토링) 보유 -->

    <BasicHr className="row-margin-container-medium" />

    <section>
      <h3 class="text-title-2 row-margin-contents">종료된 계약</h3>

      <ul class="reset-list">
        <li class="row-margin-item-group">
          <BasicBox>
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
        </li>

        <!-- Case : 파트너사 양도계약(팩토링) -->
        <li class="row-margin-item-group">
          <BasicBox>
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
        </li>

        <li class="row-margin-item-group">
          <BasicBox>
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
        </li>
        <!-- // Case : 파트너사 양도계약(팩토링) -->
      </ul>

      <!-- Case : 상품이 더 있을 경우 노출 -->
      <div class="inline-wrap align-center row-margin-item-group">
        <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
          더보기
          <template v-slot:rightIcon>
            <IconArrow />
          </template>
        </TextButton>
      </div>
      <!-- // Case : 상품이 더 있을 경우 노출 -->

      <div class="row-margin-contents">
        <!-- 슬라이드 배너 A -->
        <!-- DD : 관리자 등록 배너 -->
        <SlideImageBanner theme="secondary">
          <Swiper :modules="modules" pagination>
            <!-- Case : 링크 기능 없을 때 -->
            <SwiperSlide>
              <div
                :class="[$style['image-view'], $style['image-view--img-width']]"
              >
                <img
                  :src="`${BASE_URL}images/_dummy/banner-008.png`"
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
                    :src="`${BASE_URL}images/_dummy/banner-007.png`"
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
                    :src="`${BASE_URL}images/_dummy/banner-007.png`"
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
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainMyLoan.scss';
</style>
