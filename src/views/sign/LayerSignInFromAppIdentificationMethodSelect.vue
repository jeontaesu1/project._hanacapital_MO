<script>
// Member_M01_b002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';

import IconPhone from '@/assets/images/icon/phone.svg?component';
import IconCard from '@/assets/images/icon/card.svg?component';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    IconPhone,
    IconCard,
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
            앱에서 가입한 손님은
            <br />
            최초 1회 본인인증이 필요합니다
          </PopupTitle>
        </ToastPopupHead>
      </template>

      <div :class="$style['icon-buttons']">
        <ul :class="$style['icon-buttons__list']">
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <div :class="$style['icon-buttons__icon']"><IconPhone /></div>
              <div :class="$style['icon-buttons__content']">
                <div :class="$style['icon-buttons__title']">휴대폰</div>
              </div>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <div :class="$style['icon-buttons__icon']"><IconCard /></div>
              <div :class="$style['icon-buttons__content']">
                <div :class="$style['icon-buttons__title']">신용카드</div>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/sign/LayerSignInFromAppIdentificationMethodSelect.scss';
</style>
