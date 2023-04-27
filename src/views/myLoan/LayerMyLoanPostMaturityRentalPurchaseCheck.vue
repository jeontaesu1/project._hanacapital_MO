<script>
// My_M08_b005 렌탈
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
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
          <PopupTitle>만기후 구매 신청 확인</PopupTitle>
        </ToastPopupHead>
      </template>

      <ul class="reset-list">
        <li class="row-margin-item-group">
          <CheckBox
            id="layerMyLoanPostMaturityRentalPurchaseCheck001"
            theme="tertiary"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>
              이용기간 중 발생된 범칙금/과태료, 기타비용 등에 대해서는 본인의
              책임하에 부담할 것을 확약합니다.
            </CheckBoxLabelText>
          </CheckBox>
        </li>
        <li class="row-margin-item-group">
          <CheckBox
            id="layerMyLoanPostMaturityRentalPurchaseCheck002"
            theme="tertiary"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>
              신청인(본인)은 구매 유의사항에 대해 충분한 설명을 듣고 잘 이해한
              후 본인의 의사에 따라 구매를 신청합니다.
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
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>만기후 구매 신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>
