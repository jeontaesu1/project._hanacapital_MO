<script>
// LR_M04_b003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    PopupText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
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
          <PopupTitle>하나캐피탈 심사를 신청합니다</PopupTitle>
        </ToastPopupHead>
      </template>

      <PopupText>
        아래 내용 해당 시
        <strong class="color-green">정밀심사 대상</strong> 체크하여 심사 신청해
        주시기 바랍니다.
      </PopupText>

      <ul class="reset-list row-margin-item-group">
        <li class="row-margin-item">
          <BasicBox theme="septenary">
            <CheckBox theme="tertiary" align="center" id="LR_M04_b002_check001">
              <CheckBoxObject />
              <CheckBoxLabelText
                >유의업종 : 다단계, 유흥업, 대부업,
                차량판매자(종사자)</CheckBoxLabelText
              >
            </CheckBox>
          </BasicBox>
        </li>
        <li class="row-margin-item">
          <BasicBox theme="septenary">
            <CheckBox theme="tertiary" align="center" id="LR_M04_b002_check002">
              <CheckBoxObject />
              <CheckBoxLabelText>사업년수 : 1년 미만</CheckBoxLabelText>
            </CheckBox>
          </BasicBox>
        </li>
      </ul>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>신청하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>
