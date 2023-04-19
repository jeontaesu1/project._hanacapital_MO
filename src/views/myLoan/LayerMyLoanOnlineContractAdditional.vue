<script>
// My_M03_l020
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
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

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
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicSelect,
  },
  setup() {
    const layer = ref(null);
    const state = reactive({
      typeError: false,
      objectError: false,
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
          <strong>추가 정보를</strong><br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem titleText="주거형태">// 주거형태</FormListItem>
        <FormListItem titleText="주택소유구분" :forceFocus="true">
          <FormInvalid :error="state.typeError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanOnlineContractAdditionalType"
                  id="layerMyLoanOnlineContractAdditionalType1"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>본인소유</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanOnlineContractAdditionalType"
                  id="layerMyLoanOnlineContractAdditionalType2"
                >
                  <BoxCheckLabel>전/월세</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanOnlineContractAdditionalType"
                  id="layerMyLoanOnlineContractAdditionalType3"
                >
                  <BoxCheckLabel>기타</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="대출목적"
          target="#layerMyLoanOnlineContractAdditionalobjectButton001"
          :selectOnly="true"
        >
          <FormInvalid :error="state.objectError">
            <InputBlock :error="state.objectError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '차량구입자금',
                    },
                    {
                      value: '2',
                      text: '주택자금',
                    },
                    {
                      value: '3',
                      text: '경조사금',
                    },
                    {
                      value: '4',
                      text: '타기관 대출금상환',
                    },
                    {
                      value: '5',
                      text: '교육비',
                    },
                    {
                      value: '6',
                      text: '의료비',
                    },
                    {
                      value: '7',
                      text: '사업자금(운전자금)',
                    },
                    {
                      value: '8',
                      text: '가계자금',
                    },
                    {
                      value: '9',
                      text: '기타',
                    },
                  ]"
                  buttonTitle="대출목적선택하기"
                  layerTitle="대출목적을 선택해 주세요"
                  id="layerMyLoanOnlineContractAdditionalobject001"
                  buttonId="layerMyLoanOnlineContractAdditionalobjectButton001"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="거래자금원천" :disabled="true">
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="거래자금원천"
                defaultValue="대출금"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
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
