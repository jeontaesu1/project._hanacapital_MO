<script>
// Common_M00_b001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

import IconPhone from '@/assets/images/icon/phone.svg?component';
import IconCertification from '@/assets/images/icon/certification.svg?component';
import IconCard from '@/assets/images/icon/card.svg?component';
import IconEasyAuthentication from '@/assets/images/icon/easy-authentication.svg?component';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    PopupSubTitle,
    RoundStatus,

    IconPhone,
    IconCertification,
    IconCard,
    IconEasyAuthentication,
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
          <PopupSubTitle>
            대출상담 및 한도조회를 위한 신용정보조회는<br />
            개인신용평점에 영향을 주지 않습니다.
          </PopupSubTitle>
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
          <!-- Case : 휴대폰 인증 완료 -->
          <li :class="$style['icon-buttons__item']">
            <button
              type="button"
              :class="$style['icon-buttons__block']"
              disabled
            >
              <span :class="$style['icon-buttons__icon']"><IconPhone /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">휴대폰</span>
              </span>
              <span :class="$style['icon-buttons__right']">
                <RoundStatus :block="true" theme="secondary"
                  >인증완료</RoundStatus
                >
              </span>
            </button>
          </li>
          <!-- // Case : 휴대폰 인증 완료 -->

          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"
                ><IconCertification
              /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">공동인증서</span>
              </span>
            </button>
          </li>
          <!-- Case : 공동인증서 인증 완료 -->
          <li :class="$style['icon-buttons__item']">
            <button
              type="button"
              :class="$style['icon-buttons__block']"
              disabled
            >
              <span :class="$style['icon-buttons__icon']"
                ><IconCertification
              /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">공동인증서</span>
              </span>
              <span :class="$style['icon-buttons__right']">
                <RoundStatus :block="true" theme="secondary"
                  >인증완료</RoundStatus
                >
              </span>
            </button>
          </li>
          <!-- // Case : 공동인증서 인증 완료 -->

          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"><IconCard /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">신용카드</span>
              </span>
            </button>
          </li>
          <!-- Case : 신용카드 인증 완료 -->
          <li :class="$style['icon-buttons__item']">
            <button
              type="button"
              :class="$style['icon-buttons__block']"
              disabled
            >
              <span :class="$style['icon-buttons__icon']"><IconCard /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">신용카드</span>
              </span>
              <span :class="$style['icon-buttons__right']">
                <RoundStatus :block="true" theme="secondary"
                  >인증완료</RoundStatus
                >
              </span>
            </button>
          </li>
          <!-- // Case : 신용카드 인증 완료 -->

          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"
                ><IconEasyAuthentication
              /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">
                  간편인증 (민간인증서)
                </span>
              </span>
            </button>
          </li>
          <!-- Case : 간편인증 (민간인증서) 인증 완료 -->
          <li :class="$style['icon-buttons__item']">
            <button
              type="button"
              :class="$style['icon-buttons__block']"
              disabled
            >
              <span :class="$style['icon-buttons__icon']"
                ><IconEasyAuthentication
              /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']"
                  >간편인증 (민간인증서)</span
                >
              </span>
              <span :class="$style['icon-buttons__right']">
                <RoundStatus :block="true" theme="secondary"
                  >인증완료</RoundStatus
                >
              </span>
            </button>
          </li>
          <!-- // Case : 간편인증 (민간인증서) 인증 완료 -->
        </ul>
      </div>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/identification/LayerIdentificationMethodSelect.scss';
</style>
