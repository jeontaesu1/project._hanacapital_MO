<script>
// My_M01_b005
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
  <UiLayer
    ref="layer"
    type="toast"
    :backgroundClose="true"
    v-slot="layerSlotProps"
  >
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>자동차세 상세보기</PopupTitle>
        </ToastPopupHead>
      </template>

      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle>상품명</KeyValueTitle>
          <KeyValueText>운용리스 20고5678 (정상)</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>차량명</KeyValueTitle>
          <KeyValueText>
            벤츠 더 뉴 C-class(W205/S205)<br />
            가솔린 2.0 Sedan<br />
            (개소세 30% 인하)<br />
            C 200 AMG Line
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>차량번호</KeyValueTitle>
          <KeyValueText>20고5678</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>관할기관</KeyValueTitle>
          <KeyValueText>모톤길탈틱타</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>자동차세</KeyValueTitle>
          <KeyValueText>29,000 원</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>납부기한</KeyValueTitle>
          <KeyValueText>2021.08.04</KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton @click="layerSlotProps.close()">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>
