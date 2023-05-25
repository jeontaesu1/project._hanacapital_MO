<script>
// Main_M01_l001 Type 1

import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ImgSample from '@/assets/images/_dummy/box-detail.svg?component';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ImgSample,
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
  <UiLayer ref="layer" type="toast-banner" :backgroundClose="true">
    <ToastPopup :banner="true"> <ImgSample /> </ToastPopup>
  </UiLayer>
</template>
