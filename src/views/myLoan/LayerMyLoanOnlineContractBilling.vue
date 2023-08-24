<script>
// My_M03_l017
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
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
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
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
    BasicSelect,
  },
  setup() {
    const state = reactive({
      mailError: false,
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
          <PopupTitle>온라인약정</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="8" :current="3" />
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>청구서 수령방법을</strong><br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem titleText="청구서 수령방법" :forceFocus="true">
          <!-- Case : 기본 (오토금융, 중고차 외) -->
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanOnlineContractBillingType001"
                id="layerMyLoanOnlineContractBillingType001_001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>온라인(SMS)</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanOnlineContractBillingType001"
                id="layerMyLoanOnlineContractBillingType001_002"
              >
                <BoxCheckLabel>이메일</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <!-- // Case : 기본 (오토금융, 중고차 외) -->

          <!-- Case : 오토금융, 중고차 -->
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanOnlineContractBillingType002"
                id="layerMyLoanOnlineContractBillingType002_001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>이메일</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanOnlineContractBillingType002"
                id="layerMyLoanOnlineContractBillingType002_002"
              >
                <BoxCheckLabel>이메일 + 우편</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <!-- // Case : 오토금융, 중고차 -->
        </FormListItem>

        <FormListItem
          titleText="이메일"
          target="#layerMyLoanOnlineContractBillingMailId"
        >
          <FormInvalid :error="state.mailError">
            <InputBlock :error="state.mailError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이메일"
                  id="layerMyLoanOnlineContractBillingMailId"
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
            <!-- Case : 직접입력 선택 시 노출 -->
            <InputBlock
              :error="state.mailError"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이메일 도메인 직접입력"
                  id="layerMyLoanOnlineContractBillingDomainSelf"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case : 직접입력 선택 시 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : "이메일 + 우편" 선택 시 노출 -->
        <FormListItem titleText="우편 수령지" :forceFocus="true">
          <!-- Case : 중고차 외 -->
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanOnlineContractBillingAdressType001"
                id="layerMyLoanOnlineContractBillingAdressType001_001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>등본지</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>

            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanOnlineContractBillingAdressType001"
                id="layerMyLoanOnlineContractBillingAdressType001_002"
              >
                <BoxCheckLabel>실거주지</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>

            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanOnlineContractBillingAdressType001"
                id="layerMyLoanOnlineContractBillingAdressType001_003"
              >
                <BoxCheckLabel>사업장</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <!-- // Case : 중고차 외 -->

          <!-- Case : 중고차 -->
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanOnlineContractBillingAdressType002"
                id="layerMyLoanOnlineContractBillingAdressType002_001"
              >
                <BoxCheckLabel>실거주지</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>

            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanOnlineContractBillingAdressType002"
                id="layerMyLoanOnlineContractBillingAdressType002_002"
              >
                <BoxCheckLabel>직장</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <!-- // Case : 중고차 -->
        </FormListItem>
        <!-- // Case : "이메일 + 우편" 선택 시 노출 -->
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
