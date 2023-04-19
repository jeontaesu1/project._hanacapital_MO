<script>
// LM_M01_l009
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
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
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>대출가능 차량 기준안내</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <KeyValue
        direction="vertical"
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <KeyValueItem>
          <KeyValueTitle>차량명의</KeyValueTitle>
          <KeyValueText>본인명의(공동명의 제외)</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>소유기간</KeyValueTitle>
          <KeyValueText>3개월 이상 소유</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>차종</KeyValueTitle>
          <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>차량연식</KeyValueTitle>
          <KeyValueText>출고 이후 10년 이내</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>차량가격</KeyValueTitle>
          <KeyValueText>500만원 이상(당사 차량 시세 가격 기준)</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>차량압류 및 설정</KeyValueTitle>
          <KeyValueText>
            차량 압류 및 설정 내역이 있을 경우 해지 후 대출 가능
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <NoticeText
        >차량 조회 결과(사고금액, 침수/도난/전손여부)에 따라 대출 제한이 될 수
        있습니다.</NoticeText
      >

      <NoticeText class="row-margin-item"
        >차량 압류/설정 여부는 자동차민원 대국민포털(https://ecar.go.kr)에서
        조회 가능합니다.</NoticeText
      >
    </FullPopup>
  </UiLayer>
</template>
