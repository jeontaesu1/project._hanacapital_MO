<script>
// Main_M01_l001 Type 4
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import NoticePopup from '@/components/ui/layer/NoticePopup.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';

export default {
  components: {
    UiLayer,
    NoticePopup,
    PopupButton,
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
  <UiLayer ref="layer" type="notice" v-slot="layerSlotProps">
    <NoticePopup>
      <template v-slot:outerTop>
        <div :class="$style['close-area']">
          <PopupButton theme="circle" @click="layerSlotProps.close()" />
        </div>
      </template>

      <div :class="$style['banner']">
        <!-- Case : 링크 기능 없을 때 -->
        <div :class="$style['banner__block']">
          <img
            src="/images/_dummy/notice-banner-4.webp"
            :alt="'배너 설명 넣어주세요.'"
            @error="
              (e) => {
                e.target.parentNode.classList.add('is-error');
              }
            "
          />
        </div>
        <!-- // Case : 링크 기능 없을 때 -->

        <!-- Case : 링크 기능 있을 때
        <a href="" :class="$style['banner__block']">
          <img
            src="/images/_dummy/notice-banner-4.webp"
            :alt="'배너 설명 넣어주세요.'"
            @error="
              (e) => {
                e.target.parentNode.classList.add('is-error');
              }
            "
          />
        </a>
        -->
      </div>
    </NoticePopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/LayerMainNotice004.scss';
</style>
