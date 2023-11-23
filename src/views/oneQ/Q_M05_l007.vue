<script>
// Q_M05_l007
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
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
      <div :class="$style['loading_wrap']">
        <div :class="$style['loading_block']">
          <div
            :class="[$style['loading-icon'], $style['loading-icon--regular']]"
          ></div>
        </div>
      </div>

      <div class="row-margin-contents">
        <h3 class="text-body-2 font-weight-medium align-center">
          하나캐피탈로 이동합니다.
        </h3>
        <p class="text-body-1 align-center row-margin-item-medium">
          이어서 대출 신청을 진행해 주세요.
        </p>
      </div>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M05_l007.scss';
</style>
