<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    ButtonList,
    ButtonListItem,
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
  <UiLayer ref="layer" type="toast">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>
            즉시출금으로 중도상환을<br />
            신청하시겠어요?
          </PopupTitle>
        </ToastPopupHead>
      </template>

      <KeyValueList>
        <KeyValueItem>
          <KeyValueTitle>상품명</KeyValueTitle>
          <KeyValueText>
            스탁론<br />
            (L12345678901234)
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>즉시출금일자</KeyValueTitle>
          <KeyValueText>2021.11.08</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>즉시출금금액</KeyValueTitle>
          <KeyValueText>318,870 원</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>증권계좌번호</KeyValueTitle>
          <KeyValueText>(키움증권)***1234567</KeyValueText>
        </KeyValueItem>
      </KeyValueList>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton line="true" theme="quaternary">취소</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>즉시출금신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>
