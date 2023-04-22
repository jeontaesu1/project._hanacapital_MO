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
import UiTab from '@/components/ui/tab/UiTab.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
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
    UiTab,
    NavTab,
    NavTabButton,
    StickyBar,
    UiTabPanel,
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
      phoneError: false,
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

      <UiTab>
        <StickyBar>
          <NavTab :useUiTab="true">
            <NavTabButton link="layerMyLoanOnlineContractBillingNavTab001_001">
              온라인 (SMS)
            </NavTabButton>
            <NavTabButton link="layerMyLoanOnlineContractBillingNavTab001_002">
              이메일
            </NavTabButton>
          </NavTab>
        </StickyBar>

        <UiTabPanel name="layerMyLoanOnlineContractBillingNavTab001_001">
          <FormList>
            <FormListItem
              titleText="휴대폰번호"
              target="#layerMyLoanOnlineContractBillingPhone"
            >
              <FormInvalid :error="state.phoneError">
                <InputBlock :error="state.phoneError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      pattern="\d*"
                      title="휴대폰번호"
                      id="layerMyLoanOnlineContractBillingPhone"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </UiTabPanel>

        <UiTabPanel name="layerMyLoanOnlineContractBillingNavTab001_002">
          <FormList>
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
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </UiTabPanel>
      </UiTab>

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
