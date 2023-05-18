<script>
// Main_M01_l001 Type 1

import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import BannerPopup from '@/components/ui/layer/BannerPopup.vue';
import ImgSample from '@/assets/images/_dummy/box-detail.svg?component';
import PopupButton from '@/components/ui/layer/PopupButton.vue';

export default {
  components: {
    UiLayer,
    ImgSample,
    BannerPopup,
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
  <UiLayer
    ref="layer"
    type="banner"
    :backgroundClose="true"
    v-slot="layerSlotProps"
  >
    <BannerPopup>
      <template v-slot:closeTop>
        <PopupButton theme="circle" @click="layerSlotProps.close()" />
      </template>
      <ImgSample />
    </BannerPopup>
  </UiLayer>
</template>
