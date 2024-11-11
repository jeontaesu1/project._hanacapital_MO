<script>
// UC_M03_l005
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import SelectTable from '@/components/ui/table/SelectTable.vue';
import SelectTableRow from '@/components/ui/table/SelectTableRow.vue';
import RadioButton from '@/components/ui/form/RadioButton.vue';
import RadioButtonLabelText from '@/components/ui/form/RadioButtonLabelText.vue';
import RadioButtonObject from '@/components/ui/form/RadioButtonObject.vue';

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
    FormListItem,
    FormInvalid,
    FormList,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    BasicHr,
    SelectTable,
    SelectTableRow,
    RadioButton,
    RadioButtonLabelText,
    RadioButtonObject,
  },
  setup() {
    const layer = ref(null);
    const state = reactive({
      nameError001: false,
    });

    const nameErrorUpdate001 = (val) => {
      state.nameError001 = val;
    };

    return {
      layer,
      state,
      nameErrorUpdate001,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>판매사원(중고차)</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <FormList>
        <FormListItem titleText="성명" target="#testInput007">
          <FormInvalid :error="state.nameError001">
            <InputBlock :error="state.nameError001">
              <InputBlockCell :flexible="true">
                <BasicInput title="성명" id="testInput007" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-group' }">
        <ButtonListItem>
          <BasicButton :line="true">조회</BasicButton>
        </ButtonListItem>
      </ButtonList>

      <!-- Case : 조회 후 노출 -->
      <BasicHr className="row-margin-container-medium" />

      <div>
        <SelectTable>
          <template v-slot:colgroup>
            <col style="width: 83px" />
            <col />
            <col style="width: 90px" />
          </template>

          <template v-slot:head>
            <tr>
              <th></th>
              <th>성명</th>
              <th>생년월일</th>
            </tr>
          </template>

          <SelectTableRow>
            <td>
              <RadioButton
                name="testRadioButton004"
                id="testRadioButton004_001"
                :onlyObject="true"
              >
                <RadioButtonObject />
                <RadioButtonLabelText
                  >Label<br />2 line label</RadioButtonLabelText
                >
              </RadioButton>
            </td>
            <td>박현철</td>
            <td>89.12.15</td>
          </SelectTableRow>
          <SelectTableRow :initialActive="true">
            <td>
              <RadioButton
                name="testRadioButton004"
                id="testRadioButton004_002"
                :onlyObject="true"
              >
                <RadioButtonObject />
                <RadioButtonLabelText
                  >Label<br />2 line label</RadioButtonLabelText
                >
              </RadioButton>
            </td>
            <td>박현철</td>
            <td>79.12.15</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>
              <RadioButton
                name="testRadioButton004"
                id="testRadioButton004_003"
                :onlyObject="true"
              >
                <RadioButtonObject />
                <RadioButtonLabelText
                  >Label<br />2 line label</RadioButtonLabelText
                >
              </RadioButton>
            </td>
            <td>박현철</td>
            <td>69.12.15</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>
              <RadioButton
                name="testRadioButton004"
                id="testRadioButton004_004"
                :onlyObject="true"
              >
                <RadioButtonObject />
                <RadioButtonLabelText
                  >Label<br />2 line label</RadioButtonLabelText
                >
              </RadioButton>
            </td>
            <td>박현철</td>
            <td>59.12.15</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>
              <RadioButton
                name="testRadioButton004"
                id="testRadioButton004_005"
                :onlyObject="true"
              >
                <RadioButtonObject />
                <RadioButtonLabelText
                  >Label<br />2 line label</RadioButtonLabelText
                >
              </RadioButton>
            </td>
            <td>박현철</td>
            <td>59.12.15</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>
              <RadioButton
                name="testRadioButton004"
                id="testRadioButton004_007"
                :onlyObject="true"
              >
                <RadioButtonObject />
                <RadioButtonLabelText
                  >Label<br />2 line label</RadioButtonLabelText
                >
              </RadioButton>
            </td>
            <td>박현철</td>
            <td>59.12.15</td>
          </SelectTableRow>
        </SelectTable>
      </div>

      <!-- //////////// 검색 결과가 없을 때 ////////////-->
      <!-- <div>
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
        </div>
      </div> -->

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
@import '@/assets/scss/views/salesUsedCar/LayerSalesUsedCarAffiliateClauseDetail001.scss';
</style>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>

<style lang="scss" module>
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>
