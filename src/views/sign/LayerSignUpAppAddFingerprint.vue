<script>
// Member_M06_b001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
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
          <PopupTitle>
            간편한 로그인을 위해 인증 수단을 추가로 등록하시겠습니까?
          </PopupTitle>
        </ToastPopupHead>
      </template>

      <div>
        <p class="text-body-3 color-gray-tertiary row-margin-item-group">
          하나캐피탈은 손님의 생체정보를 서버로 전송하지 않으며, 스마트폰에
          등록된 생체인식 정보만으로 본인인증을 진행합니다.
        </p>
        <p class="text-body-3 color-gray-tertiary row-margin-item-group">
          스마트폰에 등록된 생체정보가 추가, 삭제 등 변경되면 인증을 재등록
          하셔야 합니다.
        </p>
      </div>

      <IllustObject :classNames="{ wrap: $style['illust'] }" type="finger" />

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">나중에</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>지문인증 등록</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/sign/LayerSignUpAppAddFingerprint.scss';
</style>
