<script>
// Main_M01_l001 Type 1

import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
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
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup> cx </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/LayerMainNotice003.scss';
</style>
