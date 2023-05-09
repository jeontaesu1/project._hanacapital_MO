<script>
// BF_M04_l020
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
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

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
    FormHelpText,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    SecurityInput,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const state = reactive({
      nameError: false,
      idNumberError: false,
      phoneError: false,
      buisnessNameError: false,
      buisnessLicenseError: false,
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
          양수인 정보를<br />
          <strong>입력해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          titleText="이름"
          target="#layerMyLoanOnlineContractIntermediateSuccessionAssigneeFormName001"
        >
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이름"
                  id="layerMyLoanOnlineContractIntermediateSuccessionAssigneeFormName001"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="주민등록번호"
          target="#layerMyLoanOnlineContractIntermediateSuccessionAssigneeFormNumber01"
        >
          <FormInvalid :error="state.idNumberError">
            <InputBlock :error="state.idNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="layerMyLoanOnlineContractIntermediateSuccessionAssigneeFormNumber01"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="주민등록번호 뒤 7자리"
                  :dot="[true, true, true, false, false, false, false]"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="휴대폰번호"
          target="#layerMyLoanOnlineContractIntermediateSuccessionAssigneeFormPhone001"
        >
          <FormInvalid :error="state.phoneError">
            <InputBlock :error="state.phoneError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="휴대폰번호"
                  id="layerMyLoanOnlineContractIntermediateSuccessionAssigneeFormPhone001"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : 개인사업자 -->
        <FormListItem
          titleText="상호명"
          target="#layerMyLoanOnlineContractIntermediateSuccessionAssigneeFormBuisnessName"
        >
          <FormInvalid :error="state.buisnessNameError">
            <InputBlock :error="state.buisnessNameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="상호명"
                  id="layerMyLoanOnlineContractIntermediateSuccessionAssigneeFormBuisnessName"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="사업자번호"
          target="#layerMyLoanOnlineContractIntermediateSuccessionAssigneeFormBuisnessLicense"
        >
          <FormInvalid :error="state.buisnessLicenseError">
            <InputBlock :error="state.buisnessLicenseError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="사업자번호"
                  id="layerMyLoanOnlineContractIntermediateSuccessionAssigneeFormBuisnessLicense"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>‘-’ 를 제외하고 입력해주세요.</FormHelpText>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 개인사업자 -->
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
