<script>
// My_M03_b014
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
          <PopupTitle>금리인하요구권 안내</PopupTitle>
        </ToastPopupHead>
      </template>

      <KeyValue margin="regular" direction="vertical">
        <KeyValueItem>
          <KeyValueTitle>대상</KeyValueTitle>
          <KeyValueText>대출 취급일로부터 6개월 경과한 고객</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>신용등급이 개선된 고객</KeyValueTitle>
          <KeyValueText>
            단, 내부정책 및 평가결과 등에 따라 금리인하가 허가되지 않을 수도
            있습니다.
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>신청조건</KeyValueTitle>
          <KeyValueText>연간 금리인하요구권 사용횟수가 2회 이내</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>신청방법</KeyValueTitle>
          <KeyValueText>
            고객센터 신청(1800-1110) > 접수 및 심사 > 결과 통보 및 약정 >
            금리인하 시행
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

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
