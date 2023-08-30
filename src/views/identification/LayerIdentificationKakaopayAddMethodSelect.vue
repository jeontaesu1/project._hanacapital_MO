<script>
// Common_M00_b050 추가인증
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

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
    PopupSubTitle,
    RoundStatus,

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
          <PopupTitle>추가 인증방법을 선택해 주세요</PopupTitle>
          <PopupSubTitle>
            <strong class="font-weight-medium color-green">하나원사인</strong>
            외 인증을 하나 더 실행해 주세요.
          </PopupSubTitle>
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
          <!-- Case : 하나원사인 인증 완료 -->
          <li :class="$style['icon-buttons__item']">
            <button
              type="button"
              :class="$style['icon-buttons__block']"
              disabled
            >
              <span :class="$style['icon-buttons__icon']"
                ><IconHanaOneSign
              /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">하나원사인</span>
              </span>
              <span :class="$style['icon-buttons__right']">
                <RoundStatus :block="true" theme="secondary"
                  >인증완료</RoundStatus
                >
              </span>
            </button>
          </li>
          <!-- // Case : 하나원사인 인증 완료 -->

          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"><IconToss /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">토스</span>
              </span>
            </button>
          </li>
          <!-- Case : 토스 인증 완료 -->
          <li :class="$style['icon-buttons__item']">
            <button
              type="button"
              :class="$style['icon-buttons__block']"
              disabled
            >
              <span :class="$style['icon-buttons__icon']"><IconToss /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">토스</span>
              </span>
              <span :class="$style['icon-buttons__right']">
                <RoundStatus :block="true" theme="secondary"
                  >인증완료</RoundStatus
                >
              </span>
            </button>
          </li>
          <!-- // Case : 토스 인증 완료 -->

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
          <!-- Case : 카카오 인증 완료 -->
          <li :class="$style['icon-buttons__item']">
            <button
              type="button"
              :class="$style['icon-buttons__block']"
              disabled
            >
              <span :class="$style['icon-buttons__icon']"
                ><IconKakaotalk
              /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">카카오</span>
              </span>
              <span :class="$style['icon-buttons__right']">
                <RoundStatus :block="true" theme="secondary"
                  >인증완료</RoundStatus
                >
              </span>
            </button>
          </li>
          <!-- // Case : 카카오 인증 완료 -->

          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"><IconNaver /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">네이버</span>
              </span>
            </button>
          </li>
          <!-- Case : 네이버 인증 완료 -->
          <li :class="$style['icon-buttons__item']">
            <button
              type="button"
              :class="$style['icon-buttons__block']"
              disabled
            >
              <span :class="$style['icon-buttons__icon']"><IconNaver /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">네이버</span>
              </span>
              <span :class="$style['icon-buttons__right']">
                <RoundStatus :block="true" theme="secondary"
                  >인증완료</RoundStatus
                >
              </span>
            </button>
          </li>
          <!-- // Case : 네이버 인증 완료 -->

          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"><IconPass /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">PASS</span>
              </span>
            </button>
          </li>
          <!-- Case : PASS 인증 완료 -->
          <li :class="$style['icon-buttons__item']">
            <button
              type="button"
              :class="$style['icon-buttons__block']"
              disabled
            >
              <span :class="$style['icon-buttons__icon']"><IconPass /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">PASS</span>
              </span>
              <span :class="$style['icon-buttons__right']">
                <RoundStatus :block="true" theme="secondary"
                  >인증완료</RoundStatus
                >
              </span>
            </button>
          </li>
          <!-- // Case : PASS 인증 완료 -->
        </ul>
      </div>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/identification/LayerIdentificationKakaopayAddMethodSelect.scss';
</style>
