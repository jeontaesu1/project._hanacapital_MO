<script>
// My_M01_b003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
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
    KeyValueList,
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
          <PopupTitle>정비이력 상세보기</PopupTitle>
        </ToastPopupHead>
      </template>

      <KeyValueList margin="regular">
        <KeyValueItem>
          <KeyValueTitle>정비형태</KeyValueTitle>
          <KeyValueText>사고</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>주행거리</KeyValueTitle>
          <KeyValueText>999,999 km</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>수리점</KeyValueTitle>
          <KeyValueText>서울 하나카수리센터</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>입고일</KeyValueTitle>
          <KeyValueText>2021.08.24</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>출고일</KeyValueTitle>
          <KeyValueText>2021.09.14</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>정비/수리내역</KeyValueTitle>
          <KeyValueText>엔진오일/에어컨필터/타이머</KeyValueText>
        </KeyValueItem>
      </KeyValueList>

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
