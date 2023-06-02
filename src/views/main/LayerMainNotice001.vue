<script>
// Main_M01_l001 Type 1
import { ref } from 'vue';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    TextButton,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
      modules: [Pagination, A11y],
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup
      :classNames="{
        bodyInner: $style['layer-body-inner'],
      }"
    >
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

      <div :class="$style['banner']">
        <Swiper :modules="modules" pagination>
          <!-- Case : 링크 기능 없을 때 -->
          <SwiperSlide>
            <div :class="$style['banner__block']">
              <img
                src="/images/_dummy/notice-banner-1.webp"
                :alt="'배너 설명 넣어주세요.'"
                @error="
                  (e) => {
                    e.target.parentNode.classList.add('is-error');
                  }
                "
              />
            </div>
          </SwiperSlide>
          <!-- // Case : 링크 기능 없을 때 -->

          <!-- Case : 링크 기능 있을 때 -->
          <SwiperSlide>
            <a href="" :class="$style['banner__block']">
              <img
                src="/images/_dummy/notice-banner-1.webp"
                :alt="'배너 설명 넣어주세요.'"
                @error="
                  (e) => {
                    e.target.parentNode.classList.add('is-error');
                  }
                "
              />
            </a>
          </SwiperSlide>
          <!-- // Case : 링크 기능 있을 때 -->

          <SwiperSlide>
            <div :class="$style['banner__block']">
              <img
                src="/images/_dummy/notice-banner-1.webp"
                :alt="'배너 설명 넣어주세요.'"
                @error="
                  (e) => {
                    e.target.parentNode.classList.add('is-error');
                  }
                "
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div :class="$style['banner__block']">
              <img
                src="/images/_dummy/notice-banner-1.webp"
                :alt="'배너 설명 넣어주세요.'"
                @error="
                  (e) => {
                    e.target.parentNode.classList.add('is-error');
                  }
                "
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/LayerMainNotice001.scss';
</style>
