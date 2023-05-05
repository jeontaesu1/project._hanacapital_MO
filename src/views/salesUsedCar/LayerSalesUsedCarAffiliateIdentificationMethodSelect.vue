<script>
// UC_M08_b002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';

import IconPhone from '@/assets/images/icon/phone.svg?component';
import IconCertification from '@/assets/images/icon/certification.svg?component';
import IconKakaopay from '@/assets/images/icon/kakaopay.svg?component';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    IconPhone,
    IconCertification,
    IconKakaopay,
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
          <PopupTitle>본인인증 방법을 선택해 주세요</PopupTitle>
        </ToastPopupHead>
      </template>

      <div :class="$style['icon-buttons']">
        <ul :class="$style['icon-buttons__list']">
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"><IconPhone /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">휴대폰</span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']">
                <IconCertification />
              </span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">공동인증서</span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']">
                <IconKakaopay />
              </span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">카카오페이</span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/salesUsedCar/LayerSalesUsedCarAffiliateIdentificationMethodSelect.scss';
</style>
