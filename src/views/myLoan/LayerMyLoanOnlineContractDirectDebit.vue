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

import IconLogo from '@/assets/images/icon/hanacapital-small.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';

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

    IconLogo,
    IconLink,
  },
  setup() {
    const layer = ref(null);
    const state = reactive({
      dateError: false,
      importedBankError: false,
      domesticAccountError: false,
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
        <PageMainText>
          <strong>자동이체 정보를</strong><br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

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
              <template v-slot:right>
                <BasicButton size="mini" theme="quaternary">확인</BasicButton>
              </template>
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

      <div :class="$style['join']">
        <div :class="$style['join__inner']">
          <div :class="$style['join__icon']"><IconLogo /></div>
          <div :class="$style['join__title']">하나은행 계좌가 없으신가요?</div>
          <TextButton
            :block="true"
            :classNames="{
              wrap: [$style['join__link'], 'text-body-4 color-gray'],
            }"
          >
            비대면 개설
            <template v-slot:rightIcon>
              <IconLink />
            </template>
          </TextButton>
        </div>
      </div>

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

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDirectDebit.scss';
</style>
