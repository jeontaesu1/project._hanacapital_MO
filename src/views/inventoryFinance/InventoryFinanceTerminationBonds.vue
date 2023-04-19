<script>
// IF_M06_p001
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconArrow from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicButton,
    TextButton,
    IconArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      carNumberError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '재고금융 종료채권');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        확인하실 상품을<br />
        <strong>조회해 주세요</strong>
      </PageMainText>
    </PageTextGroup>

    <div>
      <FormList>
        <FormListItem
          titleText="차량번호"
          target="#InventoryFinanceEarlyListCarNumber"
        >
          <FormInvalid :error="state.carNumberError">
            <InputBlock :error="state.carNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="차량번호"
                  id="InventoryFinanceEarlyListCarNumber"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <FormListItem titleText="조회기간"> // DatePicker </FormListItem>
      </FormList>

      <BasicButton
        line="true"
        :classNames="{ wrap: 'row-margin-contents-group' }"
        >조회</BasicButton
      >
    </div>

    <BasicHr className="row-margin-container-medium" />

    <h3 class="text-title-2 row-margin-contents row-margin-top-none">
      대출내역
    </h3>

    <!-- Case : 조회내역이 없을 경우 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">조회된 내역이 없습니다.</p>
    </div>
    <!-- //Case : 조회내역이 없을 경우 -->

    <BasicBox class="row-margin-item-group">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <h3 class="text-body-1 font-weight-medium">12다 1234</h3>
          <p class="text-body-4 color-gray row-margin-small">
            K8 하이브리드(GL3) 노블레스 라이트
          </p>
        </BasicBoxHeadLeft>
      </BasicBoxHead>

      <KeyValue margin="regular">
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>대출신청금액</KeyValueTitle>
          <KeyValueText>7,000,000 원</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>대출기간</KeyValueTitle>
          <KeyValueText>2022.09.13 ~ 2022.12.12</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>상환금액</KeyValueTitle>
          <KeyValueText>7,040,000 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>결제방법</KeyValueTitle>
          <KeyValueText>가상계좌입금</KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <div class="inline-wrap align-center">
      <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
        더보기
        <template v-slot:rightIcon>
          <IconArrow />
        </template>
      </TextButton>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventory-finance/InventoryFinanceTerminationBonds.scss';
</style>
