<script>
// Member_M08_b001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';

import IconPassword from '@/assets/images/icon/password.svg?component';
import IconFace from '@/assets/images/icon/face.svg?component';
import IconFinger from '@/assets/images/icon/finger.svg?component';
import IconFaceId from '@/assets/images/icon/faceId.svg?component';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    IconPassword,
    IconFace,
    IconFinger,
    IconFaceId,
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
          <PopupTitle>로그인 방식을 선택해 주세요</PopupTitle>
        </ToastPopupHead>
      </template>

      <div :class="$style['icon-buttons']">
        <ul :class="$style['icon-buttons__list']">
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"
                ><IconPassword
              /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">간편비밀번호</span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"><IconFace /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">얼굴인증</span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"><IconFinger /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">지문인증</span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"><IconFaceId /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">Face ID 인증</span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/sign/LayerSignInPinMethodSelect.scss';
</style>
