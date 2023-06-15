<script>
// LR_M03_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';

export default {
  components: {
    UiLayer,
    TextButton,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    PopupSubTitle,
    ButtonList,
    ButtonListItem,
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
          <PopupTitle>모바일 견적 손님제공 절차안내</PopupTitle>
          <PopupSubTitle>
            견적서 제공행위 변경 절차에 따라 손님제공 프로세스를 안내 드립니다
          </PopupSubTitle>
        </ToastPopupHead>
      </template>

      <div :class="$style['contents-list']">
        <ol
          :class="[
            $style['contents-list__list'],
            $style['contents-list__list--senary'],
          ]"
        >
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">1</div>
              <div :class="$style['contents-list__title']">
                고객 정보(이름,연락처) 기재 후 sms 발송
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">2</div>
              <div :class="$style['contents-list__title']">
                고객 sms 수신 시 고지의무 확인 및 적합성 확인절차 진행 (만 연령
                20세 이상, 신용점수 400점 이상 진행가능)
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">3</div>
              <div :class="$style['contents-list__title']">
                견적산출은 차량평가 절차 완료된 차량에 한해 가능합니다.
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">4</div>
              <div :class="$style['contents-list__title']">
                위 내용 수행 완료시 견적제공
              </div>
            </div>
          </li>
        </ol>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>계속하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemGuide001.scss';
</style>
