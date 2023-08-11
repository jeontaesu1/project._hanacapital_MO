<script>
// LR_M03_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicHr,
    CarEmblem,
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
          <PopupTitle>차량정보를 확인해 주세요</PopupTitle>
        </ToastPopupHead>
      </template>

      <div>
        <div class="flex-box row-margin-small">
          <div class="flex-box__cell">
            <CarEmblem src="/images/_dummy/car-emblem.png" name="현대" />
          </div>
          <div class="flex-box__cell flex-box__cell--small">
            <p class="text-body-4 font-weight-light">2015년식</p>
          </div>
        </div>
        <h3 class="text-body-1 font-weight-medium">11가1111</h3>
        <p class="text-body-4 color-gray row-margin-small">
          뉴 카니발(YP) 3.0 가솔린 9인승 노블레스
        </p>
      </div>

      <BasicHr
        class="row-margin-contents-small"
        theme="quaternary"
        type="contents"
      />

      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle>배기량</KeyValueTitle>
          <KeyValueText>정보없음</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>전손/침수/도난</KeyValueTitle>
          <KeyValueText>X / X / X</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>사고이력(내차 피해)</KeyValueTitle>
          <KeyValueText>0회 / 0회</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>사고이력(타차 피해)</KeyValueTitle>
          <KeyValueText>0회 / 0회</KeyValueText>
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
