<script>
// Main_M01_l001 Type 3
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import NoticePopup from '@/components/ui/layer/NoticePopup.vue';

export default {
  components: {
    UiLayer,
    NoticePopup,
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
    type="notice"
    :backgroundClose="true"
    :classNames="{
      container: $style['layer-container'],
    }"
  >
    <NoticePopup>
      <div :class="$style['banner']">
        <!-- Case : 링크 기능 없을 때 -->
        <div :class="$style['banner__block']">
          <img
            src="/images/_dummy/notice-banner-3.webp"
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
            src="/images/_dummy/notice-banner-3.webp"
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
@import '@/assets/scss/views/main/LayerMainNotice003.scss';
</style>
