<script>
// IF_M04_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    StepProgress,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicHr,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '재고금융 만기연장');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {};
  },
};
</script>

<template>
  <StepProgress :total="5" :current="2" />
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        선택한 계약상품의<br />
        <strong>만기연장 내역을 확인해 주세요</strong>
      </PageMainText>
    </PageTextGroup>

    <BasicBox>
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <h3 class="text-body-1 font-weight-medium">65두 5451</h3>
          <p class="text-body-4 color-gray row-margin-small">
            그랜저HG 240 모던 컬렉션 2016
          </p>
        </BasicBoxHeadLeft>
      </BasicBoxHead>

      <KeyValueList margin="regular">
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>대출일자</KeyValueTitle>
          <KeyValueText>2019.03.05</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>대출실행금액</KeyValueTitle>
          <KeyValueText>13,000,000 원</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>원금잔액</KeyValueTitle>
          <KeyValueText>13,000,000 원</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>금리</KeyValueTitle>
          <KeyValueText>7.5%</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>기간</KeyValueTitle>
          <KeyValueText>3개월</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>상환방법</KeyValueTitle>
          <KeyValueText>만기일시상환</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>결제일자</KeyValueTitle>
          <KeyValueText>5일</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>설정금액</KeyValueTitle>
          <KeyValueText>1,300,000 원</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>연체이자율</KeyValueTitle>
          <KeyValueText>10.5%</KeyValueText>
        </KeyValueItem>

        <BasicHr
          theme="quaternary"
          type="contents"
          className="row-margin-item-group"
        />

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>만기일자</KeyValueTitle>
          <KeyValueText>2019.06.05</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>만기시 상환금액</KeyValueTitle>
          <KeyValueText>13,271,330 원</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>원금</KeyValueTitle>
          <KeyValueText>13,000,000 원</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>이자</KeyValueTitle>
          <KeyValueText>245,750 원</KeyValueText>
        </KeyValueItem>
      </KeyValueList>
    </BasicBox>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>다음</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventory-finance/InventoryFinanceExtensionView.scss';
</style>
