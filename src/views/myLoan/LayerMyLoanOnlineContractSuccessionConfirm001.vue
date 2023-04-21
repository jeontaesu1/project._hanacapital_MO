<script>
// // My_M03_l025
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    StepProgress,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
  },
  setup() {
    const state = reactive({
      nameError: false,
      idNumberError: false,
      licenseError: false,
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
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          온라인약정
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="8" :current="4" />
      </template>

      <PageTextGroup>
        <PageMainText>
          아래 내용을 확인하신 후<br />
          <strong>본인인증을 진행해 주세요</strong><br />
        </PageMainText>
      </PageTextGroup>

      <div>
        <h3 class="text-title-2 row-margin-contents">채무 승계권</h3>
        <BasicBox>
          <KeyValue>
            <KeyValueItem>
              <KeyValueTitle>품목/제품명</KeyValueTitle>
              <KeyValueText>식품기계</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>할부원금잔액</KeyValueTitle>
              <KeyValueText>3,000,000원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </div>

      <div class="row-margin-contents-group">
        <h3 class="text-title-2 row-margin-contents">승계 신청 확약</h3>

        <div>
          <CheckBox id="testCheckBox021" theme="tertiary">
            <CheckBoxObject />
            <CheckBoxLabelText
              >채무자는 채무 승계건과 관련하여 승계 신청 내용(상품조건/보증조건
              및 세부규정)을 확인하고, 본인의 의사에 의하여 일반 할부금융 승계에
              동의하였음을 확약합니다.</CheckBoxLabelText
            >
          </CheckBox>
        </div>
        <div class="row-margin-item-group">
          <CheckBox id="testCheckBox022" theme="tertiary">
            <CheckBoxObject />
            <CheckBoxLabelText
              >채무자는 여신거래기본약관에 따라 하나캐피탈주식회사에 부담하는
              모든 채무를 그 채무의 동일성을 유지한
              채무인수인(김하나/930123)에게 승계할 것을
              확약합니다.</CheckBoxLabelText
            >
          </CheckBox>
        </div>
        <div>
          <CheckBox id="testCheckBox023" theme="tertiary">
            <CheckBoxObject />
            <CheckBoxLabelText
              >상기 내용에 대해 충분히 이해하고
              확인(동의)합니다.</CheckBoxLabelText
            >
          </CheckBox>
        </div>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">취소</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>승계확약</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
