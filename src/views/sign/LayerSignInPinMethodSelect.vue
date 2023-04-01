<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';

import IconPhone from '@/assets/images/icon/phone.svg?component';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    IconPhone,
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
  <UiLayer ref="layer" type="toast">
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
              <div :class="$style['icon-buttons__icon']"><IconPhone /></div>
              <div :class="$style['icon-buttons__content']">
                <div :class="$style['icon-buttons__title']">간편비밀번호</div>
              </div>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <div :class="$style['icon-buttons__icon']"><IconPhone /></div>
              <div :class="$style['icon-buttons__content']">
                <div :class="$style['icon-buttons__title']">얼굴인증</div>
              </div>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <div :class="$style['icon-buttons__icon']"><IconPhone /></div>
              <div :class="$style['icon-buttons__content']">
                <div :class="$style['icon-buttons__title']">지문인증</div>
              </div>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <div :class="$style['icon-buttons__icon']"><IconPhone /></div>
              <div :class="$style['icon-buttons__content']">
                <div :class="$style['icon-buttons__title']">Face ID 인증</div>
              </div>
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
