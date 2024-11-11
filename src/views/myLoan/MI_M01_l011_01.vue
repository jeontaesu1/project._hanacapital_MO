<script>
// MI_M01_l011
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
          <PopupTitle
            >$김하나$님<br />아래와 같이 하나금융그룹 계열사 마케팅 동의가
            처리되었습니다.
          </PopupTitle>
        </ToastPopupHead>
      </template>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle>동의여부 </KeyValueTitle>
          <KeyValueText>동의 </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle> 동의일자 </KeyValueTitle>
          <KeyValueText>2023.01.12 </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle> 동의안내수단 </KeyValueTitle>
          <KeyValueText> 전화, 문자메시지, 우편, 이메일 </KeyValueText>
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
<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MI_M01_l011.scss';
</style>
