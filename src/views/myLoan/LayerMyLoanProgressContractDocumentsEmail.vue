<script>
// My_M03_b017
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicSelect,
  },
  setup() {
    const layer = ref(null);
    const state = reactive({
      mailError: false,
    });

    return {
      state,
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle> E-mail을 입력해 주세요 </PopupTitle>
        </ToastPopupHead>
      </template>

      <FormList>
        <FormListItem
          titleText="이메일"
          target="#layerMyLoanProgressContractDocumentsEmailMailId"
        >
          <FormInvalid :error="state.mailError">
            <InputBlock :error="state.mailError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이메일"
                  id="layerMyLoanProgressContractDocumentsEmailMailId"
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
            <InputBlock
              :error="state.mailError"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이메일 도메인 직접입력"
                  id="layerMyLoanProgressContractDocumentsEmailDomainSelf"
                />
              </InputBlockCell>
            </InputBlock>
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
    </ToastPopup>
  </UiLayer>
</template>
