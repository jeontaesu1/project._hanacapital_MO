<script>
// PF_M10_b002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    PopupSubTitle,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
          <PopupTitle>할부금융 안내</PopupTitle>
          <PopupSubTitle>
            동의하지 않으시는 경우 할부금융 계약 체결은 불가하오니 양해바랍니다.
          </PopupSubTitle>
        </ToastPopupHead>
      </template>

      <p class="text-body-3 color-red row-margin-item-group">
        본 할부금융 계약 후
      </p>
      <p class="text-body-3 color-red row-margin-item-group">
        상품 인도를 받은 날로부터 7일 이내에 철회권을 행사할 수 있습니다. 단,
        고객님의 요청에 의해 포장박스 개방 및 상품이 설치된 경우 철회 및 반납,
        교환등이 불가합니다.
      </p>
      <p class="text-body-3 color-red row-margin-item-group">
        상품 고장 발생 시 제조사 정책에 따라 1년 무상 A/S가 제공되며, 고객의
        과실로 인한 A/S 발생 시 비용이 청구될 수 있습니다. (A/S 접수: 제조사
        고객센터)
      </p>
      <p class="text-body-3 color-red row-margin-item-group">
        위 내용을 충분히 이해하시었을 경우 아래 동의바랍니다.
      </p>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">미동의</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>동의</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>
