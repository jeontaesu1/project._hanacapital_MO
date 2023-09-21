<script>
// PF_M04_l002
import { reactive, ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

import IconInformation from '@/assets/images/icon/information.svg?component';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    FormHelpText,
    TextButton,
    ButtonList,
    ButtonListItem,
    BasicButton,
    IconInformation,
  },
  setup() {
    const state = reactive({
      carNumberError: false,
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
          <strong>
            자동차정보를<br />
            입력해 주세요
          </strong>
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          titleText="차량정보"
          target="#layerPersonalLoanOneQAutoCarNumber"
        >
          <FormInvalid :error="state.carNumberError">
            <InputBlock :error="state.carNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="차량정보"
                  id="layerPersonalLoanOneQAutoCarNumber"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>예) 12가 1234</FormHelpText>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <div class="inline-wrap align-right row-margin-item">
        <TextButton
          theme="quaternary"
          :classNames="{ wrap: 'font-weight-regular' }"
        >
          대출가능차량 기준안내
          <template v-slot:rightIcon>
            <IconInformation />
          </template>
        </TextButton>
      </div>

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
