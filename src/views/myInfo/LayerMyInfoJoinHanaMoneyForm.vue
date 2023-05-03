<script>
// MI_M01_l012
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
  },
  setup() {
    const state = reactive({
      nameError: false,
      recommenderNumberError: false,
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
          이메일과 추천인 사번을<br />
          <strong>입력해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          titleText="이메일"
          target="#layerMyInfoJoinHanaMoneyFormMailId"
        >
          <FormInvalid :error="state.mailError">
            <InputBlock :error="state.mailError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이메일"
                  id="layerMyInfoJoinHanaMoneyFormMailId"
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
                  id="layerMyInfoJoinHanaMoneyFormDomainSelf"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case : 직접입력 선택 시 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="추천인 사번"
          target="#layerMyInfoJoinHanaMoneyFormRecommenderNumber"
        >
          <FormInvalid :error="state.recommenderNumberError">
            <InputBlock :error="state.recommenderNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="추천인 사번"
                  id="layerMyInfoJoinHanaMoneyFormRecommenderNumber"
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
