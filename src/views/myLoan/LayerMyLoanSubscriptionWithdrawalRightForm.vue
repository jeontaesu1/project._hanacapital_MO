<script>
// My_M06_l003
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    StepProgress,
    ButtonList,
    ButtonListItem,
    BasicButton,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    NoticeText,
    BasicSelect,
  },
  setup() {
    const state = reactive({
      sumError: false,
      typeError: false,
      accountError: false,
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
        <StepProgress :total="3" :current="2" />
      </template>

      <PageTextGroup>
        <PageMainText>
          청약철회 상환금액과 결제방법을<br />
          확인해 주세요
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          titleText="청약철회 상환금액"
          target="#layerMyLoanSubscriptionWithdrawalRightFormSum"
          :disabled="true"
        >
          <FormInvalid :error="state.sumError">
            <InputBlock :error="state.sumError" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  :useDelete="false"
                  align="right"
                  id="layerMyLoanSubscriptionWithdrawalRightFormSum"
                  defaultValue="10,002,120"
                  :disabled="true"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">만원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>

            <NoticeText :classNames="{ wrap: 'row-margin-item' }">
              당일 기준 금액으로
              <span class="color-green">17시 이내</span> 입금해 주셔야 합니다.
            </NoticeText>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="결제방법"
          target="#layerMyLoanSubscriptionWithdrawalRightFormType"
          :disabled="true"
        >
          <FormInvalid :error="state.typeError">
            <InputBlock :error="state.typeError" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="결제방법"
                  id="layerMyLoanSubscriptionWithdrawalRightFormType"
                  defaultValue="가상계좌"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="계좌정보"
          target="#layerMyLoanSubscriptionWithdrawalRightFormAccountButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.accountError">
            <InputBlock :error="state.accountError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '하나 123-456-78457',
                    },
                  ]"
                  buttonTitle="계좌정보 선택하기"
                  layerTitle="계좌정보를 선택해 주세요"
                  id="layerMyLoanSubscriptionWithdrawalRightFormAccount"
                  buttonId="layerMyLoanSubscriptionWithdrawalRightFormAccountButton"
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
            <BasicButton>청약철회 신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
