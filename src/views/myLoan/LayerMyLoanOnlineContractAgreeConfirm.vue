<script>
// PF_M10_b001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>아래 내용을 확인해 주세요</PopupTitle>
        </ToastPopupHead>
      </template>

      <ul class="reset-list">
        <li class="row-margin-item-group-small">
          <CheckBox
            id="layerMyLoanOnlineContractAgreeConfirmCheckBox01"
            theme="tertiary"
            :classNames="{ wrap: 'color-gray-tertiary' }"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>
              본 할부금융 계약조건에 대하여 충분히 이해하고, 확인 및 동의하여
              아래의 인증 수단을 통하여 본 약정을 체결합니다.
            </CheckBoxLabelText>
          </CheckBox>
        </li>
        <li class="row-margin-item-group-small">
          <CheckBox
            id="layerMyLoanOnlineContractAgreeConfirmCheckBox02"
            theme="tertiary"
            :classNames="{ wrap: 'color-gray-tertiary' }"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>
              아래 인증수단을 활용한 전자계약 서명 및 전자문서의 법적 효력에
              대해 동의하며, 인증 및 계약 완료 후 전자문서를 원본으로 인정함에
              동의합니다.
            </CheckBoxLabelText>
          </CheckBox>
        </li>
        <li class="row-margin-item-group-small">
          <CheckBox
            id="layerMyLoanOnlineContractAgreeConfirmCheckBox03"
            theme="tertiary"
            :classNames="{ wrap: 'color-gray-tertiary' }"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>
              최종적인 약정 체결은 본심사 결과에 따라 변동될 수 있습니다.
            </CheckBoxLabelText>
          </CheckBox>
        </li>
      </ul>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>약정하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>
