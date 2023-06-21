<script>
// LR_M02_b010
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
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
    NoticeText,
    FormList,
    BasicTextarea,
    FormInvalidMessage,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const state = reactive({
      carNumberError: false,
    });

    const layer = ref(null);

    return {
      state,
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
          <PopupTitle>계약번호 차대번호를 일괄입력해 주세요</PopupTitle>
          <PopupSubTitle>
            아래 입력칸에 엑셀을 복사하여 붙여 넣으세요.
          </PopupSubTitle>
        </ToastPopupHead>
      </template>

      <NoticeText :classNames="{ wrap: 'row-margin-item-group' }">
        1열 계약번호 2열 차대번호 순, 한줄에 한건씩 기록
      </NoticeText>

      <FormList>
        <BasicTextarea
          :error="state.carNumberError"
          titleText="차대번호"
          title="차대번호"
        >
          <template v-slot:bottom>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </template>
        </BasicTextarea>
      </FormList>

      <ButtonList>
        <ButtonListItem>
          <BasicButton :line="true" theme="quaternary">취소</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton>저장</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </ToastPopup>
  </UiLayer>
</template>
