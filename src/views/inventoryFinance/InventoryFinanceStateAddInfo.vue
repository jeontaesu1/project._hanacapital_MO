<script>
// IF_M02_p004
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
import UnitText from '@/components/ui/text/UnitText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

import IconCheckDocument from '@/assets/images/icon/check-document.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';

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
    UnitText,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicSelect,
    BasicInput,
    FormHelpText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BottomSticky,
    IconCheckDocument,
    IconLink,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '재고금융 대출신청');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    const state = reactive({
      dateError: false,
      paymentDateError: false,
      amountError: false,
      accountError: false,
      carOwnerError: false,
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
        금융정보를<br />
        <strong>입력해 주세요</strong>
      </PageMainText>
    </PageTextGroup>

    <div>
      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <p class="text-body-4 font-weight-light row-margin-mini">
              2021년식
            </p>
            <h3 class="text-body-1 font-weight-medium">20노1511</h3>
            <p class="text-body-4 color-gray row-margin-small">
              5시리즈(7세대) 520d M 스포츠 패키지 플러스
            </p>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
            verticalAlign="center"
          >
            <KeyValueTitle
              :classNames="{
                title: 'color-black',
              }"
              >대출가능한도</KeyValueTitle
            >
            <KeyValueText>
              <UnitText rightUnit="원" align="right">23,000,000</UnitText>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <FormList
        :classNames="{
          wrap: 'row-margin-contents-group',
        }"
      >
        <FormListItem
          titleText="대출신청기간"
          target="#inventoryFinanceStateAddInfoDateButton"
          :selectOnly="true"
          :disabled="true"
        >
          <FormInvalid :error="state.dateError">
            <InputBlock :error="state.dateError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '3개월',
                    },
                  ]"
                  buttonTitle="대출신청기간 선택하기"
                  layerTitle="대출신청기간을 선택해 주세요"
                  id="inventoryFinanceStateAddInfoDate"
                  defaultValue="1"
                  buttonId="inventoryFinanceStateAddInfoDateButton"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="결제일자"
          target="#inventoryFinanceStateAddInfoPaymentDateButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.paymentDateError">
            <InputBlock :error="state.paymentDateError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '1일',
                    },
                    {
                      value: '2',
                      text: '5일',
                    },
                    {
                      value: '3',
                      text: '11일',
                    },
                    {
                      value: '4',
                      text: '15일',
                    },
                    {
                      value: '5',
                      text: '21일',
                    },
                  ]"
                  buttonTitle="결제일자 선택하기"
                  layerTitle="결제일자를 선택해 주세요"
                  id="inventoryFinanceStateAddInfoPaymentDate"
                  buttonId="inventoryFinanceStateAddInfoPaymentDateButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="대출신청금액"
          target="#inventoryFinanceStateAddInfoAmount"
        >
          <FormInvalid :error="state.amountError">
            <InputBlock :error="state.amountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  align="right"
                  :useDelete="false"
                  pattern="\d*"
                  title="대출신청금액"
                  id="inventoryFinanceStateAddInfoAmount"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">만원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : 선택 계좌가 있는 경우 -->
        <FormListItem
          titleText="계좌 선택"
          target="#inventoryFinanceStateAddInfoAccountButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.accountError">
            <InputBlock :error="state.accountError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '하나 123-456-7890123',
                    },
                    {
                      value: '2',
                      text: '신한 123-456-7890123',
                    },
                    {
                      value: '3',
                      text: '우리 123-456-7890123',
                    },
                  ]"
                  buttonTitle="계좌 선택하기"
                  layerTitle="계좌를 선택해 주세요"
                  id="inventoryFinanceStateAddInfoAccount"
                  buttonId="inventoryFinanceStateAddInfoAccountButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText
              >재고금융 대출금 송금계좌 및 자동이체 계좌</FormHelpText
            >
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 선택 계좌가 있는 경우 -->

        <!-- Case : 선택 계좌가 없는 경우 -->
        <FormListItem
          titleText="계좌 선택"
          target="#inventoryFinanceStateAddInfoAccountButton"
          :selectOnly="true"
          :disabled="true"
        >
          <FormInvalid :error="state.accountError">
            <InputBlock :error="state.accountError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '하나 123-456-7890123',
                    },
                    {
                      value: '2',
                      text: '신한 123-456-7890123',
                    },
                    {
                      value: '3',
                      text: '우리 123-456-7890123',
                    },
                  ]"
                  buttonTitle="계좌 선택하기"
                  layerTitle="계좌를 선택해 주세요"
                  id="inventoryFinanceStateAddInfoAccount"
                  buttonId="inventoryFinanceStateAddInfoAccountButton"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText
              >재고금융 대출금 송금계좌 및 자동이체 계좌</FormHelpText
            >
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 선택 계좌가 없는 경우 -->

        <FormListItem
          titleText="차량 전 소유주"
          target="#inventoryFinanceStateAddInfoCarOwner"
        >
          <FormInvalid :error="state.carOwnerError">
            <InputBlock :error="state.carOwnerError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  align="right"
                  :useDelete="false"
                  pattern="\d*"
                  title="차량 전 소유주"
                  id="inventoryFinanceStateAddInfoCarOwner"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>
              차량 전 소유주 정보를 정확히 입력 해 주시기 바랍니다.
            </FormHelpText>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <section class="row-margin-container-medium">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell">
            <h3 class="text-title-2">구비서류등록</h3>
          </div>
          <div class="flex-box__cell flex-box__cell--small">
            <div class="text-body-3">(선택)</div>
          </div>
        </div>

        <!-- Case : : 등록 전 -->
        <button
          type="button"
          :class="[$style['add-button'], 'row-margin-item']"
        >
          <span :class="$style['add-button__inner']">
            <span :class="$style['add-button__text']">서류등록</span>
            <span
              :class="[
                $style['add-button__icon'],
                $style['add-button__icon--secondary'],
              ]"
            >
              <IconLink />
            </span>
          </span>
        </button>
        <!-- //Case : : 등록 전 -->

        <!-- Case : : 등록 후 -->
        <BasicBox>
          <div class="flex-box">
            <div class="flex-box__cell">
              <IconCheckDocument class="display-block" />
            </div>
            <div class="flex-box__cell flex-1">
              <div class="text-body-3">등록 완료</div>
            </div>
            <div class="flex-box__cell">
              <BasicButton size="mini" theme="quaternary">추가첨부</BasicButton>
            </div>
          </div>
        </BasicBox>
        <!-- //Case : : 등록 후 -->
      </section>
    </div>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary">이전</BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton>저장</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/InventoryFinanceStateAddInfo.scss';
</style>
