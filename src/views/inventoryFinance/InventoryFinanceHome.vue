<script>
// IF_M01_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconSearchMoney from '@/assets/images/icon/search-money.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import IconDateWhite from '@/assets/images/icon/date-white.svg?component';
import IconDocumentAdd from '@/assets/images/icon/document-add.svg?component';
import IconCheckCompleted from '@/assets/images/icon/check-completed.svg?component';
import IconCommissionRateRepayment from '@/assets/images/icon/commission-rate-repayment.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    IconSearchMoney,
    IconDeposit,
    IconDateWhite,
    IconDocumentAdd,
    IconCheckCompleted,
    IconCommissionRateRepayment,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '재고금융');
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
    <PageTextGroup>
      <PageMainText>
        약정 목록을 확인하고<br />
        <strong>약정을 진행하세요</strong>
      </PageMainText>
    </PageTextGroup>

    <ul class="reset-list">
      <li class="row-margin-item-group">
        <BasicBox>
          <BasicBoxHead>
            <h3 class="text-body-1 font-weight-medium">
              주식회사알차이노베이션 (재고금융)
            </h3>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>약정기간</KeyValueTitle>
              <KeyValueText>2021.11.10 ~ 2022.01.10</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>한도금액</KeyValueTitle>
              <KeyValueText>200,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>한도잔액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>실행건수</KeyValueTitle>
              <KeyValueText>N 건</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>실행금액</KeyValueTitle>
              <KeyValueText>N 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </li>

      <li class="row-margin-item-group">
        <BasicBox>
          <BasicBoxHead>
            <h3 class="text-body-1 font-weight-medium">
              주식회사알차이노베이션 (재고금융Ⅱ)
            </h3>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>약정기간</KeyValueTitle>
              <KeyValueText>2021.11.10 ~ 2022.03.10</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>한도금액</KeyValueTitle>
              <KeyValueText>200,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>한도잔액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>실행건수</KeyValueTitle>
              <KeyValueText>N 건</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>실행금액</KeyValueTitle>
              <KeyValueText>N 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </li>
    </ul>

    <BasicHr
      theme="tertiary"
      type="contents"
      className="row-margin-container"
    />

    <div :class="$style['icon-buttons']">
      <ul :class="$style['icon-buttons__list']">
        <li :class="$style['icon-buttons__item']">
          <button type="button" :class="$style['icon-buttons__block']">
            <span :class="$style['icon-buttons__icon']">
              <IconSearchMoney />
            </span>
            <span :class="$style['icon-buttons__content']">
              <span
                :class="[$style['icon-buttons__title'], 'font-weight-medium']"
              >
                한도조회
              </span>
            </span>
          </button>
        </li>
        <li :class="$style['icon-buttons__item']">
          <button type="button" :class="$style['icon-buttons__block']">
            <span :class="$style['icon-buttons__icon']">
              <IconDeposit />
            </span>
            <span :class="$style['icon-buttons__content']">
              <span
                :class="[$style['icon-buttons__title'], 'font-weight-medium']"
                >대출신청</span
              >
            </span>
          </button>
        </li>
        <li :class="$style['icon-buttons__item']">
          <button type="button" :class="$style['icon-buttons__block']">
            <span :class="$style['icon-buttons__icon']">
              <IconCommissionRateRepayment />
            </span>
            <span :class="$style['icon-buttons__content']">
              <span
                :class="[$style['icon-buttons__title'], 'font-weight-medium']"
                >중도상환</span
              >
            </span>
          </button>
        </li>
        <li :class="$style['icon-buttons__item']">
          <button type="button" :class="$style['icon-buttons__block']">
            <span :class="$style['icon-buttons__icon']">
              <IconDateWhite />
            </span>
            <span :class="$style['icon-buttons__content']">
              <span
                :class="[$style['icon-buttons__title'], 'font-weight-medium']"
                >만기연장</span
              >
            </span>
          </button>
        </li>
        <li :class="$style['icon-buttons__item']">
          <button type="button" :class="$style['icon-buttons__block']">
            <span :class="$style['icon-buttons__icon']">
              <IconDocumentAdd />
            </span>
            <span :class="$style['icon-buttons__content']">
              <span
                :class="[$style['icon-buttons__title'], 'font-weight-medium']"
              >
                구비서류추가등록
              </span>
            </span>
          </button>
        </li>
        <li :class="$style['icon-buttons__item']">
          <button type="button" :class="$style['icon-buttons__block']">
            <span :class="$style['icon-buttons__icon']">
              <IconCheckCompleted />
            </span>
            <span :class="$style['icon-buttons__content']">
              <span
                :class="[$style['icon-buttons__title'], 'font-weight-medium']"
                >종료건 확인</span
              >
            </span>
          </button>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/InventoryFinanceHome.scss';
</style>
