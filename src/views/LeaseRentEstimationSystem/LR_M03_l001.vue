<script>
// LR_M03_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';

export default {
  components: {
    UiLayer,
    TextButton,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
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
      <template v-slot:outerTop>
        <div class="inline-wrap align-right">
          <TextButton
            :classNames="{ wrap: 'text-body-4 color-white' }"
            :underline="true"
          >
            오늘 하루 보지 않기
          </TextButton>
        </div>
      </template>

      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>팝업 제목</PopupTitle>
        </ToastPopupHead>
      </template>

      <article>//데이터 노출</article>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>계속하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>
