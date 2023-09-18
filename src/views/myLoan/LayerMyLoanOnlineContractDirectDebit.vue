<script>
// My_M03_l018
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BankSelect from '@/components/ui/form/BankSelect.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    StepProgress,
    FormList,
    FormListItem,
    FormInvalid,
    FormHelpText,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicSelect,
    BankSelect,
    NoticeText,
    TextButton,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
  },
  setup() {
    const layer = ref(null);
    const state = reactive({
      dateError: false,
      paymentDateError: false,
      importedBankError: false,
      domesticAccountError: false,
      domesticBankNameError: false,
    });

    return {
      state,
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>온라인약정</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="8" :current="3" />
      </template>

      <PageTextGroup>
        <!-- Case : 기본 -->
        <PageMainText>
          <strong>자동이체 정보를</strong><br />
          입력해 주세요
        </PageMainText>
        <!-- // Case : 기본 -->

        <!-- Case : 제휴사 중고차 약정일 경우 문구 노출 -->
        <PageMainText>
          <strong>대출금 지급 및 자동이체</strong><br />
          계좌(본인계좌)를 입력해 주세요.
        </PageMainText>
        <!-- // Case : 제휴사 중고차 약정일 경우 문구 노출 -->
      </PageTextGroup>

      <!-- Case : "중고차 구약정" -->
      <section>
        <h3 class="text-title-2 row-margin-contents">계좌정보</h3>

        <BasicBox>
          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>금융기관명</KeyValueTitle>
              <KeyValueText>하나은행</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>출금계좌번호</KeyValueTitle>
              <KeyValueText>1234567890123</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>
      <!-- // Case : "중고차 구약정" -->

      <!-- Case : "중고차 구약정" 인 경우 비노출 -->
      <FormList>
        <FormListItem
          titleText="결제일"
          target="#layerMyLoanOnlineContractDirectDebitDateButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.dateError">
            <InputBlock :error="state.dateError">
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
                  buttonTitle="결제일 선택하기"
                  layerTitle="결제일을 선택해 주세요"
                  id="layerMyLoanOnlineContractDirectDebitDate"
                  buttonId="layerMyLoanOnlineContractDirectDebitDateButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : 오토 할부/론에서만 결제일 선택 후 노출 -->
        <FormListItem
          titleText="1회차 납부일"
          target="#layerMyLoanOnlineContractDirectDebitPaymentDate"
          :disabled="true"
        >
          <FormInvalid :error="state.paymentDateError">
            <InputBlock :error="state.paymentDateError" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="1회차 납부일"
                  id="layerMyLoanOnlineContractDirectDebitPaymentDate"
                  :disabled="true"
                  defaultValue="2022.04.25"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 오토 할부/론에서만 결제일 선택 후 노출 -->

        <!-- Case : 개인사업자일 경우 -->
        <FormListItem
          titleText="예금주명"
          target="layerMyLoanOnlineContractDirectDebitDomesticBankName"
        >
          <FormInvalid :error="state.domesticBankNameError">
            <InputBlock :error="state.domesticBankNameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="예금주명"
                  id="layerMyLoanOnlineContractDirectDebitDomesticBankName"
                  defaultValue="김하나"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 개인사업자일 경우 -->

        <FormListItem
          titleText="은행"
          target="#layerMyLoanOnlineContractDirectDebitImportedBankButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.importedBankError">
            <InputBlock :error="state.importedBankError">
              <InputBlockCell :flexible="true">
                <BankSelect
                  id="layerMyLoanOnlineContractDirectDebitImportedBank"
                  buttonId="layerMyLoanOnlineContractDirectDebitImportedBankButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="계좌번호"
          target="#layerMyLoanOnlineContractDirectDebitDomesticAccount"
        >
          <FormInvalid :error="state.domesticAccountError">
            <InputBlock :error="state.domesticAccountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="계좌번호"
                  id="layerMyLoanOnlineContractDirectDebitDomesticAccount"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>
              계좌번호를 다시 확인해 주세요.
            </FormInvalidMessage>
            <FormHelpText>‘-’ 를 제외하고 입력해주세요.</FormHelpText>
          </FormInvalid>
          <div class="flex-box row-margin-item">
            <div class="flex-box__cell flex-1">
              <NoticeText>보유하고 있는 계좌를 조회하세요.</NoticeText>
            </div>
            <div class="flex-box__cell">
              <TextButton theme="secondary" :underline="true" :block="true">
                보유계좌조회
              </TextButton>
            </div>
          </div>
        </FormListItem>
      </FormList>
      <!-- // Case : "중고차 구약정" 인 경우 비노출 -->

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>계좌인증</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDirectDebit.scss';
</style>
