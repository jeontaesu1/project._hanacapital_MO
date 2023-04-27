<script>
// My_M01_b001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
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
    PopupText,
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
          <PopupTitle>전자금융거래 약관에 동의해 주세요</PopupTitle>
        </ToastPopupHead>
      </template>

      <PopupText>
        내대출 서비스를 이용하기 위해서는 전자금융거래법 제 2조 제 1호에
        근거하여 전자금융거래약관 동의가 필요합니다.
      </PopupText>

      <div :class="[$style['agree-list'], 'row-margin-item-group']">
        <ul :class="$style['agree-list__list']">
          <li :class="$style['agree-list__item']">
            <div :class="$style['agree-list__head']">
              <CheckBox
                id="LayerMyLoanElectronicFinancialTransactionAgree001"
                :classNames="{
                  wrap: $style['agree-list__checkbox'],
                }"
                theme="tertiary"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>전자금융거래약관</CheckBoxLabelText>
              </CheckBox>
              <div :class="$style['agree-list__right']">
                <button type="button" :class="$style['agree-list__link']">
                  <span :class="$style['agree-list__link-text']">
                    상세보기
                  </span>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanElectronicFinancialTransactionAgree.scss';
</style>
