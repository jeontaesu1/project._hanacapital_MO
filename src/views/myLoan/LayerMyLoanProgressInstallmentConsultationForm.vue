<script>
// PF_M10_l008
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
    BasicSelect,
  },
  setup() {
    const state = reactive({
      nameError: false,
      amountError: false,
      periodError: false,
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
          할부신청 정보를<br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <FormList
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <FormListItem
          titleText="품목명"
          target="#layerMyLoanProgressInstallmentConsultationFormNameSearch"
        >
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="품목명"
                  id="layerMyLoanProgressInstallmentConsultationFormName"
                  :readonly="true"
                  defaultValue="CCTV_무"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="layerMyLoanProgressInstallmentConsultationFormNameSearch"
                  >품목찾기</BasicButton
                >
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="할부신청금액"
          target="#layerMyLoanProgressInstallmentConsultationFormAmount"
        >
          <FormInvalid :error="state.amountError">
            <InputBlock :error="state.amountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="할부신청금액"
                  id="layerMyLoanProgressInstallmentConsultationFormAmount"
                  pattern="\d*"
                  :useDelete="false"
                  align="right"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="할부신청기간"
          target="#layerMyLoanProgressInstallmentConsultationFormPeriodButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.periodError">
            <InputBlock :error="state.periodError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '3개월',
                    },
                    {
                      value: '2',
                      text: '4개월',
                    },
                    {
                      value: '3',
                      text: '5개월',
                    },
                    {
                      value: '4',
                      text: '6개월',
                    },
                    {
                      value: '5',
                      text: '7개월',
                    },
                    {
                      value: '6',
                      text: '8개월',
                    },
                    {
                      value: '7',
                      text: '9개월',
                    },
                    {
                      value: '8',
                      text: '10개월',
                    },
                    {
                      value: '9',
                      text: '11개월',
                    },
                    {
                      value: '10',
                      text: '12개월',
                    },
                    {
                      value: '11',
                      text: '13개월',
                    },
                    {
                      value: '12',
                      text: '14개월',
                    },
                    {
                      value: '13',
                      text: '15개월',
                    },
                    {
                      value: '14',
                      text: '16개월',
                    },
                    {
                      value: '15',
                      text: '17개월',
                    },
                    {
                      value: '16',
                      text: '18개월',
                    },
                    {
                      value: '17',
                      text: '19개월',
                    },
                    {
                      value: '18',
                      text: '20개월',
                    },
                    {
                      value: '19',
                      text: '21개월',
                    },
                    {
                      value: '20',
                      text: '22개월',
                    },
                    {
                      value: '21',
                      text: '23개월',
                    },
                    {
                      value: '22',
                      text: '24개월',
                    },
                    {
                      value: '23',
                      text: '25개월',
                    },
                    {
                      value: '24',
                      text: '26개월',
                    },
                    {
                      value: '25',
                      text: '27개월',
                    },
                    {
                      value: '26',
                      text: '28개월',
                    },
                    {
                      value: '27',
                      text: '29개월',
                    },
                    {
                      value: '28',
                      text: '30개월',
                    },
                    {
                      value: '29',
                      text: '31개월',
                    },
                    {
                      value: '30',
                      text: '32개월',
                    },
                    {
                      value: '31',
                      text: '33개월',
                    },
                    {
                      value: '32',
                      text: '34개월',
                    },
                    {
                      value: '33',
                      text: '35개월',
                    },
                    {
                      value: '34',
                      text: '36개월',
                    },
                  ]"
                  buttonTitle="할부신청기간 선택하기"
                  layerTitle="할부신청기간을 선택해 주세요"
                  id="layerMyLoanProgressInstallmentConsultationFormPeriod"
                  buttonId="layerMyLoanProgressInstallmentConsultationFormPeriodButton"
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
    </FullPopup>
  </UiLayer>
</template>
