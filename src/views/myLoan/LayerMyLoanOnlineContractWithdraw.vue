<script>
// My_M03_b015
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
          <PopupTitle>청약철회권 안내</PopupTitle>
        </ToastPopupHead>
      </template>

      <KeyValue margin="regular" direction="vertical">
        <KeyValueItem>
          <KeyValueTitle>대상</KeyValueTitle>
          <KeyValueText>일반금융소비자(금융소비자보호법 기준)</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>효과</KeyValueTitle>
          <KeyValueText>
            중도상환수수료 면제<br />
            대출정보 삭제(금융회사, 신용정보 외, CB사 등)
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>신청방법</KeyValueTitle>
          <KeyValueText>
            고객센터(1800-1110) 및 지점 연락 > 청약철회 신청
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
