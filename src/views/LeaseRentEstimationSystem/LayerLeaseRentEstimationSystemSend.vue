<script>
// LR_M00_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    PopupSubTitle,
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
          <PopupTitle>타이틀</PopupTitle>
          <PopupSubTitle>텍스트</PopupSubTitle>
        </ToastPopupHead>
      </template>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>발송하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>
