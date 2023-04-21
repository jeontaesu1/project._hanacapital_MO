<script>
// AF_M07_l001 본인인증
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

import IconPhone from '@/assets/images/icon/phone.svg?component';
import IconCard from '@/assets/images/icon/card.svg?component';
import IconKakaopay from '@/assets/images/icon/kakaopay.svg?component';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    PopupSubTitle,
    NoticeText,
    IconPhone,
    IconCard,
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
          <PopupSubTitle>
            승계 신청을 진행하기 위해 신청인의 실명인증과<br />
            본인인증이 필요합니다.
          </PopupSubTitle>
        </ToastPopupHead>
      </template>

      <NoticeText :classNames="{ wrap: 'row-margin-item-group' }"
        >양도인이 법인인 경우 유선 신청만 가능</NoticeText
      >

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
              <span :class="$style['icon-buttons__icon']"><IconCard /></span>
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']">신용카드</span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__icon']"
                ><IconKakaopay
              /></span>
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
@import '@/assets/scss/views/auto/LayerAutoSuccessionIdentificationMethodSelect.scss';
</style>
