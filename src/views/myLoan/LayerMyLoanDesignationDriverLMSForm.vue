<script>
// My_M01_l011
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    PopupTitle,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    StepProgress,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormHelpText,
    FormInvalid,
    BasicSelect,
    FormInvalidMessage,
  },
  setup() {
    const state = reactive({
      numberError: false,
      dateError: false,
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
  <UiLayer ref="layer" type="full">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>지정운전자</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="4" :current="3" />
      </template>

      <PageTextGroup>
        <PageMainText>
          지정운전자 정보를<br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem titleText="계약자와의 관계" :disabled="true">
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="계약자와의 관계"
                defaultValue="친인척"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>

        <FormListItem titleText="이름" :disabled="true">
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" defaultValue="김하나" :disabled="true" />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>

        <FormListItem titleText="생년월일" :disabled="true">
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="생년월일"
                defaultValue="89.01.01"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <FormHelpText>주민등록증상 생년월일을 입력해 주세요.</FormHelpText>
        </FormListItem>

        <FormListItem
          titleText="면허발급번호"
          target="#layerMyLoanDesignationDriverLMSFormNumber"
        >
          <FormInvalid :error="state.numberError">
            <InputBlock :error="state.numberError">
              <InputBlockCell>
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '서울 (11)',
                    },
                    {
                      value: '2',
                      text: '부산 (12)',
                    },
                    {
                      value: '3',
                      text: '경기 (13)',
                    },
                    {
                      value: '4',
                      text: '강원 (14)',
                    },
                    {
                      value: '5',
                      text: '충북 (15)',
                    },
                    {
                      value: '6',
                      text: '충남 (16)',
                    },
                    {
                      value: '7',
                      text: '전북 (17)',
                    },
                    {
                      value: '8',
                      text: '경남 (18)',
                    },
                    {
                      value: '9',
                      text: '제주 (19)',
                    },
                    {
                      value: '10',
                      text: '대구 (20)',
                    },
                    {
                      value: '11',
                      text: '인천 (21)',
                    },
                    {
                      value: '12',
                      text: '광주 (22)',
                    },
                    {
                      value: '13',
                      text: '대전 (23)',
                    },
                    {
                      value: '14',
                      text: '울산 (24)',
                    },
                  ]"
                  buttonTitle="지역번호 선택하기"
                  layerTitle="면허발급번호를 선택해 주세요"
                  buttonId="layerMyLoanDesignationDriverLMSFormNumber"
                  :classNames="{
                    wrap: 'input-width-driving-license',
                  }"
                />
              </InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="면허발급번호 앞 2자리"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell
                :classNames="{
                  cell: 'flex-2',
                }"
                margin="regular"
              >
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="면허발급번호 두번째 6자리"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="면허발급번호 뒤 2자리"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="발급일자"
          target="#layerMyLoanDesignationDriverLMSFormDate"
        >
          <FormInvalid :error="state.dateError">
            <InputBlock :error="state.dateError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="발급일자"
                  id="layerMyLoanDesignationDriverLMSFormDate"
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
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
