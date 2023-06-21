<script>
// Main_M01_l001 Type 2
import { ref, reactive, onMounted } from 'vue';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import NoticePopup from '@/components/ui/layer/NoticePopup.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    UiLayer,
    NoticePopup,
    PopupButton,
    TextButton,
  },
  setup() {
    const state = reactive({
      paginationEl: null,
    });

    const layer = ref(null);
    const pagination = ref(null);

    onMounted(() => {
      state.paginationEl = pagination.value;
    });

    return {
      state,
      layer,
      pagination,
      modules: [Pagination, A11y],
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="notice" v-slot="layerSlotProps">
    <NoticePopup
      :classNames="{
        wrap: $style['layer'],
      }"
    >
      <div :class="$style['banner']">
        <Swiper
          v-if="state.paginationEl"
          :modules="modules"
          :pagination="{
            el: state.paginationEl,
          }"
        >
          <!-- Case : 링크 기능 없을 때 -->
          <SwiperSlide>
            <div :class="$style['banner__block']">
              <img
                src="/images/_dummy/notice-banner-2.webp"
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
                src="/images/_dummy/notice-banner-2.webp"
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
                src="/images/_dummy/notice-banner-2.webp"
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
                src="/images/_dummy/notice-banner-2.webp"
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

        <div ref="pagination" :class="$style['banner__pagination']"></div>
      </div>

      <template v-slot:outerBottom>
        <div :class="$style['bottom']">
          <TextButton
            :classNames="{ wrap: 'text-body-4 color-white' }"
            :underline="true"
          >
            오늘 하루 보지 않기
          </TextButton>
        </div>

        <div :class="$style['close-area']">
          <PopupButton theme="circle" @click="layerSlotProps.close()" />
        </div>
      </template>
    </NoticePopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/LayerMainNotice002.scss';
</style>
