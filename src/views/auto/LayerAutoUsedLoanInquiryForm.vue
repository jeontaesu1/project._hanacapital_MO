<script>
// AF_M06_l009
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicSelect,
  },
  setup() {
    const state = reactive({
      phoneError: false,
      timeError: false,
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
          <strong class="color-blue">중고차오토론</strong> 상담 안내를 위한<br />
          <strong>연락처를 입력해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          titleText="연락가능시간"
          target="#layerAutoUsedLoanInquiryFormStartTimeButton"
        >
          <FormInvalid :error="state.timeError">
            <InputBlock :error="state.timeError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '9',
                      text: '9',
                    },
                    {
                      value: '10',
                      text: '10',
                    },
                    {
                      value: '11',
                      text: '11',
                    },
                    {
                      value: '12',
                      text: '12',
                    },
                    {
                      value: '13',
                      text: '13',
                    },
                    {
                      value: '14',
                      text: '14',
                    },
                    {
                      value: '15',
                      text: '15',
                    },
                    {
                      value: '16',
                      text: '16',
                    },
                    {
                      value: '17',
                      text: '17',
                    },
                  ]"
                  buttonTitle="시작시간 선택하기"
                  layerTitle="시작시간을 선택해 주세요"
                  id="layerAutoUsedLoanInquiryFormStartTime"
                  buttonId="layerAutoUsedLoanInquiryFormStartTimeButton"
                />
              </InputBlockCell>
              <InputBlockCell margin="regular">
                <div class="text-body-3">시</div>
              </InputBlockCell>
              <InputBlockCell margin="regular">
                <div class="text-body-3">~</div>
              </InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicSelect
                  :option="[
                    {
                      value: '10',
                      text: '10',
                    },
                    {
                      value: '11',
                      text: '11',
                    },
                    {
                      value: '12',
                      text: '12',
                    },
                    {
                      value: '13',
                      text: '13',
                    },
                    {
                      value: '14',
                      text: '14',
                    },
                    {
                      value: '15',
                      text: '15',
                    },
                    {
                      value: '16',
                      text: '16',
                    },
                    {
                      value: '17',
                      text: '17',
                    },
                  ]"
                  buttonTitle="종료시간 선택하기"
                  layerTitle="종료시간을 선택해 주세요"
                  id="layerAutoUsedLoanInquiryFormEndTime"
                  buttonId="layerAutoUsedLoanInquiryFormEndTimeButton"
                />
              </InputBlockCell>
              <InputBlockCell margin="regular">
                <div class="text-body-3">시 사이</div>
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="연락처"
          target="#layerAutoUsedLoanInquiryFormPhone"
        >
          <FormInvalid :error="state.phoneError">
            <InputBlock :error="state.phoneError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="연락처"
                  id="layerAutoUsedLoanInquiryFormPhone"
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
            <BasicButton theme="secondary">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
