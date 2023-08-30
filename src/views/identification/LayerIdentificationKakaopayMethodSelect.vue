<script>
// Common_M00_b050
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';

import IconHanaOneSign from '@/assets/images/icon/hana-onesign.svg?component';
import IconToss from '@/assets/images/icon/toss-icon.svg?component';
import IconKakaotalk from '@/assets/images/icon/kakaotalk.svg?component';
import IconNaver from '@/assets/images/icon/naver.svg?component';
import IconPass from '@/assets/images/icon/pass.svg?component';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,

    IconHanaOneSign,
    IconToss,
    IconKakaotalk,
    IconNaver,
    IconPass,
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
  <UiLayer
    ref="layer"
    type="toast"
    :backgroundClose="true"
    v-slot="layerSlotProps"
  >
    <ToastPopup v-if="layerSlotProps.display !== 'none'">
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>간편인증 방법을 선택해 주세요</PopupTitle>
        </ToastPopupHead>
      </template>

      <div :class="$style['icon-buttons']">
        <ul :class="$style['icon-buttons__list']">
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"
                ><IconHanaOneSign
              /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">하나원사인</span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"><IconToss /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">토스</span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"
                ><IconKakaotalk
              /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">카카오</span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"><IconNaver /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">네이버</span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"><IconPass /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">PASS</span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/identification/LayerIdentificationMethodSelect.scss';
</style>
