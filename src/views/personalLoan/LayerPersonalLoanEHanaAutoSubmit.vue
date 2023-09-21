<script>
// PF_M01_l002
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageSubText,
    BasicSelect,
  },
  setup() {
    const state = reactive({
      selectError: false,
      passwordError: false,
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
      </template>

      <PageTextGroup>
        <PageMainText>
          공동인증서로 소득정보를<br />
          자동 제출할 수 있어요
        </PageMainText>
        <PageSubText>
          건강보험공단 또는 국민연금공단,<br />
          국세청의 소득정보(자격득실 및 납부 확인서, 소득금액증명원)을
          자동제출합니다.
        </PageSubText>
        <PageSubText>
          소득정보 자동제출 시 공동인증서가 필요합니다.
        </PageSubText>
      </PageTextGroup>

      <FormList>
        <!-- Case : 공동인증서 있을 때 -->
        <FormListItem
          titleText="공동인증서"
          target="#layerPersonalLoanEHanaAutoSubmitSelectButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.selectError">
            <InputBlock :error="state.selectError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '[2022-12-31]김하나\n()0004048100574819',
                    },
                    {
                      value: '2',
                      text: '[2022-12-31]김둘\n()0004048100574819',
                    },
                  ]"
                  buttonTitle="공동인증서 선택하기"
                  layerTitle="공동인증서를 선택해 주세요"
                  id="layerPersonalLoanEHanaAutoSubmitSelect"
                  buttonId="layerPersonalLoanEHanaAutoSubmitSelectButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="공동인증서 비밀번호"
          target="#layerPersonalLoanEHanaAutoSubmitPassword"
        >
          <FormInvalid :error="state.passwordError">
            <InputBlock :error="state.passwordError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="password"
                  title="공동인증서 비밀번호"
                  id="layerPersonalLoanEHanaAutoSubmitPassword"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 공동인증서 있을 때 -->

        <!-- Case : 공동인증서 없을 때 -->
        <FormListItem titleText="공동인증서" :disabled="true">
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                defaultValue="공동인증서가 없습니다."
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>
        <!-- // Case : 공동인증서 없을 때 -->
      </FormList>

      <template v-slot:foot>
        <ButtonList
          align="full"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <!-- Case : 공동인증서 있을 때 -->
          <ButtonListItem>
            <BasicButton>약관동의 후 제출하기</BasicButton>
          </ButtonListItem>
          <!-- //Case : 공동인증서 있을 때 -->

          <!-- Case : 공동인증서 없을 때 -->
          <ButtonListItem>
            <BasicButton :line="true">공동인증서 가져오기</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>소득정보 직접입력</BasicButton>
          </ButtonListItem>
          <!-- // Case : 공동인증서 없을 때 -->
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
