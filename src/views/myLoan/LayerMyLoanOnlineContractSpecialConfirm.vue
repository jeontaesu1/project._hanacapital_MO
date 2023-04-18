<script>
// My_M03_b012
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';

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
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
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
          <PopupTitle>계약사항을 확인해 주세요</PopupTitle>
        </ToastPopupHead>
      </template>

      <PopupText class="color-black font-weight-medium"> [특약사항] </PopupText>

      <PopupText class="row-margin-small">
        대출금액 및 이자율은 심사 결과에 따라 달라질 수 있음에 동의합니다.
        본인이 “대출 조건 변경 동의서”를 작성하여 금융기관에 모사전송(FAX)하거나
        금융기관이 관련 내용을 녹취하는 것으로 대출 조건 변경에 동의함을
        확인합니다.
      </PopupText>

      <div class="row-margin-item-group">
        <BoxCheck :contents="true" type="checkbox" id="testBoxCheck006_001">
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel class="text-body-3">
            네, 계약사항에 대하여 충분히 이해했습니다.
          </BoxCheckLabel>
        </BoxCheck>
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
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractSpecialConfirm.scss';
</style>
