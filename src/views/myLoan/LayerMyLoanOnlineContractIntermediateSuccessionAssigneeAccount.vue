<script>
// BF_M04_l021
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BankSelect from '@/components/ui/form/BankSelect.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    StepProgress,
    PageTextGroup,
    PageMainText,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    BankSelect,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicSelect,
  },
  setup() {
    const state = reactive({
      nameError: false,
      bankError: false,
      accountError: false,
      mailError: false,
    });

    const layer = ref(null);

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
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="5" :current="2" />
      </template>

      <PageTextGroup>
        <PageMainText>
          계좌 정보를<br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          titleText="이름"
          target="#layerMyLoanOnlineContractIntermediateSuccessionAssigneeAccountName"
        >
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이름"
                  id="layerMyLoanOnlineContractIntermediateSuccessionAssigneeAccountName"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="은행"
          target="#layerMyLoanOnlineContractIntermediateSuccessionAssigneeAccountBankButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.bankError">
            <InputBlock :error="state.bankError">
              <InputBlockCell :flexible="true">
                <BankSelect
                  id="layerMyLoanOnlineContractIntermediateSuccessionAssigneeAccountBank"
                  buttonId="layerMyLoanOnlineContractIntermediateSuccessionAssigneeAccountBankButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="계좌번호"
          target="#layerMyLoanOnlineContractIntermediateSuccessionAssigneeAccount"
        >
          <FormInvalid :error="state.accountError">
            <InputBlock :error="state.accountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="계좌번호"
                  id="layerMyLoanOnlineContractIntermediateSuccessionAssigneeAccount"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton size="mini" theme="quaternary">확인</BasicButton>
              </template>
            </InputBlock>
            <FormInvalidMessage>
              계좌번호를 다시 확인해 주세요.
            </FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="이메일"
          target="#layerMyLoanOnlineContractIntermediateSuccessionAssigneeAccountEmailMailId"
        >
          <FormInvalid :error="state.mailError">
            <InputBlock :error="state.mailError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이메일"
                  id="layerMyLoanOnlineContractIntermediateSuccessionAssigneeAccountEmailMailId"
                />
              </InputBlockCell>
              <InputBlockCell margin="regular">@</InputBlockCell>
              <InputBlockCell margin="regular" :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: 'naver.com',
                    },
                    {
                      value: '2',
                      text: 'hanmail.net',
                    },
                    {
                      value: '3',
                      text: 'gmail.com',
                    },
                    {
                      value: '4',
                      text: 'nate.com',
                    },
                    {
                      value: '5',
                      text: 'paran.com',
                    },
                    {
                      value: '6',
                      text: 'dreamwiz.com',
                    },
                    {
                      value: '7',
                      text: 'yahoo.com',
                    },
                    {
                      value: '8',
                      text: 'freechal.com',
                    },
                    {
                      value: '9',
                      text: '직접입력',
                    },
                  ]"
                  buttonTitle="이메일 도메인 선택하기"
                  layerTitle="이메일 도메인을 선택해 주세요"
                />
              </InputBlockCell>
            </InputBlock>

            <!-- Case : 직접입력 선택 시 노출 -->
            <InputBlock
              :error="state.mailError"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이메일 도메인 직접입력"
                  id="layerMyLoanOnlineContractIntermediateSuccessionAssigneeAccountEmailMailIdDomainSelf"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case : 직접입력 선택 시 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

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
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
