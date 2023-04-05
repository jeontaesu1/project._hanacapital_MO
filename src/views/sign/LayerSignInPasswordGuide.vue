<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PopupText,
    TextButton,
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
            2주간 다시 보지 않기
          </TextButton>
        </div>
      </template>

      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>
            3개월 동안 비밀번호를<br />
            변경하지 않으셨네요
          </PopupTitle>
        </ToastPopupHead>
      </template>

      <PopupText>
        개인정보 보호를 위해 주기적으로 비밀번호를 변경하는 것을 추천 드립니다.
      </PopupText>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">다음에</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>지금 변경하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>
