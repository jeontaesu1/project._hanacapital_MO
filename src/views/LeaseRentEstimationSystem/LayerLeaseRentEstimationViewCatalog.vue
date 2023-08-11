<script>
// LR_M00_l017
import { reactive, ref, nextTick } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

import LayerLeaseRentEstimationViewCatalogSlide from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationViewCatalogSlide.vue';

const BASE_URL = import.meta.env.BASE_URL;

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    BasicBox,
    RoundStatus,
    LayerLeaseRentEstimationViewCatalogSlide,
  },
  setup() {
    const state = reactive({
      initialIndex: 0,
    });

    const layer = ref(null);
    const layerSlide = ref(null);

    const layerSlideOpen = (e = {}, i) => {
      state.initialIndex = i;

      nextTick(() => {
        layerSlide.value.layer.open(e.target);
      });
    };

    const dummyImages = [
      {
        src: `/images/_dummy/car-catalog/1.jpg`,
        alt: '만약 이미지 설명값이 있으면 넣어주세요.',
      },
    ];

    for (let i = 0; i < 29; i++) {
      dummyImages[i] = {
        src: `${BASE_URL}images/_dummy/car-catalog/${i + 1}.jpg`,
        alt: '만약 이미지 설명값이 있으면 넣어주세요.',
      };
    }

    return {
      BASE_URL,
      state,
      layer,
      layerSlide,
      layerSlideOpen,
      dummyImages,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup bg="tertiary">
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>카탈로그 보기</PopupTitle>
          <template v-slot:right>
            <PopupButton theme="white" @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div class="row-margin-container-medium">
        <BasicBox theme="octonary">
          <div class="flex-box row-margin-mini">
            <div class="flex-box__cell flex-1">
              <p class="text-body-4 font-weight-light">2020년식</p>
            </div>
            <div class="flex-box__cell flex-box__cell--small">
              <RoundStatus theme="tridenary" :block="true"
                >2022.07 기준</RoundStatus
              >
            </div>
          </div>
          <h3 class="text-body-1 font-weight-medium">디 올 뉴 G80 가격표</h3>
        </BasicBox>
      </div>

      <div :class="$style['thumbs']">
        <ul :class="$style['thumbs__list']">
          <li
            v-for="(item, i) in dummyImages"
            :key="i"
            :class="$style['thumbs__item']"
          >
            <button
              type="button"
              :class="$style['thumbs__button']"
              @click="(e) => layerSlideOpen(e, i)"
            >
              <span
                :class="$style['thumbs__img']"
                :style="{
                  backgroundImage: `url('${item.src}')`,
                }"
              >
                <img
                  :src="item.src"
                  :alt="item.alt"
                  @error="
                    (e) => {
                      e.target.parentNode.classList.add('is-error');
                    }
                  "
                />
              </span>
            </button>
          </li>
        </ul>
      </div>

      <LayerLeaseRentEstimationViewCatalogSlide
        ref="layerSlide"
        :title="`디 올 뉴 G80 타이틀 길어지게 되면 말줄임표로 보입니다.`"
        :images="dummyImages"
        :initialIndex="state.initialIndex"
      />
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationViewCatalog.scss';
</style>
