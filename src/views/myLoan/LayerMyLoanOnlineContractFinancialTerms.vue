<script>
// My_M03_l021
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
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';

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
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicDatepicker,
  },
  setup() {
    const layer = ref(null);
    const state = reactive({
      buyError: false,
      nameError: false,
      dateError: false,
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
          <strong>금융조건을</strong><br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem titleText="차량 매매가격" :forceFocus="true">
          <FormInvalid :error="state.buyError">
            <ButtonList :wrap="true" :col="3" class="row-margin-small">
              <ButtonListItem>
                <BasicButton :line="true" theme="quaternary" size="small">
                  + 10만
                </BasicButton>
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton :line="true" theme="quaternary" size="small">
                  + 100만
                </BasicButton>
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton :line="true" theme="quaternary" size="small">
                  + 300만
                </BasicButton>
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton :line="true" theme="quaternary" size="small">
                  + 500만
                </BasicButton>
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton :line="true" theme="quaternary" size="small">
                  + 1000만
                </BasicButton>
              </ButtonListItem>
            </ButtonList>

            <InputBlock :error="state.buyError" class="row-margin-item-medium">
              <InputBlockCell :flexible="true">
                <BasicInput
                  align="right"
                  :useDelete="false"
                  type="number"
                  pattern="\d*"
                  title="차량 매매가격 직접입력"
                  id="layerMyLoanOnlineContractFinancialTermsBuySelf"
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
          titleText="인수일자"
          target="#layerMyLoanOnlineContractFinancialTermsDateButton"
        >
          <FormInvalid :error="state.dateError">
            <InputBlock :error="state.dateError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="인수 요청일"
                  id="layerMyLoanOnlineContractFinancialTermsDate"
                  buttonId="layerMyLoanOnlineContractFinancialTermsDateButton"
                  :onChange="testInputEvent"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="차량 판매자"
          target="#layerMyLoanOnlineContractFinancialTermsName"
        >
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="차량 판매자"
                  placeholder="이름 입력"
                  id="layerMyLoanOnlineContractFinancialTermsName"
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
