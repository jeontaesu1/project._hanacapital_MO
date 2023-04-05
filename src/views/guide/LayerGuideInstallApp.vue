<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

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
    IllustObject,
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
            오늘 하루 보지 않기
          </TextButton>
        </div>
      </template>

      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>하나캐피탈 앱을 설치해 보세요!</PopupTitle>
        </ToastPopupHead>
      </template>

      <PopupText>
        하나캐피탈 앱을 설치하면<br />
        <strong class="color-green font-weight-medium">
          대출 이어하기, 대출 관리 등 하나캐피탈의<br />
          모든 서비스
        </strong>
        를 이용하실 수 있어요!
      </PopupText>

      <IllustObject :classNames="{ wrap: $style['illust'] }" />

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
            <BasicButton>계속하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/guide/LayerGuideInstallApp.scss';
</style>
