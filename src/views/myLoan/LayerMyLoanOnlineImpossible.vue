<script>
// My_M03_b004
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
          <PopupTitle>하나금융그룹 계열사 마케팅 동의 안내</PopupTitle>
          <PopupSubTitle>
            하나금융그룹 계열사 마케팅 동의는 ‘개인(신용)정보<br />
            수집·이용 동의’와 ‘개인(신용)정보 제공 동의 항목’<br />
            <span class="underLine">둘 다 동의</span>하셔야 이용 가능합니다
          </PopupSubTitle>
        </ToastPopupHead>
      </template>

      <p class="text-body-3 color-red row-margin-item-group">
        ※ 해당 약관은 선택 사항이라 미동의 하셔도 약정 진행 가능합니다
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
            <BasicButton>둘 다 동의</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" scoped>
.underLine {
  text-decoration: underline;
}
</style>
