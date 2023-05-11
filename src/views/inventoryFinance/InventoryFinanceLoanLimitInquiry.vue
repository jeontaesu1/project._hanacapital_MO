<script>
// IF_M08_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    BasicBox,
    BasicBoxHead,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '한도조회');
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

    <!-- Case : 상품권한 2개(상품권한 1개일 경우 Tab 없어짐) -->
    <UiTab>
      <NavTab :useUiTab="true" class="row-margin-contents-group">
        <NavTabButton link="inventoryFinanceLoanLimitInquiryNavTab001_001">
          재고금융
        </NavTabButton>
        <NavTabButton link="inventoryFinanceLoanLimitInquiryNavTab001_002">
          재고금융 Ⅱ
        </NavTabButton>
      </NavTab>

      <UiTabPanel name="inventoryFinanceLoanLimitInquiryNavTab001_001">
        <BasicBox class="row-margin-contents-group">
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
          </KeyValue>
        </BasicBox>
      </UiTabPanel>

      <UiTabPanel name="inventoryFinanceLoanLimitInquiryNavTab001_002">
        <BasicBox class="row-margin-contents-group">
          <BasicBoxHead>
            <h3 class="text-body-1 font-weight-medium">
              주식회사알차이노베이션 (재고금융 Ⅱ)
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
          </KeyValue>
        </BasicBox>
      </UiTabPanel>
    </UiTab>
    <!-- // Case : 상품권한 2개 -->

    <!-- Case : 상품권한 1개 -->
    <BasicBox class="row-margin-contents-group">
      <BasicBoxHead>
        <h3 class="text-body-1 font-weight-medium">
          주식회사알차이노베이션 (재고금융 Ⅱ)
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
      </KeyValue>
    </BasicBox>
    <!-- // Case : 상품권한 1개 -->

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
