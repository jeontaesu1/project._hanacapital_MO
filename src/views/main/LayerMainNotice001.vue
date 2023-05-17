<script>
// Main_M01_l001 Type 1

import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
import ImgSample from '@/assets/images/_dummy/box-detail.svg?component';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  components: {
    UiLayer,
    ToastPopup,
    TextButton,
    Swiper,
    SwiperSlide,
    ImgSample,
  },
  setup() {
    const layer = ref(null);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      layer,
      onSwiper,
      onSlideChange,
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      modules: [Pagination],
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

      <div :class="$style['swipe-box']">
        <swiper :pagination="pagination" :modules="modules" class="mySwiper">
          <swiper-slide><ImgSample /></swiper-slide>
          <swiper-slide><ImgSample /></swiper-slide>
          <swiper-slide><ImgSample /></swiper-slide>
        </swiper>
      </div>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/LayerMainNotice001.scss';
</style>
