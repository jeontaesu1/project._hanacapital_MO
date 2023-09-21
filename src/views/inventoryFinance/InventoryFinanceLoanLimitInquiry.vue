<script>
// IF_M08_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicBox,
    BasicBoxHead,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BottomSticky,
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
        <strong>
          약정 목록을 확인하고<br />
          약정을 진행하세요
        </strong>
      </PageMainText>
    </PageTextGroup>

    <!-- Case : 상품권한 2개일 경우 노출 -->
    <BoxCheckList>
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="inventoryFinanceLoanLimitInquiryType"
          id="inventoryFinanceLoanLimitInquiryType001"
        >
          <BoxCheckLabel>재고금융</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="inventoryFinanceLoanLimitInquiryType"
          id="inventoryFinanceLoanLimitInquiryType002"
        >
          <BoxCheckLabel>재고금융 Ⅱ</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
    </BoxCheckList>
    <!-- // Case : 상품권한 2개일 경우 노출 -->

    <ul class="reset-list row-margin-item-group">
      <li class="row-margin-item-group">
        <BasicBox>
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
      </li>
    </ul>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>다음</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>
