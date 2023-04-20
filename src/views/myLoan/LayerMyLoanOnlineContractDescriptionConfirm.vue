<script>
// My_M03_b050
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

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
          <PopupTitle> 상품 설명에 대한 확인 </PopupTitle>
        </ToastPopupHead>
      </template>

      <PopupText>
        본인은 하나캐피탈과 대출 거래를 함에 있어 금융 회사 직원과 상담하여 본
        설명서를 교부 받았으며, 위에서 설명한 내용을 포함하여 대출 거래의 주요
        내용 및 고객부담비용에 대하여 충분히 설명을 듣고 이해하였음을
        확인합니다.
      </PopupText>
      <div class="row-margin-item-group">
        <PopupText
          >본인은 금융회사 직원으로부터 금리인하요구권, 청약철회권,
          위법계약해지권 등 고객의 권리에 대하여 충분히 설명을 듣고 이해하였음을
          확인합니다.</PopupText
        >
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인했습니다</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>
