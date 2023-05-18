<script>
// Main_M01_l001 Type 2

import { ref, onMounted, onUnmounted } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import BannerPopup from '@/components/ui/layer/BannerPopup.vue';
import ImgSample from '@/assets/images/_dummy/box-detail.svg?component';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

export default {
  components: {
    UiLayer,
    ImgSample,
    BannerPopup,
    PopupButton,
    TextButton,
  },
  setup() {
    const layer = ref(null);
    const swiperContainer = ref(null);
    const paginationContainer = ref(null);
    let swiper = null;

    onMounted(() => {
      swiper = new Swiper(swiperContainer.value, {
        pagination: {
          el: paginationContainer.value,
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      });
    });
    onUnmounted(() => {
      if (swiper) {
        swiper.destroy();
        swiper = null;
      }
    });
    return {
      layer,
      swiperContainer,
      paginationContainer,
    };
  },
  data() {
    return {};
  },
};
</script>

<template>
  <UiLayer
    ref="layer"
    type="banner"
    :backgroundClose="true"
    v-slot="layerSlotProps"
  >
    <BannerPopup>
      <template v-slot:closeBottom>
        <PopupButton theme="circle" @click="layerSlotProps.close()" />
      </template>
      <template v-slot:outerBottom>
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
        <div ref="swiperContainer" class="swiper swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><ImgSample /></div>
            <div class="swiper-slide"><ImgSample /></div>
            <div class="swiper-slide"><ImgSample /></div>
          </div>
        </div>
      </div>
      <div
        ref="paginationContainer"
        :class="[$style['pagination'], 'swiper-pagination']"
      ></div>
    </BannerPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/LayerMainNotice002.scss';
</style>
