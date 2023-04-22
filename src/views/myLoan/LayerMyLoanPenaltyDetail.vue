<script>
// My_M01_b004
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
          <PopupTitle>범칙금 상세보기</PopupTitle>
        </ToastPopupHead>
      </template>

      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle>상품명</KeyValueTitle>
          <KeyValueText>오토리스_승용차_금융(정상)</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>차량명</KeyValueTitle>
          <KeyValueText>
            펠리세이드 디젤 2.2 4WD<br />
            (액세서리 변경) 프레스티지<br />
            (7인승) 자동
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>차량번호</KeyValueTitle>
          <KeyValueText>65다2918</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>위반일자</KeyValueTitle>
          <KeyValueText>2021.08.02 14:22</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>발생장소</KeyValueTitle>
          <KeyValueText>충정로 1가 입구 부근</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>위반내용</KeyValueTitle>
          <KeyValueText>
            <div class="multi-ellipsis">
              위반내용이 길 경우 두줄까지 그 이후는 말줄임 처리 위반내용이 길
              경우 두줄까지 그 이후는 말줄임 처리
            </div>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>과세금액</KeyValueTitle>
          <KeyValueText>29,000 원</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>관할기관</KeyValueTitle>
          <KeyValueText>모톤길탈틱타</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>납부방법</KeyValueTitle>
          <KeyValueText>대납청구(이체)</KeyValueText>
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
