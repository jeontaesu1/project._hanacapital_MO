<script>
// Common_M00_l017
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import GlobalNav from '@/components/ui/gnb/GlobalNav.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    GlobalNav,
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
    type="full"
    v-slot="layerSlotProps"
    :classNames="{
      wrap: $style['gnb-layer'],
    }"
  >
    <FullPopup
      :classNames="{
        wrap: [
          $style['gnb'],
          {
            [$style['gnb--opened']]: layerSlotProps.opened,
          },
        ],
      }"
    >
      <template v-slot:head>
        <FullPopupHead>
          <template v-slot:right>
            <PopupButton type="search" />
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <GlobalNav />
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/gnb/LayerGlobalNav.scss';
</style>
