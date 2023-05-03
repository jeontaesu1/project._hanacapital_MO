<script>
// UC_M03_l002
import { ref, reactive, nextTick } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    ButtonList,
    ButtonListItem,
    BasicButton,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
  },
  setup() {
    const state = reactive({
      modifyMode: false,
      carAmountError: false,
      loanAmountError: false,
    });

    const layer = ref(null);
    const modifyButton = ref(null);
    const saveButton = ref(null);

    const modify = () => {
      state.modifyMode = true;

      nextTick(() => {
        saveButton.value.button.focus();
      });
    };

    const save = () => {
      state.modifyMode = false;

      nextTick(() => {
        modifyButton.value.button.focus();
      });
    };

    return {
      state,
      layer,
      modifyButton,
      saveButton,
      modify,
      save,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>수수료차감</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <section class="row-margin-container-medium">
        <FormList>
          <FormListItem titleText="차감 수수료율" :forceFocus="true">
            <BoxCheckList class="row-margin-item-group">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerAutoUsedLoanContractPeriod"
                  id="layerAutoUsedLoanContractPeriod001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel class="text-body-4 color-gray"
                    >+ 0.5%</BoxCheckLabel
                  >
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerAutoUsedLoanContractPeriod"
                  id="layerAutoUsedLoanContractPeriod002"
                >
                  <BoxCheckLabel class="text-body-4 color-gray"
                    >+ 1.0%</BoxCheckLabel
                  >
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerAutoUsedLoanContractPeriod"
                  id="layerAutoUsedLoanContractPeriod003"
                >
                  <BoxCheckLabel class="text-body-4 color-gray"
                    >+ 1.5%</BoxCheckLabel
                  >
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerAutoUsedLoanContractPeriod"
                  id="layerAutoUsedLoanContractPeriod004"
                >
                  <BoxCheckLabel class="text-body-4 color-gray"
                    >+ 2.0%</BoxCheckLabel
                  >
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalid :error="state.carAmountError">
              <InputBlock
                :error="state.carAmountError"
                :disabled="!state.modifyMode"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="숫자만 입력하세요."
                    id="layerAutoUsedLoanContractCarAmount"
                    pattern="\d*"
                    :useDelete="false"
                    align="right"
                    defaultValue="1"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3 color-black">%</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>숫자만 입력하세요.</FormHelpText>
            </FormInvalid>
          </FormListItem>
          <FormListItem titleText="금리/수수료 변경 전">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    :useDelete="false"
                    :disabled="!state.modifyMode"
                    defaultValue="3.5%"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub" class="color-black"
                  >/</InputBlockCell
                >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    :useDelete="false"
                    :disabled="!state.modifyMode"
                    defaultValue="3.5%"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <FormListItem titleText="금리/수수료 변경 후">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    :useDelete="false"
                    :disabled="!state.modifyMode"
                    defaultValue="3.5%"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub" class="color-black"
                  >/</InputBlockCell
                >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    :useDelete="false"
                    :disabled="!state.modifyMode"
                    defaultValue="3.5%"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton theme="secondary">적용</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
