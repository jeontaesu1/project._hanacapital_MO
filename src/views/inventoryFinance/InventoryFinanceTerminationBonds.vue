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
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

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
    FormHelpText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicButton,
    TextButton,
    BasicDatepicker,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
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
      dateError: false,
      minDate: '2023.04.21',
      maxDate: '2023.04.21',
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
        조회해 주세요
      </PageMainText>
    </PageTextGroup>

    <div>
      <FormList>
        <FormListItem
          titleText="차량번호"
          target="#inventoryFinanceTerminationBondsCarNumber"
        >
          <FormInvalid :error="state.carNumberError">
            <InputBlock :error="state.carNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="차량번호"
                  id="inventoryFinanceTerminationBondsCarNumber"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="조회기간" :forceFocus="true">
          <FormInvalid :error="state.dateError">
            <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="inventoryFinanceTerminationBondsDateCheck"
                  id="inventoryFinanceTerminationBondsDateCheck001"
                >
                  <BoxCheckLabel>6개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="inventoryFinanceTerminationBondsDateCheck"
                  id="inventoryFinanceTerminationBondsDateCheck002"
                >
                  <BoxCheckLabel>12개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <InputBlock :error="state.dateError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="조회기간 시작 날짜"
                  id="inventoryFinanceTerminationBondsDateStart"
                  buttonId="inventoryFinanceTerminationBondsDateStartButton"
                  :max="state.maxDate"
                  v-model="state.minDate"
                />
              </InputBlockCell>
              <InputBlockCell margin="regular">
                <div class="text-body-3">~</div>
              </InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicDatepicker
                  title="조회기간 종료 날짜"
                  id="inventoryFinanceTerminationBondsDateEnd"
                  buttonId="inventoryFinanceTerminationBondsDateEndButton"
                  :min="state.minDate"
                  v-model="state.maxDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>조회기간은 최대 1년까지 가능해요.</FormHelpText>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <BasicButton
        :line="true"
        :classNames="{ wrap: 'row-margin-contents-group' }"
        >조회</BasicButton
      >
    </div>

    <BasicHr className="row-margin-container-medium" />

    <section class="contents-wrap">
      <h3 class="text-title-2 row-margin-contents">대출내역</h3>

      <!-- Case : 조회내역이 없을 경우 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">조회된 내역이 없습니다.</p>
      </div>
      <!-- //Case : 조회내역이 없을 경우 -->

      <ul class="reset-list">
        <!-- Case : 기본 -->
        <li class="row-margin-item-group">
          <BasicBox>
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
        </li>
        <!-- // Case : 기본 -->
      </ul>

      <div class="inline-wrap align-center row-margin-item-group">
        <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
          더보기
          <template v-slot:rightIcon>
            <IconArrow />
          </template>
        </TextButton>
      </div>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/InventoryFinanceTerminationBonds.scss';
</style>
