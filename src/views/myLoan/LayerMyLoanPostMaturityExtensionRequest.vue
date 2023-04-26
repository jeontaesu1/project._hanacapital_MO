<script>
// My_M08_l005
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
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
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
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
    SecurityInput,
    BasicSelect,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const layer = ref(null);

    const state = reactive({
      nameError001: false,
      birthDateError001: false,
    });

    return {
      layer,
      state,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>만기후 연장 심사요청</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="6" :current="3" />
      </template>

      <PageTextGroup>
        <PageMainText>
          계약자 정보를<br />
          <strong>확인해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          titleText="이름"
          target="#layerMyLoanPostMaturityExtensionRequestInputMethod"
          :disabled="true"
        >
          <FormInvalid :error="state.nameError001_001">
            <InputBlock :error="state.nameError001_001" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이름"
                  id="layerMyLoanPostMaturityExtensionRequestInputMethod"
                  defaultValue="김하나"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="생년월일 (6자리)"
          target="#layerMyLoanPostMaturityExtensionRequestBirthDate"
          :disabled="true"
        >
          <FormInvalid :error="state.birthDateError001">
            <InputBlock :error="state.birthDateError001">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="layerMyLoanPostMaturityExtensionRequestBirthDate"
                  :disabled="true"
                  defaultValue="960123"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="주민등록번호 뒤 7자리"
                  :dot="[true, true, true, false, false, false, false]"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="휴대폰번호"
          target="#layerMyLoanPostMaturityExtensionRequestPhoneButton"
          :disabled="true"
        >
          <FormInvalid :error="state.phoneError">
            <InputBlock :error="state.phoneError">
              <InputBlockCell>
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: 'SKT',
                    },
                    {
                      value: '2',
                      text: 'KT',
                    },
                    {
                      value: '3',
                      text: 'LG U+',
                    },
                    {
                      value: '4',
                      text: '알뜰폰 SKT',
                    },
                    {
                      value: '5',
                      text: '알뜰폰 KT',
                    },
                    {
                      value: '6',
                      text: '알뜰폰 LG +',
                    },
                  ]"
                  buttonTitle="통신사 선택하기"
                  layerTitle="통신사를 선택해 주세요"
                  id="layerMyLoanPostMaturityExtensionRequestPhone"
                  buttonId="layerMyLoanPostMaturityExtensionRequestPhoneButton"
                  :classNames="{
                    wrap: 'input-width-telecom',
                  }"
                  title="휴대폰번호"
                  :disabled="true"
                />
              </InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="휴대폰번호"
                  id="layerIdentificationPhonePhone02"
                  defaultValue="01012345678"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case: 개인사업자인 경우 -->
        <FormListItem
          titleText="사업자명"
          target="#layerMyLoanPostMaturityExtensionRequestBusiness"
          :disabled="true"
        >
          <FormInvalid :error="state.nameError001_001">
            <InputBlock :error="state.nameError001_001" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="사업자명"
                  id="layerMyLoanPostMaturityExtensionRequestBusiness"
                  defaultValue="하나테크"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="사업자등록번호"
          target="#layerMyLoanPostMaturityExtensionRequestBusinessNumber"
          :disabled="true"
        >
          <FormInvalid :error="state.nameError001_001">
            <InputBlock :error="state.nameError001_001" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="사업자등록번호"
                  id="layerMyLoanPostMaturityExtensionRequestBusinessNumber"
                  defaultValue="140-52-11505"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- Case: 개인사업자인 경우 -->
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
