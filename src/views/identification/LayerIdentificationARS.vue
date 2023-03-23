<script>
import { ref, reactive, computed } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ImgArs from '@/assets/images/illustration/img-ars.svg?component';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    ImgArs,
  },
  setup() {
    const layer = ref(null);
    const timeData = reactive({ timer: null, totalTime: 3 * 60 });
    const initTime = timeData.totalTime;

    const startTimer = () => {
      clearInterval(timeData.timer);
      timeData.timer = setInterval(() => countdown(), 1000);
    };

    const resetTimer = () => {
      timeData.totalTime = 1 * 60;
      clearInterval(this.timer);
      timeData.timer = null;
    };

    const padTime = (time) => {
      return (time < 10 ? '0' : '') + time;
    };

    const countdown = () => {
      if (timeData.totalTime >= 1) {
        timeData.totalTime--;
      } else {
        timeData.totalTime = 0;
        resetTimer;
      }
    };

    const reStartTimer = () => {
      timeData.totalTime = initTime;
      startTimer(timeData);
    };

    const minutes = computed(() => {
      const minutes = Math.floor(timeData.totalTime / 60);
      return padTime(minutes);
    });

    const seconds = computed(() => {
      const seconds = timeData.totalTime - minutes.value * 60;
      return padTime(seconds);
    });

    return {
      layer,
      timeData,
      startTimer,
      resetTimer,
      reStartTimer,
      padTime,
      countdown,
      minutes,
      seconds,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="toast" v-slot="layerSlotProps">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>
            ARS인증 완료 후<br />
            인증 완료 버튼을 눌러 주세요
          </PopupTitle>
        </ToastPopupHead>
      </template>

      <div :class="$style['ars-info']">
        <div :class="$style['ars-info-icon']"><ImgArs /></div>
        <div :class="$style['ars-info-timer']">
          남은 시간
          <span class="ars-pass-time">{{ minutes }}:{{ seconds }} </span>
        </div>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary" @click="reStartTimer()"
              >ARS 재요청</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton @click="layerSlotProps.close()">인증 완료</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/identification/LayerIdentificationARS.scss';
</style>
