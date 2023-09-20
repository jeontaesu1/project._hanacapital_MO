<script>
// My_M06_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';

export default {
  components: {
    UiLayer,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PopupTitle,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    ToastPopup,
    ToastPopupHead,
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
          <PopupTitle>청약철회신청 유의사항</PopupTitle>
        </ToastPopupHead>
      </template>

      <ol :class="[$style['basic-list'], $style['basic-list--regular-margin']]">
        <li
          :class="[
            $style['basic-list__item'],
            'color-gray-tertiary',
            'font-weight-regular',
            'text-body-3',
          ]"
        >
          <div :class="$style['basic-list__symbol']">1.</div>
          <div :class="$style['basic-list__content']">
            청약철회 상환금액은 당일 기준으로
            <span class="color-green">17시 이내</span> 입금해 주셔야 합니다.
          </div>
        </li>
        <li
          :class="[
            $style['basic-list__item'],
            'color-gray-tertiary',
            'font-weight-regular',
            'text-body-3',
          ]"
        >
          <div :class="$style['basic-list__symbol']">2.</div>
          <div :class="$style['basic-list__content']">
            당일 <span class="color-green">17시 이내로</span> 입금하지 않을시
            청약철회가 불가능하거나 추가 경과이자 발생할 수 있으며 입금 금액을
            재조회하셔야 합니다.
          </div>
        </li>
        <li
          :class="[
            $style['basic-list__item'],
            'color-gray-tertiary',
            'font-weight-regular',
            'text-body-3',
          ]"
        >
          <div :class="$style['basic-list__symbol']">3.</div>
          <div :class="$style['basic-list__content']">
            청약철회처리가능일은 대출계약 후 14일 이내입니다.
          </div>
        </li>
        <li
          :class="[
            $style['basic-list__item'],
            'color-gray-tertiary',
            'font-weight-regular',
            'text-body-3',
          ]"
        >
          <div :class="$style['basic-list__symbol']">4.</div>
          <div :class="$style['basic-list__content']">
            청약철회 신청 이후 청약철회 기간(대출 계약 후 14일)이 경과하거나
            결제일이 도래한 경우 청약철회가 불가합니다.
          </div>
        </li>
      </ol>

      <div class="row-margin-item-group">
        <CheckBox
          id="layerMyLoanSubscriptionWithdrawalRightNoticeAgree"
          theme="tertiary"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>유의사항을 확인했습니다.</CheckBoxLabelText>
        </CheckBox>
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
@import '@/assets/scss/views/myLoan/LayerMyLoanSubscriptionWithdrawalRightNotice.scss';
</style>
