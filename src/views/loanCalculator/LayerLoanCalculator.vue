<script>
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
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
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import PartInput from '@/components/ui/form/PartInput.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
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
    SecurityInput,
    PartInput,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckList,
    BoxCheckListItem,
    BasicSelect,
  },
  setup() {
    const state = reactive({
      typeError: false,
      sumError: false,
      termError: false,
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
          <PopupTitle>대출계산기</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <FormList>
        <FormListItem titleText="상환방법" :forceFocus="true">
          <FormInvalid :error="state.typeError">
            <BoxCheckList align="full">
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  name="layerLoanCalculatorType"
                  id="layerLoanCalculatorType001"
                >
                  <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
                  <p class="text-body-5 color-gray-secondary row-margin-small">
                    가장 일반적인 방법으로 원금과 이자를 합한<br />
                    상환금액이 매달 동일합니다.
                  </p>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  name="layerLoanCalculatorType"
                  id="layerLoanCalculatorType002"
                >
                  <BoxCheckLabel>만기 일시상환</BoxCheckLabel>
                  <p class="text-body-5 color-gray-secondary row-margin-small">
                    대출기간동안 매달 이자만 상환하고<br />
                    대출 만기일에 원금을 일시 상환합니다.
                  </p>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="대출금액" :forceFocus="true">
          <FormInvalid :error="state.sumError">
            <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
              <BoxCheckListItem>
                <BasicButton
                  size="small"
                  line="true"
                  theme="quaternary"
                  :minSide="true"
                >
                  + 100만
                </BasicButton>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BasicButton
                  size="small"
                  line="true"
                  theme="quaternary"
                  :minSide="true"
                >
                  + 500만
                </BasicButton>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BasicButton
                  size="small"
                  line="true"
                  theme="quaternary"
                  :minSide="true"
                >
                  + 1,000만
                </BasicButton>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BasicButton
                  size="small"
                  line="true"
                  theme="quaternary"
                  :minSide="true"
                >
                  + 5,000만
                </BasicButton>
              </BoxCheckListItem>
            </BoxCheckList>
            <InputBlock :error="state.sumError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  align="right"
                  :useDelete="false"
                  pattern="\d*"
                  title="대출금액"
                  id="layerLoanCalculatorSum"
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
          titleText="대출기간"
          target="#layerLoanCalculatorTermButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.termError">
            <InputBlock :error="state.termError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '3개월',
                    },
                    {
                      value: '2',
                      text: '6개월',
                    },
                    {
                      value: '3',
                      text: '12개월',
                    },
                    {
                      value: '4',
                      text: '24개월',
                    },
                    {
                      value: '5',
                      text: '36개월',
                    },
                    {
                      value: '6',
                      text: '48개월',
                    },
                    {
                      value: '7',
                      text: '60개월',
                    },
                    {
                      value: '8',
                      text: '72개월',
                    },
                    {
                      value: '9',
                      text: '84개월',
                    },
                    {
                      value: '10',
                      text: '96개월',
                    },
                    {
                      value: '11',
                      text: '108개월',
                    },
                    {
                      value: '12',
                      text: '120개월',
                    },
                  ]"
                  buttonTitle="대출기간 선택하기"
                  layerTitle="대출기간을 선택해 주세요"
                  id="layerLoanCalculatorTerm"
                  buttonId="layerLoanCalculatorTermButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="생년월일"
          titleOptionalText="(6자리)"
          target="#layerIdentificationKakaopayIdNumber01"
        >
          <FormInvalid :error="state.idNumberError">
            <InputBlock :error="state.idNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="layerIdentificationKakaopayIdNumber01"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <PartInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 뒤 7자리 중 첫번째자리"
                  id="layerIdentificationKakaopayIdNumber02"
                  :afterDot="6"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="주민등록번호"
          target="#layerIdentificationKakaopayIdNumber03"
        >
          <FormInvalid :error="state.idNumberError">
            <InputBlock :error="state.idNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="layerIdentificationKakaopayIdNumber03"
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
          titleText="이름"
          target="#layerIdentificationKakaopayName"
        >
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="layerIdentificationKakaopayName" />
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
