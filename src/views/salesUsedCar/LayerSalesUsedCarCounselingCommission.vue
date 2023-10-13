<script>
// UC_M03_l002
import { ref, reactive } from 'vue';

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
  },
  setup() {
    const state = reactive({
      rateError: false,
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
          <PopupTitle>수수료차감</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <FormList>
        <FormListItem titleText="차감 수수료율" :forceFocus="true">
          <FormInvalid :error="state.rateError">
            <InputBlock :error="state.rateError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="차감 수수료율"
                  :useDelete="true"
                  align="right"
                  defaultValue="30.22"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">%</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>

            <FormHelpText>숫자만 입력하세요.</FormHelpText>

            <ButtonList
              :wrap="true"
              :col="4"
              :classNames="{ wrap: 'row-margin-item' }"
            >
              <ButtonListItem>
                <BasicButton :line="true" theme="quaternary" size="small"
                  >-0.5%</BasicButton
                >
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton :line="true" theme="quaternary" size="small"
                  >-1.0%</BasicButton
                >
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton :line="true" theme="quaternary" size="small"
                  >-2.0%</BasicButton
                >
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton :line="true" size="small">전액차감</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <div :class="[$style['basic-table'], 'row-margin-contents']">
        <table>
          <colgroup>
            <col style="width: 82px" />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th></th>
              <th>변경 전</th>
              <th>변경 후</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>금리</th>
              <td>8.2%</td>
              <td class="font-weight-medium color-green">7.2%</td>
            </tr>
            <tr>
              <th>수수료</th>
              <td>2.63%</td>
              <td class="font-weight-medium color-green">1.63%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>적용</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/salesUsedCar/LayerSalesUsedCarCounselingCommission.scss';
</style>
