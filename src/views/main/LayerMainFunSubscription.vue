<script>
// Main_M05_b001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import SwitchCheckBox from '@/components/ui/form/SwitchCheckBox.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    PopupSubTitle,
    SwitchCheckBox,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>Fun 구독</PopupTitle>
          <PopupSubTitle>
            메인과 알림창에서 콘텐츠를 빠르게 확인하세요.
          </PopupSubTitle>
        </ToastPopupHead>
      </template>

      <ul :class="$style['switch-list']">
        <li :class="$style['switch-list__item']">
          <div :class="$style['switch-list__title']">원큐자동차상식</div>
          <div :class="$style['switch-list__right']">
            <SwitchCheckBox
              id="layerMainFunSubscriptionPush01"
              :classNames="{ wrap: $style['switch-list__check'] }"
              :defaultChecked="true"
            />
          </div>
        </li>
        <li :class="$style['switch-list__item']">
          <div :class="$style['switch-list__title']">하카캐북</div>
          <div :class="$style['switch-list__right']">
            <SwitchCheckBox
              id="layerMainFunSubscriptionPush02"
              :classNames="{ wrap: $style['switch-list__check'] }"
              :defaultChecked="true"
            />
          </div>
        </li>
      </ul>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton @click="layerSlotProps.close()">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/LayerMainFunSubscription.scss';
</style>
