<script>
// PF_M10_b003
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
        본 할부금융 계약은 고객님이 가입하신 상조 계약과 별도로 분리되어
        체결하는 계약인 것을 인지하고 동의합니다.
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
