<script>
// My_M03_b002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    PopupSubTitle,
    BasicButton,
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
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>적합성·적정성 정보제공 동의 안내</PopupTitle>
          <PopupSubTitle>
            본인은 당사에 제공한 적합성·적정성 관련 정보와 관련하여 다음의
            사항을 확인합니다.
          </PopupSubTitle>
        </ToastPopupHead>
      </template>

      <ol :class="[$style['basic-list'], $style['basic-list--normal-margin']]">
        <li
          :class="[
            $style['basic-list__item'],
            'color-gray-tertiary',
            'text-body-3',
            'font-weight-regular',
          ]"
        >
          <div :class="$style['basic-list__symbol']">1.</div>
          <div :class="$style['basic-list__content']">
            당사에 제공한 적합성·적정성 관련 정보는 본인의 재산상황, 용도 등의
            정보를 정확히 알려드린 것입니다.
          </div>
        </li>
        <li
          :class="[
            $style['basic-list__item'],
            'color-gray-tertiary',
            'text-body-3',
            'font-weight-regular',
          ]"
        >
          <div :class="$style['basic-list__symbol']">2.</div>
          <div :class="$style['basic-list__content']">
            본인이 제공한 정보가 정확하지 않거나, 정보에 변경사항이 발생한
            경우에는 적합성·적정성 판단이 달라질 수 있음을 설명 받았습니다.
          </div>
        </li>
        <li
          :class="[
            $style['basic-list__item'],
            'color-gray-tertiary',
            'text-body-3',
            'font-weight-regular',
          ]"
        >
          <div :class="$style['basic-list__symbol']">3.</div>
          <div :class="$style['basic-list__content']">
            상기 목적을 위해 본인의 개인정보를 수집, 이용, 제공하는 것에
            동의합니다.
          </div>
        </li>
      </ol>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">아니오</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>네</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractCheckAgree.scss';
</style>
