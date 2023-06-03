<script>
// My_M01_p002 오토금융
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
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
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

import IconInstallation from '@/assets/images/icon/installation.svg?component';
import IconPenalty from '@/assets/images/icon/penalty.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';
import iconDriver from '@/assets/images/icon/driver.svg?component';

export default {
  components: {
    RouterLink,
    PageContents,
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
    ButtonList,
    ButtonListItem,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    NoticeText,
    IconInstallation,
    IconPenalty,
    IconCar,
    iconDriver,
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
  },
};
</script>

<template>
  <PageContents>
    <section>
      <!-- Case : 렌터카 -->
      <div>
        <div class="flex-box align-items-start">
          <div class="flex-box__cell flex-1">
            <h3 class="text-title-2">렌터카</h3>
            <div
              class="text-body-3 color-gray-tertiary font-weight-medium row-margin-small"
            >
              벤츠 더 뉴 C-class(W205/S205)
            </div>
            <div
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
            >
              가솔린 2.0 Sedan (개소세 30% 인하)<br />C200 AMG Line
            </div>
          </div>
          <div class="flex-box__cell">
            <RoundStatus :classNames="{ wrap: 'display-block' }" theme="denary">
              D-7
            </RoundStatus>
          </div>
        </div>
        <div class="row-margin-contents">
          <BasicBox className="row-margin-item-group">
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-1 font-weight-medium">결제예정금액</div>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <UnitText rightUnit="원">999,999,999</UnitText>
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>2022.02.02 (매월 2일)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>16/60</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>계약기간</KeyValueTitle>
                <KeyValueText>2021.01.05 ~ 2022.01.05</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>정비서비스</KeyValueTitle>
                <KeyValueText>프리미엄</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>보증금</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>선납금</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
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
                계약만기일이 30일 남았습니다.<br />
                만기후처리를 등록해 주세요.
              </p>
            </div>
          </BasicBox>
        </div>
      </div>
      <!-- //Case : 렌터카 -->

      <!-- Case : 운용리스 -->
      <div>
        <div class="flex-box align-items-start">
          <div class="flex-box__cell flex-1">
            <h3 class="text-title-2">오토리스 20고4567</h3>
            <div
              class="text-body-3 color-gray-tertiary font-weight-medium row-margin-small"
            >
              벤츠 더 뉴 C-class(W205/S205)
            </div>
            <div
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
            >
              가솔린 2.0 Sedan (개소세 30% 인하)<br />
              C200 AMG Line
            </div>
          </div>
          <div class="flex-box__cell">
            <RoundStatus :classNames="{ wrap: 'display-block' }" theme="denary">
              D-7
            </RoundStatus>
          </div>
        </div>
        <div class="row-margin-contents">
          <BasicBox className="row-margin-item-group">
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-1 font-weight-medium">결제예정금액</div>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <UnitText rightUnit="원">999,999,999</UnitText>
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>2022.02.02 (매월 2일)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>16/60</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>계약기간</KeyValueTitle>
                <KeyValueText>2021.01.05 ~ 2022.01.05</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>보증금</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>선납금</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
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
                계약만기일이 30일 남았습니다.<br />
                만기후처리를 등록해 주세요.
              </p>
            </div>
          </BasicBox>
        </div>
      </div>
      <!-- //Case : 운용리스 -->

      <!-- Case : 금융리스 -->
      <div>
        <div class="flex-box align-items-start">
          <div class="flex-box__cell flex-1">
            <h3 class="text-title-2">오토리스 20고4567</h3>
            <div
              class="text-body-3 color-gray-tertiary font-weight-medium row-margin-small"
            >
              벤츠 더 뉴 C-class(W205/S205)
            </div>
            <div
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
            >
              가솔린 2.0 Sedan (개소세 30% 인하)<br />
              C200 AMG Line
            </div>
          </div>
          <div class="flex-box__cell">
            <RoundStatus :classNames="{ wrap: 'display-block' }" theme="denary">
              D-7
            </RoundStatus>
          </div>
        </div>
        <div class="row-margin-contents">
          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출잔액</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출원금</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <BasicBox className="row-margin-item-group">
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-1 font-weight-medium">결제예정금액</div>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <UnitText rightUnit="원">999,999,999</UnitText>
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>2022.02.02 (매월 2일)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>16/60</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>계약기간</KeyValueTitle>
                <KeyValueText>2021.01.05 ~ 2022.01.05</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>이용금리</KeyValueTitle>
                <KeyValueText>0.0% </KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>보증금</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>선납금</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
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
                계약만기일이 30일 남았습니다.<br />
                만기후처리를 등록해 주세요.
              </p>
            </div>
          </BasicBox>
        </div>
      </div>
      <!-- //Case : 금융리스 -->

      <!-- Case : 오토론 -->
      <div>
        <div class="flex-box align-items-start">
          <div class="flex-box__cell flex-1">
            <h3 class="text-title-2">오토론 20고3929</h3>
            <div
              class="text-body-3 color-gray-tertiary font-weight-medium row-margin-small"
            >
              벤츠 더 뉴 C-class(W205/S205)
            </div>
            <div
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
            >
              가솔린 2.0 Sedan (개소세 30% 인하)<br />
              C200 AMG Line
            </div>
          </div>
          <div class="flex-box__cell">
            <RoundStatus :classNames="{ wrap: 'display-block' }" theme="denary">
              D-7
            </RoundStatus>
          </div>
        </div>
        <div class="row-margin-contents">
          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출잔액</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출원금</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <BasicBox className="row-margin-item-group">
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-1 font-weight-medium">결제예정금액</div>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <UnitText rightUnit="원">999,999,999</UnitText>
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>2022.02.02 (매월 2일)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>16/60</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>계약기간</KeyValueTitle>
                <KeyValueText>2021.01.05 ~ 2022.01.05</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>이용금리</KeyValueTitle>
                <KeyValueText>0.0% </KeyValueText>
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
                계약만기일이 30일 남았습니다.<br />
                만기후처리를 등록해 주세요.
              </p>
            </div>
          </BasicBox>
        </div>
      </div>
      <!-- //Case : 오토론 -->

      <!-- Case : 오토할부 -->
      <div>
        <div class="flex-box align-items-start">
          <div class="flex-box__cell flex-1">
            <h3 class="text-title-2">오토할부 20고4567</h3>
            <div
              class="text-body-3 color-gray-tertiary font-weight-medium row-margin-small"
            >
              벤츠 더 뉴 C-class(W205/S205)
            </div>
            <div
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
            >
              가솔린 2.0 Sedan (개소세 30% 인하)<br />
              C200 AMG Line
            </div>
          </div>
          <div class="flex-box__cell">
            <RoundStatus :classNames="{ wrap: 'display-block' }" theme="denary">
              D-7
            </RoundStatus>
          </div>
        </div>
        <div class="row-margin-contents">
          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출잔액</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출원금</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <BasicBox className="row-margin-item-group">
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-1 font-weight-medium">결제예정금액</div>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <UnitText rightUnit="원">999,999,999</UnitText>
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>2022.02.02 (매월 2일)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>16/60</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>계약기간</KeyValueTitle>
                <KeyValueText>2021.01.05 ~ 2022.01.05</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>이용금리</KeyValueTitle>
                <KeyValueText>0.0% </KeyValueText>
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
                계약만기일이 30일 남았습니다.<br />
                만기후처리를 등록해 주세요.
              </p>
            </div>
          </BasicBox>
        </div>
      </div>
      <!-- //Case : 오토할부 -->

      <!-- Case : 중고차오토론 -->
      <div>
        <div class="flex-box align-items-start">
          <div class="flex-box__cell flex-1">
            <h3 class="text-title-2">중고차오토론 20고3929</h3>
            <div
              class="text-body-3 color-gray-tertiary font-weight-medium row-margin-small"
            >
              벤츠 더 뉴 C-class(W205/S205)
            </div>
            <div
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
            >
              가솔린 2.0 Sedan (개소세 30% 인하)<br />
              C200 AMG Line
            </div>
          </div>
          <div class="flex-box__cell">
            <RoundStatus :classNames="{ wrap: 'display-block' }" theme="denary">
              D-7
            </RoundStatus>
          </div>
        </div>
        <div class="row-margin-contents">
          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출잔액</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출원금</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <BasicBox className="row-margin-item-group">
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-1 font-weight-medium">결제예정금액</div>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <UnitText rightUnit="원">999,999,999</UnitText>
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>2022.02.02 (매월 2일)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>16/60</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>계약기간</KeyValueTitle>
                <KeyValueText>2021.01.05 ~ 2022.01.05</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>이용금리</KeyValueTitle>
                <KeyValueText>0.0% </KeyValueText>
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
                계약만기일이 30일 남았습니다.<br />
                만기후처리를 등록해 주세요.
              </p>
            </div>
          </BasicBox>
        </div>
      </div>
      <!-- //Case : 중고차오토론 -->

      <!-- Case : 중고차오토할부 -->
      <div>
        <div class="flex-box align-items-start">
          <div class="flex-box__cell flex-1">
            <h3 class="text-title-2">중고차오토할부 20고3929</h3>
            <div
              class="text-body-3 color-gray-tertiary font-weight-medium row-margin-small"
            >
              벤츠 더 뉴 C-class(W205/S205)
            </div>
            <div
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
            >
              가솔린 2.0 Sedan (개소세 30% 인하)<br />
              C200 AMG Line
            </div>
          </div>
          <div class="flex-box__cell">
            <RoundStatus :classNames="{ wrap: 'display-block' }" theme="denary">
              D-7
            </RoundStatus>
          </div>
        </div>
        <div class="row-margin-contents">
          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출잔액</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출원금</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <BasicBox className="row-margin-item-group">
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-1 font-weight-medium">결제예정금액</div>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <UnitText rightUnit="원">999,999,999</UnitText>
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>2022.02.02 (매월 2일)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>16/60</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>계약기간</KeyValueTitle>
                <KeyValueText>2021.01.05 ~ 2022.01.05</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>이용금리</KeyValueTitle>
                <KeyValueText>0.0% </KeyValueText>
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
                계약만기일이 30일 남았습니다.<br />
                만기후처리를 등록해 주세요.
              </p>
            </div>
          </BasicBox>
        </div>
      </div>
      <!-- //Case : 중고차오토할부 -->

      <div class="row-margin-contents">
        <ButtonList :classNames="{ wrap: 'row-margin-none' }">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary"
              >증명서 조회/발급</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary"
              >전자약정 계약서</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
        <BasicButton
          theme="tertiary"
          :classNames="{ wrap: 'row-margin-item-medium' }"
          >만기후처리</BasicButton
        >
        <BasicButton :classNames="{ wrap: 'row-margin-item-medium' }"
          >중도상환신청</BasicButton
        >
      </div>
    </section>

    <BasicHr class="row-margin-container-medium" />

    <section>
      <div class="text-title-2 font-weight-bold">당월 결제금액</div>
      <div class="text-title-2 color-blue font-weight-bold row-margin-small">
        총 999,999,999 원
      </div>

      <BasicBox className="row-margin-contents">
        <UiAccordion tagName="div">
          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>이번 회차 금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>기타비용</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <UiAccordionItem
            tagName="div"
            :classNames="{
              item: 'row-margin-item-group',
            }"
          >
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>총 연체금액</KeyValueTitle>
                <KeyValueText>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1">999,999,999 원</div>
                    <div class="flex-box__cell flex-box__cell--small">
                      <UiAccordionOpener
                        :classNames="{
                          button: $style['key-value-opener'],
                        }"
                      />
                    </div>
                  </div>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <UiAccordionLayer>
              <BasicBox theme="senary" :class="$style['contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>3회차 (2022.02.02)</KeyValueTitle>
                    <KeyValueText>99,999 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>4회차 (2022.01.02)</KeyValueTitle>
                    <KeyValueText>99,999 원</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <NoticeText :classNames="{ wrap: 'row-margin-item-group' }"
                  >지연 배상금이 포함된 금액입니다.</NoticeText
                >
              </BasicBox>
            </UiAccordionLayer>
          </UiAccordionItem>

          <KeyValue
            margin="regular"
            :classNames="{ wrap: 'row-margin-item-group' }"
          >
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>선수금</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>범칙금</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>자동차세</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </UiAccordion>
      </BasicBox>

      <ul :class="$style['logs']">
        <li :class="$style['logs__item']">
          <div :class="$style['logs__block']">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 class="text-body-1 font-weight-medium">결제/청구정보</h3>
              </div>
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
                <KeyValueTitle>결제방법</KeyValueTitle>
                <KeyValueText>가상계좌</KeyValueText>
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>청구방법</KeyValueTitle>
                <KeyValueText>이메일</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </div>
        </li>
      </ul>
    </section>

    <BasicHr class="row-margin-container-medium" />

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <RouterLink
            to="/my-loan/maintenance-history"
            :class="$style['icon-list__block']"
          >
            <span :class="$style['icon-list__icon']"><IconInstallation /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']">정비이력</span>
            </span>
          </RouterLink>
        </li>
        <li :class="$style['icon-list__item']">
          <RouterLink to="/my-loan/penalty" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconPenalty /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']">범칙금</span>
            </span>
          </RouterLink>
        </li>
        <li :class="$style['icon-list__item']">
          <RouterLink to="/my-loan/car-tax" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconCar /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']">자동차세</span>
            </span>
          </RouterLink>
        </li>
        <li :class="$style['icon-list__item']">
          <RouterLink
            to="/my-loan/designation-driver-empty"
            :class="$style['icon-list__block']"
          >
            <span :class="$style['icon-list__icon']"><iconDriver /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']">지정운전자</span>
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanDetailAuto.scss';
</style>
