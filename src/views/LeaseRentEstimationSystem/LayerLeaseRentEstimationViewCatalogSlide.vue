<script>
// LR_M00_l012
import { reactive, ref } from 'vue';
import { A11y, FreeMode, Scrollbar, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';

import IconSlidePrev from '@/assets/images/icon/slide-prev.svg?component';
import IconSlideNext from '@/assets/images/icon/slide-next.svg?component';

export default {
  components: {
    Swiper,
    SwiperSlide,
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    IconSlidePrev,
    IconSlideNext,
  },
  props: {
    title: {
      Type: String,
      default: null,
    },
    images: {
      Type: Array,
      default() {
        return [];
      },
    },
    initialIndex: {
      Type: Number,
      default: 0,
    },
  },
  setup() {
    const state = reactive({
      swiper: null,
    });

    const layer = ref(null);

    const on = {
      swiper: (swiper) => {
        state.swiper = swiper;
      },
    };

    const prev = () => {
      state.swiper.slidePrev();
    };

    const next = () => {
      state.swiper.slideNext();
    };

    return {
      modules: [A11y, FreeMode, Scrollbar, Mousewheel],
      layer,
      on,
      prev,
      next,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup
      v-if="layerSlotProps.display !== 'none'"
      bg="tertiary"
      :classNames="{
        bodyInner: $style['body'],
      }"
    >
      <template v-slot:head>
        <FullPopupHead
          :classNames="{
            left: $style['header-left'],
            center: $style['header-center'],
            right: $style['header-right'],
          }"
        >
          <PopupTitle>{{ title }}</PopupTitle>
          <template v-slot:right>
            <PopupButton
              theme="white"
              type="gallery"
              @click="layerSlotProps.close()"
            />
          </template>
        </FullPopupHead>
      </template>

      <div v-if="images.length" :class="$style['silde']">
        <button type="button" :class="$style['silde__prev']" @click="prev">
          <IconSlidePrev />
          <span class="for-a11y">이전 슬라이드</span>
        </button>
        <button type="button" :class="$style['silde__next']" @click="next">
          <IconSlideNext />
          <span class="for-a11y">다음 슬라이드</span>
        </button>
        <Swiper
          :modules="modules"
          :initialSlide="initialIndex"
          @swiper="on.swiper"
        >
          <!-- item -->
          <SwiperSlide v-for="(item, i) in images" :key="i">
            <Swiper
              :modules="modules"
              :direction="'vertical'"
              :slidesPerView="'auto'"
              :freeMode="true"
              :scrollbar="true"
              :mousewheel="true"
              :class="$style['silde__child']"
            >
              <SwiperSlide>
                <div :class="$style['silde__image']">
                  <img
                    :src="item.src"
                    :alt="item.alt"
                    @error="
                      (e) => {
                        e.target.parentNode.classList.add('is-error');
                      }
                    "
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <!-- // item -->
        </Swiper>
      </div>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationViewCatalogSlide.scss';
</style>
